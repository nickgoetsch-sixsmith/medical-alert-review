import type { Metadata } from "next";
import OutboundLink from "@/app/components/OutboundLink";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import DeviceTokenCard from "@/app/components/DeviceTokenCard";
import Byline from "@/app/components/Byline";
import Sources from "@/app/components/Sources";
import EditorialRating from "@/app/components/EditorialRating";
import ReviewSchema from "@/app/components/ReviewSchema";
import ArticleSchema from "@/app/components/ArticleSchema";
import RelatedReviews from "@/app/components/RelatedReviews";
import { SITE, SOURCES } from "@/lib/site";
import { AFFILIATE_LINKS, FTC_DISCLOSURE } from "@/lib/affiliate-links";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import { CheckIcon, CrossIcon, WarnIcon, ChevronIcon } from "@/app/components/Icon";
import { PROVIDERS, computeRating } from "@/data/editorial-ratings";

const provider = PROVIDERS["adt-health"];
const rating = computeRating(provider);

export const metadata: Metadata = {
  title: { absolute: "ADT Medical Alert Review 2026: Cost, Plans & Verdict" },
  description:
    "ADT Medical Alert (ADT Health) review for 2026: In-Home and On-the-Go plan pricing, the $99 activation fee, fall detection add-on, contract terms, and how it compares.",
  alternates: { canonical: `${SITE.url}/adt-medical-alert-review` },
  openGraph: {
    title: "ADT Medical Alert Review 2026 | Pricing, Plans & Verdict",
    description:
      "Full ADT Health medical alert review: In-Home and On-the-Go plan pricing, activation fee, fall detection add-on, lifetime price lock, and how it compares to Bay Alarm and Medical Guardian.",
    url: `${SITE.url}/adt-medical-alert-review`,
    type: "article",
    images: [{ url: `${SITE.url}/og/adt-medical-alert-review.png`, width: 1200, height: 630 }],
  },
};

const plans = [
  { name: "Medical Alert Basic (In-Home Landline)", monthly: "$31.99", coverage: "Home only", connection: "Landline required", keyFeature: "Entry in-home unit; fall detection not available on this plan" },
  { name: "Medical Alert Plus (In-Home Cellular)", monthly: "$39.99", coverage: "Home only", connection: "Cellular (no landline)", keyFeature: "Up to 600 ft range; fall detection add-on available" },
  { name: "On-the-Go (Mobile GPS)", monthly: "$41.99", coverage: "Home + GPS", connection: "AT&T cellular + GPS", keyFeature: "Works anywhere with coverage; fall detection add-on available" },
];

const devices = [
  {
    name: "In-Home Landline (Basic)",
    type: "Landline base + wearable",
    price: "$31.99/mo",
    fallDetection: "Not available on this plan",
    gps: "No",
    battery: "Up to 20-hour base backup",
    range: "Up to 300 feet from base",
    best: "Seniors at home with a landline who do not need fall detection",
  },
  {
    name: "In-Home Cellular (Plus)",
    type: "Cellular base + wearable",
    price: "$39.99/mo",
    fallDetection: "Yes (+$11/mo add-on)",
    gps: "No",
    battery: "Up to 20-hour base backup",
    range: "Up to 600 feet from base",
    best: "Seniors at home without a landline who want fall detection",
  },
  {
    name: "On-the-Go (Mobile)",
    type: "GPS mobile device",
    price: "$41.99/mo",
    fallDetection: "Yes (+$11/mo add-on)",
    gps: "Yes — AT&T GPS",
    battery: "Up to 40 hours",
    range: "Nationwide AT&T coverage",
    best: "Active seniors who leave home regularly",
  },
];

const complaints = [
  {
    complaint: "$99 activation fee on every plan",
    detail:
      "ADT charges a one-time $99 activation fee across its medical alert plans. That is a real up-front cost that no-fee providers like MobileHelp and Bay Alarm Medical (on most plans) do not charge. Factor it into the first-year total before comparing on the monthly rate alone.",
    fair: true,
  },
  {
    complaint: "Fall detection isn't available on the entry landline plan",
    detail:
      "The $31.99/month In-Home Landline (Basic) plan does not support automatic fall detection. To add fall detection at home you need the cellular In-Home Plus plan at $39.99/month plus the $11/month add-on. Budget accordingly if fall detection matters.",
    fair: true,
  },
  {
    complaint: "Higher entry price than in-home rivals",
    detail:
      "At $31.99/month, ADT's entry in-home plan is higher than MobileHelp ($25.95) and Bay Alarm Medical ($19.95–$24.95). ADT's counterweights are the lifetime price-lock on the monthly fee, a lifetime equipment warranty, and the brand's long monitoring track record — but on price alone it is not the cheapest.",
    fair: true,
  },
];

const comparison = [
  { label: "Starting price", adt: "$31.99/mo", bay: "$19.95/mo", mg: "$29.95/mo" },
  { label: "Activation fee", adt: "$99", bay: "$0 (most plans)", mg: "$0" },
  { label: "Contract required", adt: "None", bay: "None", mg: "None" },
  { label: "Fall detection", adt: "+$11/mo (not on landline)", bay: "+$10/mo", mg: "+$10/mo" },
  { label: "Price lock", adt: "Lifetime on monthly fee", bay: "No", mg: "No" },
  { label: "Spouse monitoring", adt: "+$3/mo (+$14.99 once)", bay: "Free (home plans)", mg: "Some plans" },
  { label: "GPS device available", adt: "Yes (On-the-Go)", bay: "Yes", mg: "Yes" },
  { label: "US-based monitoring", adt: "Yes", bay: "Yes", mg: "Yes" },
];

const faq = [
  {
    q: "Does ADT Medical Alert require a contract?",
    a: "No. ADT Medical Alert (ADT Health) plans are month-to-month with no long-term contract, and ADT applies a lifetime price-lock so the monthly monitoring fee will not increase. You can cancel at any time; on cancellation, ADT reimburses any unused days in the billing cycle once the equipment is returned. Note this is separate from ADT's home-security service, which can carry its own agreement.",
  },
  {
    q: "How much does ADT Medical Alert cost per month?",
    a: "ADT Medical Alert starts at $31.99/month for the In-Home Landline (Basic) plan. The In-Home Cellular (Plus) plan is $39.99/month and the On-the-Go mobile GPS plan is $41.99/month. Every plan has a one-time $99 activation fee, and automatic fall detection is a $11/month add-on on the cellular and mobile plans.",
  },
  {
    q: "What is the total first-year cost of ADT Medical Alert?",
    a: "In-Home Landline (Basic): $383.88 in monitoring + $99 activation = $482.88 first year. In-Home Cellular (Plus) with fall detection: $611.88 + $99 = $710.88. On-the-Go (mobile GPS) with fall detection: $635.88 + $99 = $734.88. These figures exclude taxes and any optional extra pendants.",
  },
  {
    q: "Does ADT Medical Alert have fall detection?",
    a: "Yes, on the cellular and mobile plans. Automatic fall detection is a $11/month add-on on the In-Home Cellular (Plus) and On-the-Go plans. It is not available on the entry In-Home Landline (Basic) plan. No manufacturer publishes a certified accuracy figure for fall detection, so treat it as a useful backup and keep the manual button reachable.",
  },
  {
    q: "Is there an activation fee for ADT Medical Alert?",
    a: "Yes. ADT charges a one-time $99 activation fee on its medical alert plans. This is a genuine up-front cost that some competitors — MobileHelp and Bay Alarm Medical on most plans — do not charge. ADT offsets it with a lifetime price-lock on the monthly fee and a lifetime equipment warranty.",
  },
  {
    q: "How does ADT Medical Alert compare to Bay Alarm Medical?",
    a: "Bay Alarm Medical is cheaper up front: $19.95–$24.95/month with no activation fee on most plans and free spouse monitoring on home plans. ADT's entry plan is $31.99/month plus a $99 activation fee, but it adds a lifetime price-lock and a lifetime equipment warranty and carries the ADT brand's long monitoring track record. For lowest cost, Bay Alarm wins; for a locked-in rate from a large, established brand, ADT is the pick.",
  },
  {
    q: "Can two people share one ADT Medical Alert system?",
    a: "Yes. ADT offers spouse or second-user monitoring for an extra $3/month plus a one-time $14.99 fee for the additional pendant. This lets two people in the same household share one system and be monitored individually.",
  },
  {
    q: "Is ADT Medical Alert the same as ADT home security?",
    a: "It is the same parent company (ADT) but a distinct product line, ADT Health. ADT Medical Alert is a personal emergency response service with its own plans, pricing, and month-to-month terms — it is not the same as an ADT home-security alarm contract. ADT Medical Alert was named to U.S. News & World Report's Best Medical Alert Systems 2026 list.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function AdtMedicalAlertReview() {
  return (
    <>
      <ReviewSchema provider={provider} pageUrl={`${SITE.url}/adt-medical-alert-review`} />
      <ArticleSchema
        headline="ADT Medical Alert Review 2026: Cost, Plans & Verdict"
        description="ADT Medical Alert (ADT Health) review for 2026: In-Home and On-the-Go plan pricing, the $99 activation fee, fall detection add-on, contract terms, and how it compares."
        path="/adt-medical-alert-review"
        published="2026-07-22"
        updated={provider.reviewed}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs
          trail={[
            { label: "Reviews", href: "/best-medical-alert-systems" },
            { label: "ADT Medical Alert" },
          ]}
        />

        <span className="inline-flex items-center bg-affirm-tint text-affirm text-xs font-semibold px-3 py-1 rounded-badge">Lifetime price lock 2026</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">ADT Medical Alert Review 2026</h1>
        <Byline updated={provider.reviewed} rating={`${rating.overallTen.toFixed(1)} / 10`} />

        <DeviceTokenCard
          brand="ADT Health"
          device="In-Home base + On-the-Go mobile"
          ratio="16 / 7"
          className="mb-8"
        />

        <EditorialRating provider={provider} />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-6 text-sm">
          <p className="eyebrow mb-3">Quick summary</p>
          <ul className="text-ink-soft space-y-1">
            <li><strong className="text-ink">Starting price:</strong> $31.99/month (home) · $41.99/month (mobile GPS), plus a one-time $99 activation fee</li>
            <li><strong className="text-ink">Contract:</strong> None — month-to-month with a lifetime price-lock on the monthly fee</li>
            <li><strong className="text-ink">Fall detection:</strong> $11/month add-on (cellular and mobile plans only)</li>
            <li><strong className="text-ink">Verdict:</strong> Established brand with a locked-in rate and lifetime equipment warranty; the $99 activation fee is the main friction</li>
          </ul>
        </div>

        <div className="mb-8">
          <OutboundLink
            href={AFFILIATE_LINKS["adt-health"].url}
            label="ADT Health"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit ADT Health — From $31.99/mo →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>

        <nav className="bg-band border border-rule rounded-card p-4 text-sm mb-8">
          <p className="eyebrow mb-3">On this page</p>
          <ol className="space-y-1 text-brand list-decimal list-inside marker:text-ink-mute">
            <li><a href="#pricing" className="hover:underline">Plans and Pricing</a></li>
            <li><a href="#contract" className="hover:underline">Contract Requirements</a></li>
            <li><a href="#devices" className="hover:underline">Device Breakdown</a></li>
            <li><a href="#comparison" className="hover:underline">vs Competitors</a></li>
            <li><a href="#complaints" className="hover:underline">Common Complaints</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-affirm-tint/60 border border-affirm/15 rounded-card p-5">
            <h2 className="text-lg font-bold mb-3">What We Like</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              {[
                "Lifetime price-lock on the monthly monitoring fee",
                "No long-term contract — month-to-month",
                "Lifetime equipment warranty at no extra cost",
                "Low-cost spouse monitoring (+$3/mo)",
                "24/7 US-based monitoring from an established brand",
                "In-Home, cellular, and On-the-Go GPS options",
              ].map(p => (
                <li key={p} className="flex gap-2"><CheckIcon className="w-4 h-4 text-affirm mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-sos-tint/60 border border-sos/15 rounded-card p-5">
            <h2 className="text-lg font-bold mb-3">What to Watch For</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              {[
                "One-time $99 activation fee on every plan",
                "Fall detection not available on the landline plan",
                "Higher entry price than MobileHelp or Bay Alarm",
                "Fall detection is a $11/mo add-on, not included",
              ].map(p => (
                <li key={p} className="flex gap-2"><CrossIcon className="w-4 h-4 text-sos mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeading eyebrow="Plans & pricing" id="pricing">ADT Medical Alert Plans &amp; Pricing 2026</SectionHeading>
        <div className="overflow-x-auto mb-4 rounded-ledger border border-rule bg-paper-raised shadow-card">
          <table className="w-full text-sm border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left p-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-mute">Plan</th>
                <th className="text-left p-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-mute">Monthly</th>
                <th className="text-left p-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-mute">Coverage</th>
                <th className="text-left p-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-mute">Connection</th>
                <th className="text-left p-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-mute">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              {plans.map(p => (
                <tr key={p.name} className="border-b border-rule last:border-0">
                  <td className="p-3 font-medium text-ink">{p.name}</td>
                  <td className="p-3 font-semibold text-brand tabular-nums">{p.monthly}</td>
                  <td className="p-3 text-ink-soft">{p.coverage}</td>
                  <td className="p-3 text-ink-soft">{p.connection}</td>
                  <td className="p-3 text-ink-soft">{p.keyFeature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-band border border-rule rounded-card p-4 text-sm mb-10">
          <p className="font-semibold mb-1">True first-year cost (what you actually pay)</p>
          <ul className="text-ink-soft space-y-0.5">
            <li>In-Home Landline (Basic): <strong>$482.88</strong> ($383.88 monitoring + $99 activation)</li>
            <li>In-Home Cellular (Plus) + fall detection: <strong>$710.88</strong> ($611.88 + $99)</li>
            <li>On-the-Go (mobile GPS) + fall detection: <strong>$734.88</strong> ($635.88 + $99)</li>
          </ul>
          <p className="text-ink-mute text-xs mt-2">Includes the one-time $99 activation fee; excludes taxes and optional extra pendants (+$3/mo each). Monthly fee is lifetime price-locked. Verified against U.S. News and public ADT Health pricing on July 22, 2026 — confirm current rates before ordering.</p>
        </div>

        <SectionHeading eyebrow="Contract & cancellation" id="contract">Does ADT Medical Alert Require a Contract?</SectionHeading>
        <div className="bg-affirm-tint/40 border border-affirm/15 rounded-card p-5 mb-4 text-sm">
          <p className="text-ink-soft">
            <strong className="text-ink">No — ADT Medical Alert does not require a long-term contract.</strong> The
            medical alert plans are month-to-month, and ADT applies a lifetime price-lock so the monthly monitoring fee
            will not rise. You can cancel at any time, and ADT reimburses any unused days in the billing cycle once the
            equipment is returned. Two caveats to note: a one-time $99 activation fee applies to every plan, and this
            medical alert service is a separate product from ADT&apos;s home-security alarm service, which can carry its
            own agreement.
          </p>
        </div>
        <p className="text-xs text-ink-mute mb-10">
          Contract, activation, price-lock, and cancellation terms verified against U.S. News&apos; 2026 ADT Medical Alert
          review and ADT Health materials on July 22, 2026. Confirm current activation fee and return terms directly with
          ADT at the point of purchase.
        </p>

        <SectionHeading eyebrow="Device breakdown" id="devices">Device Breakdown</SectionHeading>
        <div className="space-y-4 mb-10">
          {devices.map(d => (
            <div key={d.name} className="bg-paper-raised border border-rule rounded-card p-4 text-sm shadow-card">
              <div className="flex items-start justify-between mb-2">
                <p className="font-bold">{d.name} <span className="text-ink-mute font-normal text-xs">({d.type})</span></p>
                <span className="text-brand font-semibold">{d.price}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-2 text-xs text-ink-soft">
                <span><strong>Fall detection:</strong> {d.fallDetection}</span>
                <span><strong>GPS:</strong> {d.gps}</span>
                <span><strong>Battery:</strong> {d.battery}</span>
                <span><strong>Range:</strong> {d.range}</span>
              </div>
              <p className="text-xs text-ink-mute bg-band rounded p-2"><strong>Best for:</strong> {d.best}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Head to head" id="comparison">ADT Medical Alert vs. Competitors</SectionHeading>
        <div className="overflow-x-auto mb-10 rounded-ledger border border-rule bg-paper-raised shadow-card">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left p-3"></th>
                <th className="text-left p-3 font-serif font-bold bg-brand-tint text-brand-dark">ADT Health</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Bay Alarm Medical</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Medical Guardian</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-rule last:border-0">
                  <td className="p-3 font-medium text-ink-mute whitespace-nowrap">{row.label}</td>
                  <td className="p-3 font-medium text-ink bg-brand-tint/40">{row.adt}</td>
                  <td className="p-3 text-ink-soft">{row.bay}</td>
                  <td className="p-3 text-ink-soft">{row.mg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="Complaints, examined" id="complaints">Common Complaints — Are They Valid?</SectionHeading>
        <div className="space-y-3 mb-10">
          {complaints.map(c => (
            <div key={c.complaint} className="bg-paper-raised border border-rule rounded-card p-4 text-sm shadow-card">
              <div className="flex items-start gap-2 mb-1">
                <WarnIcon className="w-4 h-4 text-caution mt-0.5 shrink-0" />
                <p className="font-semibold">{c.complaint}</p>
              </div>
              <p className="text-ink-soft ml-6">{c.detail}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Questions we hear most" id="faq">Frequently Asked Questions</SectionHeading>
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

        <Verdict label="Our verdict">
          ADT Medical Alert is a sound pick for families who value a large, established monitoring brand and want their
          rate frozen: the lifetime price-lock and lifetime equipment warranty are real advantages, and there is no
          contract. The counterweight is a $99 activation fee and an entry price above MobileHelp and Bay Alarm Medical,
          plus no fall detection on the landline plan. If a locked-in rate from a known name matters more than the lowest
          sticker price, it earns a place on the shortlist.
        </Verdict>

        <div className="bg-band border border-rule rounded-panel p-6 text-sm">
          <p className="text-ink-soft mb-4">Want a lower entry price without an activation fee? See our <a href="/mobilehelp-review" className="text-brand underline">MobileHelp review</a> and <a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical review</a>, or the full <a href="/medical-alert-cost-comparison" className="text-brand underline">2026 cost study</a>.</p>
          <OutboundLink
            href={AFFILIATE_LINKS["adt-health"].url}
            label="ADT Health"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit ADT Health →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>

        <div className="mt-8">
          <RelatedReviews currentHref="/adt-medical-alert-review" />
        </div>

        <Sources
          sources={[
            { label: "ADT Health — official medical alert systems", url: "https://www.adt.com/health" },
            { label: "U.S. News & World Report — ADT Medical Alert review (2026 pricing)", url: "https://realestate.usnews.com/home-services/medical-alert-system/adt" },
            SOURCES.medicare,
            SOURCES.cdcFalls,
          ]}
          note="Plan names, device specs, and prices are drawn from ADT Health's official materials and U.S. News' 2026 review (verified July 22, 2026); complaint themes are summarized from aggregated public customer reviews."
        />
      </div>
    </>
  );
}
