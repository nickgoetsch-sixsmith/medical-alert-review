import type { Metadata } from "next";
import Link from "next/link";
import OutboundLink from "@/app/components/OutboundLink";
import Byline from "@/app/components/Byline";
import Sources from "@/app/components/Sources";
import { SITE, SOURCES } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Best Medical Alert Watches for Seniors (2026)" },
  description:
    "The best medical alert watches in 2026, from monitored smartwatches like the Medical Guardian MGMove to the Apple Watch with built-in fall detection — compared on price, monitoring, and battery.",
  alternates: { canonical: `${SITE.url}/best-medical-alert-watches` },
  openGraph: {
    title: "Best Medical Alert Watches for Seniors (2026)",
    description:
      "Monitored medical alert smartwatches vs. consumer watches with fall detection — compared on price, monitoring, GPS, and battery life.",
    url: `${SITE.url}/best-medical-alert-watches`,
    type: "article",
    images: [{ url: `${SITE.url}/og/best-medical-alert-watches.png`, width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicalalertreview.com/" },
    { "@type": "ListItem", "position": 2, "name": "Best Medical Alert Watches", "item": "https://medicalalertreview.com/best-medical-alert-watches" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Medical Alert Watches 2026",
  "description": "Top medical alert watches for seniors — monitored smartwatches and consumer watches with fall detection, compared.",
  "url": "https://medicalalertreview.com/best-medical-alert-watches",
  "numberOfItems": 4,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Medical Guardian MGMove" },
    { "@type": "ListItem", "position": 2, "name": "Bay Alarm Medical SOS All-in-One (wristband)" },
    { "@type": "ListItem", "position": 3, "name": "Apple Watch SE" },
    { "@type": "ListItem", "position": 4, "name": "Samsung Galaxy Watch" },
  ],
};

type Watch = {
  name: string;
  kind: "Monitored" | "Consumer";
  badge: string;
  price: string;
  monitoring: string;
  fall: string;
  battery: string;
  best: string;
  cta: { type: "site" | "amazon"; href: string; label: string };
};

const watches: Watch[] = [
  {
    name: "Medical Guardian MGMove",
    kind: "Monitored",
    badge: "Best Overall",
    price: "$39.95/mo (+$10/mo fall detection)",
    monitoring: "24/7 US-based monitoring center",
    fall: "Add-on",
    battery: "Up to 3 days",
    best: "Best for seniors who want a real smartwatch look with professional monitoring, GPS, and step/weather apps built in.",
    cta: { type: "site", href: "https://www.medicalguardian.com", label: "Visit Medical Guardian" },
  },
  {
    name: "Bay Alarm Medical SOS All-in-One (wristband)",
    kind: "Monitored",
    badge: "Best Value",
    price: "$37.95/mo (+$10/mo fall detection)",
    monitoring: "24/7 UL-listed monitoring center",
    fall: "Add-on",
    battery: "Up to 5 days",
    best: "Best value in monitored wrist-worn alerts — the same SOS device offered as a wristband, with free second-user monitoring.",
    cta: { type: "site", href: "https://www.bayalarmmedical.com", label: "Visit Bay Alarm Medical" },
  },
  {
    name: "Apple Watch SE",
    kind: "Consumer",
    badge: "Best Smartwatch (No Fees)",
    price: "~$249 device · no monthly fee",
    monitoring: "Calls 911 directly (no monitoring center)",
    fall: "Built in",
    battery: "Up to 18 hours",
    best: "Best for tech-comfortable, active seniors with an iPhone who want fall detection and Emergency SOS without a subscription.",
    cta: { type: "amazon", href: "https://www.amazon.com/dp/B0CHX9N594?tag=medicalalertreviews-20", label: "Check Price on Amazon" },
  },
  {
    name: "Samsung Galaxy Watch",
    kind: "Consumer",
    badge: "Best for Android",
    price: "~$200–$300 device · no monthly fee",
    monitoring: "Calls emergency contacts / 911 (no monitoring center)",
    fall: "Built in",
    battery: "Up to 40 hours",
    best: "Best built-in fall detection and SOS for Android users, paired with a Samsung phone. Longer battery life than the Apple Watch.",
    cta: { type: "amazon", href: "https://www.amazon.com/s?k=Samsung+Galaxy+Watch&tag=medicalalertreviews-20", label: "Check Price on Amazon" },
  },
];

const faq = [
  { q: "What is a medical alert watch?", a: "A medical alert watch is a wrist-worn device that can summon help in an emergency. There are two types: monitored medical alert smartwatches (like the Medical Guardian MGMove) that connect to a professional 24/7 monitoring center for a monthly fee, and consumer smartwatches (like the Apple Watch) that detect falls and call 911 or your emergency contacts directly with no subscription." },
  { q: "Is the Apple Watch a good medical alert device?", a: "For an active, tech-comfortable senior who already uses an iPhone, yes. The Apple Watch SE and newer models detect hard falls and can place an Emergency SOS call to 911 with no monthly fee. The trade-offs are daily charging and that it calls 911 directly rather than a monitoring center that knows the person's history and can reach family." },
  { q: "Do medical alert watches have fall detection?", a: "Most do, but it works differently. Consumer watches like the Apple Watch and Samsung Galaxy Watch include fall detection at no extra cost. Monitored medical alert watches such as the MGMove offer fall detection as a paid add-on (typically $10/month) — the difference is that a detected fall connects to a staffed monitoring center rather than dialing 911 directly." },
  { q: "What is the best medical alert watch for seniors?", a: "For most seniors who want professional monitoring, the Medical Guardian MGMove is our top pick — it looks like a normal smartwatch, includes GPS, and connects to a 24/7 US-based center. For active seniors comfortable with technology who want no monthly fee, an Apple Watch SE (with an iPhone) or a Samsung Galaxy Watch (with an Android phone) is the better fit." },
  { q: "Do medical alert watches need a smartphone?", a: "Monitored watches like the MGMove and Bay Alarm SOS wristband have their own cellular connection and do not need a smartphone. Consumer smartwatches generally do: an Apple Watch pairs with an iPhone (a cellular model can work more independently), and a Galaxy Watch pairs with an Android phone." },
  { q: "How much does a medical alert watch cost?", a: "Monitored medical alert watches cost about $37–$40 per month plus a $10/month fall-detection add-on, with no large upfront device fee. Consumer smartwatches are a one-time purchase of roughly $200–$300 with no monthly fee, but they call 911 or family instead of a monitoring center." },
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

export default function BestMedicalAlertWatches() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#1a5f7a]">Home</Link> › Best Medical Alert Watches
        </nav>

        <h1 className="text-3xl font-bold mb-2">Best Medical Alert Watches for Seniors (2026)</h1>
        <Byline updated="2026-06-17" />

        <p className="text-gray-700 leading-relaxed mb-6">
          A watch is the medical alert device seniors are most likely to actually wear — it looks
          normal, it doesn&apos;t shout &ldquo;I&apos;m frail,&rdquo; and it&apos;s harder to leave
          on the nightstand than a pendant. But &ldquo;medical alert watch&rdquo; covers two very
          different products, and choosing the wrong type is the most common mistake. This guide
          sorts them out and names the best pick for each situation.
        </p>

        <div className="bg-[#e8f4f8] border border-blue-100 rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="font-semibold text-[#134a61] mb-2">Two kinds of medical alert watch</p>
          <p className="text-gray-700 mb-2">
            <strong>Monitored alert watches</strong> (Medical Guardian MGMove, Bay Alarm SOS
            wristband) charge a monthly fee and connect to a staffed 24/7 center that knows the
            wearer and can call family or dispatch EMS.
          </p>
          <p className="text-gray-700">
            <strong>Consumer smartwatches</strong> (Apple Watch, Samsung Galaxy Watch) cost a
            one-time price with no fee and detect falls, but they call 911 or preset contacts
            directly — there&apos;s no monitoring center on the other end.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-4">Our Top Picks</h2>
        <div className="space-y-4 mb-10">
          {watches.map((w) => (
            <div key={w.name} className="border rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <span className="bg-[#e8f4f8] text-[#1a5f7a] text-xs font-semibold px-2 py-0.5 rounded-full">{w.badge}</span>
                  <h3 className="font-bold mt-2">{w.name}</h3>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${w.kind === "Monitored" ? "text-green-700 bg-green-50" : "text-amber-700 bg-amber-50"}`}>
                  {w.kind}
                </span>
              </div>
              <p className="text-[#1a5f7a] font-semibold text-sm mb-2">{w.price}</p>
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
                <div><dt className="inline font-medium text-gray-800">Monitoring: </dt><dd className="inline">{w.monitoring}</dd></div>
                <div><dt className="inline font-medium text-gray-800">Fall detection: </dt><dd className="inline">{w.fall}</dd></div>
                <div><dt className="inline font-medium text-gray-800">Battery: </dt><dd className="inline">{w.battery}</dd></div>
              </dl>
              <p className="text-sm bg-gray-50 rounded p-2 mb-4">{w.best}</p>
              {w.cta.type === "site" ? (
                <OutboundLink
                  href={w.cta.href}
                  label={w.cta.label}
                  className="inline-block bg-[#1a5f7a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#134a61] transition-colors"
                >
                  {w.cta.label} →
                </OutboundLink>
              ) : (
                <OutboundLink
                  href={w.cta.href}
                  label={w.cta.label}
                  className="inline-block bg-[#FF9900] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#e68a00] transition-colors"
                >
                  {w.cta.label} →
                </OutboundLink>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Monitored Watch vs. Consumer Smartwatch</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          This is the real decision. Both can call for help after a fall — the difference is who
          answers and what they can do.
        </p>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">&nbsp;</th>
                <th className="text-left p-3 border">Monitored Alert Watch</th>
                <th className="text-left p-3 border">Consumer Smartwatch</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Who answers an alert", "Trained 24/7 monitoring operator", "911 dispatcher or your emergency contacts"],
                ["Knows the wearer's history", "Yes — medical notes on file", "No"],
                ["Notifies family automatically", "Yes", "Apple/Samsung notify preset contacts"],
                ["Monthly fee", "~$40–$50/mo with fall detection", "None"],
                ["Upfront device cost", "Low or none", "~$200–$300"],
                ["Needs a smartphone", "No (built-in cellular)", "Usually yes"],
                ["Battery life", "3–5 days", "~1–2 days (daily charging)"],
                ["Looks like a normal watch", "Increasingly, yes (MGMove)", "Yes"],
              ].map(([feat, mon, con]) => (
                <tr key={feat} className="border-b align-top">
                  <td className="p-3 border font-medium">{feat}</td>
                  <td className="p-3 border text-gray-600">{mon}</td>
                  <td className="p-3 border text-gray-600">{con}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm leading-relaxed">
          <p className="font-semibold text-amber-900 mb-2">The honest trade-off on battery</p>
          <p className="text-amber-800">
            A consumer smartwatch that needs charging every night is off the wrist — and useless —
            for the hours it sits on the charger, which for many seniors is overnight, when bathroom
            falls are common. Monitored alert watches last 3–5 days, and a charged-overnight pendant
            or in-home button may be the safer choice for someone who won&apos;t reliably manage daily
            charging. Match the device to the routine, not the spec sheet.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-4">Who Should Buy Which</h2>
        <ul className="text-sm text-gray-700 space-y-3 mb-10 list-disc pl-5">
          <li><strong>Choose a monitored alert watch</strong> (MGMove or Bay Alarm wristband) if the senior lives alone, has a fall history, or you want a trained operator and automatic family notification — and you don&apos;t want to depend on a phone or nightly charging.</li>
          <li><strong>Choose an Apple Watch</strong> if the senior is active, comfortable with technology, already has an iPhone, and wants fall detection with no monthly fee.</li>
          <li><strong>Choose a Samsung Galaxy Watch</strong> for the same active, tech-comfortable senior who uses an Android phone — its longer battery life is a real advantage.</li>
          <li><strong>Consider a pendant or in-home system instead</strong> if daily charging is unrealistic or the senior won&apos;t adapt to a touchscreen. See our <a href="/best-medical-alert-systems" className="text-[#1a5f7a] underline">full systems comparison</a>.</li>
        </ul>

        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {faq.map(({ q, a }) => (
            <div key={q} className="border rounded-lg p-4">
              <p className="font-semibold mb-2">{q}</p>
              <p className="text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#e8f4f8] rounded-xl p-6 text-sm mb-8">
          <p className="font-semibold mb-3 text-lg">Our Recommendation</p>
          <p className="text-gray-700 mb-4">
            For most families, the <a href="/medical-guardian-review" className="text-[#1a5f7a] underline">Medical Guardian MGMove</a> is
            the best medical alert watch — a normal-looking smartwatch with GPS and 24/7 US-based
            monitoring. If the senior is active, tech-comfortable, and you&apos;d rather avoid a
            monthly fee, an Apple Watch SE (with fall detection) is the better fit. Still deciding
            between a watch, a pendant, and an in-home unit? Start with our{" "}
            <a href="/fall-detection-medical-alert" className="text-[#1a5f7a] underline">fall detection guide</a>.
          </p>
          <a href="/best-medical-alert-systems" className="inline-block bg-[#1a5f7a] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#134a61] transition-colors">
            Compare All Medical Alert Systems →
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Related Reading</p>
          <ul className="space-y-2">
            <li><a href="/fall-detection-medical-alert" className="text-[#1a5f7a] underline">Fall Detection Medical Alerts: How They Work</a></li>
            <li><a href="/medical-guardian-review" className="text-[#1a5f7a] underline">Medical Guardian Review</a></li>
            <li><a href="/medical-alert-system-for-elderly" className="text-[#1a5f7a] underline">Best Medical Alert Systems for the Elderly</a></li>
            <li><a href="/no-monthly-fee-medical-alert" className="text-[#1a5f7a] underline">No Monthly Fee Options</a></li>
          </ul>
        </div>

        <Sources
          sources={[
            { label: "Medical Guardian — MGMove smartwatch", url: "https://www.medicalguardian.com" },
            { label: "Bay Alarm Medical — SOS All-in-One", url: "https://www.bayalarmmedical.com" },
            { label: "Apple — Use fall detection on Apple Watch", url: "https://support.apple.com/en-us/108896" },
            { label: "Samsung — Hard fall detection on Galaxy Watch", url: "https://www.samsung.com/us/support/answer/ANS10002323/" },
            SOURCES.cdcFalls,
          ]}
        />
      </div>
    </>
  );
}
