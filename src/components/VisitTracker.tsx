// src/components/VisitTracker.tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function sendBeaconJSON(url: string, data: unknown) {
  try {
    const payload = JSON.stringify(data)
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' })
      navigator.sendBeacon(url, blob)
      return
    }
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {})
  } catch {}
}

export default function VisitTracker() {
  const location = useLocation()

  useEffect(() => {
    try {
      const url = new URL(window.location.href)
      const utm = {
        source: url.searchParams.get('utm_source'),
        medium: url.searchParams.get('utm_medium'),
        campaign: url.searchParams.get('utm_campaign'),
      }
      sendBeaconJSON('/api/visits', {
        event: 'pageview',
        pageUrl: window.location.href,
        utm,
      })
    } catch {}
  }, [location.pathname, location.search])

  return null
}
