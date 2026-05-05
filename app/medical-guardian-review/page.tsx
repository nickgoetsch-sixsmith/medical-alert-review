import type { Metadata } from "next";
import OutboundLink from "@/app/components/OutboundLink";

export const metadata: Metadata = {
  title: "Medical Guardian Review 2026 | Pricing, Devices, Complaints & Verdict",
  description:
    "Medical Guardian review 2026: pricing breakdown, fall detection cost, all devices, complaints, is it worth it, and comparison to Bay Alarm Medical and Life Alert.",
  alternates: { canonical: "https://medicalalertreview.com/medical-guardian-review" },
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
    a: "Yes. Medical Guardian offers automatic fall detection as a $10/month add-on on most plans. The device detects hard falls using an accelerometer and triggers an automatic alert to the monitoring center — no button press required. Fall detection is approximately 80–95% accurate and is available on all devices including the MGMove smartwatch.",
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

const schema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@type": "Product", "name": "Medical Guardian Medical Alert System" },
  "reviewRating": { "@type": "Rating", "ratingValue": "9.4", "bestRating": "10" },
  "author": { "@type": "Organization", "name": "Medical Alert Review" },
  "reviewBody": "Medical Guardian is our top-rated medical alert system for 2026. No contract, 24/7 US monitoring, and the widest GPS device lineup in the category.",
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> ›{" "}
          <a href="/best-medical-alert-systems" className="hover:text-[#1a5f7a]">Best Medical Alert Systems</a> › Medical Guardian Review
        </nav>

        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">#1 Best Overall 2026</span>
        <h1 className="text-3xl font-bold mt-3 mb-2">Medical Guardian Review 2026</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: May 2026 · Rating: <strong>9.4 / 10</strong> · Reviewed by the MedicalAlertReview.com editorial team</p>

        <div className="bg-[#e8f4f8] rounded-xl p-5 mb-6 text-sm">
          <p className="font-semibold text-[#1a5f7a] mb-2">Quick Summary</p>
          <ul className="text-gray-700 space-y-0.5">
            <li><strong>Starting price:</strong> $29.95/month (home) · $39.95/month (GPS)</li>
            <li><strong>Contract:</strong> None — month-to-month, cancel anytime</li>
            <li><strong>Fall detection:</strong> Yes, $10/month add-on on all plans</li>
            <li><strong>Verdict:</strong> Best overall — widest GPS device lineup, no contract, reliable US monitoring</li>
          </ul>
        </div>

        <div className="mb-8">
          <OutboundLink
            href="https://www.medicalguardian.com"
            label="Medical Guardian"
            className="inline-block bg-[#1a5f7a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#134a61] transition-colors"
          >
            Visit Medical Guardian — From $29.95/mo →
          </OutboundLink>
        </div>
        <nav className="bg-gray-50 rounded-lg p-4 text-sm mb-8 border">
          <p className="font-semibold mb-2 text-gray-700">On this page</p>
          <ol className="space-y-1 text-[#1a5f7a] list-decimal list-inside">
            <li><a href="#pricing" className="hover:underline">Plans and Pricing</a></li>
            <li><a href="#devices" className="hover:underline">Device Breakdown</a></li>
            <li><a href="#comparison" className="hover:underline">vs Competitors</a></li>
            <li><a href="#worth-it" className="hover:underline">Is It Worth It?</a></li>
            <li><a href="#best-for" className="hover:underline">Who Is It Best For?</a></li>
            <li><a href="#complaints" className="hover:underline">Common Complaints</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div>
            <h2 className="text-lg font-bold mb-3">What We Like</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "No long-term contract — cancel any time",
                "24/7 US-based monitoring center (UL-listed)",
                "Widest GPS device lineup — pendant to smartwatch",
                "Fall detection available on every plan",
                "Caregiver app with location tracking",
                "30-day money-back guarantee",
                "Waterproof devices for shower use",
              ].map(p => (
                <li key={p} className="flex gap-2"><span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3">What to Watch For</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Fall detection is a $10/mo add-on, not included",
                "Equipment fees on some GPS devices ($99–$149)",
                "Customer service hold times can be 10–20 min",
                "Smartwatch battery may need daily charging with GPS active",
              ].map(p => (
                <li key={p} className="flex gap-2"><span className="text-red-400 font-bold mt-0.5 shrink-0">✗</span>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 id="pricing" className="text-xl font-bold mb-4">Medical Guardian Plans & Pricing 2026</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">Plan</th>
                <th className="text-left p-3 border">Monthly</th>
                <th className="text-left p-3 border">Coverage</th>
                <th className="text-left p-3 border">Connection</th>
                <th className="text-left p-3 border">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              {plans.map(p => (
                <tr key={p.name} className="border-b">
                  <td className="p-3 border font-medium">{p.name}</td>
                  <td className="p-3 border font-semibold text-[#1a5f7a]">{p.monthly}</td>
                  <td className="p-3 border">{p.coverage}</td>
                  <td className="p-3 border text-gray-600">{p.connection}</td>
                  <td className="p-3 border text-gray-600">{p.keyFeature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-sm mb-10">
          <p className="font-semibold mb-1">True annual cost (what you actually pay)</p>
          <ul className="text-gray-600 space-y-0.5">
            <li>Classic Guardian, no fall detection: <strong>$359.40/year</strong></li>
            <li>Classic Guardian + fall detection: <strong>$479.40/year</strong></li>
            <li>MGMove (GPS smartwatch) + fall detection: <strong>$599.40/year</strong> + any device fee</li>
          </ul>
          <p className="text-gray-500 text-xs mt-2">Prices based on current month-to-month rates. Equipment and activation fees vary — confirm before ordering.</p>
        </div>

        <h2 id="devices" className="text-xl font-bold mb-4">Device Breakdown</h2>
        <div className="space-y-4 mb-10">
          {devices.map(d => (
            <div key={d.name} className="border rounded-lg p-4 text-sm">
              <div className="flex items-start justify-between mb-2">
                <p className="font-bold">{d.name} <span className="text-gray-500 font-normal text-xs">({d.type})</span></p>
                <span className="text-[#1a5f7a] font-semibold">{d.price}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-2 text-xs text-gray-600">
                <span><strong>Fall detection:</strong> {d.fallDetection}</span>
                <span><strong>GPS:</strong> {d.gps}</span>
                <span><strong>Battery:</strong> {d.battery}</span>
                <span><strong>Range:</strong> {d.range}</span>
              </div>
              <p className="text-xs text-gray-500 bg-gray-50 rounded p-2"><strong>Best for:</strong> {d.best}</p>
            </div>
          ))}
        </div>

        <h2 id="comparison" className="text-xl font-bold mb-4">Medical Guardian vs. Competitors</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border"></th>
                <th className="text-left p-3 border font-bold text-[#1a5f7a]">Medical Guardian</th>
                <th className="text-left p-3 border">Bay Alarm Medical</th>
                <th className="text-left p-3 border">Life Alert</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 border font-medium text-gray-600">{row.label}</td>
                  <td className="p-3 border font-medium">{row.mg}</td>
                  <td className="p-3 border text-gray-600">{row.bay}</td>
                  <td className="p-3 border text-gray-600">{row.lifeAlert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

                <h2 id="worth-it" className="text-xl font-bold mb-4">Is Medical Guardian Worth It in 2026?</h2>
        <div className="space-y-3 mb-6 text-sm">
          <p className="text-gray-700">For most families, Medical Guardian is worth it if GPS tracking and a no-contract plan are priorities.</p>
          <div className="border rounded-lg p-4">
            <p className="font-semibold text-green-700 mb-2">Worth it if you need:</p>
            <ul className="space-y-1 text-gray-700">
              <li className="flex gap-2">GPS tracking outside the home</li>
              <li className="flex gap-2">A smartwatch device (MGMove) that does not look like a medical alert</li>
              <li className="flex gap-2">Real-time location tracking via caregiver app</li>
              <li className="flex gap-2">Month-to-month flexibility, no long-term contract</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-semibold text-orange-700 mb-2">Consider alternatives if:</p>
            <ul className="space-y-1 text-gray-700">
              <li className="flex gap-2">Budget is primary: Bay Alarm Medical starts 10 dollars less per month at 19.95/mo</li>
              <li className="flex gap-2">Your parent stays home: a 24.95/month cellular home unit suffices</li>
              <li className="flex gap-2">You want fall detection included: it costs 10/mo extra on every plan</li>
            </ul>
          </div>
          <p className="text-gray-600 bg-gray-50 rounded-lg p-4 text-xs">Our pick: Mini Guardian at 39.95/month plus fall detection (49.95/mo total) - GPS, fall detection, no contract, 30-day guarantee.</p>
        </div>
        <h2 id="best-for" className="text-xl font-bold mb-4">Who Is Medical Guardian Best For?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-sm">
          <div className="border border-green-200 rounded-lg p-4">
            <p className="font-semibold text-green-700 mb-2">Best for seniors who:</p>
            <ul className="space-y-1 text-gray-700">
              <li>Leave home regularly and need GPS tracking</li>
              <li>Want a smartwatch device, not a pendant</li>
              <li>Have family who want real-time location visibility</li>
              <li>Prefer no contract and month-to-month billing</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-700 mb-2">Better alternatives for:</p>
            <ul className="space-y-1 text-gray-700">
              <li>Lowest price: Bay Alarm Medical from 19.95 per month</li>
              <li>Home-only protection: Bay Alarm SOS Home</li>
              <li>AARP benefits: Consumer Cellular</li>
              <li>Fall detection included: Life Alert on some plans</li>
            </ul>
          </div>
        </div>
<h2 id="complaints" className="text-xl font-bold mb-4">Common Complaints — Are They Valid?</h2>
        <div className="space-y-3 mb-10">
          {complaints.map(c => (
            <div key={c.complaint} className="border rounded-lg p-4 text-sm">
              <div className="flex items-start gap-2 mb-1">
                <span className="text-yellow-500 font-bold shrink-0">⚠</span>
                <p className="font-semibold">{c.complaint}</p>
              </div>
              <p className="text-gray-600 ml-6">{c.detail}</p>
            </div>
          ))}
        </div>

        <h2 id="faq" className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {faq.map(({ q, a }) => (
            <div key={q} className="border rounded-lg p-4">
              <p className="font-semibold mb-2">{q}</p>
              <p className="text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Our Verdict</p>
          <p className="text-gray-700 mb-4">Medical Guardian earns our #1 spot in 2026 for its combination of flexible GPS device options, transparent month-to-month pricing, and reliable US-based monitoring. The fall detection add-on cost is the main caveat — budget $10/month extra if you need it. For most families who want GPS coverage and no contract, Medical Guardian is the strongest option.</p>
          <p className="text-gray-700 mb-4">If budget is the primary concern, see our <a href="/bay-alarm-medical-review" className="text-[#1a5f7a] underline">Bay Alarm Medical review</a> — it starts $10/month lower with free spouse monitoring.</p>
          <OutboundLink
            href="https://www.medicalguardian.com"
            label="Medical Guardian"
            className="inline-block bg-[#1a5f7a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#134a61] transition-colors"
          >
            Visit Medical Guardian →
          </OutboundLink>
        </div>
      </div>
    </>
  );
}
