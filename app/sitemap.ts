import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://medicalalertreview.com'
  const now = new Date().toISOString()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/best-medical-alert-systems`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/medical-guardian-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bay-alarm-medical-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fall-detection-medical-alert`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/life-alert-cost`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/medical-alert-system-for-elderly`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/no-monthly-fee-medical-alert`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
