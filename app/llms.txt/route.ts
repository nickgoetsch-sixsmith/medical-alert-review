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
    "- /: Best Medical Alert Systems 2026 — top picks comparison",
    "- /medical-guardian-review: Full review of Medical Guardian (our #1 pick)",
    "- /bay-alarm-medical-review: Full review of Bay Alarm Medical (best value)",
    "- /life-alert-cost: Life Alert pricing breakdown and contract details",
    "- /no-monthly-fee-medical-alert: Options without monthly monitoring fees",
    "- /medical-alert-system-for-elderly: Guide for elderly users and caregivers",
    "",
    "## Site Details",
    "",
    "- Publisher: MedicalAlertReview.com",
    "- Last updated: April 2026",
    "- Editorial policy: Independent reviews, no paid rankings",
    "- Affiliate disclosure: We may earn a commission from product links",
  ].join("\n");

  return new NextResponse(content, { headers: { "Content-Type": "text/plain" } });
}
