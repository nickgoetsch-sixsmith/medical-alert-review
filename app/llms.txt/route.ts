import { NextResponse } from "next/server";
import { providerIndex } from "@/data/editorial-ratings";

export function GET() {
  // De-hardcoded: derive "last updated" from build time rather than a stale
  // literal, and build the entity/price index straight from the rubric data so
  // it can never drift from what the pages show.
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const systems = providerIndex()
    .map(
      (p) =>
        `- ${p.name} (${p.brand}): ${p.startingPrice} · contract: ${p.contract} · editorial score ${p.score} · ${p.url}`,
    )
    .join("\n");

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
    "- /best-medical-alert-watches: Monitored alert watches vs. Apple Watch / Galaxy Watch fall detection",
    "- /in-home-medical-alert-systems: Best in-home base-station systems for seniors mostly at home",
    "- /does-medicare-cover-medical-alert-systems: Medicare, Medicare Advantage, and Medicaid coverage explained",
    "- /methodology: How we evaluate — scoring criteria and the sources we cite",
    "- /about: About the site and our editorial team",
    "",
    "## Top Systems Reviewed",
    "",
    "Starting price, contract terms, and our editorial score (out of 10) for each",
    "system we cover. Scores are derived from a published rubric (see /methodology);",
    "we do not fabricate user-review aggregates.",
    "",
    systems,
    "",
    "## Editorial & Sourcing",
    "",
    "- Reviews are published under the byline of Carol Bennett, Senior Editor (house editorial persona; see /about).",
    "- We are researchers/editors who compare published information; we do not run a clinical testing lab.",
    "- Facts are cited from first-party provider sites and authoritative health sources (CDC, NIA, Medicare).",
    "- YMYL/health-safety topic: general information only, not medical advice.",
    "",
    "## Site Details",
    "",
    "- Publisher: MedicalAlertReview.com",
    `- Last updated: ${lastUpdated}`,
    "- Editorial policy: Independent reviews, no paid rankings",
    "- Affiliate disclosure: We may earn a commission from product links",
  ].join("\n");

  return new NextResponse(content, { headers: { "Content-Type": "text/plain" } });
}
