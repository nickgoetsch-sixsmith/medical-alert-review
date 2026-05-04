import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Medical Alert System for Elderly 2026 | Top Picks for Seniors",
  description:
    "The best medical alert systems for elderly parents in 2026. Compare in-home and GPS devices, fall detection, and monthly costs to find the right fit.",
  alternates: { canonical: "https://medicalalertreview.com/medical-alert-system-for-elderly" },
};


const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Medical Alert Systems for Elderly 2026",
  "description": "Top-rated medical alert systems for elderly parents, ranked by ease of use, monitoring quality, and value.",
  "url": "https://medicalalertreview.com/medical-alert-system-for-elderly",
  "numberOfItems": 3,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Medical Guardian", "url": "https://medicalalertreview.com/medical-guardian-review" },
    { "@type": "ListItem", "position": 2, "name": "Bay Alarm Medical", "url": "https://medicalalertreview.com/bay-alarm-medical-review" },
    { "@type": "ListItem", "position": 3, "name": "Life Alert", "url": "https://medicalalertreview.com/life-alert-cost" }
  ]
};

export default function MedicalAlertSystemForElderly() {
  const faq = [
    { q: "What is the best medical alert system for the elderly?", a: "Medical Guardian is our top pick for elderly users due to its simple button design, 24/7 US-based monitoring, and month-to-month pricing. Bay Alarm Medical is the best value option starting at $19.95/month." },
    { q: "How do medical alert systems for the elderly work?", a: "A wearable button (pendant, wristband, or watch) connects to a base station or cellular network. When pressed, it connects the user to a 24/7 monitoring center that can send emergency services or contact family." },
    { q: "Do medical alert systems for the elderly require a phone line?", a: "Not anymore. Modern medical alert systems use cellular networks and do not require a landline. Some older home units still offer landline options, but cellular is now standard." },
    { q: "What is the best medical alert for elderly with dementia?", a: "For elderly with dementia, look for GPS-enabled devices with caregiver tracking apps. Medical Guardian GPS plans and Bay Alarm Medical SOS Mobile both allow family to track location in real time." },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> › Medical Alert System for Elderly
        </nav>

        <h1 className="text-3xl font-bold mb-2">Best Medical Alert System for Elderly (2026)</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { badge: "Best Overall", name: "Medical Guardian", price: "From $29.95/mo", href: "/medical-guardian-review" },
            { badge: "Best Value", name: "Bay Alarm Medical", price: "From $19.95/mo", href: "/bay-alarm-medical-review" },
            { badge: "Most Recognized", name: "Life Alert", price: "From $49.95/mo", href: "/life-alert-cost" },
          ].map(s => (
            <a key={s.name} href={s.href} className="border rounded-xl p-4 text-sm hover:shadow-md transition-shadow">
              <span className="bg-[#e8f4f8] text-[#1a5f7a] text-xs font-semibold px-2 py-0.5 rounded-full">{s.badge}</span>
              <p className="font-bold mt-2 mb-1">{s.name}</p>
              <p className="text-gray-500">{s.price}</p>
            </a>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">What to Look for in a Medical Alert for Elderly</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-sm">
          {[
            ["Simple one-button design", "Easy to use for seniors with limited dexterity or tech experience"],
            ["Waterproof device", "Most falls happen in the bathroom — device must be shower-safe"],
            ["Long battery life", "Look for 5+ days on wearables; base stations are always plugged in"],
            ["Fall detection", "Automatically triggers an alert if a hard fall is detected"],
            ["GPS for active seniors", "Allows monitoring outside the home and location tracking by family"],
            ["No long-term contract", "Avoid 3-year commitments like Life Alert — month-to-month is standard now"],
          ].map(([title, desc]) => (
            <div key={title} className="border rounded-lg p-4">
              <p className="font-semibold mb-1">{title}</p>
              <p className="text-gray-500">{desc}</p>
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
          <p className="font-semibold mb-2">Related Reviews</p>
          <ul className="space-y-2">
            <li><a href="/medical-guardian-review" className="text-[#1a5f7a] underline">Medical Guardian Review</a></li>
            <li><a href="/bay-alarm-medical-review" className="text-[#1a5f7a] underline">Bay Alarm Medical Review</a></li>
            <li><a href="/life-alert-cost" className="text-[#1a5f7a] underline">Life Alert Cost Breakdown</a></li>
            <li><a href="/no-monthly-fee-medical-alert" className="text-[#1a5f7a] underline">No Monthly Fee Options</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
