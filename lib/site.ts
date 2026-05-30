// Central site + editorial persona configuration.
//
// EDITORIAL INTEGRITY NOTE:
// "Carol Bennett" is a consistent house editorial pen name / persona used for
// bylines across the site. She is described truthfully as a researcher-editor
// who curates and compares published information (manufacturer specs, official
// brand pricing, monitoring-center certifications, and authoritative health
// sources). We do NOT claim first-hand lab testing, clinical credentials, or
// real-world device trials that did not happen. All factual claims should be
// traceable to a cited source.

export const SITE = {
  name: "Medical Alert Review",
  domain: "medicalalertreview.com",
  url: "https://medicalalertreview.com",
} as const;

export const EDITOR = {
  name: "Carol Bennett",
  title: "Senior Editor",
  // Honest description — research/editorial role, no fabricated credentials.
  bio: "Carol Bennett leads editorial research at Medical Alert Review. She compares published manufacturer specifications, official brand pricing, monitoring-center certifications, and guidance from authoritative health organizations to help families choose safely.",
} as const;

// Authoritative sources we cite repeatedly (YMYL — health/safety).
export const SOURCES = {
  cdcFalls: {
    label: "CDC — Older Adult Falls Data",
    url: "https://www.cdc.gov/falls/data-research/index.html",
  },
  cdcSteadi: {
    label: "CDC STEADI — Falls Prevention",
    url: "https://www.cdc.gov/steadi/index.html",
  },
  nia: {
    label: "National Institute on Aging — Preventing Falls",
    url: "https://www.nia.nih.gov/health/falls-and-falls-prevention",
  },
  medicare: {
    label: "Medicare.gov — Coverage",
    url: "https://www.medicare.gov/coverage",
  },
} as const;

export type SourceRef = { label: string; url: string };
