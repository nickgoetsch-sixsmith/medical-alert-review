import { NextResponse } from "next/server";

export function GET() {
  const content = [
    "# Medical Alert Review",
    "",
    "> Independent, unbiased reviews of medical alert systems for seniors and their families.",
    "",
    "## What This Site Covers",
    "",
    "Medical Alert Review provides expert comparisons and reviews of personal emergency response systems (PERS), including in-home medical alert buttons, GPS devices, fall detection pendants, and monthly monitoring services for elderly adults.",
    "",
    "## Key Pages",
    "",
    "- /best-medical-alert-systems: Best Medical Alert Systems 2026 — top picks comparison",
    "- /fall-detection-medical-alert: How automatic fall detection works, how accurate it is, and which systems offer it",
    "- /medical-guardian-review: Full review of Medical Guardian (our #1 pick)",
    "- /bay-alarm-medical-review: Full review of Bay Alarm Medical (best value)",
    "- /life-alert-cost: Life Alert pricing breakdown and contract details",
    "- /no-monthly-fee-medical-alert: Options without monthly monitoring fees",
    "- /medical-alert-system-for-elderly: Guide for elderly users and caregivers",
    "- /methodology: How we evaluate — scoring criteria and the sources we cite",
    "- /about: About the site and our editorial team",
    "",
    "## Editorial & Sourcing",
    "",
    "- Reviews are published under the byline of Eleanor Hart, Senior Editor (house editorial persona).",
    "- We are researchers/editors who compare published information; we do not run a clinical testing lab.",
    "- Facts are cited from first-party provider sites and authoritative health sources (CDC, NIA, Medicare).",
    "- YMYL/health-safety topic: general information only, not medical advice.",
    "",
    "## Site Details",
    "",
    "- Publisher: MedicalAlertReview.com",
    "- Last updated: May 2026",
    "- Editorial policy: Independent reviews, no paid rankings",
    "- Affiliate disclosure: We may earn a commission from product links",
  ].join("\n");

  return new NextResponse(content, { headers: { "Content-Type": "text/plain" } });
}
