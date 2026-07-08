import type { Metadata } from "next";
import OutboundLink from "@/app/components/OutboundLink";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import DeviceTokenCard from "@/app/components/DeviceTokenCard";
import Byline from "@/app/components/Byline";
import Sources from "@/app/components/Sources";
import EditorialRating from "@/app/components/EditorialRating";
import ReviewSchema from "@/app/components/ReviewSchema";
import RelatedReviews from "@/app/components/RelatedReviews";
import { SITE, SOURCES } from "@/lib/site";
import { AFFILIATE_LINKS, FTC_DISCLOSURE } from "@/lib/affiliate-links";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import { CheckIcon, CrossIcon, WarnIcon, ChevronIcon } from "@/app/components/Icon";
import { PROVIDERS, computeRating } from "@/data/editorial-ratings";

const provider = PROVIDERS["medical-guardian"];
const rating = computeRating(provider);

export const metadata: Metadata = {
  title: { absolute: "Medical Guardian Review 2026: Pricing, Devices & Verdict" },
  description:
    "Medical Guardian review for 2026: full pricing breakdown, fall detection cost, devices, complaints, and how it compares to Bay Alarm and Life Alert.",
  alternates: { canonical: `${SITE.url}/medical-guardian-review` },
  openGraph: {
    title: "Medical Guardian Review 2026 | Pricing, Devices & Verdict",
    description:
      "Full Medical Guardian review: pricing, devices, fall detection cost, complaints, and how it compares to Bay Alarm Medical and Life Alert.",
    url: `${SITE.url}/medical-guardian-review`,
    type: "article",
    images: [{ url: `${SITE.url}/og/medical-guardian-review.png`, width: 1200, height: 630 }],
  },
};

const plans = [
  { name: "Classic Guardian", monthly: "$29.95", coverage: "Home only", connection: "Landline or cellular", keyFeature: "Base station + wearable button" },
  { name: "Home 2.0", monthly: "$32.95", coverage: "Home only", connection: "Cellular only", keyFeature: "No landline needed" },
  { name: "Mini Guardian", monthly: "$39.95", coverage: "Home + GPS", connection: "Cellular + GPS", keyFeature: "Compact wearable, works outside" },
  { name: "MGMove", monthly: "$39.95", coverage: "Home + GPS", connection: "Cellular + GPS", keyFeature: "Smartwatch-style, fall detection capable" },
  { name: "Freedom Guardian", monthly: "$44.95", coverage: "Home + GPS", connection: "Cellular + GPS", keyFeature: "Advanced smartwatch, two-way voice" },
];

const devices = [
  {
    name: "Classic Guardian",
    type: "Home base station + wearable",
    price: "$29.95/mo",
    fallDetection: "Yes (+$10/mo add-on)",
    gps: "No",
    battery: "32-hour wearable button",
    range: "Up to 1,300 feet from base",
    best: "Seniors who stay mostly at home with a landline",
  },
  {
    name: "Home 2.0",
    type: "Cellular base station + wearable",
    price: "$32.95/mo",
    fallDetection: "Yes (+$10/mo add-on)",
    gps: "No",
    battery: "32-hour wearable button",
    range: "Up to 1,300 feet from base",
    best: "Seniors who want in-home protection without a landline",
  },
  {
    name: "Mini Guardian",
    type: "Compact GPS wearable",
    price: "$39.95/mo",
    fallDetection: "Yes (+$10/mo add-on)",
    gps: "Yes — nationwide GPS",
    battery: "Up to 24 hours",
    range: "Works anywhere with cell coverage",
    best: "Active seniors who regularly leave the home",
  },
  {
    name: "MGMove (Smartwatch)",
    type: "GPS smartwatch",
    price: "$39.95/mo",
    fallDetection: "Yes (+$10/mo add-on)",
    gps: "Yes — nationwide GPS",
    battery: "Up to 72 hours",
    range: "Works anywhere with cell coverage",
    best: "Seniors who want a watch that doesn't look like a medical device",
  },
  {
    name: "Freedom Guardian",
    type: "Advanced GPS smartwatch",
    price: "$44.95/mo",
    fallDetection: "Yes (+$10/mo add-on)",
    gps: "Yes — nationwide GPS",
    battery: "Up to 24 hours",
    range: "Works anywhere with cell coverage",
    best: "Active seniors who want the most full-featured GPS device",
  },
];

const complaints = [
  {
    complaint: "Fall detection costs extra",
    detail: "The $10/month fall detection add-on surprises some customers who assumed it was included. At $49.95/month total for a GPS plan with fall detection, it is still competitive but worth budgeting for upfront.",
    fair: true,
  },
  {
    complaint: "Equipment fees on some devices",
    detail: "The MGMove and Freedom Guardian smartwatch devices may have one-time equipment costs of $99–$149 depending on promotion. The Classic Guardian and Home 2.0 typically have no equipment fee. Ask specifically before ordering.",
    fair: true,
  },
  {
    complaint: "Customer service hold times",
    detail: "Multiple customer reviews mention wait times of 10–20 minutes to reach support during peak hours. Monitoring center response (the emergency call) is consistently fast — under 30 seconds. The delay is for general customer service calls, not emergency dispatch.",
    fair: true,
  },
  {
    complaint: "MGMove battery life",
    detail: "While advertised as 72 hours, real-world battery life with GPS active and fall detection enabled is closer to 24–36 hours. Daily or every-other-day charging is realistic. This is comparable to other GPS smartwatch medical alert devices.",
    fair: true,
  },
];

const comparison = [
  { label: "Starting price", mg: "$29.95/mo", bay: "$19.95/mo", lifeAlert: "$49.95/mo" },
  { label: "Contract required", mg: "None", bay: "None", lifeAlert: "3 years" },
  { label: "Fall detection", mg: "+$10/mo", bay: "+$10/mo", lifeAlert: "Not available" },
  { label: "GPS device available", mg: "Yes", bay: "Yes", lifeAlert: "Add-on only" },
  { label: "Free spouse monitoring", mg: "Some plans", bay: "Yes — included", lifeAlert: "No" },
  { label: "Caregiver app", mg: "Yes", bay: "Yes", lifeAlert: "No" },
  { label: "US-based monitoring", mg: "Yes", bay: "Yes", lifeAlert: "Yes" },
  { label: "30-day trial", mg: "30 days", bay: "30 days", lifeAlert: "No" },
];

const faq = [
  {
    q: "Does Medical Guardian require a contract?",
    a: "No. Medical Guardian does not require a long-term contract. All plans are month-to-month with no cancellation penalty. You can cancel at any time. This is a key advantage over Life Alert, which locks customers into a 3-year commitment with early cancellation fees.",
  },
  {
    q: "How much does Medical Guardian cost per month?",
    a: "Medical Guardian plans start at $29.95/month for the Classic Guardian home unit. GPS-enabled devices (Mini Guardian, MGMove) are $39.95/month. The Freedom Guardian smartwatch is $44.95/month. Automatic fall detection adds $10/month to any plan. There are no hidden monthly fees beyond these.",
  },
  {
    q: "What is the total annual cost of Medical Guardian?",
    a: "The true annual cost depends on your plan. Classic Guardian without fall detection: $359.40/year. Classic Guardian with fall detection: $479.40/year. MGMove (GPS smartwatch) with fall detection: $599.40/year plus any one-time device fee. These totals do not include activation fees, which vary by promotion.",
  },
  {
    q: "Does Medical Guardian have fall detection?",
    a: "Yes. Medical Guardian offers automatic fall detection as a $10/month add-on on most plans. The device detects hard falls using an accelerometer and triggers an automatic alert to the monitoring center — no button press required. No manufacturer publishes a certified accuracy figure for fall detection; it is a useful backup but not 100% reliable, so always keep the manual help button reachable. Fall detection is available on all devices including the MGMove smartwatch.",
  },
  {
    q: "Is Medical Guardian covered by Medicare?",
    a: "Original Medicare (Parts A and B) does not cover medical alert systems or devices. Some Medicare Advantage plans offer a supplemental safety device benefit — check your specific plan's Evidence of Coverage. FSA and HSA funds can typically be used to purchase medical alert systems.",
  },
  {
    q: "How does Medical Guardian compare to Life Alert?",
    a: "Medical Guardian starts at $29.95/month vs Life Alert's $49.95/month. Medical Guardian requires no contract; Life Alert requires a 3-year commitment. Medical Guardian offers fall detection as an add-on; Life Alert does not offer automatic fall detection. Both offer 24/7 US-based professional monitoring. For most families, Medical Guardian is the better choice on both price and flexibility.",
  },
  {
    q: "How does Medical Guardian compare to Bay Alarm Medical?",
    a: "Bay Alarm Medical starts at $19.95/month — $10/month cheaper than Medical Guardian's base price. Bay Alarm also includes free spouse monitoring on all plans, while Medical Guardian offers this only on some plans. Medical Guardian's advantage is a wider range of GPS devices and a more polished mobile app. For pure value, Bay Alarm Medical wins on price. For device variety and app features, Medical Guardian is stronger.",
  },
  {
    q: "What is Medical Guardian's monitoring center like?",
    a: "Medical Guardian uses a 24/7 US-based monitoring center. The center is UL-listed (Underwriters Laboratories) and staffed by trained emergency response operators. Average response time after an alert is triggered is under 30 seconds. Operators can communicate directly through the device, contact family members, and dispatch 911 as needed.",
  },
  {
    q: "Can Medical Guardian work without Wi-Fi?",
    a: "Yes. Medical Guardian devices use cellular networks, not Wi-Fi. You do not need a home internet connection. The Classic Guardian and Home 2.0 include a cellular-connected base station. GPS devices operate on nationwide cellular networks independently.",
  },
  {
    q: "What happens if I press the button by accident?",
    a: "If you accidentally trigger an alert, you can speak through the device and tell the monitoring center operator it was a false alarm. The operator will confirm you are safe and cancel the response. There are no penalties for accidental activations. The monitoring center prefers a false alarm over a missed emergency.",
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

export default function MedicalGuardianReview() {
  return (
    <>
      <ReviewSchema provider={provider} pageUrl={`${SITE.url}/medical-guardian-review`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs
          trail={[
            { label: "Reviews", href: "/best-medical-alert-systems" },
            { label: "Medical Guardian" },
          ]}
        />

        <span className="inline-flex items-center bg-affirm-tint text-affirm text-xs font-semibold px-3 py-1 rounded-badge">#1 Best Overall 2026</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">Medical Guardian Review 2026</h1>
        <Byline updated="2026-05-29" rating={`${rating.overallTen.toFixed(1)} / 10`} />

        <DeviceTokenCard
          brand="Medical Guardian"
          device="MGMove smartwatch + Classic Guardian base"
          ratio="16 / 7"
          className="mb-8"
        />

        <EditorialRating provider={provider} />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-6 text-sm">
          <p className="eyebrow mb-3">Quick summary</p>
          <ul className="text-ink-soft space-y-1">
            <li><strong className="text-ink">Starting price:</strong> $29.95/month (home) · $39.95/month (GPS)</li>
            <li><strong className="text-ink">Contract:</strong> None — month-to-month, cancel anytime</li>
            <li><strong className="text-ink">Fall detection:</strong> Yes, $10/month add-on on all plans</li>
            <li><strong className="text-ink">Verdict:</strong> Best overall — widest GPS device lineup, no contract, reliable US monitoring</li>
          </ul>
        </div>

        <div className="mb-8">
          <OutboundLink
            href={AFFILIATE_LINKS["medical-guardian"].url}
            label="Medical Guardian"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit Medical Guardian — From $29.95/mo →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>
        <nav className="bg-band border border-rule rounded-card p-4 text-sm mb-8">
          <p className="eyebrow mb-3">On this page</p>
          <ol className="space-y-1 text-brand list-decimal list-inside marker:text-ink-mute">
            <li><a href="#pricing" className="hover:underline">Plans and Pricing</a></li>
            <li><a href="#devices" className="hover:underline">Device Breakdown</a></li>
            <li><a href="#comparison" className="hover:underline">vs Competitors</a></li>
            <li><a href="#worth-it" className="hover:underline">Is It Worth It?</a></li>
            <li><a href="#best-for" className="hover:underline">Who Is It Best For?</a></li>
            <li><a href="#complaints" className="hover:underline">Common Complaints</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-affirm-tint/60 border border-affirm/15 rounded-card p-5">
            <h2 className="text-lg font-bold mb-3">What We Like</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              {[
                "No long-term contract — cancel any time",
                "24/7 US-based monitoring center (UL-listed)",
                "Widest GPS device lineup — pendant to smartwatch",
                "Fall detection available on every plan",
                "Caregiver app with location tracking",
                "30-day money-back guarantee",
                "Waterproof devices for shower use",
              ].map(p => (
                <li key={p} className="flex gap-2"><CheckIcon className="w-4 h-4 text-affirm mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-sos-tint/60 border border-sos/15 rounded-card p-5">
            <h2 className="text-lg font-bold mb-3">What to Watch For</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              {[
                "Fall detection is a $10/mo add-on, not included",
                "Equipment fees on some GPS devices ($99–$149)",
                "Customer service hold times can be 10–20 min",
                "Smartwatch battery may need daily charging with GPS active",
              ].map(p => (
                <li key={p} className="flex gap-2"><CrossIcon className="w-4 h-4 text-sos mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeading eyebrow="Plans & pricing" id="pricing">Medical Guardian Plans &amp; Pricing 2026</SectionHeading>
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
            <li>Classic Guardian, no fall detection: <strong>$359.40/year</strong></li>
            <li>Classic Guardian + fall detection: <strong>$479.40/year</strong></li>
            <li>MGMove (GPS smartwatch) + fall detection: <strong>$599.40/year</strong> + any device fee</li>
          </ul>
          <p className="text-ink-mute text-xs mt-2">Prices based on current month-to-month rates. Equipment and activation fees vary — confirm before ordering.</p>
        </div>

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

        <SectionHeading eyebrow="Head to head" id="comparison">Medical Guardian vs. Competitors</SectionHeading>
        <div className="overflow-x-auto mb-10 rounded-ledger border border-rule bg-paper-raised shadow-card">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left p-3"></th>
                <th className="text-left p-3 font-serif font-bold bg-brand-tint text-brand-dark">Medical Guardian</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Bay Alarm Medical</th>
                <th className="text-left p-3 font-serif font-bold text-ink">Life Alert</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-rule last:border-0">
                  <td className="p-3 font-medium text-ink-mute whitespace-nowrap">{row.label}</td>
                  <td className="p-3 font-medium text-ink bg-brand-tint/40">{row.mg}</td>
                  <td className="p-3 text-ink-soft">{row.bay}</td>
                  <td className="p-3 text-ink-soft">{row.lifeAlert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="Is it worth it?" id="worth-it">Is Medical Guardian Worth It in 2026?</SectionHeading>
        <div className="space-y-3 mb-6 text-sm">
          <p className="text-ink-soft">For most families, Medical Guardian is worth it if GPS tracking and a no-contract plan are priorities.</p>
          <div className="bg-affirm-tint/60 border border-affirm/15 rounded-card p-4">
            <p className="font-semibold text-affirm mb-2">Worth it if you need:</p>
            <ul className="space-y-1.5 text-ink-soft">
              {[
                "GPS tracking outside the home",
                "A smartwatch device (MGMove) that does not look like a medical alert",
                "Real-time location tracking via caregiver app",
                "Month-to-month flexibility, no long-term contract",
              ].map((li) => (
                <li key={li} className="flex gap-2"><CheckIcon className="w-4 h-4 text-affirm mt-0.5 shrink-0" />{li}</li>
              ))}
            </ul>
          </div>
          <div className="bg-caution-tint/60 border border-caution/15 rounded-card p-4">
            <p className="font-semibold text-caution mb-2">Consider alternatives if:</p>
            <ul className="space-y-1.5 text-ink-soft">
              {[
                "Budget is primary: Bay Alarm Medical starts 10 dollars less per month at 19.95/mo",
                "Your parent stays home: a 24.95/month cellular home unit suffices",
                "You want fall detection included: it costs 10/mo extra on every plan",
              ].map((li) => (
                <li key={li} className="flex gap-2"><WarnIcon className="w-4 h-4 text-caution mt-0.5 shrink-0" />{li}</li>
              ))}
            </ul>
          </div>
          <p className="text-ink-soft bg-band rounded-card p-4 text-xs border border-rule">Our pick: Mini Guardian at 39.95/month plus fall detection (49.95/mo total) - GPS, fall detection, no contract, 30-day guarantee.</p>
        </div>
        <SectionHeading eyebrow="Best fit" id="best-for">Who Is Medical Guardian Best For?</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-sm">
          <div className="bg-paper-raised border border-affirm/20 rounded-card p-4">
            <p className="font-semibold text-affirm mb-2">Best for seniors who:</p>
            <ul className="space-y-1.5 text-ink-soft">
              {[
                "Leave home regularly and need GPS tracking",
                "Want a smartwatch device, not a pendant",
                "Have family who want real-time location visibility",
                "Prefer no contract and month-to-month billing",
              ].map((li) => (
                <li key={li} className="flex gap-2"><CheckIcon className="w-4 h-4 text-affirm mt-0.5 shrink-0" />{li}</li>
              ))}
            </ul>
          </div>
          <div className="bg-paper-raised border border-rule rounded-card p-4">
            <p className="font-semibold text-ink mb-2">Better alternatives for:</p>
            <ul className="space-y-1 text-ink-soft list-disc list-inside marker:text-ink-mute">
              <li>Lowest price: Bay Alarm Medical from 19.95 per month</li>
              <li>Home-only protection: Bay Alarm SOS Home</li>
              <li>Lowest fall-detection add-on: Lively Mobile2 at +$6.99/mo</li>
              <li>Home-only on a budget: Bay Alarm SOS Home</li>
            </ul>
          </div>
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
          Medical Guardian earns our #1 spot in 2026 for flexible GPS device
          options, transparent month-to-month pricing, and reliable US-based
          monitoring. Budget $10/month extra if you need fall detection —
          otherwise it&apos;s the strongest all-rounder for families who want GPS
          coverage without a contract.
        </Verdict>
        <div className="bg-band border border-rule rounded-panel p-6 text-sm">
          <p className="text-ink-soft mb-4">If budget is the primary concern, see our <a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical review</a> — it starts $10/month lower with free spouse monitoring.</p>
          <OutboundLink
            href={AFFILIATE_LINKS["medical-guardian"].url}
            label="Medical Guardian"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit Medical Guardian →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>

        <div className="mt-8">
          <RelatedReviews currentHref="/medical-guardian-review" />
        </div>

        <Sources
          sources={[
            { label: "Medical Guardian — official pricing, plans & devices", url: "https://www.medicalguardian.com" },
            SOURCES.medicare,
            SOURCES.cdcFalls,
          ]}
          note="Plan names, device specs, and prices are drawn from Medical Guardian's official website; complaint themes are summarized from aggregated public customer reviews."
        />
      </div>
    </>
  );
}
