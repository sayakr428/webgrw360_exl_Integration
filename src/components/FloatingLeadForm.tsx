import { useEffect, useMemo, useState } from 'react'

type LeadForm = {
  fullName: string
  phone: string
  email: string
  businessName?: string
  service: string
  message: string
}

const SERVICE_OPTIONS = [
  'SEO Services',
  'Web Design & Development',
  'Social Media Marketing',
  'Graphic Designing Services',
  'Video Creation Services',
  'Free Consultation'
] as const

const STORAGE_KEY = 'wg360_floating_form_closed_v1'

export default function FloatingLeadForm() {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState(false)

  const [form, setForm] = useState<LeadForm>({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    service: '',
    message: '',
  })

  // Show once per session/visit
  useEffect(() => {
    const alreadyClosed = sessionStorage.getItem(STORAGE_KEY) === '1'
    if (!alreadyClosed) setOpen(true)
  }, [])

  const utm = useMemo(() => {
    try {
      const url = new URL(window.location.href)
      return {
        source: url.searchParams.get('utm_source'),
        medium: url.searchParams.get('utm_medium'),
        campaign: url.searchParams.get('utm_campaign'),
      }
    } catch {
      return {} as any
    }
  }, [])

  function close() {
    setOpen(false)
    sessionStorage.setItem(STORAGE_KEY, '1')
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setOk(false)

    if (!form.fullName || !form.phone || !form.email || !form.service || !form.message) {
      setError('Please fill all required fields.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/.netlify/functions/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          pageUrl: window.location.href,
          utm,
        }),
      })
      if (!res.ok) throw new Error(`Failed (${res.status})`)
      setOk(true)
      setTimeout(() => close(), 1200)
    } catch (err: any) {
      setError('Could not submit right now. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      {/* panel */}
      <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-[92vw] max-w-md
                      rounded-2xl border border-white/10 shadow-2xl
                      bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500
                      text-white p-5 sm:p-6">
        {/* header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold">Send Us a Message</h3>
            <p className="text-white/80 text-sm">
              We’ll get back to you within 24 hours. Free consultation.
            </p>
          </div>
          <button
            aria-label="Close"
            onClick={close}
            className="ml-3 rounded-full/50 p-1.5 hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              required
              placeholder="Full Name *"
              value={form.fullName}
              onChange={(e) => setForm(f => ({ ...f, fullName: e.target.value }))}
              className="w-full rounded-lg bg-white/15 placeholder-white/70 px-3 py-2 outline-none focus:ring-2 ring-white/40"
            />
            <input
              required
              placeholder="Phone Number *"
              value={form.phone}
              onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-lg bg-white/15 placeholder-white/70 px-3 py-2 outline-none focus:ring-2 ring-white/40"
            />
          </div>

          <input
            required
            type="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full rounded-lg bg-white/15 placeholder-white/70 px-3 py-2 outline-none focus:ring-2 ring-white/40"
          />

          <input
            placeholder="Business Name"
            value={form.businessName}
            onChange={(e) => setForm(f => ({ ...f, businessName: e.target.value }))}
            className="w-full rounded-lg bg-white/15 placeholder-white/70 px-3 py-2 outline-none focus:ring-2 ring-white/40"
          />

          {/* ✅ Fixed dropdown styling */}
          <label className="block text-sm mb-1">Service Interested In *</label>
          <div className="relative">
            <select
              required
              value={form.service}
              onChange={(e) => setForm(f => ({ ...f, service: e.target.value }))}
              className="
                block w-full rounded-lg
                bg-white text-gray-900
                border border-white/30
                py-2.5 pl-3 pr-10
                outline-none
                appearance-none
                focus:ring-2 focus:ring-white/60
              "
            >
              <option value="" disabled hidden>Select a service</option>
              {SERVICE_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
              ▾
            </span>
          </div>

          <textarea
            required
            rows={4}
            placeholder="Your Message *"
            value={form.message}
            onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
            className="w-full rounded-lg bg-white/15 placeholder-white/70 px-3 py-2 outline-none focus:ring-2 ring-white/40"
          />

          {error && <div className="text-sm bg-black/30 rounded-md p-2">{error}</div>}
          {ok && <div className="text-sm bg-black/30 rounded-md p-2">Thanks! Submitted ✅</div>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg py-2.5 font-medium bg-white text-black disabled:opacity-60"
          >
            {submitting ? 'Submitting…' : 'Submit'}
          </button>

          <p className="text-[11px] text-white/70 text-center">
            We respect your privacy. Your info will never be shared.
          </p>
        </form>
      </div>
    </div>
  )
}
