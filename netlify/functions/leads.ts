import type { Handler } from '@netlify/functions'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI as string
const dbName = process.env.MONGODB_DB || 'webgrow360'
const collectionName = process.env.MONGODB_COLLECTION || 'leads'

let client: MongoClient | null = null

async function getClient() {
  if (client) return client
  client = new MongoClient(uri)
  await client.connect()
  return client
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const { fullName, phone, email, businessName, service, message, pageUrl, utm } = body

    if (!fullName || !phone || !email || !service || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) }
    }

    const cli = await getClient()
    const db = cli.db(dbName)
    const col = db.collection(collectionName)

    await col.insertOne({
      fullName,
      phone,
      email,
      businessName: businessName || '',
      service,
      message,
      pageUrl: pageUrl || '',
      utm: utm || null,
      createdAt: new Date(),
    })

    return { statusCode: 201, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) }
  }
}
