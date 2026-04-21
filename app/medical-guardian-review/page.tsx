import type { Metadata } from "next";
import OutboundLink from "@/app/components/OutboundLink";

export const metadata: Metadata = {
  title: "Medical Guardian Review 2026 | Pricing, Devices & Verdict",
  description:
    "Detailed Medical Guardian review: monthly costs, device options, fall detection, GPS coverage, and how it compares to Life Alert and Bay Alarm Medical.",
};

export default function MedicalGuardianReview() {
  const faq = [
    { q: "Does Medical Guardian require a contract?", a: "No. Medical Guardian does not require a long-term contract. All plans are month-to-month with no cancellation penalty. This is a key advantage over Life Alert, which locks customers into a 3-year commitment." },
    { q: "How much does Medical Guardian cost per month?", a: "Medical Guardian plans start at $29.95/month for the Classic Guardian home unit. GPS-enabled and all-in-one devices range from $39.95 to $44.95/month. There are no long-term contracts." },
    { q: "Does Medical Guardian have fall detection?", a: "Yes. Medical Guardian offers automatic fall detection as an add-on for $10/month on most plans. The device detects hard falls and triggers an alert without pressing a button." },
    { q: "Is Medical Guardian covered by Medicare?", a: "Original Medicare (Parts A and B) does not cover medical alert systems. Some Medicare Advantage plans may offer an allowance for safety devices — check your specific plan." },
    { q: "How does Medical Guardian compare to Life Alert?", a: "Medical Guardian starts at $29.95/mo vs Life Alert's $49.95/mo. Medical Guardian requires no long-term contract; Life Alert requires a 3-year commitment. Both offer 24/7 US-based monitoring." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": { "@type": "Product", "name": "Medical Guardian Medical Alert System" },
    "reviewRating": { "@type": "Rating", "ratingValue": "9.4", "bestRating": "10" },
    "author": { "@type": "Organization", "name": "Medical Alert Review" },
    "reviewBody": "Medical Guardian is our top-rated medical alert system for 2026, offering the best combination of coverage options, transparent pricing, and no long-term contract requirement.",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> › Medical Guardian Review
        </nav>

        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">#1 Best Overall 2026</span>
        <h1 className="text-3xl font-bold mt-3 mb-2">Medical Guardian Review 2026</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: April 2026 · Rating: <strong>9.4 / 10</strong></p>

        <div className="bg-[#e8f4f8] rounded-xl p-6 mb-6 grid sm:grid-cols-2 gap-4 text-sm">
          <div><p className="text-gray-500 mb-1">Starting price</p><p className="font-bold text-lg">$29.95/month</p></div>
          <div><p className="text-gray-500 mb-1">Contract</p><p className="font-bold text-lg">Month-to-month</p></div>
          <div><p className="text-gray-500 mb-1">Fall detection</p><p className="font-bold text-lg">Yes (+$10/mo)</p></div>
          <div><p className="text-gray-500 mb-1">GPS coverage</p><p className="font-bold text-lg">Yes (select plans)</p></div>
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

        <h2 className="text-xl font-bold mb-3">What We Like</h2>
        <ul className="space-y-2 mb-8 text-sm text-gray-700">
          {["No long-term contract — cancel anytime", "24/7 US-based monitoring center", "GPS + home coverage options", "Automatic fall detection available", "Spouse/caregiver monitoring included on some plans", "Water-resistant devices for shower use"].map(p => (
            <li key={p} className="flex gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>{p}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-3">What to Watch For</h2>
        <ul className="space-y-2 mb-8 text-sm text-gray-700">
          {["Fall detection costs extra ($10/mo)", "Equipment fees apply for some devices", "Customer service wait times can vary"].map(p => (
            <li key={p} className="flex gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>{p}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-4">Medical Guardian Plans & Pricing 2026</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">Plan</th>
                <th className="text-left p-3 border">Monthly Cost</th>
                <th className="text-left p-3 border">Coverage</th>
                <th className="text-left p-3 border">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Classic Guardian", "$29.95", "Home only", "Base station + landline or cell"],
                ["Home 2.0", "$32.95", "Home only", "Cellular, no landline needed"],
                ["Mini Guardian", "$39.95", "Home + GPS", "Compact wearable with GPS"],
                ["Freedom Guardian", "$44.95", "Home + GPS", "Smartwatch-style device"],
              ].map(([plan, price, cov, feat]) => (
                <tr key={plan} className="border-b">
                  <td className="p-3 border font-medium">{plan}</td>
                  <td className="p-3 border">{price}</td>
                  <td className="p-3 border">{cov}</td>
                  <td className="p-3 border text-gray-600">{feat}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

        <div className="bg-gray-50 rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Our Verdict</p>
          <p className="text-gray-700 mb-4">Medical Guardian earns our top spot in 2026 for its combination of flexible plans, transparent month-to-month pricing, and reliable US-based monitoring. It is the best choice for most families unless budget is the primary concern — in which case, see our <a href="/bay-alarm-medical-review" className="text-[#1a5f7a] underline">Bay Alarm Medical review</a>.</p>
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
