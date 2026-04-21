declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function trackOutboundClick(label: string, url: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'outbound_click', {
      event_category: 'affiliate',
      event_label: label,
      link_url: url,
    })
  }
}
