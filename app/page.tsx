import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Medical Alert Systems 2026 | Expert Reviews & Comparisons",
  description:
    "Expert reviews of the best medical alert systems for seniors in 2026. Compare Medical Guardian vs Bay Alarm Medical vs Life Alert on price and fall detection.",
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
            <a key={s.name} href={s.href} className="flex flex-col border rounded-xl p-6 hover:shadow-lg hover:border-[#1a5f7a]/40 transition-all">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm font-medium">#{s.rank}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.badgeColor}`}>{s.badge}</span>
                </div>
                <div className="flex items-center gap-1 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-xs font-bold text-green-700">{s.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">{s.name}</h3>
              <p className="text-[#1a5f7a] font-semibold mb-3">{s.price}</p>
              <ul className="space-y-1 mb-4 flex-1">
                {s.pros.map((p) => (
                  <li key={p} className="text-sm text-gray-600 flex gap-2 items-start">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>{p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-sm font-semibold text-[#1a5f7a]">Read full review</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a5f7a] text-white">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 18l6-6-6-6"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-6">Browse by Topic</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="group flex flex-col bg-white border rounded-lg p-4 hover:border-[#1a5f7a] hover:shadow-sm transition-all">
                <p className="font-semibold text-[#1a5f7a] mb-1">{l.label}</p>
                <p className="text-sm text-gray-500 mb-3 flex-1">{l.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a5f7a] group-hover:gap-2 transition-all">
                  Read more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-6">How We Review Medical Alert Systems</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8] text-[#1a5f7a]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            </div>
            <div><p className="font-semibold text-gray-800 mb-1">Independent Research</p><p>We evaluate each system on monitoring response time, device quality, pricing transparency, and contract terms.</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8] text-[#1a5f7a]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div><p className="font-semibold text-gray-800 mb-1">No Paid Rankings</p><p>Our top picks are based on merit. We may earn a referral fee, but it never influences our scores or recommendations.</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8] text-[#1a5f7a]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <div><p className="font-semibold text-gray-800 mb-1">Regularly Updated</p><p>Pricing and features change often. We review and update every page at least quarterly.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
