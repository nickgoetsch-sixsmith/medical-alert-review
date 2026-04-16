import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Fall Detection Medical Alert Systems 2026 | Auto-Detect Falls",
  description:
    "The best fall detection medical alert devices for elderly in 2026. These systems automatically detect a fall and call for help — no button press required.",
};

export default function FallDetectionMedicalAlert() {
  const devices = [
    {
      name: "Medical Guardian MGMove",
      price: "$39.95/mo",
      detection: "Automatic fall detection (+$10/mo)",
      form: "Smartwatch",
      coverage: "Home + GPS",
      pros: ["Wrist-worn — harder to forget", "GPS tracks location", "Long battery life"],
      verdict: "Best overall fall detection watch for elderly",
    },
    {
      name: "Bay Alarm Medical SOS All-in-One",
      price: "$37.95/mo",
      detection: "Automatic fall detection (+$10/mo)",
      form: "Pendant or wristband",
      coverage: "Home + GPS",
      pros: ["Lowest base price with GPS", "Free spouse monitoring", "Works on AT&T + Verizon"],
      verdict: "Best value with fall detection",
    },
    {
      name: "Lively Mobile2",
      price: "$24.99/mo",
      detection: "Automatic fall detection (+$6.99/mo)",
      form: "Compact mobile device",
      coverage: "Nationwide GPS",
      pros: ["Cheapest fall detection add-on", "No contract", "Urgent Response button"],
      verdict: "Most affordable fall detection option",
    },
    {
      name: "Apple Watch (with Medical ID)",
      price: "$199+ device",
      detection: "Built-in fall detection",
      form: "Smartwatch",
      coverage: "GPS + cellular",
      pros: ["No monthly monitoring fee", "Fall detection built in", "Full smartwatch features"],
      verdict: "Best for tech-savvy active seniors",
    },
  ];

  const faq = [
    { q: "How does automatic fall detection work on medical alert devices?", a: "Fall detection uses accelerometers and algorithms to identify the motion pattern of a hard fall — a sudden downward acceleration followed by impact and stillness. When detected, the device automatically initiates a call to the monitoring center without requiring the user to press a button." },
    { q: "How accurate is fall detection on medical alert systems?", a: "Fall detection is approximately 80-95% accurate depending on the device and fall type. False positives (accidental triggers) can occur from sitting down hard or dropping the device. No fall detection system is 100% reliable, which is why the manual help button remains important." },
    { q: "What is the best fall detection device for elderly who live alone?", a: "For elderly living alone, Medical Guardian with fall detection add-on is our top pick — it combines automatic fall detection with 24/7 US-based monitoring and GPS coverage. Bay Alarm Medical is the best value option at a lower monthly cost." },
    { q: "Does Medicare cover fall detection devices?", a: "Original Medicare does not cover fall detection medical alert devices. Some Medicare Advantage plans include a supplemental benefit for safety devices — check your specific plan. FSA and HSA funds can typically be used for medical alert systems." },
    { q: "Do fall detection pendants work in the shower?", a: "Yes — most medical alert fall detection pendants are waterproof or water-resistant and designed to be worn in the shower, which is one of the highest-risk areas for falls among elderly adults." },
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
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> › Fall Detection Medical Alert
        </nav>

        <h1 className="text-3xl font-bold mb-2">Best Fall Detection Medical Alert Devices for Elderly (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: April 2026</p>

        <div className="bg-[#e8f4f8] rounded-xl p-5 mb-8 text-sm">
          <p className="font-semibold text-[#1a5f7a] mb-1">Why Fall Detection Matters</p>
          <p className="text-gray-700">1 in 4 Americans over 65 falls each year. The biggest risk is not the fall itself — it is lying undetected for hours. Automatic fall detection triggers an alert even when the user cannot press a button.</p>
        </div>

        <h2 className="text-xl font-bold mb-6">Top Fall Detection Devices</h2>
        <div className="space-y-6 mb-10">
          {devices.map((d, i) => (
            <div key={d.name} className="border rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs text-gray-400 font-medium">#{i + 1}</span>
                  <h3 className="text-lg font-bold">{d.name}</h3>
                </div>
                <span className="text-[#1a5f7a] font-semibold text-sm">{d.price}</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-sm mb-4">
                <div><p className="text-gray-400 text-xs">Fall Detection</p><p className="font-medium">{d.detection}</p></div>
                <div><p className="text-gray-400 text-xs">Form Factor</p><p className="font-medium">{d.form}</p></div>
                <div><p className="text-gray-400 text-xs">Coverage</p><p className="font-medium">{d.coverage}</p></div>
              </div>
              <ul className="space-y-1 mb-3">
                {d.pros.map(p => (
                  <li key={p} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>{p}
                  </li>
                ))}
              </ul>
              <p className="text-sm bg-gray-50 rounded p-2 font-medium text-gray-700">{d.verdict}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">How Fall Detection Works</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10 text-sm text-center">
          {[
            { step: "1", title: "Fall Detected", desc: "Accelerometer senses sudden impact and stillness consistent with a fall" },
            { step: "2", title: "Alert Triggered", desc: "Device automatically connects to 24/7 monitoring center within seconds" },
            { step: "3", title: "Help Dispatched", desc: "Operator speaks through device, contacts family, or dispatches 911 if needed" },
          ].map(s => (
            <div key={s.step} className="border rounded-xl p-4">
              <div className="w-8 h-8 bg-[#1a5f7a] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">{s.step}</div>
              <p className="font-semibold mb-1">{s.title}</p>
              <p className="text-gray-500">{s.desc}</p>
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

        <div className="bg-gray-50 rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Our Recommendation</p>
          <p className="text-gray-700 mb-3">For most families, <a href="/medical-guardian-review" className="text-[#1a5f7a] underline">Medical Guardian</a> with the fall detection add-on ($39.95 + $10/mo) offers the best combination of automatic fall detection, GPS coverage, and reliable monitoring. If budget is the priority, <a href="/bay-alarm-medical-review" className="text-[#1a5f7a] underline">Bay Alarm Medical</a> starts lower and offers the same fall detection add-on.</p>
        </div>
      </div>
    </>
  );
}
