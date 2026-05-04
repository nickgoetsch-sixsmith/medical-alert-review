import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Medical Alert Systems 2026 | Expert Reviews & Comparisons",
  description:
    "Compare the top medical alert systems for seniors in 2026. Unbiased reviews of Medical Guardian, Bay Alarm Medical, and Life Alert — with pricing, fall detection, and contract details.",
  alternates: { canonical: "https://medicalalertreview.com/" },
};

const featured = [
  {
    rank: 1,
    name: "Medical Guardian",
    badge: "Best Overall",
    badgeColor: "bg-green-100 text-green-800",
    price: "$29.95/mo",
    rating: "9.4/10",
    pros: ["GPS + home coverage", "No long-term contract", "24/7 US-based monitoring"],
    href: "/medical-guardian-review",
  },
  {
    rank: 2,
    name: "Bay Alarm Medical",
    badge: "Best Value",
    badgeColor: "bg-blue-100 text-blue-800",
    price: "$19.95/mo",
    rating: "9.1/10",
    pros: ["Lowest monthly fee", "Free spouse monitoring", "Fall detection add-on"],
    href: "/bay-alarm-medical-review",
  },
  {
    rank: 3,
    name: "Life Alert",
    badge: "Most Recognized",
    badgeColor: "bg-orange-100 text-orange-800",
    price: "$49.95/mo",
    rating: "7.8/10",
    pros: ["Iconic brand recognition", "Nationwide coverage", "Waterproof help button"],
    href: "/life-alert-cost",
  },
];

const quickLinks = [
  { label: "Medical Guardian Review", href: "/medical-guardian-review", desc: "Full breakdown of pricing, devices, and monitoring" },
  { label: "Bay Alarm Medical Review", href: "/bay-alarm-medical-review", desc: "Best value pick — starting at $19.95/mo" },
  { label: "Life Alert Cost", href: "/life-alert-cost", desc: "What Life Alert actually costs in 2026" },
  { label: "No Monthly Fee Options", href: "/no-monthly-fee-medical-alert", desc: "Pay once, no recurring charges" },
  { label: "Fall Detection Devices", href: "/fall-detection-medical-alert", desc: "Auto-detect falls without pressing a button" },
  { label: "Systems for Elderly", href: "/medical-alert-system-for-elderly", desc: "Top picks for aging parents and seniors" },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Medical Alert Review",
    "url": "https://medicalalertreview.com",
    "description": "Independent reviews of the best medical alert systems for seniors",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-[#e8f4f8] border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a5f7a] mb-4">
            Best Medical Alert Systems of 2026
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We research, test, and compare every major medical alert system so you can find the right fit for your loved one — without the sales pressure.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2">Our Top Picks</h2>
        <p className="text-gray-500 mb-8 text-sm">Last updated April 2026 · Based on monitoring quality, pricing transparency, and ease of use</p>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((s) => (
            <a key={s.name} href={s.href} className="border rounded-xl p-6 hover:shadow-md transition-shadow block">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400 text-sm font-medium">#{s.rank}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.badgeColor}`}>{s.badge}</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{s.name}</h3>
              <p className="text-[#1a5f7a] font-semibold mb-3">{s.price}</p>
              <ul className="space-y-1 mb-4">
                {s.pros.map((p) => (
                  <li key={p} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>{p}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[#1a5f7a]">Read full review →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-6">Browse by Topic</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="bg-white border rounded-lg p-4 hover:border-[#1a5f7a] transition-colors">
                <p className="font-semibold text-[#1a5f7a] mb-1">{l.label}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-4">How We Review Medical Alert Systems</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div className="flex gap-3">
            <span className="text-2xl">🔬</span>
            <div><p className="font-semibold text-gray-800 mb-1">Independent Research</p><p>We evaluate each system on monitoring response time, device quality, pricing transparency, and contract terms.</p></div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">💰</span>
            <div><p className="font-semibold text-gray-800 mb-1">No Paid Rankings</p><p>Our top picks are based on merit. We may earn a referral fee, but it never influences our scores or recommendations.</p></div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🔄</span>
            <div><p className="font-semibold text-gray-800 mb-1">Regularly Updated</p><p>Pricing and features change often. We review and update every page at least quarterly.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
