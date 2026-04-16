import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Medical Alert Systems 2026 | Top Picks Compared",
  description:
    "The best medical alert systems for seniors in 2026, ranked by our experts. Compare monitoring quality, pricing, fall detection, and contract terms across top brands.",
};

const systems = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-green-100 text-green-800",
    name: "Medical Guardian",
    score: "9.4",
    startingPrice: "$29.95/mo",
    contract: "None",
    fallDetection: "Yes (+$10/mo)",
    gps: "Yes",
    monitoring: "24/7 US-based",
    href: "/medical-guardian-review",
    summary: "The most complete package — flexible plans, no contract, and the widest range of devices from home button to GPS smartwatch.",
  },
  {
    rank: 2,
    badge: "Best Value",
    badgeColor: "bg-blue-100 text-blue-800",
    name: "Bay Alarm Medical",
    score: "9.1",
    startingPrice: "$19.95/mo",
    contract: "None",
    fallDetection: "Yes (+$10/mo)",
    gps: "Yes",
    monitoring: "24/7 UL-listed",
    href: "/bay-alarm-medical-review",
    summary: "Lowest starting price in the industry with free spouse monitoring. Ideal for budget-conscious families who don't want to sacrifice monitoring quality.",
  },
  {
    rank: 3,
    badge: "Best for Active Seniors",
    badgeColor: "bg-purple-100 text-purple-800",
    name: "Lively Mobile2",
    score: "8.7",
    startingPrice: "$24.99/mo",
    contract: "None",
    fallDetection: "Yes (+$6.99/mo)",
    gps: "Yes",
    monitoring: "24/7 US-based",
    href: "/fall-detection-medical-alert",
    summary: "Compact GPS device designed for on-the-go seniors. The Urgent Response button connects directly to a monitoring agent with no base station needed.",
  },
  {
    rank: 4,
    badge: "Most Recognized",
    badgeColor: "bg-orange-100 text-orange-800",
    name: "Life Alert",
    score: "7.8",
    startingPrice: "$49.95/mo",
    contract: "3 years",
    fallDetection: "No",
    gps: "Add-on",
    monitoring: "24/7 US-based",
    href: "/life-alert-cost",
    summary: "The most recognized brand in medical alerts, but significantly more expensive and requires a 3-year commitment. No automatic fall detection.",
  },
];

const factors = [
  { title: "Monitoring Quality", desc: "Look for UL-listed, 5-Diamond certified centers with US-based operators and fast response times under 30 seconds." },
  { title: "Contract Terms", desc: "Avoid long-term contracts. Medical Guardian, Bay Alarm, and Lively are all month-to-month. Life Alert requires 3 years." },
  { title: "Device Range", desc: "Choose based on lifestyle — in-home button for stay-at-home seniors, GPS wearable for active seniors who go out regularly." },
  { title: "Fall Detection", desc: "Automatic fall detection is worth the $7-10/month add-on for seniors living alone or at high fall risk." },
  { title: "Total Cost", desc: "Calculate the full annual cost including device fees, activation, and add-ons — not just the advertised monthly rate." },
  { title: "Caregiver App", desc: "Most modern systems include a family app for location tracking and activity monitoring. Useful for adult children of aging parents." },
];

const faq = [
  { q: "What is the best medical alert system in 2026?", a: "Medical Guardian is our top-rated medical alert system in 2026 due to its combination of flexible plans, month-to-month pricing, 24/7 US-based monitoring, and range of devices. Bay Alarm Medical is the best value option starting at $19.95/month." },
  { q: "How much do the best medical alert systems cost?", a: "The best medical alert systems range from $19.95/month (Bay Alarm Medical) to $49.95/month (Life Alert). Most top-rated systems are in the $25-45/month range. Additional fees for fall detection, GPS, and equipment may apply." },
  { q: "What is the best medical alert system with no monthly fee?", a: "True no-fee monitored systems do not exist — 24/7 professional monitoring requires a monthly subscription. Some unmonitored devices (like the LogicMark Freedom Alert) have no monthly fee but only call family members, not a monitoring center." },
  { q: "Are medical alert systems worth it for the elderly?", a: "Yes. Studies show medical alert systems significantly reduce time lying on the floor after a fall, which is the primary cause of fall-related complications. For elderly adults living alone, the cost is typically $0.50-1.50/day — a fraction of the potential emergency and hospitalization costs from an undetected fall." },
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

export default function BestMedicalAlertSystems() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> › Best Medical Alert Systems
        </nav>

        <h1 className="text-3xl font-bold mb-2">Best Medical Alert Systems of 2026</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: April 2026 · Reviewed by the MedicalAlertReview.com editorial team</p>

        <div className="space-y-6 mb-12">
          {systems.map((s) => (
            <div key={s.name} className="border rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-300">#{s.rank}</span>
                  <div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.badgeColor}`}>{s.badge}</span>
                    <h2 className="text-xl font-bold mt-1">{s.name}</h2>
                  </div>
                </div>
                <span className="text-[#1a5f7a] font-bold text-lg">{s.score}/10</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-4">
                <div><p className="text-gray-400 text-xs">Starting Price</p><p className="font-semibold">{s.startingPrice}</p></div>
                <div><p className="text-gray-400 text-xs">Contract</p><p className="font-semibold">{s.contract}</p></div>
                <div><p className="text-gray-400 text-xs">Fall Detection</p><p className="font-semibold">{s.fallDetection}</p></div>
                <div><p className="text-gray-400 text-xs">GPS</p><p className="font-semibold">{s.gps}</p></div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{s.summary}</p>
              <a href={s.href} className="text-sm font-semibold text-[#1a5f7a] hover:underline">Read full review →</a>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">What to Look for in a Medical Alert System</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {factors.map(f => (
            <div key={f.title} className="border rounded-lg p-4 text-sm">
              <p className="font-semibold mb-1">{f.title}</p>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {faq.map(({ q, a }) => (
            <div key={q} className="border rounded-lg p-4">
              <p className="font-semibold mb-2">{q}</p>
              <p className="text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#e8f4f8] rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Compare Individual Reviews</p>
          <ul className="space-y-2">
            <li><a href="/medical-guardian-review" className="text-[#1a5f7a] underline">Medical Guardian Full Review →</a></li>
            <li><a href="/bay-alarm-medical-review" className="text-[#1a5f7a] underline">Bay Alarm Medical Full Review →</a></li>
            <li><a href="/life-alert-cost" className="text-[#1a5f7a] underline">Life Alert Cost Breakdown →</a></li>
            <li><a href="/fall-detection-medical-alert" className="text-[#1a5f7a] underline">Best Fall Detection Devices →</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
