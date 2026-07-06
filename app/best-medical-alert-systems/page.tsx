import type { Metadata } from "next";
import Link from "next/link";
import Byline from "@/app/components/Byline";
import DiagramFigure from "@/app/components/DiagramFigure";
import Sources from "@/app/components/Sources";
import { SITE, SOURCES } from "@/lib/site";
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
    badgeColor: "bg-[#e8f4f8] text-[#1a5f7a]",
    name: "Medical Guardian",
    score: scoreOf("medical-guardian"),
    startingPrice: "$29.95/mo",
    contract: "None",
    fallDetection: "Yes (+$10/mo)",
    gps: "Yes",
    monitoring: "24/7 US-based",
    href: "/medical-guardian-review",
    pros: ["Most complete device lineup — home button to GPS smartwatch", "Month-to-month, cancel anytime", "Strong 24/7 US-based monitoring"],
    cons: ["Fall detection is a $10/mo add-on, not included", "Can be pricier than Bay Alarm Medical for simple in-home use"],
    summary: "The most complete package — flexible plans, no contract, and the widest range of devices from home button to GPS smartwatch. Our top pick for most families.",
  },
  {
    rank: 2,
    badge: "Best Value",
    badgeColor: "bg-[#e8f4f8] text-[#1a5f7a]",
    name: "Bay Alarm Medical",
    score: scoreOf("bay-alarm-medical"),
    startingPrice: "$19.95/mo",
    contract: "None",
    fallDetection: "Yes (+$10/mo)",
    gps: "Yes",
    monitoring: "24/7 UL-listed",
    href: "/bay-alarm-medical-review",
    pros: ["Lowest starting price in the industry", "Free spouse monitoring included", "Works on both AT&T and Verizon networks"],
    cons: ["Mobile app less polished than Medical Guardian", "GPS-enabled plan significantly more expensive than base"],
    summary: "Lowest starting price in the industry with free spouse monitoring. Ideal for budget-conscious families who need reliable in-home protection.",
  },
  {
    rank: 3,
    badge: "Best for Active Seniors",
    badgeColor: "bg-[#e8f4f8] text-[#1a5f7a]",
    name: "Lively Mobile2",
    score: "8.7",
    startingPrice: "$24.99/mo",
    contract: "None",
    fallDetection: "Yes (+$6.99/mo)",
    gps: "Yes",
    monitoring: "24/7 US-based",
    href: "/fall-detection-medical-alert",
    pros: ["No contract — cancel any time", "Fall detection add-on cheapest in class at $6.99/mo", "Compact GPS device works anywhere"],
    cons: ["Battery needs daily charging", "No in-home base station option"],
    summary: "Best compact GPS option for active seniors who are often outside the home. Most affordable fall detection add-on at $6.99/month.",
  },
  {
    rank: 4,
    badge: "Best In-Home",
    badgeColor: "bg-[#e8f4f8] text-[#1a5f7a]",
    name: "Lifeline",
    score: "8.5",
    startingPrice: "$29.95/mo",
    contract: "Month-to-month",
    fallDetection: "Yes (+$15/mo)",
    gps: "Add-on",
    monitoring: "24/7 US-based",
    href: "/fall-detection-medical-alert",
    pros: ["40+ years in medical alerts — highly trusted brand", "Lightweight pendant comfortable for daily wear", "Strong in-home range"],
    cons: ["Fall detection add-on most expensive at $15/mo", "GPS requires additional GoSafe 2 device upgrade"],
    summary: "Best for seniors who rarely leave home and prefer a familiar brand. Lifeline (formerly Philips Lifeline) has been in this space longer than any other company.",
  },
  {
    rank: 5,
    badge: "Most Recognized",
    badgeColor: "bg-[#e8f4f8] text-[#1a5f7a]",
    name: "Life Alert",
    score: scoreOf("life-alert"),
    startingPrice: "$49.95/mo (est.)",
    contract: "3 years",
    fallDetection: "No",
    gps: "Add-on",
    monitoring: "24/7 US-based",
    href: "/life-alert-cost",
    pros: ["Most recognizable brand — seniors often request it by name", "24/7 US-based monitoring with fast response"],
    cons: ["Requires a 3-year contract — most restrictive in the industry", "Significantly more expensive than comparable options", "No automatic fall detection"],
    summary: "The most recognized brand, but requires a 3-year contract and costs more than equivalent alternatives. We recommend Medical Guardian or Bay Alarm Medical instead for most families.",
  },
];

const comparisonData = [
  { label: "Starting price", values: ["$29.95/mo", "$19.95/mo", "$24.99/mo", "$29.95/mo", "$49.95/mo (est.)"] },
  { label: "Contract", values: ["None", "None", "None", "Month-to-month", "3 years"] },
  { label: "Fall detection", values: ["+$10/mo", "+$10/mo", "+$6.99/mo", "+$15/mo", "Not available"] },
  { label: "GPS", values: ["Yes", "Yes", "Yes", "Add-on", "Add-on"] },
  { label: "Works outside home", values: ["Yes", "Yes", "Yes", "No (base)", "Limited"] },
  { label: "24/7 US monitoring", values: ["Yes", "Yes", "Yes", "Yes", "Yes"] },
  { label: "Caregiver app", values: ["Yes", "Yes", "Yes", "Limited", "No"] },
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
    a: "Most modern medical alert systems offer automatic fall detection as an add-on ($7–15/month extra). The device uses an accelerometer to detect the motion pattern of a fall — rapid downward acceleration followed by impact and stillness — and automatically connects to the monitoring center. Accuracy is 80–95%; it is a useful backup but not a replacement for the manual help button.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalalertreview.com/" },
    { "@type": "ListItem", "position": 2, "name": "Best Medical Alert Systems", "item": "https://medicalalertreview.com/best-medical-alert-systems" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Medical Alert Systems of 2026",
  "datePublished": "2026-01-20",
  "dateModified": "2026-05-29",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#1a5f7a]">Home</Link> › Best Medical Alert Systems
        </nav>

        <h1 className="text-3xl font-bold mb-2">Best Medical Alert Systems of 2026</h1>
        <Byline updated="2026-06-12" />

        <div className="bg-[#e8f4f8] rounded-xl p-5 mb-8 text-sm">
          <p className="font-semibold text-[#1a5f7a] mb-2">Quick Picks</p>
          <ul className="text-gray-700 space-y-0.5">
            <li><strong>Best overall:</strong> Medical Guardian — most complete device lineup, no contract, 24/7 US monitoring</li>
            <li><strong>Best value:</strong> Bay Alarm Medical — lowest starting price ($19.95/mo), free spouse monitoring</li>
            <li><strong>Best for active seniors:</strong> Lively Mobile2 — compact GPS, most affordable fall detection add-on</li>
            <li><strong>Avoid:</strong> Life Alert requires a 3-year contract — all competitors are month-to-month</li>
          </ul>
        </div>

        <h2 className="text-xl font-bold mb-4">Top Medical Alert Systems at a Glance</h2>
        <div className="overflow-x-auto mb-10 text-xs border rounded-xl">
          <table className="w-full min-w-[560px]">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left px-3 py-3 font-semibold">Feature</th>
                {systems.map(s => (
                  <th key={s.name} className="text-left px-3 py-3 font-semibold">{s.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-2 font-medium text-gray-600 whitespace-nowrap">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="px-3 py-2 text-gray-700">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DiagramFigure
          src="/diagrams/monthly-cost-comparison.svg"
          alt="Bar chart of starting monthly prices: Bay Alarm Medical $19.95, Lively Mobile2 $24.99, Medical Guardian $29.95, Lifeline $29.95, Life Alert an estimated $49.95 (Life Alert does not publish pricing)"
          width={800}
          height={420}
          caption="Advertised base in-home plan rates from each provider's official pricing, June 2026. Fall detection and GPS add-ons cost extra — full breakdowns below."
        />

        <h2 className="text-xl font-bold mb-2">Top Medical Alert Systems — Full Reviews</h2>
        <p className="text-sm text-gray-500 mb-6">
          Scores are our editorial ratings out of 10, calculated from a{" "}
          <a href="/methodology" className="text-[#1a5f7a] underline">published rubric</a>.
          Our ranking also weighs device breadth and best-fit use case, so the
          order can differ slightly from the raw score — for example, Bay Alarm
          Medical scores marginally higher on the rubric, while Medical Guardian
          takes Best Overall for its wider device lineup.
        </p>
        <div className="space-y-6 mb-12">
          {systems.map((s) => (
            <div key={s.name} className="border rounded-xl p-6">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
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
                <div><p className="text-gray-500 text-xs">Starting Price</p><p className="font-semibold">{s.startingPrice}</p></div>
                <div><p className="text-gray-500 text-xs">Contract</p><p className="font-semibold">{s.contract}</p></div>
                <div><p className="text-gray-500 text-xs">Fall Detection</p><p className="font-semibold">{s.fallDetection}</p></div>
                <div><p className="text-gray-500 text-xs">GPS</p><p className="font-semibold">{s.gps}</p></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <ul className="space-y-1">
                  {s.pros.map(p => (
                    <li key={p} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>{p}</li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {s.cons.map(c => (
                    <li key={c} className="text-sm text-gray-600 flex gap-2"><span className="text-red-400 font-bold shrink-0">✗</span>{c}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600 mb-4">{s.summary}</p>
              <a href={s.href} className="text-sm font-semibold text-[#1a5f7a] hover:underline">Read full review →</a>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Who Should Choose Which System</h2>
        <div className="border rounded-xl overflow-hidden text-sm mb-10">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Your situation</th>
                <th className="text-left px-4 py-3 font-semibold">Best choice</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {whoNeedsWhat.map((row, i) => (
                <tr key={row.profile} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-600 font-medium">{row.profile}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {row.recommendation}{" "}
                    <a href={row.link} className="text-[#1a5f7a] underline text-xs">Details →</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-4">What to Look for in a Medical Alert System</h2>
        <div className="space-y-3 mb-10">
          {buyingFactors.map(f => (
            <div key={f.title} className="border rounded-lg p-4 text-sm">
              <p className="font-bold mb-1">{f.title}</p>
              <p className="text-gray-500">{f.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2 mb-10">
          {faq.map(({ q, a }) => (
            <details key={q} className="group border rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-semibold text-sm list-none select-none">
                {q}
                <span className="text-[#1a5f7a] ml-4 shrink-0 transition-transform group-open:rotate-180">&#9660;</span>
              </summary>
              <p className="px-4 pb-4 text-sm text-gray-600">{a}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#e8f4f8] rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Read Individual Reviews</p>
          <ul className="space-y-2">
            <li><a href="/medical-guardian-review" className="text-[#1a5f7a] underline">Medical Guardian Full Review — Pricing, Devices & Verdict →</a></li>
            <li><a href="/bay-alarm-medical-review" className="text-[#1a5f7a] underline">Bay Alarm Medical Full Review — Is It the Best Value? →</a></li>
            <li><a href="/life-alert-cost" className="text-[#1a5f7a] underline">Life Alert Cost — Monthly Fees, Hidden Charges & Alternatives →</a></li>
            <li><a href="/fall-detection-medical-alert" className="text-[#1a5f7a] underline">Best Fall Detection Devices — Auto-Detect Falls Compared →</a></li>
            <li><a href="/best-medical-alert-watches" className="text-[#1a5f7a] underline">Best Medical Alert Watches — Monitored vs. Apple Watch →</a></li>
            <li><a href="/in-home-medical-alert-systems" className="text-[#1a5f7a] underline">Best In-Home Medical Alert Systems →</a></li>
            <li><a href="/no-monthly-fee-medical-alert" className="text-[#1a5f7a] underline">No Monthly Fee Medical Alert Options →</a></li>
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
