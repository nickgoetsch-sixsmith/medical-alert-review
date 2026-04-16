import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay Alarm Medical Review 2026 | Pricing, Plans & Verdict",
  description:
    "Bay Alarm Medical review: Is it the best value medical alert system? We break down pricing starting at $19.95/mo, devices, fall detection, and how it compares.",
};

export default function BayAlarmMedicalReview() {
  const faq = [
    { q: "How much does Bay Alarm Medical cost?", a: "Bay Alarm Medical starts at $19.95/month for the SOS Home system — the lowest price among major medical alert brands. GPS plans start at $29.95/month. There are no long-term contracts." },
    { q: "Does Bay Alarm Medical have fall detection?", a: "Yes. Bay Alarm Medical offers automatic fall detection for an additional $10/month on most plans." },
    { q: "Is Bay Alarm Medical a reputable company?", a: "Yes. Bay Alarm Medical has been in business since 1946 and is a subsidiary of Bay Alarm Company, one of the largest alarm companies in the US. They are UL-listed and 5-Diamond certified." },
    { q: "Does Bay Alarm Medical work outside the home?", a: "Yes, their GPS plans (SOS Mobile and SOS Smartwatch) work anywhere with cellular coverage nationwide." },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> › Bay Alarm Medical Review
        </nav>

        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Best Value 2026</span>
        <h1 className="text-3xl font-bold mt-3 mb-2">Bay Alarm Medical Review 2026</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: April 2026 · Rating: <strong>9.1 / 10</strong></p>

        <div className="bg-[#e8f4f8] rounded-xl p-6 mb-6 grid sm:grid-cols-2 gap-4 text-sm">
          <div><p className="text-gray-500 mb-1">Starting price</p><p className="font-bold text-lg">$19.95/month</p></div>
          <div><p className="text-gray-500 mb-1">Contract</p><p className="font-bold text-lg">Month-to-month</p></div>
          <div><p className="text-gray-500 mb-1">Fall detection</p><p className="font-bold text-lg">Yes (+$10/mo)</p></div>
          <div><p className="text-gray-500 mb-1">Free spouse monitoring</p><p className="font-bold text-lg">Yes</p></div>
        </div>

        <div className="mb-8">
          <a
            href="https://www.bayalarmmedical.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a5f7a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#134a61] transition-colors"
          >
            Visit Bay Alarm Medical — From $19.95/mo →
          </a>
        </div>

        <h2 className="text-xl font-bold mb-3">What We Like</h2>
        <ul className="space-y-2 mb-8 text-sm text-gray-700">
          {["Lowest starting price of any major brand ($19.95/mo)", "Free spouse monitoring included", "No activation or equipment fees on most plans", "UL-listed, 5-Diamond monitoring center", "Works on AT&T and Verizon networks", "30-day money-back guarantee"].map(p => (
            <li key={p} className="flex gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>{p}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-3">What to Watch For</h2>
        <ul className="space-y-2 mb-8 text-sm text-gray-700">
          {["Fall detection costs extra ($10/mo)", "GPS plans cost more than home-only", "App requires smartphone for caregiver tracking"].map(p => (
            <li key={p} className="flex gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>{p}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-4">Plans & Pricing</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">Plan</th>
                <th className="text-left p-3 border">Monthly Cost</th>
                <th className="text-left p-3 border">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SOS Home", "$19.95", "Home only (landline or cellular)"],
                ["SOS Mobile", "$29.95", "Home + GPS nationwide"],
                ["SOS Smartwatch", "$29.95", "GPS smartwatch + voice calling"],
                ["SOS All-in-One", "$37.95", "Home + GPS in one device"],
              ].map(([plan, price, cov]) => (
                <tr key={plan} className="border-b">
                  <td className="p-3 border font-medium">{plan}</td>
                  <td className="p-3 border">{price}</td>
                  <td className="p-3 border text-gray-600">{cov}</td>
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
          <p className="text-gray-700 mb-4">Bay Alarm Medical is the best value medical alert system in 2026. At $19.95/month with free spouse monitoring and no activation fees, it is hard to beat on price. Compare it to our <a href="/medical-guardian-review" className="text-[#1a5f7a] underline">#1 pick, Medical Guardian</a>, if you need GPS coverage or a more polished app experience.</p>
          <a
            href="https://www.bayalarmmedical.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a5f7a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#134a61] transition-colors"
          >
            Visit Bay Alarm Medical →
          </a>
        </div>
      </div>
    </>
  );
}
