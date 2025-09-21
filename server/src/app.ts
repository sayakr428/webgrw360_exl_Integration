import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { appendLeadRow, appendTofuRow } from './googleSheets'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000

// If behind a proxy (Hostinger/Nginx/Cloudflare), trust the X-Forwarded-* headers
app.set('trust proxy', 1)

app.use(cors())
// Some browsers send beacons as text/plain — accept both
app.use(express.text({ type: 'text/plain' }))
app.use(express.json())

// Simple request logger
app.use((req, _res, next) => {
  console.log('REQ:', req.method, req.path)
  next()
})

/** Rate limiters */
const leadsLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many requests, try again later.' },
})

const visitsLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
})

/** Health */
app.get('/api/health', (_req, res) => res.json({ ok: true }))

/** TOFU visits -> Google Sheet (TOFU_Leads) */
app.use('/api/visits', visitsLimiter)
app.post('/api/visits', async (req, res) => {
  try {
    // accept JSON or text payload
    let body: any = req.body
    if (typeof body === 'string') {
      try { body = JSON.parse(body) } catch { body = {} }
    }

    const { pageUrl, utm, event = 'pageview' } = body || {}
    const userAgent = req.headers['user-agent']?.toString() ?? null
    const referer   = req.headers['referer']?.toString() ?? null
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.ip

    await appendTofuRow([
      new Date().toISOString(),           // time
      event,                               // event (e.g. "pageview")
      pageUrl ?? '',                       // pageUrl
      utm?.source ?? '',                   // utmSource
      utm?.medium ?? '',                   // utmMedium
      utm?.campaign ?? '',                 // utmCampaign
      userAgent ?? '',                     // userAgent
      referer ?? '',                       // referer
      ip ?? '',                            // ip
    ])

    res.json({ ok: true })
  } catch (e: any) {
    console.error('POST /api/visits error:', e?.message)
    res.status(500).json({ ok: false, error: e?.message || 'failed' })
  }
})

/** Leads (WhatsApp intent) -> Google Sheet (Leads) */
app.use('/api/leads', leadsLimiter)
app.post('/api/leads', async (req, res) => {
  try {
    // accept JSON or text payload just in case
    let body: any = req.body
    if (typeof body === 'string') {
      try { body = JSON.parse(body) } catch { body = {} }
    }

    const { name, phone, message, pageUrl, utm } = body || {}
    const userAgent = req.headers['user-agent']?.toString() ?? null
    const referer   = req.headers['referer']?.toString() ?? null
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.ip

    await appendLeadRow([
      new Date().toISOString(),           // time
      name ?? '',                          // name
      phone ?? '',                         // phone
      message ?? '',                       // message
      pageUrl ?? '',                       // pageUrl
      utm?.source ?? '',                   // utmSource
      utm?.medium ?? '',                   // utmMedium
      utm?.campaign ?? '',                 // utmCampaign
      userAgent ?? '',                     // userAgent
      referer ?? '',                       // referer
      ip ?? '',                            // ip
    ])

    res.json({ ok: true })
  } catch (e: any) {
    console.error('POST /api/leads error:', e?.message)
    res.status(500).json({ ok: false, error: e?.message || 'failed' })
  }
})

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
