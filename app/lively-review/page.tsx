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

const provider = PROVIDERS["lively"];
const rating = computeRating(provider);

export const metadata: Metadata = {
  title: { absolute: "Lively Medical Alert Review 2026: Cost, Plans & Verdict" },
  description:
    "Lively (Best Buy Health) medical alert review for 2026: Mobile2 device cost, monthly plan prices, the $9.99 fall detection add-on, contract terms, and how it compares.",
  alternates: { canonical: `${SITE.url}/lively-review` },
  openGraph: {
    title: "Lively Medical Alert Review 2026 | Pricing, Mobile2 & Verdict",
    description:
      "Full Lively (Best Buy Health) review: Mobile2 device cost, plan pricing, fall detection add-on, contract terms, and how it compares to Bay Alarm and Medical Guardian.",
    url: `${SITE.url}/lively-review`,
    type: "article",
    images: [{ url: `${SITE.url}/og/lively-review.png`, width: 1200, height: 630 }],
  },
};

const plans = [
  { name: "Basic (Preferred Health & Safety)", monthly: "$24.99", coverage: "Anywhere — GPS", connection: "Cellular + GPS", keyFeature: "24/7 Urgent Response operators + family app; fall detection available" },
  { name: "Premium (Ultimate Health & Safety)", monthly: "$34.99", coverage: "Anywhere — GPS", connection: "Cellular + GPS", keyFeature: "Everything in Basic plus Lively Care Advocate and on-call nurse/doctor" },
];

const devices = [
  {
    name: "Lively Mobile2",
    type: "Compact GPS help button",
    price: "$79.99 device + plan",
    fallDetection: "Yes (+$9.99/mo add-on)",
    gps: "Yes — enhanced GPS location",
    battery: "Up to ~24 hours (daily charging)",
    range: "Works anywhere with cellular coverage",
    best: "Active seniors who leave home and want the lowest fall-detection add-on in the set",
  },
];

const complaints = [
  {
    complaint: "One-time device cost on top of the plan",
    detail:
      "The Lively Mobile2 device is $79.99 up front, separate from the monthly plan. That is a normal one-time equipment cost, but it means the first-month outlay is higher than the advertised $24.99 monthly rate. Budget for it before ordering.",
    fair: true,
  },
  {
    complaint: "Daily charging",
    detail:
      "The Mobile2 is a compact GPS device with roughly a day of battery, so it needs charging on a routine — typically overnight in its cradle. That is the trade-off for a small wearable that works anywhere. Seniors who forget to charge may be better served by an in-home base-station system.",
    fair: true,
  },
  {
    complaint: "No in-home base-station option",
    detail:
      "Lively's medical alert line is built around a single mobile device. There is no cheaper landline or in-home base station, so a senior who never leaves home is paying for GPS they may not use. Bay Alarm Medical or MobileHelp offer lower-cost home-only options.",
    fair: true,
  },
];

const comparison = [
  { label: "Starting price", lively: "$24.99/mo + $79.99 device", bay: "$19.95/mo", mg: "$29.95/mo" },
  { label: "Contract required", lively: "None", bay: "None", mg: "None" },
  { label: "Fall detection", lively: "+$9.99/mo", bay: "+$10/mo", mg: "+$10/mo" },
  { label: "GPS device available", lively: "Yes (Mobile2)", bay: "Yes", mg: "Yes" },
  { label: "In-home base option", lively: "No", bay: "Yes", mg: "Yes" },
  { label: "Nurse / care line", lively: "Yes (Premium plan)", bay: "No", mg: "No" },
  { label: "US-based monitoring", lively: "Yes", bay: "Yes", mg: "Yes" },
  { label: "Water resistance", lively: "IPX7", bay: "Yes", mg: "Yes" },
];

const faq = [
  {
    q: "Does Lively require a contract?",
    a: "No. Lively (Best Buy Health) medical alert plans are month-to-month with no long-term contract. You can cancel at any time. The one commitment is the one-time $79.99 device cost for the Mobile2, which you buy up front rather than lease.",
  },
  {
    q: "How much does Lively medical alert cost per month?",
    a: "Lively's Basic (Preferred Health & Safety) plan is $24.99/month and the Premium (Ultimate Health & Safety) plan is $34.99/month, plus taxes and fees. Automatic fall detection is a $9.99/month add-on — the cheapest fall-detection add-on in our comparison. The Lively Mobile2 device is a separate one-time cost of $79.99.",
  },
  {
    q: "What is the total annual cost of Lively?",
    a: "Basic plan without fall detection: $299.88/year plus the one-time $79.99 device. Basic plan with fall detection: $419.76/year plus the device. Premium plan with fall detection: $539.76/year plus the device. First-year totals are higher than later years because of the one-time device cost.",
  },
  {
    q: "Does Lively have fall detection?",
    a: "Yes. Lively offers automatic fall detection as a $9.99/month add-on on the Mobile2, worn on the included lanyard. It is the lowest fall-detection add-on in our comparison. No manufacturer publishes a certified accuracy figure for fall detection, so treat it as a useful backup rather than a guarantee and keep the manual help button reachable.",
  },
  {
    q: "Is Lively the same as GreatCall or Jitterbug?",
    a: "Yes. Lively is the rebranded successor to GreatCall, the company behind the Jitterbug phones and the original Lively/5Star medical alert service. It is now owned and operated by Best Buy Health. The Mobile2 device continues the same Urgent Response monitoring line.",
  },
  {
    q: "How does Lively compare to Bay Alarm Medical?",
    a: "Bay Alarm Medical starts lower at $19.95/month and offers an in-home base station and free spouse monitoring, which Lively does not. Lively's advantage is the cheapest fall-detection add-on ($9.99/month vs Bay Alarm's $10) and a nurse/doctor line on its Premium plan. For a stay-at-home senior, Bay Alarm is cheaper; for an active senior who wants a compact GPS device, Lively is a strong fit.",
  },
  {
    q: "Does Lively work without Wi-Fi?",
    a: "Yes. The Lively Mobile2 uses a nationwide cellular network with GPS, not Wi-Fi. You do not need a home internet connection. It works anywhere with cellular coverage — at home, in the car, or out running errands.",
  },
  {
    q: "What is Lively's monitoring like?",
    a: "Lively uses a 24/7 US-based Urgent Response monitoring team. When the button is pressed (or a fall is detected on the add-on), a certified agent connects through the device, assesses the situation, and can dispatch emergency services or contact family. The Premium plan adds access to a registered nurse and board-certified doctor line for non-emergency questions.",
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

export default function LivelyReview() {
  return (
    <>
      <ReviewSchema provider={provider} pageUrl={`${SITE.url}/lively-review`} />
      <ArticleSchema
        headline="Lively Medical Alert Review 2026: Cost, Plans & Verdict"
        description="Lively (Best Buy Health) medical alert review for 2026: Mobile2 device cost, monthly plan prices, the $9.99 fall detection add-on, contract terms, and how it compares."
        path="/lively-review"
        published="2026-07-22"
        updated={provider.reviewed}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs
          trail={[
            { label: "Reviews", href: "/best-medical-alert-systems" },
            { label: "Lively" },
          ]}
        />

        <span className="inline-flex items-center bg-affirm-tint text-affirm text-xs font-semibold px-3 py-1 rounded-badge">Cheapest fall-detection add-on 2026</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">Lively Medical Alert Review 2026</h1>
        <Byline updated={provider.reviewed} rating={`${rating.overallTen.toFixed(1)} / 10`} />

        <DeviceTokenCard
          brand="Lively"
          device="Mobile2 GPS help button"
          ratio="16 / 7"
          className="mb-8"
        />

        <EditorialRating provider={provider} />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-6 text-sm">
          <p className="eyebrow mb-3">Quick summary</p>
          <ul className="text-ink-soft space-y-1">
            <li><strong className="text-ink">Starting price:</strong> $24.99/month + $79.99 one-time device</li>
            <li><strong className="text-ink">Contract:</strong> None — month-to-month, cancel anytime</li>
            <li><strong className="text-ink">Fall detection:</strong> $9.99/month add-on — the cheapest in our comparison</li>
            <li><strong className="text-ink">Verdict:</strong> Best compact GPS for active seniors; no in-home base option and daily charging are the trade-offs</li>
          </ul>
        </div>

        <div className="mb-8">
          <OutboundLink
            href={AFFILIATE_LINKS["lively"].url}
            label="Lively"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit Lively — From $24.99/mo →
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
                "Cheapest fall-detection add-on in the set ($9.99/mo)",
                "No long-term contract — cancel any time",
                "24/7 US-based Urgent Response monitoring",
                "Compact GPS device works anywhere with cell coverage",
                "IPX7 water resistance for shower use",
                "Premium plan adds a nurse and doctor line",
              ].map(p => (
                <li key={p} className="flex gap-2"><CheckIcon className="w-4 h-4 text-affirm mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-sos-tint/60 border border-sos/15 rounded-card p-5">
            <h2 className="text-lg font-bold mb-3">What to Watch For</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              {[
                "One-time $79.99 device cost on top of the plan",
                "Daily charging — roughly a day of battery",
                "No in-home base-station option",
                "Fall detection is a $9.99/mo add-on, not included",
              ].map(p => (
                <li key={p} className="flex gap-2"><CrossIcon className="w-4 h-4 text-sos mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeading eyebrow="Plans & pricing" id="pricing">Lively Plans &amp; Pricing 2026</SectionHeading>
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
            <li>Basic plan, no fall detection: <strong>$299.88/year</strong> + $79.99 one-time device</li>
            <li>Basic plan + fall detection: <strong>$419.76/year</strong> + $79.99 device</li>
            <li>Premium plan + fall detection: <strong>$539.76/year</strong> + $79.99 device</li>
          </ul>
          <p className="text-ink-mute text-xs mt-2">Monthly rates shown with paperless billing; paper billing adds $5/mo. Prices exclude taxes and fees. Verified against Lively&apos;s official plan page on July 22, 2026 — confirm current rates before ordering.</p>
        </div>

        <SectionHeading eyebrow="Contract & cancellation" id="contract">Does Lively Require a Contract?</SectionHeading>
        <div className="bg-affirm-tint/40 border border-affirm/15 rounded-card p-5 mb-4 text-sm">
          <p className="text-ink-soft">
            <strong className="text-ink">No — Lively does not require a contract.</strong> Both the Basic and Premium
            plans are month-to-month and can be cancelled at any time with no early-termination penalty. There is no
            annual commitment. The only up-front cost is the one-time $79.99 Lively Mobile2 device, which you own rather
            than lease. This is a meaningful advantage over Life Alert, which locks customers into a three-year contract
            with cancellation fees.
          </p>
        </div>
        <p className="text-xs text-ink-mute mb-10">
          Contract and cancellation terms verified against Lively&apos;s official plan page on July 22, 2026. Confirm the
          current return window and any restocking terms with Lively at the point of purchase.
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

        <SectionHeading eyebrow="Head to head" id="comparison">Lively vs. Competitors</SectionHeading>
        <div className="overflow-x-auto mb-10 rounded-ledger border border-rule bg-paper-raised shadow-card">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left p-3"></th>
                <th className="text-left p-3 font-serif font-bold bg-brand-tint text-brand-dark">Lively</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Bay Alarm Medical</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Medical Guardian</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-rule last:border-0">
                  <td className="p-3 font-medium text-ink-mute whitespace-nowrap">{row.label}</td>
                  <td className="p-3 font-medium text-ink bg-brand-tint/40">{row.lively}</td>
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
          Lively is the value pick for an active senior who wants automatic fall detection: the $9.99/month add-on is
          the cheapest in our comparison, monitoring is 24/7 US-based, and there is no contract. Just budget the one-time
          $79.99 device and a daily charge into the routine. If your parent rarely leaves home, an in-home system like
          Bay Alarm Medical will cost less.
        </Verdict>

        <div className="bg-band border border-rule rounded-panel p-6 text-sm">
          <p className="text-ink-soft mb-4">Want the lowest home price instead? See our <a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical review</a>, or compare the true cost of fall detection across every system in our <a href="/medical-alert-cost-comparison" className="text-brand underline">2026 cost study</a>.</p>
          <OutboundLink
            href={AFFILIATE_LINKS["lively"].url}
            label="Lively"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit Lively →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>

        <div className="mt-8">
          <RelatedReviews currentHref="/lively-review" />
        </div>

        <Sources
          sources={[
            { label: "Lively (Best Buy Health) — official medical alert plans & pricing", url: "https://shop.lively.com/pages/medical-alert-compare-plan" },
            { label: "Lively — Mobile2 all-in-one device", url: "https://shop.lively.com/products/lively-mobile2-all-in-one-medical-alert" },
            SOURCES.medicare,
            SOURCES.cdcFalls,
          ]}
          note="Plan names, device specs, and prices are drawn from Lively's official website (verified July 22, 2026); complaint themes are summarized from aggregated public customer reviews."
        />
      </div>
    </>
  );
}
