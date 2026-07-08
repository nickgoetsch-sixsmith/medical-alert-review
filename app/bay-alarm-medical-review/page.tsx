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
import { CheckIcon, CrossIcon } from "@/app/components/Icon";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import { PROVIDERS, computeRating } from "@/data/editorial-ratings";

const provider = PROVIDERS["bay-alarm-medical"];
const rating = computeRating(provider);

export const metadata: Metadata = {
  title: { absolute: "Bay Alarm Medical Review 2026: Pricing & Cost Breakdown" },
  description:
    "Bay Alarm Medical pricing for 2026: monthly costs from $19.95, annual totals, equipment fees, fall detection add-on, and comparison to Medical Guardian.",
  alternates: { canonical: `${SITE.url}/bay-alarm-medical-review` },
  openGraph: {
    title: "Bay Alarm Medical Review 2026 | Pricing Plans & Cost Breakdown",
    description:
      "Bay Alarm Medical pricing, annual totals, equipment fees, fall detection, and how it compares to Medical Guardian and Life Alert.",
    url: `${SITE.url}/bay-alarm-medical-review`,
    type: "article",
    images: [{ url: `${SITE.url}/og/bay-alarm-medical-review.png`, width: 1200, height: 630 }],
  },
};

const plans = [
  { name: "SOS Home (Landline)", monthly: "$19.95", coverage: "Home only", connection: "Landline required", keyFeature: "Lowest price available" },
  { name: "SOS Home (Cellular)", monthly: "$24.95", coverage: "Home only", connection: "AT&T or Verizon cellular", keyFeature: "No landline needed" },
  { name: "SOS Mobile", monthly: "$29.95", coverage: "Home + GPS", connection: "Cellular + GPS", keyFeature: "Compact wearable, works anywhere" },
  { name: "SOS Smartwatch", monthly: "$29.95", coverage: "Home + GPS", connection: "Cellular + GPS", keyFeature: "Watch-style, two-way voice on wrist" },
  { name: "SOS All-in-One", monthly: "$37.95", coverage: "Home + GPS", connection: "Cellular + GPS", keyFeature: "Home base + GPS in single device" },
];

const devices = [
  {
    name: "SOS Home Button",
    type: "Wearable pendant/wristband",
    price: "Included",
    fallDetection: "+$10/mo",
    gps: "No",
    battery: "Up to 5 days (wearable)",
    range: "1,000 ft from base",
    bestFor: "Home-only users with landline",
  },
  {
    name: "SOS Mobile Button",
    type: "Compact GPS button",
    price: "Included",
    fallDetection: "+$10/mo",
    gps: "Yes",
    battery: "Up to 72 hours",
    range: "Nationwide cellular",
    bestFor: "Active seniors who leave home",
  },
  {
    name: "SOS Smartwatch",
    type: "GPS smartwatch",
    price: "Included",
    fallDetection: "+$10/mo",
    gps: "Yes",
    battery: "Up to 24 hours",
    range: "Nationwide cellular",
    bestFor: "Seniors who prefer a watch look",
  },
  {
    name: "SOS All-in-One",
    type: "Hybrid home/GPS device",
    price: "Included",
    fallDetection: "+$10/mo",
    gps: "Yes",
    battery: "Up to 24 hours",
    range: "Nationwide cellular",
    bestFor: "Simplified setup — one device does everything",
  },
];

const competitors = [
  { feature: "Starting price", bayAlarm: "$19.95/mo", medGuardian: "$29.95/mo", lifeAlert: "~$49.95/mo" },
  { feature: "Fall detection cost", bayAlarm: "+$10/mo", medGuardian: "+$10/mo", lifeAlert: "Not available" },
  { feature: "Equipment fee", bayAlarm: "$0 on most plans", medGuardian: "$0–$199.95", lifeAlert: "$95.80–$198" },
  { feature: "Free spouse monitoring", bayAlarm: "Yes (home plans)", medGuardian: "No", lifeAlert: "No" },
  { feature: "GPS coverage", bayAlarm: "Yes (Mobile/Smartwatch)", medGuardian: "Yes (Mini, MGMove, Freedom)", lifeAlert: "Limited" },
  { feature: "Contract required", bayAlarm: "No", medGuardian: "No", lifeAlert: "3-year contract" },
  { feature: "Money-back guarantee", bayAlarm: "30 days", medGuardian: "30 days", lifeAlert: "None publicized" },
  { feature: "In business since", bayAlarm: "1946", medGuardian: "2005", lifeAlert: "1987" },
];

const complaints = [
  {
    complaint: "Fall detection is an add-on, not included",
    verdict: "Valid — and common",
    detail:
      "Bay Alarm Medical charges $10/month extra for fall detection on all plans, which adds up to $120/year. This is the industry norm — Medical Guardian also charges +$10/mo, while Life Alert does not offer automatic fall detection at all. Budget $29.95/mo minimum if you want GPS + fall detection.",
  },
  {
    complaint: "Landline plan is cheapest but landlines are becoming rare",
    verdict: "Valid limitation",
    detail:
      "The $19.95/mo SOS Home plan requires a landline. If you do not have a landline, you must use the cellular version at $24.95/mo. Most seniors no longer have landlines, so the true entry price for most customers is $24.95/mo, not $19.95/mo.",
  },
  {
    complaint: "App requires a smartphone to use caregiver tracking",
    verdict: "Minor limitation",
    detail:
      "The Bay Alarm Medical app lets family members track location and get alerts, but this requires a smartphone. The device itself works without any app — the app is supplementary. Not a dealbreaker for most families, but worth noting if caregivers are not smartphone users.",
  },
  {
    complaint: "Customer service hold times can be long",
    verdict: "Varies by time",
    detail:
      "Some users report wait times of 10–20 minutes when calling during business hours. The 24/7 monitoring line (emergency calls) answers quickly. Non-emergency support calls (billing, setup questions) experience longer waits. Email and chat support are faster alternatives.",
  },
];

const faq = [
  {
    q: "How much does Bay Alarm Medical cost per month?",
    a: "Bay Alarm Medical starts at $19.95/month for the SOS Home plan with a landline. The most popular option — SOS Home cellular — costs $24.95/month. GPS plans start at $29.95/month. Adding fall detection costs an extra $10/month on any plan.",
  },
  {
    q: "What is the total annual cost of Bay Alarm Medical?",
    a: "SOS Home (cellular, no fall detection): $299.40/year. SOS Home (cellular, with fall detection): $419.40/year. SOS Mobile (GPS, with fall detection): $479.40/year. SOS All-in-One (with fall detection): $575.40/year. There are no equipment fees on most plans and no activation fee.",
  },
  {
    q: "Does Bay Alarm Medical require a contract?",
    a: "No. Bay Alarm Medical is month-to-month with no long-term contract required. You can cancel at any time. They also offer a 30-day money-back guarantee for new customers.",
  },
  {
    q: "Is there an equipment fee for Bay Alarm Medical?",
    a: "Most Bay Alarm Medical plans have no equipment fee — you pay only the monthly monitoring rate. However, the SOS Smartwatch plan may have a device fee depending on promotion. Always confirm at checkout. This compares favorably to Medical Guardian, which charges $0–$199.95 for devices.",
  },
  {
    q: "Does Bay Alarm Medical have fall detection?",
    a: "Yes. Bay Alarm Medical offers automatic fall detection as an add-on for $10/month on any plan. The fall detection pendant uses an accelerometer to sense sudden falls and automatically alerts the monitoring center without requiring the user to press a button.",
  },
  {
    q: "How accurate is Bay Alarm Medical fall detection?",
    a: "Bay Alarm Medical uses motion-sensor technology that detects sudden vertical drops. Like all automatic fall detectors, it is not 100% accurate — it may miss slow, gradual falls (sliding out of a chair) and occasionally trigger false alarms from quick movements. False alarms can be canceled by speaking clearly when the monitoring center calls back.",
  },
  {
    q: "Does Bay Alarm Medical work outside the home?",
    a: "Yes, but only on the SOS Mobile, SOS Smartwatch, and SOS All-in-One plans, which include GPS. The SOS Home plan only works within range of the home base station (up to 1,000 feet). If your parent leaves the house regularly, choose a GPS plan.",
  },
  {
    q: "Is Bay Alarm Medical covered by Medicare or insurance?",
    a: "Medicare Part A and Part B do not cover medical alert systems. Some Medicare Advantage plans include medical alert systems as a supplemental benefit — check your specific plan. Medicaid coverage varies by state. HSA and FSA funds can be used to purchase medical alert systems in many cases.",
  },
  {
    q: "How does Bay Alarm Medical compare to Medical Guardian?",
    a: "Bay Alarm Medical is cheaper: starting at $19.95/mo vs Medical Guardian at $29.95/mo. Bay Alarm also includes free spouse monitoring on home plans, which Medical Guardian does not. Medical Guardian has a wider device lineup (including the Freedom Guardian smartwatch) and is generally rated higher for GPS accuracy and app experience. For pure value, Bay Alarm wins. For features and device variety, Medical Guardian is stronger.",
  },
  {
    q: "How does Bay Alarm Medical compare to Life Alert?",
    a: "Bay Alarm Medical is significantly more affordable and flexible. Life Alert requires a 3-year contract and charges ~$49.95/month plus upfront fees of $95–$198. Bay Alarm Medical is month-to-month starting at $19.95/month with no activation fee. Life Alert does have strong brand recognition and a reliable monitoring network, but for most seniors, Bay Alarm Medical offers better value.",
  },
  {
    q: "Is Bay Alarm Medical a legitimate company?",
    a: "Yes. Bay Alarm Medical is a subsidiary of Bay Alarm Company, which has been in business since 1946 — one of the oldest and largest alarm companies in the United States. Their monitoring centers are UL-listed and 5-Diamond certified by the Central Station Alarm Association (CSAA). They operate on both AT&T and Verizon networks for redundancy.",
  },
  {
    q: "What happens if I press the button by accident?",
    a: "If you press the button accidentally, simply speak to the monitoring center when they respond and tell them it was a false alarm. You will not be charged or penalized. Response typically comes within 30 seconds of pressing the button.",
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

export default function BayAlarmMedicalReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ReviewSchema provider={provider} pageUrl={`${SITE.url}/bay-alarm-medical-review`} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs
          trail={[
            { label: "Reviews", href: "/best-medical-alert-systems" },
            { label: "Bay Alarm Medical" },
          ]}
        />

        <span className="bg-affirm-tint text-affirm text-xs font-semibold px-3 py-1 rounded-full">Best Value 2026</span>
        <h1 className="text-3xl font-bold mt-3 mb-2">Bay Alarm Medical Pricing Plans 2026 — Full Review</h1>
        <Byline updated="2026-05-29" rating={`${rating.overallTen.toFixed(1)} / 10`} />

        <DeviceTokenCard
          brand="Bay Alarm Medical"
          device="SOS All-in-One + SOS Home"
          ratio="16 / 7"
          className="mb-8"
        />

        <EditorialRating provider={provider} />

        {/* Quick summary box */}
        <div className="bg-brand-tint rounded-panel p-6 mb-6 grid sm:grid-cols-3 gap-4 text-sm">
          <div><p className="text-ink-mute mb-1">Starting price</p><p className="font-bold text-lg">$19.95/mo</p></div>
          <div><p className="text-ink-mute mb-1">Contract</p><p className="font-bold text-lg">None</p></div>
          <div><p className="text-ink-mute mb-1">Fall detection</p><p className="font-bold text-lg">+$10/mo</p></div>
          <div><p className="text-ink-mute mb-1">Free spouse monitoring</p><p className="font-bold text-lg">Yes (home plans)</p></div>
          <div><p className="text-ink-mute mb-1">GPS available</p><p className="font-bold text-lg">Yes</p></div>
          <div><p className="text-ink-mute mb-1">In business since</p><p className="font-bold text-lg">1946</p></div>
        </div>

        <div className="mb-8">
          <OutboundLink
            href={AFFILIATE_LINKS["bay-alarm"].url}
            label="Bay Alarm Medical"
            className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit Bay Alarm Medical — From $19.95/mo →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>

        {/* Pros / Cons */}
        <SectionHeading eyebrow="The tally">Pros &amp; Cons</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-sm">
          <div className="bg-affirm-tint/60 border border-affirm/15 rounded-card p-4">
            <p className="font-semibold text-affirm mb-2">Pros</p>
            <ul className="space-y-1.5 text-ink-soft">
              {[
                "Lowest starting price of any major brand ($19.95/mo)",
                "Free spouse monitoring included on home plans",
                "No activation or equipment fees on most plans",
                "Month-to-month — no long-term contract",
                "30-day money-back guarantee",
                "UL-listed, 5-Diamond monitoring center",
                "Works on both AT&T and Verizon networks",
                "In business since 1946 — one of the most trusted brands",
              ].map((p) => (
                <li key={p} className="flex gap-2"><CheckIcon className="w-4 h-4 text-affirm mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-sos-tint/60 border border-sos/15 rounded-card p-4">
            <p className="font-semibold text-sos mb-2">Cons</p>
            <ul className="space-y-1.5 text-ink-soft">
              {[
                "Fall detection costs extra on all plans (+$10/mo)",
                "Cheapest plan ($19.95) requires a landline",
                "Caregiver app requires a smartphone",
                "Customer service hold times can be long during peak hours",
                "Fewer device options than Medical Guardian",
              ].map((p) => (
                <li key={p} className="flex gap-2"><CrossIcon className="w-4 h-4 text-sos mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plans & Pricing */}
        <SectionHeading eyebrow="Plans & pricing">Bay Alarm Medical Pricing Plans 2026</SectionHeading>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-band">
                <th className="text-left p-3 border">Plan</th>
                <th className="text-left p-3 border">Monthly</th>
                <th className="text-left p-3 border">Coverage</th>
                <th className="text-left p-3 border">Connection</th>
                <th className="text-left p-3 border">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p) => (
                <tr key={p.name} className="border-b">
                  <td className="p-3 border font-medium">{p.name}</td>
                  <td className="p-3 border">{p.monthly}</td>
                  <td className="p-3 border text-ink-mute">{p.coverage}</td>
                  <td className="p-3 border text-ink-mute">{p.connection}</td>
                  <td className="p-3 border text-ink-mute">{p.keyFeature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-mute mb-8">Add fall detection to any plan for +$10/month. Free spouse monitoring included on SOS Home plans. Prices as of 2026 — confirm current rates at checkout.</p>

        {/* Annual cost breakdown */}
        <SectionHeading eyebrow="The real math">True Annual Cost — What You Actually Pay</SectionHeading>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-band">
                <th className="text-left p-3 border">Configuration</th>
                <th className="text-left p-3 border">Monthly</th>
                <th className="text-left p-3 border">Annual Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SOS Home cellular, no fall detection", "$24.95", "$299.40"],
                ["SOS Home cellular + fall detection", "$34.95", "$419.40"],
                ["SOS Mobile + fall detection", "$39.95", "$479.40"],
                ["SOS Smartwatch + fall detection", "$39.95", "$479.40"],
                ["SOS All-in-One + fall detection", "$47.95", "$575.40"],
              ].map(([config, mo, yr]) => (
                <tr key={config} className="border-b">
                  <td className="p-3 border">{config}</td>
                  <td className="p-3 border font-medium">{mo}</td>
                  <td className="p-3 border text-ink-soft">{yr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Devices */}
        <SectionHeading eyebrow="Devices & hardware">Devices &amp; Hardware</SectionHeading>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-band">
                <th className="text-left p-3 border">Device</th>
                <th className="text-left p-3 border">Type</th>
                <th className="text-left p-3 border">Equipment Fee</th>
                <th className="text-left p-3 border">Fall Detection</th>
                <th className="text-left p-3 border">GPS</th>
                <th className="text-left p-3 border">Battery</th>
                <th className="text-left p-3 border">Best For</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((d) => (
                <tr key={d.name} className="border-b">
                  <td className="p-3 border font-medium">{d.name}</td>
                  <td className="p-3 border text-ink-mute">{d.type}</td>
                  <td className="p-3 border">{d.price}</td>
                  <td className="p-3 border">{d.fallDetection}</td>
                  <td className="p-3 border">{d.gps}</td>
                  <td className="p-3 border text-ink-mute">{d.battery}</td>
                  <td className="p-3 border text-ink-mute">{d.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How it works */}
        <SectionHeading eyebrow="How it works">How Bay Alarm Medical Works</SectionHeading>
        <ol className="space-y-3 mb-8 text-sm text-ink-soft">
          {[
            { step: "1. Press the button", desc: "Press the button on your pendant, wristband, or smartwatch. For fall detection, the device triggers automatically when a fall is sensed." },
            { step: "2. Alert sent instantly", desc: "The signal goes to Bay Alarm Medical's 24/7 monitoring center over cellular or landline within seconds." },
            { step: "3. Monitoring center responds", desc: "A trained operator responds through the two-way speaker on your device or home base station. They speak with you to assess the situation." },
            { step: "4. Help dispatched", desc: "If needed, the operator contacts your designated emergency contacts and/or dispatches emergency services (EMS, police, fire) to your GPS location." },
          ].map(({ step, desc }) => (
            <li key={step} className="flex gap-3">
              <span className="bg-brand text-white rounded-full w-7 h-7 flex items-center justify-center font-bold flex-shrink-0 text-xs">{step[0]}</span>
              <div><p className="font-semibold">{step}</p><p>{desc}</p></div>
            </li>
          ))}
        </ol>

        {/* Competitor comparison */}
        <SectionHeading eyebrow="Head to head">Bay Alarm Medical vs. Competitors</SectionHeading>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-band">
                <th className="text-left p-3 border">Feature</th>
                <th className="text-left p-3 border bg-brand-tint">Bay Alarm Medical</th>
                <th className="text-left p-3 border">Medical Guardian</th>
                <th className="text-left p-3 border">Life Alert</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((row) => (
                <tr key={row.feature} className="border-b">
                  <td className="p-3 border font-medium">{row.feature}</td>
                  <td className="p-3 border bg-brand-tint">{row.bayAlarm}</td>
                  <td className="p-3 border text-ink-mute">{row.medGuardian}</td>
                  <td className="p-3 border text-ink-mute">{row.lifeAlert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Complaints section */}
        <SectionHeading eyebrow="Complaints, examined">Common Complaints — Are They Valid?</SectionHeading>
        <p className="text-sm text-ink-mute mb-4">We summarized the most common themes from aggregated public customer reviews and assessed each one for fairness rather than repeating it uncritically.</p>
        <div className="space-y-4 mb-8">
          {complaints.map(({ complaint, verdict, detail }) => (
            <div key={complaint} className="bg-paper-raised border border-rule rounded-card p-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="font-semibold text-sm">{complaint}</p>
                <span className="text-xs bg-caution-tint text-caution px-2 py-1 rounded-full whitespace-nowrap">{verdict}</span>
              </div>
              <p className="text-sm text-ink-mute">{detail}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <SectionHeading eyebrow="Questions we hear most">Frequently Asked Questions</SectionHeading>
        <div className="space-y-4 mb-10">
          {faq.map(({ q, a }) => (
            <div key={q} className="bg-paper-raised border border-rule rounded-card p-4">
              <p className="font-semibold mb-2">{q}</p>
              <p className="text-sm text-ink-mute">{a}</p>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <Verdict label="Our verdict">
          Bay Alarm Medical is our best-value pick for 2026: no contract, free
          spouse monitoring, and a 30-day guarantee at the lowest starting price
          of any major brand. The trade-offs are honest ones — fall detection is
          an add-on, and the cheapest plan needs a landline.
        </Verdict>
        <div className="bg-band border border-rule rounded-panel p-6 text-sm">
          <div className="bg-paper-raised rounded-card border border-rule p-4 mb-4 text-sm">
            <p className="eyebrow mb-3">2026 pricing at a glance</p>
            <ul className="text-ink-soft space-y-1">
              <li><strong className="text-ink">Home + landline:</strong> $19.95/mo ($239.40/yr)</li>
              <li><strong className="text-ink">Home + cellular:</strong> $24.95/mo ($299.40/yr)</li>
              <li><strong className="text-ink">GPS mobile:</strong> $29.95/mo ($359.40/yr)</li>
              <li><strong className="text-ink">Add fall detection:</strong> +$10/mo on any plan</li>
              <li><strong className="text-ink">Equipment fee:</strong> $0 on most plans</li>
            </ul>
          </div>
          <p className="text-ink-soft mb-4">
            For most seniors, the cellular SOS Home at $24.95/month with fall detection ($34.95/mo total) hits the best price-to-protection balance. Compare it to our{" "}
            <a href="/medical-guardian-review" className="text-brand underline">Medical Guardian review</a> if you want more device options or a more advanced app.
          </p>
          <OutboundLink
            href={AFFILIATE_LINKS["bay-alarm"].url}
            label="Bay Alarm Medical"
            className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
          >
            Visit Bay Alarm Medical →
          </OutboundLink>
          <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
        </div>

        <div className="mt-8">
          <RelatedReviews currentHref="/bay-alarm-medical-review" />
        </div>

        <Sources
          sources={[
            { label: "Bay Alarm Medical — official pricing, plans & devices", url: "https://www.bayalarmmedical.com" },
            { label: "Central Station Alarm Association (CSAA / TMA) — Five Diamond certification", url: "https://tma.us/" },
            SOURCES.medicare,
          ]}
          note="Plan names, device specs, and prices are drawn from Bay Alarm Medical's official website; complaint themes are summarized from aggregated public customer reviews."
        />
      </div>
    </>
  );
}
