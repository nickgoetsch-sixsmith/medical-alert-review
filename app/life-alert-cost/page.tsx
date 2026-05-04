import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Alert Cost 2026 | Monthly Fees, Hidden Charges & Alternatives",
  description:
    "How much does Life Alert cost per month in 2026? We break down Life Alert pricing, the 3-year contract requirement, and whether cheaper alternatives offer better value.",
  alternates: { canonical: "https://medicalalertreview.com/life-alert-cost" },
};


const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Life Alert",
    "description": "Medical alert system requiring a 3-year contract, starting at $49.95/month.",
    "brand": { "@type": "Brand", "name": "Life Alert" }
  },
  "reviewRating": { "@type": "Rating", "ratingValue": "7.8", "bestRating": "10", "worstRating": "1" },
  "author": { "@type": "Organization", "name": "Medical Alert Review", "url": "https://medicalalertreview.com" },
  "reviewBody": "Life Alert costs $49.95 to $89.95 per month and requires a 3-year contract plus upfront equipment fees of $95 to $198. While it has strong brand recognition and reliable monitoring, it is significantly more expensive than Medical Guardian ($29.95/mo) and Bay Alarm Medical ($19.95/mo), both of which offer no-contract options."
};

export default function LifeAlertCost() {
  const faq = [
    { q: "How much does Life Alert cost per month in 2026?", a: "Life Alert costs between $49.95 and $89.95 per month depending on the plan. The base home plan is $49.95/month. Adding a mobile GPS button costs more. All plans require a 3-year contract." },
    { q: "Does Life Alert require a contract?", a: "Yes. Life Alert requires a 3-year contract, which is the longest commitment in the industry. Early termination fees apply if you cancel before the contract ends." },
    { q: "Is Life Alert worth the cost?", a: "Life Alert has strong brand recognition and reliable monitoring, but it is significantly more expensive than comparable services. Medical Guardian and Bay Alarm Medical offer similar or better features starting at $19.95 to $29.95 per month with no long-term contract." },
    { q: "What is the cheapest medical alert system?", a: "Bay Alarm Medical starts at $19.95/month with no contract — less than half the cost of Life Alert's base plan. Medical Guardian starts at $29.95/month. Both offer comparable 24/7 monitoring." },
    { q: "Does Life Alert have fall detection?", a: "Life Alert does not currently offer automatic fall detection — you must press the button yourself. Competitors like Medical Guardian and Bay Alarm Medical offer fall detection as an add-on." },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> › Life Alert Cost
        </nav>

        <h1 className="text-3xl font-bold mb-2">Life Alert Cost in 2026: What You Will Actually Pay</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8 text-sm">
          <p className="font-semibold text-yellow-900 mb-1">The 3-Year Contract</p>
          <p className="text-yellow-800">Life Alert requires a 36-month contract for all plans — the longest commitment in the industry. Most competitors are month-to-month with no cancellation fees.</p>
        </div>

        <h2 className="text-xl font-bold mb-4">Life Alert Pricing Breakdown</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">Plan</th>
                <th className="text-left p-3 border">Monthly Cost</th>
                <th className="text-left p-3 border">3-Year Total</th>
                <th className="text-left p-3 border">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Home Plan", "$49.95", "$1,798", "Home button + base unit"],
                ["Home + Mobile", "$69.95", "$2,518", "Home + GPS mobile button"],
                ["Home + Mobile + Neck", "$89.95", "$3,238", "All devices included"],
              ].map(([plan, mo, total, cov]) => (
                <tr key={plan} className="border-b">
                  <td className="p-3 border font-medium">{plan}</td>
                  <td className="p-3 border">{mo}</td>
                  <td className="p-3 border text-red-600 font-medium">{total}</td>
                  <td className="p-3 border text-gray-600">{cov}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-4">Life Alert vs. Cheaper Alternatives</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">Brand</th>
                <th className="text-left p-3 border">Starting Price</th>
                <th className="text-left p-3 border">Contract</th>
                <th className="text-left p-3 border">Fall Detection</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Life Alert", "$49.95/mo", "3 years", "No"],
                ["Bay Alarm Medical", "$19.95/mo", "None", "Yes (+$10/mo)"],
                ["Medical Guardian", "$29.95/mo", "None", "Yes (+$10/mo)"],
                ["Lively Mobile2", "$24.99/mo", "None", "Yes (+$6.99/mo)"],
              ].map(([brand, price, contract, fall]) => (
                <tr key={brand} className={`border-b ${brand === "Life Alert" ? "bg-red-50" : ""}`}>
                  <td className="p-3 border font-medium">{brand}</td>
                  <td className="p-3 border">{price}</td>
                  <td className="p-3 border">{contract}</td>
                  <td className="p-3 border">{fall}</td>
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

        <div className="bg-[#e8f4f8] rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Bottom Line on Life Alert Cost</p>
          <p className="text-gray-700 mb-3">Life Alert charges 2-3x more than competitors and locks you into a 3-year contract. For most families, <a href="/bay-alarm-medical-review" className="text-[#1a5f7a] underline">Bay Alarm Medical</a> or <a href="/medical-guardian-review" className="text-[#1a5f7a] underline">Medical Guardian</a> offer equal or better protection at a fraction of the cost.</p>
        </div>
      </div>
    </>
  );
}
