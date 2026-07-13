import type { Metadata } from "next";
import Byline from "@/app/components/Byline";
import DiagramFigure from "@/app/components/DiagramFigure";
import Sources from "@/app/components/Sources";
import OutboundLink from "@/app/components/OutboundLink";
import CtaBlock from "@/app/components/CtaBlock";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import ComparisonLedger, { type LedgerRow } from "@/app/components/ComparisonLedger";
import { CheckIcon, CrossIcon, ChevronIcon } from "@/app/components/Icon";
import { SITE, SOURCES } from "@/lib/site";
import { AFFILIATE_LINKS, FTC_DISCLOSURE } from "@/lib/affiliate-links";
import { computeRating, PROVIDERS } from "@/data/editorial-ratings";

const scoreOf = (id: string) =>
  computeRating(PROVIDERS[id]).overallTen.toFixed(1);

export const metadata: Metadata = {
  title: { absolute: "Best Medical Alert Systems 2026: Top 5 Compared" },
  description:
    "The best medical alert systems of 2026, compared on monitoring quality, pricing, fall detection, and contract terms — with cited sources.",
  alternates: { canonical: `${SITE.url}/best-medical-alert-systems` },
  openGraph: {
    title: "Best Medical Alert Systems 2026 | Top Picks Compared",
    description:
      "Top medical alert systems for seniors compared on monitoring quality, pricing, fall detection, and contract terms.",
    url: `${SITE.url}/best-medical-alert-systems`,
    type: "article",
    images: [{ url: `${SITE.url}/og/best-medical-alert-systems.png`, width: 1200, height: 630 }],
  },
};

const systems = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-brand-tint text-brand",
    name: "Medical Guardian",
    score: scoreOf("medical-guardian"),
    startingPrice: "$29.95/mo",
    contract: "None",
    fallDetection: "Yes (+$10/mo)",
    gps: "Yes",
    monitoring: "24/7 US-based",
    href: "/medical-guardian-review",
    brandKey: "medical-guardian" as const,
    pros: ["Most complete device lineup — home button to GPS smartwatch", "Month-to-month, cancel anytime", "Strong 24/7 US-based monitoring"],
    cons: ["Fall detection is a $10/mo add-on, not included", "Can be pricier than Bay Alarm Medical for simple in-home use"],
    summary: "The most complete package — flexible plans, no contract, and the widest range of devices from home button to GPS smartwatch. Our top pick for most families.",
  },
  {
    rank: 2,
    badge: "Best Value",
    badgeColor: "bg-brand-tint text-brand",
    name: "Bay Alarm Medical",
    score: scoreOf("bay-alarm-medical"),
    startingPrice: "$19.95/mo",
    contract: "None",
    fallDetection: "Yes (+$10/mo)",
    gps: "Yes",
    monitoring: "24/7 UL-listed",
    href: "/bay-alarm-medical-review",
    brandKey: "bay-alarm" as const,
    pros: ["Lowest starting price in the industry", "Free spouse monitoring included", "Works on both AT&T and Verizon networks"],
    cons: ["Mobile app less polished than Medical Guardian", "GPS-enabled plan significantly more expensive than base"],
    summary: "Lowest starting price in the industry with free spouse monitoring. Ideal for budget-conscious families who need reliable in-home protection.",
  },
  {
    rank: 3,
    badge: "Best for Active Seniors",
    badgeColor: "bg-brand-tint text-brand",
    name: "Lively Mobile2",
    score: "8.7",
    startingPrice: "$24.99/mo",
    contract: "None",
    fallDetection: "Yes (+$6.99/mo)",
    gps: "Yes",
    monitoring: "24/7 US-based",
    href: "/fall-detection-medical-alert",
    brandKey: "lively" as const,
    pros: ["No contract — cancel any time", "Fall detection add-on cheapest in class at $6.99/mo", "Compact GPS device works anywhere"],
    cons: ["Battery needs daily charging", "No in-home base station option"],
    summary: "Best compact GPS option for active seniors who are often outside the home. Most affordable fall detection add-on at $6.99/month.",
  },
  {
    rank: 4,
    badge: "Best In-Home",
    badgeColor: "bg-brand-tint text-brand",
    name: "Lifeline",
    score: "8.5",
    startingPrice: "$29.95/mo",
    contract: "Month-to-month",
    fallDetection: "Yes (+$15/mo)",
    gps: "Add-on",
    monitoring: "24/7 US-based",
    href: "/fall-detection-medical-alert",
    brandKey: "lifeline" as const,
    pros: ["40+ years in medical alerts — highly trusted brand", "Lightweight pendant comfortable for daily wear", "Strong in-home range"],
    cons: ["Fall detection add-on most expensive at $15/mo", "GPS requires additional GoSafe 2 device upgrade"],
    summary: "Best for seniors who rarely leave home and prefer a familiar brand. Lifeline (formerly Philips Lifeline) has been in this space longer than any other company.",
  },
  {
    rank: 5,
    badge: "Most Recognized",
    badgeColor: "bg-brand-tint text-brand",
    name: "Life Alert",
    score: scoreOf("life-alert"),
    startingPrice: "$49.95/mo (est.)",
    contract: "3 years",
    fallDetection: "No",
    gps: "Add-on",
    monitoring: "24/7 US-based",
    href: "/life-alert-cost",
    brandKey: "life-alert" as const,
    pros: ["Most recognizable brand — seniors often request it by name", "24/7 US-based monitoring with fast response"],
    cons: ["Requires a 3-year contract — most restrictive in the industry", "Significantly more expensive than comparable options", "No automatic fall detection"],
    summary: "The most recognized brand, but requires a 3-year contract and costs more than equivalent alternatives. We recommend Medical Guardian or Bay Alarm Medical instead for most families.",
  },
];

// Authored ledger rows — plain strings for facts; { tone, text } to render an
// on-palette verdict icon in place of the old ✓/✗ text glyphs. Column order:
// Medical Guardian, Bay Alarm Medical, Lively Mobile2, Lifeline, Life Alert.
const ledgerColumns = ["Medical Guardian", "Bay Alarm Medical", "Lively Mobile2", "Lifeline", "Life Alert"];

const affirm = (text: string) => ({ tone: "affirm" as const, text });
const deny = (text: string) => ({ tone: "deny" as const, text });
const warn = (text: string) => ({ tone: "warn" as const, text });

const ledgerRows: LedgerRow[] = [
  { label: "Starting price", values: ["$29.95/mo", "$19.95/mo", "$24.99/mo", "$29.95/mo", "$49.95/mo (est.)"] },
  { label: "Contract", values: [affirm("None"), affirm("None"), affirm("None"), warn("Month-to-month"), deny("3 years")] },
  { label: "Fall detection", values: ["+$10/mo", "+$10/mo", "+$6.99/mo", "+$15/mo", deny("Not available")] },
  { label: "GPS", values: [affirm("Yes"), affirm("Yes"), affirm("Yes"), warn("Add-on"), warn("Add-on")] },
  { label: "Works outside home", values: [affirm("Yes"), affirm("Yes"), affirm("Yes"), deny("No (base)"), warn("Limited")] },
  { label: "24/7 US monitoring", values: [affirm("Yes"), affirm("Yes"), affirm("Yes"), affirm("Yes"), affirm("Yes")] },
  { label: "Caregiver app", values: [affirm("Yes"), affirm("Yes"), affirm("Yes"), warn("Limited"), deny("No")] },
];

const buyingFactors = [
  {
    title: "Monitoring quality is the most important factor",
    body: "The monitoring center is what actually saves lives. Look for UL-listed, 5-Diamond CSAA certified centers with US-based operators and response times under 30 seconds. Medical Guardian, Bay Alarm Medical, and Lifeline all meet this standard. Life Alert uses proprietary monitoring. Avoid systems with overseas call centers or uncertified monitoring.",
  },
  {
    title: "Avoid long-term contracts — most systems do not require them",
    body: "Life Alert requires a 3-year contract with steep cancellation penalties. Medical Guardian, Bay Alarm Medical, and Lively are all month-to-month — you can cancel any time if the system stops working for your family. There is no meaningful benefit to a long-term contract, and the lock-in creates real risk if needs change.",
  },
  {
    title: "Match the device type to how they live",
    body: "An in-home button system protects at home but is useless outside. A GPS wearable works everywhere but requires charging. For active seniors who go out regularly, a GPS device is essential. For seniors who rarely leave home and want simplicity, an in-home pendant is less expensive and easier to manage.",
  },
  {
    title: "Fall detection is worth the add-on cost for high-risk seniors",
    body: "Automatic fall detection add-ons cost $7–15/month. For seniors living alone, with a history of falls, balance issues, or neurological conditions, this is worth it — it means help is summoned even if they cannot reach the button after a fall. For lower-risk seniors, the manual button is sufficient.",
  },
  {
    title: "Calculate the total annual cost before choosing",
    body: "The advertised monthly rate rarely tells the full story. Add equipment fees, activation charges, fall detection add-ons, and GPS if needed. A plan at $19.95/mo with a $99 equipment fee and $10 fall detection add-on costs $449 in year one. A plan at $29.95/mo with no equipment fee and fall detection included costs $360. Run the full math.",
  },
  {
    title: "Check coverage for GPS-dependent systems",
    body: "GPS medical alert devices rely on cellular networks. A system built on AT&T will have gaps in rural areas where Verizon is stronger, and vice versa. Bay Alarm Medical supports both AT&T and Verizon. Check which network has better coverage in your parent's area before choosing.",
  },
];

const whoNeedsWhat = [
  { profile: "Senior living alone, stays mostly at home", recommendation: "Bay Alarm Medical (in-home plan) — lowest cost, reliable monitoring, no contract.", link: "/bay-alarm-medical-review" },
  { profile: "Senior living alone, high fall risk", recommendation: "Medical Guardian with fall detection add-on — GPS + auto fall detection + 24/7 US monitoring.", link: "/medical-guardian-review" },
  { profile: "Active senior who goes out frequently", recommendation: "Lively Mobile2 with fall detection — compact GPS device, no contract, most affordable fall detection.", link: "/fall-detection-medical-alert" },
  { profile: "Senior who wants the longest-established brand", recommendation: "Lifeline HomeSafe (formerly Philips Lifeline) — lightweight pendant, solid in-home monitoring.", link: "/fall-detection-medical-alert" },
  { profile: "Family wants Life Alert specifically", recommendation: "Read our Life Alert cost breakdown first — the 3-year contract is a real commitment with cancellation penalties.", link: "/life-alert-cost" },
];

const faq = [
  {
    q: "What is the best medical alert system in 2026?",
    a: "Medical Guardian is our top-rated medical alert system in 2026 due to its combination of flexible plans, month-to-month pricing, 24/7 US-based monitoring, and range of devices from a simple home button to a GPS smartwatch. Bay Alarm Medical is the best value option starting at $19.95/month with free spouse monitoring.",
  },
  {
    q: "How much do the best medical alert systems cost?",
    a: "The best medical alert systems range from $19.95/month (Bay Alarm Medical) to an estimated $49.95/month (Life Alert, which does not publish pricing — that figure is a commonly reported rate). Most top-rated systems cost $25–45/month for basic monitoring. Fall detection add-ons add $7–15/month. GPS capability typically adds $10–15/month over an in-home-only system.",
  },
  {
    q: "What is the best medical alert system with no monthly fee?",
    a: "True no-fee systems with professional 24/7 monitoring do not exist — monitoring centers require a monthly subscription to operate. Some unmonitored devices have no monthly fee but only call preset family contacts rather than a monitoring center, which is not appropriate for someone living alone or at high fall risk.",
  },
  {
    q: "Are medical alert systems worth it for the elderly?",
    a: "For many seniors, yes. Falls are the leading cause of injury-related death among adults 65 and older (CDC), and the danger is compounded when someone lies undetected for hours afterward. A medical alert system shortens that wait by connecting help quickly. For elderly adults living alone, the cost is typically $0.50–1.50/day — a fraction of the potential emergency-room and hospitalization costs from an undetected fall. Whether it is worth it depends on the individual's fall risk and living situation.",
  },
  {
    q: "What is the difference between in-home and GPS medical alert systems?",
    a: "In-home systems use a base station and work only within the home (typically 300–1,000 feet). They are less expensive ($20–35/mo) and simpler to set up. GPS systems use cellular networks and work anywhere — home, car, grocery store. They cost more ($30–50/mo) and require regular charging. If your parent leaves home at all, a GPS system is strongly recommended.",
  },
  {
    q: "Does Life Alert require a contract?",
    a: "Yes — Life Alert requires a 3-year contract, the longest in the industry. Early termination carries penalties. Medical Guardian, Bay Alarm Medical, and Lively are all month-to-month with no cancellation penalties. We recommend these alternatives for most families unless your parent specifically requests Life Alert by name.",
  },
  {
    q: "Can a medical alert system detect a fall automatically?",
    a: "Most modern medical alert systems offer automatic fall detection as an add-on ($7–15/month extra). The device uses an accelerometer to detect the motion pattern of a fall — rapid downward acceleration followed by impact and stillness — and automatically connects to the monitoring center. No manufacturer publishes a certified accuracy figure; it is a useful backup but not 100% reliable, so always keep the manual help button reachable.",
  },
  {
    q: "What should I look for when comparing medical alert systems?",
    a: "The five most important factors are: (1) monitoring quality — look for UL-listed, CSAA-certified centers with US-based operators; (2) contract terms — month-to-month is strongly preferred; (3) device type — match to whether your parent goes out; (4) total cost including all add-ons and fees; (5) cellular network coverage for GPS-dependent systems.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};


const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Medical Alert Systems 2026",
  "description": "Expert-ranked top medical alert systems for seniors, compared by monitoring quality, pricing, and fall detection.",
  "url": "https://medicalalertreview.com/best-medical-alert-systems",
  "numberOfItems": 5,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Medical Guardian", "url": "https://medicalalertreview.com/medical-guardian-review" },
    { "@type": "ListItem", "position": 2, "name": "Bay Alarm Medical", "url": "https://medicalalertreview.com/bay-alarm-medical-review" },
    { "@type": "ListItem", "position": 3, "name": "Lively Mobile2", "url": "https://medicalalertreview.com/fall-detection-medical-alert" },
    { "@type": "ListItem", "position": 4, "name": "Lifeline", "url": "https://medicalalertreview.com/fall-detection-medical-alert" },
    { "@type": "ListItem", "position": 5, "name": "Life Alert", "url": "https://medicalalertreview.com/life-alert-cost" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Medical Alert Systems of 2026",
  "datePublished": "2026-01-20",
  "dateModified": "2026-06-12",
  "author": { "@type": "Person", "name": "Carol Bennett" },
  "publisher": { "@type": "Organization", "name": "Medical Alert Review", "url": "https://medicalalertreview.com" },
  "mainEntityOfPage": "https://medicalalertreview.com/best-medical-alert-systems",
};

export default function BestMedicalAlertSystems() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[{ label: "Buying Guides" }, { label: "Best Medical Alert Systems" }]} />

        <h1 className="text-3xl md:text-4xl font-bold mb-2">Best Medical Alert Systems of 2026</h1>
        <Byline updated="2026-06-12" />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-8 text-sm">
          <p className="eyebrow mb-3">Quick picks</p>
          <ul className="text-ink-soft space-y-1">
            <li><strong className="text-ink">Best overall:</strong> Medical Guardian — most complete device lineup, no contract, 24/7 US monitoring</li>
            <li><strong className="text-ink">Best value:</strong> Bay Alarm Medical — lowest starting price ($19.95/mo), free spouse monitoring</li>
            <li><strong className="text-ink">Best for active seniors:</strong> Lively Mobile2 — compact GPS, most affordable fall detection add-on</li>
            <li><strong className="text-ink">Avoid:</strong> Life Alert requires a 3-year contract — all competitors are month-to-month</li>
          </ul>
        </div>

        <SectionHeading eyebrow="The comparison ledger">Top Medical Alert Systems at a Glance</SectionHeading>
        <ComparisonLedger
          rowHeader="Feature"
          columns={ledgerColumns}
          rows={ledgerRows}
          highlightColumn={0}
          caption="Feature comparison of the top five medical alert systems for 2026."
          footnote="Medical Guardian (highlighted) is our Best Overall pick. Add-on prices reflect each provider's official rates as of June 2026."
        />

        <DiagramFigure
          src="/diagrams/monthly-cost-comparison.svg"
          alt="Bar chart of starting monthly prices: Bay Alarm Medical $19.95, Lively Mobile2 $24.99, Medical Guardian $29.95, Lifeline $29.95, Life Alert an estimated $49.95 (Life Alert does not publish pricing)"
          width={800}
          height={420}
          caption="Advertised base in-home plan rates from each provider's official pricing, June 2026. Fall detection and GPS add-ons cost extra — full breakdowns below."
        />

        <SectionHeading eyebrow="Full reviews" className="mb-2">Top Medical Alert Systems — Full Reviews</SectionHeading>
        <p className="text-sm text-ink-mute mb-6">
          Scores are our editorial ratings out of 10, calculated from a{" "}
          <a href="/methodology" className="text-brand underline">published rubric</a>.
          Our ranking also weighs device breadth and best-fit use case, so the
          order can differ slightly from the raw score — for example, Bay Alarm
          Medical scores marginally higher on the rubric, while Medical Guardian
          takes Best Overall for its wider device lineup.
        </p>
        <div className="space-y-6 mb-12">
          {systems.map((s) => (
            <div key={s.name} className="bg-paper-raised border border-rule rounded-card p-6 shadow-card">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-brand/30">#{s.rank}</span>
                  <div>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-badge ${s.badgeColor}`}>{s.badge}</span>
                    <h3 className="text-xl font-bold mt-1">{s.name}</h3>
                  </div>
                </div>
                <span className="text-brand font-bold text-lg tabular-nums">{s.score}/10</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-4">
                <div><p className="text-ink-mute text-xs">Starting Price</p><p className="font-semibold">{s.startingPrice}</p></div>
                <div><p className="text-ink-mute text-xs">Contract</p><p className="font-semibold">{s.contract}</p></div>
                <div><p className="text-ink-mute text-xs">Fall Detection</p><p className="font-semibold">{s.fallDetection}</p></div>
                <div><p className="text-ink-mute text-xs">GPS</p><p className="font-semibold">{s.gps}</p></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-4">
                <ul className="space-y-1.5">
                  {s.pros.map(p => (
                    <li key={p} className="text-sm text-ink-soft flex gap-2"><CheckIcon className="w-4 h-4 text-affirm shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
                <ul className="space-y-1.5">
                  {s.cons.map(c => (
                    <li key={c} className="text-sm text-ink-soft flex gap-2"><CrossIcon className="w-4 h-4 text-sos shrink-0 mt-0.5" />{c}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-ink-soft mb-4">{s.summary}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-rule pt-4">
                <OutboundLink
                  href={AFFILIATE_LINKS[s.brandKey].url}
                  label={s.name}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded-card hover:bg-brand-dark transition-colors"
                >
                  See Plans at {s.name}
                  <ChevronIcon className="w-3.5 h-3.5" />
                </OutboundLink>
                <a href={s.href} className="inline-flex items-center gap-1 min-h-[44px] text-sm font-semibold text-brand hover:underline">
                  Read full review
                  <ChevronIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-ink-mute -mt-8 mb-12">{FTC_DISCLOSURE}</p>

        <SectionHeading eyebrow="Match to the reader">Who Should Choose Which System</SectionHeading>
        <div className="border border-rule rounded-ledger overflow-hidden text-sm mb-10 bg-paper-raised shadow-card divide-y divide-rule">
          {whoNeedsWhat.map((row) => (
            <div key={row.profile} className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-x-4 gap-y-1 px-4 py-3.5">
              <p className="text-ink font-semibold">{row.profile}</p>
              <p className="text-ink-soft">
                {row.recommendation}{" "}
                <a href={row.link} className="text-brand underline whitespace-nowrap">Details →</a>
              </p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Buyer's checklist">What to Look for in a Medical Alert System</SectionHeading>
        <div className="space-y-3 mb-10">
          {buyingFactors.map((f, i) => (
            <div key={f.title} className="bg-paper-raised border border-rule rounded-card p-4 text-sm">
              <p className="font-bold mb-1 flex items-baseline gap-2">
                <span className="font-mono text-xs text-brand/70 tabular-nums" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                {f.title}
              </p>
              <p className="text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Questions we hear most">Frequently Asked Questions</SectionHeading>
        <div className="space-y-2 mb-10">
          {faq.map(({ q, a }) => (
            <details key={q} className="group bg-paper-raised border border-rule rounded-card overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-semibold text-sm list-none select-none">
                {q}
                <ChevronIcon className="w-4 h-4 text-brand ml-4 shrink-0 rotate-90 transition-transform group-open:-rotate-90" />
              </summary>
              <p className="px-4 pb-4 text-sm text-ink-soft">{a}</p>
            </details>
          ))}
        </div>

        <Verdict label="The desk's bottom line">
          For most families, Medical Guardian and Bay Alarm Medical are the two
          to shortlist — both are no-contract, US-monitored, and honest about
          add-on costs. Life Alert&apos;s three-year lock-in is the one thing we&apos;d
          steer you around.
        </Verdict>

        <CtaBlock
          brandKey="medical-guardian"
          heading="See our #1 pick's current plans"
          note="Medical Guardian is our Best Overall for 2026 — the widest device lineup, no contract, and 24/7 US-based monitoring. Prefer the lowest price? Bay Alarm Medical starts at $19.95/mo."
        />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 text-sm">
          <p className="eyebrow mb-3">Keep reading</p>
          <ul className="space-y-2">
            <li><a href="/medical-guardian-review" className="text-brand underline">Medical Guardian Full Review — Pricing, Devices & Verdict →</a></li>
            <li><a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical Full Review — Is It the Best Value? →</a></li>
            <li><a href="/life-alert-cost" className="text-brand underline">Life Alert Cost — Monthly Fees, Hidden Charges & Alternatives →</a></li>
            <li><a href="/fall-detection-medical-alert" className="text-brand underline">Best Fall Detection Devices — Auto-Detect Falls Compared →</a></li>
            <li><a href="/medical-alert-cost-comparison" className="text-brand underline">Medical Alert Cost &amp; Fall-Detection Study (2026 Data) →</a></li>
            <li><a href="/best-medical-alert-watches" className="text-brand underline">Best Medical Alert Watches — Monitored vs. Apple Watch →</a></li>
            <li><a href="/in-home-medical-alert-systems" className="text-brand underline">Best In-Home Medical Alert Systems →</a></li>
            <li><a href="/no-monthly-fee-medical-alert" className="text-brand underline">No Monthly Fee Medical Alert Options →</a></li>
          </ul>
        </div>

        <Sources
          sources={[
            SOURCES.cdcFalls,
            SOURCES.nia,
            SOURCES.medicare,
            { label: "Medical Guardian — official pricing & plans", url: "https://www.medicalguardian.com" },
            { label: "Bay Alarm Medical — official pricing & plans", url: "https://www.bayalarmmedical.com" },
            { label: "Lively — Mobile2 device & plans", url: "https://www.lively.com" },
          ]}
        />
      </div>
    </>
  );
}
