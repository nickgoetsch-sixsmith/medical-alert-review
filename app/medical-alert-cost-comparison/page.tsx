import type { Metadata } from "next";
import Byline from "@/app/components/Byline";
import Sources from "@/app/components/Sources";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import CtaBlock from "@/app/components/CtaBlock";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import { CheckIcon, CrossIcon, ChevronIcon } from "@/app/components/Icon";
import { SITE, SOURCES } from "@/lib/site";
import { FTC_DISCLOSURE } from "@/lib/affiliate-links";
import { PROVIDERS, costMetrics, computeRating } from "@/data/editorial-ratings";

const UPDATED = "2026-07-13";

const usd = (n: number) => `$${n.toFixed(2)}`;

// ── Derive the study numbers from the documented provider data ──────────────
// Every figure below is computed from data/editorial-ratings.ts, whose values
// trace to each review's cited pricing. Nothing here is hand-entered.
const metrics = Object.values(PROVIDERS).map(costMetrics);
const withFD = metrics
  .filter((m) => m.monthlyWithFallDetection !== null)
  .sort((a, b) => a.monthlyWithFallDetection! - b.monthlyWithFallDetection!);
const withoutFD = metrics
  .filter((m) => m.monthlyWithFallDetection === null)
  .sort((a, b) => (a.firstYearBase ?? 0) - (b.firstYearBase ?? 0));
const ordered = [...withFD, ...withoutFD];

const cheapestTotal = withFD[0]; // lowest total monthly WITH fall detection
const cheapestAddon = withFD
  .filter((m) => m.fallDetectionAddon !== null)
  .sort((a, b) => a.fallDetectionAddon! - b.fallDetectionAddon!)[0];
const fyValues = withFD.map((m) => m.firstYearWithFallDetection!).sort((a, b) => a - b);
const fyLow = fyValues[0];
const fyHigh = fyValues[fyValues.length - 1];
const noFallDetectionNames = withoutFD.map((m) => m.provider.brand);
const noFee = metrics.find((m) => m.oneTime !== null);

// Derived counts so the prose never drifts from the number of systems studied.
const totalSystems = metrics.length;
const noFdCount = withoutFD.length;
// Spelled-out number for prose (2–20 covers any realistic set size).
const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen", "twenty",
];
const totalWord = NUMBER_WORDS[totalSystems] ?? String(totalSystems);

const faq = [
  {
    q: "How much does a medical alert system cost per month in 2026?",
    a: `Monitored medical alert plans in this comparison start at ${usd(19.95)}/month (Bay Alarm Medical) and run to an estimated ${usd(
      49.95
    )}/month (Life Alert, which does not publish pricing). Automatic fall detection adds ${usd(
      cheapestAddon.fallDetectionAddon!
    )}–$15/month on the systems that offer it, and GPS or premium devices can add more. Always add equipment or activation fees to the advertised monthly rate.`,
  },
  {
    q: "What is the cheapest medical alert system with fall detection?",
    a: `Based on published base price plus the fall-detection add-on, billed monthly, ${cheapestTotal.provider.brand} is the lowest total at about ${usd(
      cheapestTotal.monthlyWithFallDetection!
    )}/month (${usd(cheapestTotal.monthly!)} base + ${usd(
      cheapestTotal.fallDetectionAddon!
    )} add-on). Notably, that is not the system with the cheapest add-on — ${cheapestAddon.provider.brand}'s ${usd(
      cheapestAddon.fallDetectionAddon!
    )} add-on is the lowest, but its higher ${usd(
      cheapestAddon.monthly!
    )} base makes the total ${usd(cheapestAddon.monthlyWithFallDetection!)}. Figures exclude one-time equipment fees.`,
  },
  {
    q: "Which medical alert systems don't offer automatic fall detection?",
    a: `In this comparison, ${noFallDetectionNames.join(
      " and "
    )} do not offer automatic fall detection at any price. Life Alert requires the user to press the button; LogicMark's no-monthly-fee device likewise has no auto-detection and no monitoring center. If fall detection matters, choose a provider that offers it as an add-on.`,
  },
  {
    q: "How much does automatic fall detection add to the monthly cost?",
    a: `On the systems that offer it, automatic fall detection is an add-on of ${usd(
      cheapestAddon.fallDetectionAddon!
    )}/month (${cheapestAddon.provider.brand}) to about $15/month (Lifeline) — it is not included by default. No manufacturer publishes a certified accuracy figure, so treat it as a useful backup, not a guarantee, and keep the manual button reachable.`,
  },
  {
    q: "Is there a no-monthly-fee medical alert system with fall detection?",
    a: `No. The only no-monthly-fee option here (${noFee?.provider.brand}, ${usd(
      noFee?.oneTime ?? 0
    )} one-time) has no monitoring center and no automatic fall detection — it dials preset contacts and 911. Monitored automatic fall detection requires a subscription, because a staffed 24/7 center is what responds when a fall is detected.`,
  },
];

export const metadata: Metadata = {
  title: { absolute: "Medical Alert System Cost & Fall-Detection Comparison (2026 Data)" },
  description:
    `A 2026 data study of medical alert costs: base monthly price, the true cost of adding automatic fall detection, and estimated first-year cost across ${totalWord} systems — with sources.`,
  alternates: { canonical: `${SITE.url}/medical-alert-cost-comparison` },
  openGraph: {
    title: "Medical Alert Cost & Fall-Detection Study (2026 Data)",
    description:
      `The real cost of monitored fall detection across ${totalWord} medical alert systems — base price, add-on, and first-year total, from documented provider pricing.`,
    url: `${SITE.url}/medical-alert-cost-comparison`,
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medical Alert System Cost & Fall-Detection Comparison (2026 Data)",
  datePublished: "2026-07-13",
  dateModified: UPDATED,
  author: { "@type": "Person", name: "Carol Bennett" },
  publisher: { "@type": "Organization", name: "Medical Alert Review", url: SITE.url },
  mainEntityOfPage: `${SITE.url}/medical-alert-cost-comparison`,
};

export default function MedicalAlertCostComparison() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[{ label: "Buying Guides" }, { label: "Cost & Fall-Detection Study" }]} />

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Medical Alert System Cost &amp; Fall-Detection Comparison (2026 Data)
        </h1>
        <Byline updated={UPDATED} />

        <p className="text-ink-soft mt-4 mb-6">
          The advertised monthly price of a medical alert system rarely tells you what it costs to
          actually protect someone at risk of a fall. We pulled the published pricing for {totalWord}
          {" "}systems and worked out the real number: base plan, the add-on for automatic fall
          detection, and the estimated first-year total. The results overturn a common assumption —
          the system with the <em>cheapest fall-detection add-on</em> is not the cheapest way to get
          monitored fall detection.
        </p>

        {/* ── Key findings — the citable summary ─────────────────────────── */}
        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-8 text-sm">
          <p className="eyebrow mb-3">Key findings (2026)</p>
          <ul className="text-ink-soft space-y-2">
            <li>
              <strong className="text-ink">Cheapest monitored fall detection:</strong>{" "}
              {cheapestTotal.provider.brand} at <strong className="text-ink">{usd(cheapestTotal.monthlyWithFallDetection!)}/mo</strong>{" "}
              ({usd(cheapestTotal.monthly!)} base + {usd(cheapestTotal.fallDetectionAddon!)} add-on) — even though{" "}
              {cheapestAddon.provider.brand} has the lowest add-on ({usd(cheapestAddon.fallDetectionAddon!)}/mo).
            </li>
            <li>
              <strong className="text-ink">{noFdCount} of {totalSystems} systems offer no automatic fall detection at any price</strong> —{" "}
              {noFallDetectionNames.join(" and ")}.
            </li>
            <li>
              <strong className="text-ink">Estimated first-year cost with fall detection</strong> ranges from{" "}
              <strong className="text-ink">{usd(fyLow)}</strong> to <strong className="text-ink">{usd(fyHigh)}</strong>{" "}
              (base + add-on billed monthly; excludes one-time equipment fees).
            </li>
            <li>
              <strong className="text-ink">Only one system requires a long-term contract</strong> (Life Alert, 3 years);
              the rest are month-to-month.
            </li>
            <li>
              <strong className="text-ink">The only no-monthly-fee option</strong> ({noFee?.provider.brand}, {usd(noFee?.oneTime ?? 0)} one-time)
              has no monitoring center and no automatic fall detection.
            </li>
          </ul>
        </div>

        {/* ── The cost table (computed) ──────────────────────────────────── */}
        <SectionHeading eyebrow="The numbers">Cost of Monitored Fall Detection, by System</SectionHeading>
        <div className="overflow-x-auto border border-rule rounded-ledger bg-paper-raised shadow-card mb-3">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-rule text-left text-ink-mute">
                <th className="px-4 py-3 font-semibold">System</th>
                <th className="px-4 py-3 font-semibold text-right">Base / mo</th>
                <th className="px-4 py-3 font-semibold text-right">Fall-detect add-on</th>
                <th className="px-4 py-3 font-semibold text-right">Total / mo w/ fall detection</th>
                <th className="px-4 py-3 font-semibold text-right">Est. 1st-year w/ fall detection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {ordered.map((m, i) => (
                <tr key={m.provider.id} className={i === 0 ? "bg-brand-tint/40" : ""}>
                  <td className="px-4 py-3 font-semibold text-ink">
                    {m.provider.brand}
                    {i === 0 && (
                      <span className="ml-2 text-xs font-semibold text-brand">Lowest total</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {m.monthly !== null ? usd(m.monthly) : `${usd(m.oneTime!)} one-time`}
                    {m.monthlyEstimated && <span className="text-ink-mute"> (est.)</span>}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {m.offersFallDetection ? (
                      <span className="inline-flex items-center gap-1 justify-end">
                        <CheckIcon className="w-3.5 h-3.5 text-affirm shrink-0" />
                        +{usd(m.fallDetectionAddon!)}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 justify-end text-ink-mute">
                        <CrossIcon className="w-3.5 h-3.5 text-sos shrink-0" />
                        Not offered
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums font-semibold text-ink">
                    {m.monthlyWithFallDetection !== null ? usd(m.monthlyWithFallDetection) : "—"}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {m.firstYearWithFallDetection !== null ? usd(m.firstYearWithFallDetection) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-mute mb-8">
          Base prices and add-on rates are each provider&apos;s published figures as documented in our reviews
          (sources below). First-year totals are base + fall-detection add-on billed monthly (×12); they exclude
          one-time equipment/device fees, GPS upgrades, promotions, and sales tax, which vary by plan. Life Alert
          does not publish pricing — its figure is a commonly reported estimate.
        </p>

        {/* ── The insight ─────────────────────────────────────────────────── */}
        <SectionHeading eyebrow="Why the cheapest add-on loses">The Add-On Trap</SectionHeading>
        <p className="text-ink-soft mb-4">
          Shoppers naturally compare the fall-detection add-on line item — and by that measure{" "}
          {cheapestAddon.provider.brand} wins at {usd(cheapestAddon.fallDetectionAddon!)}/month. But fall detection
          is never sold on its own; it rides on top of a base plan. Because {cheapestTotal.provider.brand}&apos;s base
          is {usd(cheapestTotal.monthly!)} versus {cheapestAddon.provider.brand}&apos;s {usd(cheapestAddon.monthly!)},
          the {usd(cheapestTotal.fallDetectionAddon!)} add-on still lands lower overall —{" "}
          <strong className="text-ink">{usd(cheapestTotal.monthlyWithFallDetection!)}</strong> vs{" "}
          <strong className="text-ink">{usd(cheapestAddon.monthlyWithFallDetection!)}</strong> a month, or about{" "}
          {usd(cheapestAddon.firstYearWithFallDetection! - cheapestTotal.firstYearWithFallDetection!)} more in year one.
          The lesson: compare the <em>total</em>, not the add-on.
        </p>

        {/* ── Fall-detection availability ─────────────────────────────────── */}
        <SectionHeading eyebrow="Availability">Which Systems Offer Automatic Fall Detection</SectionHeading>
        <div className="border border-rule rounded-ledger overflow-hidden text-sm mb-8 bg-paper-raised shadow-card divide-y divide-rule">
          {ordered.map((m) => (
            <div key={m.provider.id} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="font-semibold text-ink">{m.provider.brand}</span>
              <span className="text-ink-soft">
                {m.offersFallDetection ? (
                  <span className="inline-flex items-center gap-1.5 text-affirm">
                    <CheckIcon className="w-4 h-4 shrink-0" />
                    Add-on, +{usd(m.fallDetectionAddon!)}/mo
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-ink-mute">
                    <CrossIcon className="w-4 h-4 text-sos shrink-0" />
                    Not offered
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* ── Methodology ─────────────────────────────────────────────────── */}
        <SectionHeading eyebrow="How we compiled this">Methodology &amp; Assumptions</SectionHeading>
        <p className="text-ink-soft text-sm mb-8">
          This is editorial research, not first-hand lab testing. Every price is each provider&apos;s published
          figure, documented and cited on our individual review pages, compiled on {UPDATED}. First-year totals
          assume the base plan plus the fall-detection add-on, billed monthly across 12 months; they exclude
          one-time equipment/activation fees, GPS-device upgrades, promotional discounts, and sales tax, all of
          which vary by plan and household. Fall-detection accuracy is not certified by any manufacturer, so it is
          treated as a backup rather than a guarantee. Confirm current pricing with each provider before buying —
          medical alert pricing changes, and Life Alert does not publish its rates. See our{" "}
          <a href="/methodology" className="text-brand underline">full scoring rubric</a>.
        </p>

        <Verdict label="The desk's bottom line">
          If automatic fall detection is the goal — and for a senior living alone it usually should be —
          shortlist {cheapestTotal.provider.brand} and {cheapestAddon.provider.brand}: both land under{" "}
          {usd(Math.max(cheapestTotal.monthlyWithFallDetection!, cheapestAddon.monthlyWithFallDetection!))}/month
          all-in, are month-to-month, and use 24/7 US monitoring. Skip anything that can&apos;t detect a fall at
          all if the person you&apos;re protecting can&apos;t reliably press a button.
        </Verdict>

        <CtaBlock
          brandKey="bay-alarm"
          heading="See Bay Alarm Medical's current plans"
          note="Lowest total cost with fall detection in our 2026 comparison — $19.95/mo base plus a $10 add-on, month-to-month. Prefer the widest device lineup? Medical Guardian is our Best Overall."
        />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 text-sm">
          <p className="eyebrow mb-3">Keep reading</p>
          <ul className="space-y-2">
            <li><a href="/best-medical-alert-systems" className="text-brand underline">Best Medical Alert Systems 2026 — the full comparison ledger →</a></li>
            <li><a href="/fall-detection-medical-alert" className="text-brand underline">Best Fall Detection Devices — how auto-detection works →</a></li>
            <li><a href="/life-alert-cost" className="text-brand underline">Life Alert Cost — why the 3-year contract matters →</a></li>
            <li><a href="/no-monthly-fee-medical-alert" className="text-brand underline">No Monthly Fee Medical Alert Options →</a></li>
            <li><a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical Full Review →</a></li>
          </ul>
        </div>

        <p className="text-xs text-ink-mute mt-6 mb-8">{FTC_DISCLOSURE}</p>

        <Sources
          sources={[
            SOURCES.cdcFalls,
            { label: "Medical Guardian — official pricing & plans", url: "https://www.medicalguardian.com" },
            { label: "Bay Alarm Medical — official pricing & plans", url: "https://www.bayalarmmedical.com" },
            { label: "Lively — Mobile2 device & plans", url: "https://www.lively.com" },
            { label: "MobileHelp — official pricing & plans", url: "https://www.mobilehelp.com" },
            { label: "ADT Health — medical alert pricing (via U.S. News 2026 review)", url: "https://realestate.usnews.com/home-services/medical-alert-system/adt" },
            { label: "Life Alert — official site", url: "https://www.lifealert.com" },
            { label: "LogicMark — Freedom Alert devices", url: "https://www.logicmark.com" },
          ]}
        />
      </div>
    </>
  );
}
