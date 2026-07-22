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

const provider = PROVIDERS["mobilehelp"];
const rating = computeRating(provider);

export const metadata: Metadata = {
  title: { absolute: "MobileHelp Review 2026: Cost, Plans & Verdict" },
  description:
    "MobileHelp review for 2026: full pricing for Classic, Wired Home, and Elite plans, the fall detection add-on, no equipment fees, contract terms, and how it compares.",
  alternates: { canonical: `${SITE.url}/mobilehelp-review` },
  openGraph: {
    title: "MobileHelp Review 2026 | Pricing Plans & Cost Breakdown",
    description:
      "Full MobileHelp review: Classic, Wired Home, and Elite plan pricing, fall detection add-on, no equipment fees, and how it compares to Bay Alarm and Medical Guardian.",
    url: `${SITE.url}/mobilehelp-review`,
    type: "article",
    images: [{ url: `${SITE.url}/og/mobilehelp-review.png`, width: 1200, height: 630 }],
  },
};

const plans = [
  { name: "MobileHelp Classic", monthly: "$25.95", coverage: "Home only", connection: "AT&T cellular (no landline)", keyFeature: "In-home base + wearable button, up to 1,400 ft range" },
  { name: "MobileHelp Wired Home", monthly: "$25.95", coverage: "Home only", connection: "Landline required", keyFeature: "Lowest-tech home option; not compatible with fall detection" },
  { name: "MobileHelp Elite", monthly: "$41.95", coverage: "Home + GPS", connection: "AT&T 4G LTE + GPS + Wi-Fi location", keyFeature: "All-in-one mobile device, works anywhere with coverage" },
];

const devices = [
  {
    name: "Classic Base + Button",
    type: "In-home base station + wearable",
    price: "$25.95/mo",
    fallDetection: "Yes (+$11/mo add-on pendant)",
    gps: "No",
    battery: "~5-year pendant button; 30-hr base backup",
    range: "Up to 1,400 feet from base",
    best: "Seniors who stay mostly at home and want the widest in-home range",
  },
  {
    name: "Wired Home",
    type: "Landline in-home base + wearable",
    price: "$25.95/mo",
    fallDetection: "Not compatible",
    gps: "No",
    battery: "~5-year pendant button; 30-hr base backup",
    range: "Up to 1,400 feet from base",
    best: "Seniors who still have a landline and do not need fall detection",
  },
  {
    name: "Elite (mobile)",
    type: "All-in-one GPS device",
    price: "$41.95/mo",
    fallDetection: "Yes (+$11/mo add-on pendant)",
    gps: "Yes — GPS + Wi-Fi assisted location",
    battery: "Up to 24 hours",
    range: "Nationwide AT&T 4G LTE coverage",
    best: "Active seniors who leave home and want an all-in-one mobile device",
  },
];

const complaints = [
  {
    complaint: "Fall detection is a separate add-on",
    detail:
      "Automatic fall detection is not included — it is roughly $11/month for an add-on pendant on the systems that support it. That is in line with the industry (Medical Guardian and Bay Alarm both charge about $10/month). Budget for it up front if fall detection matters.",
    fair: true,
  },
  {
    complaint: "Wired Home landline plan can't add fall detection",
    detail:
      "The $25.95/month Wired Home landline package is not compatible with the fall-detection pendant. If you need automatic fall detection at home, choose the cellular Classic plan instead — same $25.95 monthly base, but fall detection can be added.",
    fair: true,
  },
  {
    complaint: "Fewer named packages than it used to have",
    detail:
      "MobileHelp discontinued several older bundles (Solo, Mobile Duo, Home Duo), so the current lineup is three core systems: Classic, Wired Home, and Elite. That simplifies the choice, but shoppers comparing older reviews may see package names that no longer exist.",
    fair: true,
  },
];

const comparison = [
  { label: "Starting price", mh: "$25.95/mo", bay: "$19.95/mo", mg: "$29.95/mo" },
  { label: "Contract required", mh: "None", bay: "None", mg: "None" },
  { label: "Equipment / activation fee", mh: "$0", bay: "$0 (most plans)", mg: "$0–$199.95" },
  { label: "Fall detection", mh: "+$11/mo", bay: "+$10/mo", mg: "+$10/mo" },
  { label: "In-home range", mh: "Up to 1,400 ft", bay: "Up to 1,000 ft", mg: "Up to 1,300 ft" },
  { label: "GPS device available", mh: "Yes (Elite)", bay: "Yes", mg: "Yes" },
  { label: "Money-back guarantee", mh: "30 days", bay: "30 days", mg: "30 days" },
  { label: "US-based monitoring", mh: "Yes", bay: "Yes", mg: "Yes" },
];

const faq = [
  {
    q: "Does MobileHelp require a contract?",
    a: "No. MobileHelp never requires a long-term contract. All plans are month-to-month and can be cancelled at any time, and every package comes with a 30-day money-back guarantee. There are no equipment or activation fees, so there is nothing to finance or lease.",
  },
  {
    q: "How much does MobileHelp cost per month?",
    a: "MobileHelp Classic (cellular home) and Wired Home (landline) are both $25.95/month. The Elite mobile GPS system is $41.95/month. Automatic fall detection is roughly $11/month extra on the systems that support it. There are no equipment or activation fees.",
  },
  {
    q: "What is the total annual cost of MobileHelp?",
    a: "Classic without fall detection: $311.40/year. Classic with fall detection: about $443.40/year. Elite mobile GPS with fall detection: about $635.40/year. Paying quarterly or annually lowers the effective monthly rate. There are no equipment or activation fees to add.",
  },
  {
    q: "Does MobileHelp have fall detection?",
    a: "Yes, on most systems. Automatic fall detection is an add-on pendant for about $11/month on the Classic and Elite systems. The Wired Home landline package is not compatible with fall detection. No manufacturer publishes a certified accuracy figure for fall detection, so treat it as a useful backup and keep the manual button reachable.",
  },
  {
    q: "Does MobileHelp charge equipment or activation fees?",
    a: "No. MobileHelp does not charge equipment or activation fees on its systems — you pay only the monthly monitoring rate (plus the optional fall-detection add-on). This is a genuine advantage over providers like ADT Health, which charges a $99 activation fee.",
  },
  {
    q: "How does MobileHelp compare to Bay Alarm Medical?",
    a: "Bay Alarm Medical starts lower at $19.95/month and includes free spouse monitoring on home plans. MobileHelp's advantages are a wider in-home range (up to 1,400 feet vs Bay Alarm's 1,000) and no equipment fees on any plan. Both are no-contract with a 30-day guarantee. For lowest price, Bay Alarm wins; for in-home range, MobileHelp is stronger.",
  },
  {
    q: "Does MobileHelp work without a landline?",
    a: "Yes. The MobileHelp Classic and Elite systems use AT&T's cellular network, not a landline. Only the Wired Home package requires a landline. You do not need home internet — the cellular base station connects on its own.",
  },
  {
    q: "What is MobileHelp's monitoring like?",
    a: "MobileHelp uses 24/7 US-based professional monitoring. When the button is pressed or a fall is detected, a trained operator connects through the device, assesses the situation, and can dispatch emergency services or notify family. An optional Connect app lets family members receive alerts and check status.",
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

export default function MobileHelpReview() {
  return (
    <>
      <ReviewSchema provider={provider} pageUrl={`${SITE.url}/mobilehelp-review`} />
      <ArticleSchema
        headline="MobileHelp Review 2026: Cost, Plans & Verdict"
        description="MobileHelp review for 2026: full pricing for Classic, Wired Home, and Elite plans, the fall detection add-on, no equipment fees, contract terms, and how it compares."
        path="/mobilehelp-review"
        published="2026-07-22"
        updated={provider.reviewed}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs
          trail={[
            { label: "Reviews", href: "/best-medical-alert-systems" },
            { label: "MobileHelp" },
          ]}
        />

        <span className="inline-flex items-center bg-affirm-tint text-affirm text-xs font-semibold px-3 py-1 rounded-badge">Widest in-home range 2026</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">MobileHelp Review 2026</h1>
        <Byline updated={provider.reviewed} rating={`${rating.overallTen.toFixed(1)} / 10`} />

        <DeviceTokenCard
          brand="MobileHelp"
          device="Classic base + Elite mobile"
          ratio="16 / 7"
          className="mb-8"
        />

        <EditorialRating provider={provider} />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-6 text-sm">
          <p className="eyebrow mb-3">Quick summary</p>
          <ul className="text-ink-soft space-y-1">
            <li><strong className="text-ink">Starting price:</strong> $25.95/month (home) · $41.95/month (mobile GPS)</li>
            <li><strong className="text-ink">Contract:</strong> None — month-to-month, cancel anytime, 30-day guarantee</li>
            <li><strong className="text-ink">Fall detection:</strong> About $11/month add-on (not on the Wired Home landline plan)</li>
            <li><strong className="text-ink">Verdict:</strong> Strong no-fee value with the widest in-home range; simple three-package lineup</li>
          </ul>
        </div>

        <div className="mb-8">
          <OutboundLink
            href={AFFILIATE_LINKS["mobilehelp"].url}
            label="MobileHelp"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit MobileHelp — From $25.95/mo →
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
                "No equipment or activation fees on any plan",
                "No long-term contract — 30-day money-back guarantee",
                "Widest in-home range in the set (up to 1,400 ft)",
                "24/7 US-based monitoring on AT&T's network",
                "Simple three-package lineup — home, landline, mobile",
                "Optional Connect app for family alerts",
              ].map(p => (
                <li key={p} className="flex gap-2"><CheckIcon className="w-4 h-4 text-affirm mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-sos-tint/60 border border-sos/15 rounded-card p-5">
            <h2 className="text-lg font-bold mb-3">What to Watch For</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              {[
                "Fall detection is a ~$11/mo add-on, not included",
                "Wired Home landline plan can't add fall detection",
                "Mobile Elite plan is pricier at $41.95/mo",
                "Older bundle names (Solo, Duo) have been discontinued",
              ].map(p => (
                <li key={p} className="flex gap-2"><CrossIcon className="w-4 h-4 text-sos mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeading eyebrow="Plans & pricing" id="pricing">MobileHelp Plans &amp; Pricing 2026</SectionHeading>
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
          <p className="font-semibold mb-1">True annual cost (what you actually pay)</p>
          <ul className="text-ink-soft space-y-0.5">
            <li>Classic, no fall detection: <strong>$311.40/year</strong></li>
            <li>Classic + fall detection: <strong>about $443.40/year</strong></li>
            <li>Elite (mobile GPS) + fall detection: <strong>about $635.40/year</strong></li>
          </ul>
          <p className="text-ink-mute text-xs mt-2">No equipment or activation fees. Quarterly and annual billing lower the effective monthly rate. Verified against MobileHelp&apos;s official pricing on July 22, 2026 — confirm current rates before ordering.</p>
        </div>

        <SectionHeading eyebrow="Contract & cancellation" id="contract">Does MobileHelp Require a Contract?</SectionHeading>
        <div className="bg-affirm-tint/40 border border-affirm/15 rounded-card p-5 mb-4 text-sm">
          <p className="text-ink-soft">
            <strong className="text-ink">No — MobileHelp does not require a contract.</strong> Every MobileHelp plan is
            month-to-month with no long-term commitment, and the company states it never requires a contract. All packages
            include a 30-day money-back guarantee, and there are no equipment or activation fees, so there is nothing to
            finance or lease. You can cancel at any time and receive a prorated refund for unused service after returning
            the equipment. This is a clear advantage over Life Alert&apos;s three-year contract.
          </p>
        </div>
        <p className="text-xs text-ink-mute mb-10">
          Contract, cancellation, and fee terms verified against MobileHelp&apos;s official site on July 22, 2026. Confirm
          the current return window and any shipping terms with MobileHelp at the point of purchase.
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

        <SectionHeading eyebrow="Head to head" id="comparison">MobileHelp vs. Competitors</SectionHeading>
        <div className="overflow-x-auto mb-10 rounded-ledger border border-rule bg-paper-raised shadow-card">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left p-3"></th>
                <th className="text-left p-3 font-serif font-bold bg-brand-tint text-brand-dark">MobileHelp</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Bay Alarm Medical</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Medical Guardian</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-rule last:border-0">
                  <td className="p-3 font-medium text-ink-mute whitespace-nowrap">{row.label}</td>
                  <td className="p-3 font-medium text-ink bg-brand-tint/40">{row.mh}</td>
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
          MobileHelp is a solid no-fee value: no equipment or activation charges, no contract, a 30-day guarantee, and the
          widest in-home range in our set at up to 1,400 feet. Fall detection is a separate ~$11/month add-on and is not
          available on the landline Wired Home plan, so pick the cellular Classic if you want it. For a stay-at-home senior
          who wants room to roam the house, it is an easy shortlist pick.
        </Verdict>

        <div className="bg-band border border-rule rounded-panel p-6 text-sm">
          <p className="text-ink-soft mb-4">Comparing on price? See our <a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical review</a> (lowest starting price) and the full <a href="/medical-alert-cost-comparison" className="text-brand underline">2026 cost &amp; fall-detection study</a>.</p>
          <OutboundLink
            href={AFFILIATE_LINKS["mobilehelp"].url}
            label="MobileHelp"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit MobileHelp →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>

        <div className="mt-8">
          <RelatedReviews currentHref="/mobilehelp-review" />
        </div>

        <Sources
          sources={[
            { label: "MobileHelp — official pricing & plans", url: "https://www.mobilehelp.com" },
            SOURCES.medicare,
            SOURCES.cdcFalls,
          ]}
          note="Plan names, device specs, and prices are drawn from MobileHelp's official website (verified July 22, 2026); complaint themes are summarized from aggregated public customer reviews."
        />
      </div>
    </>
  );
}
