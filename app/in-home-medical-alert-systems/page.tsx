import type { Metadata } from "next";
import Byline from "@/app/components/Byline";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ArticleSchema from "@/app/components/ArticleSchema";
import CtaBlock from "@/app/components/CtaBlock";
import Sources from "@/app/components/Sources";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import { SITE, SOURCES } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Best In-Home Medical Alert Systems (2026)" },
  description:
    "The best in-home medical alert systems for 2026 — base-station units for seniors who are mostly home. Compare Bay Alarm, Medical Guardian, and Lifeline on price, range, and landline vs. cellular.",
  alternates: { canonical: `${SITE.url}/in-home-medical-alert-systems` },
  openGraph: {
    title: "Best In-Home Medical Alert Systems (2026)",
    description:
      "In-home base-station medical alerts compared on price, range, and landline vs. cellular connection — and who they're right for.",
    url: `${SITE.url}/in-home-medical-alert-systems`,
    type: "article",
    images: [{ url: `${SITE.url}/og/in-home-medical-alert-systems.png`, width: 1200, height: 630 }],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best In-Home Medical Alert Systems 2026",
  "description": "Top in-home base-station medical alert systems for seniors who are primarily at home, compared on price, range, and connection type.",
  "url": "https://medicalalertreview.com/in-home-medical-alert-systems",
  "numberOfItems": 3,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Bay Alarm Medical SOS Home", "url": "https://medicalalertreview.com/bay-alarm-medical-review" },
    { "@type": "ListItem", "position": 2, "name": "Medical Guardian Classic Guardian", "url": "https://medicalalertreview.com/medical-guardian-review" },
    { "@type": "ListItem", "position": 3, "name": "Lifeline HomeSafe", "url": "https://medicalalertreview.com/fall-detection-medical-alert" },
  ],
};

const picks = [
  {
    badge: "Best Value",
    name: "Bay Alarm Medical — SOS Home",
    price: "$19.95/mo landline · $24.95/mo cellular",
    range: "1,000 ft from base",
    fall: "Add-on (+$10/mo)",
    note: "The lowest monthly price in the industry, with free monitoring for a second person in the home. The landline option at $19.95 is the cheapest monitored in-home alert you can buy.",
    href: "/bay-alarm-medical-review",
    cta: "Read Bay Alarm Review",
  },
  {
    badge: "Best Overall",
    name: "Medical Guardian — Classic Guardian",
    price: "$29.95/mo (landline or cellular)",
    range: "1,300 ft from base",
    fall: "Add-on (+$10/mo)",
    note: "The longest range here and a choice of landline or cellular on the same plan. No contract, US-based monitoring, and the easiest upgrade path if the senior later needs a GPS device.",
    href: "/medical-guardian-review",
    cta: "Read Medical Guardian Review",
  },
  {
    badge: "Best for Fall Detection",
    name: "Lifeline — HomeSafe with AutoAlert",
    price: "$29.95/mo (+$15/mo AutoAlert)",
    range: "800 ft from base",
    fall: "Add-on (+$15/mo)",
    note: "From the company that invented the medical alert (formerly Philips Lifeline). A familiar, comfortable pendant and a long track record — though its fall-detection add-on is the most expensive of the three.",
    href: "/fall-detection-medical-alert",
    cta: "See Fall Detection Guide",
  },
];

const faq = [
  { q: "What is an in-home medical alert system?", a: "An in-home medical alert system uses a base station that plugs into a wall outlet, plus a wearable help button (pendant or wristband). When the button is pressed, the base station connects the wearer to a 24/7 monitoring center over a landline or built-in cellular connection. It only works within range of the base — typically 800 to 1,400 feet — so it's designed for seniors who spend most of their time at home." },
  { q: "What is the cheapest in-home medical alert system?", a: "Bay Alarm Medical's SOS Home plan is the cheapest monitored in-home system at $19.95/month with a landline, or $24.95/month with cellular. Medical Guardian's Classic Guardian is $29.95/month. All are month-to-month with no contract." },
  { q: "Do in-home medical alert systems need a landline?", a: "No. Most in-home systems now offer a cellular base station that works without a phone line, using AT&T or Verizon's network. A landline option is usually a few dollars cheaper per month if the home already has phone service. Cellular is the better choice if the home has no landline or unreliable phone service." },
  { q: "How far does an in-home medical alert reach?", a: "Range from the base station is typically 800 to 1,400 feet, depending on the system and the home's construction. Medical Guardian's Classic Guardian reaches about 1,300 feet, Bay Alarm about 1,000 feet. That usually covers the whole house and yard, but thick walls and large lots can reduce it — test the far corners after setup." },
  { q: "Do in-home systems have fall detection?", a: "Yes, as a paid add-on. A fall-detection pendant automatically calls the monitoring center when it senses a hard fall, even if the button isn't pressed. It costs about $10/month with Bay Alarm and Medical Guardian, and $15/month with Lifeline. For seniors with a fall history or who live alone, it's usually worth it." },
  { q: "In-home or mobile — which does my parent need?", a: "Choose an in-home system if your parent spends nearly all their time at home, rarely drives, or has limited mobility — it's cheaper and the base station never needs charging. Choose a mobile GPS device if they're still active and leave home regularly, since an in-home unit offers no protection outside its range." },
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

export default function InHomeMedicalAlertSystems() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleSchema
        type="MedicalWebPage"
        headline="Best In-Home Medical Alert Systems (2026)"
        description="In-home base-station medical alerts compared on price, range, and landline vs. cellular connection — and who they're right for."
        path="/in-home-medical-alert-systems"
        published="2026-03-10"
        updated="2026-06-17"
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[{ label: "Buying Guides" }, { label: "In-Home Systems" }]} />

        <h1 className="text-3xl font-bold mb-2">Best In-Home Medical Alert Systems (2026)</h1>
        <Byline updated="2026-06-17" />

        <p className="text-ink-soft leading-relaxed mb-6">
          An in-home medical alert system is the simplest, cheapest form of monitored protection: a
          base station that plugs into the wall and a waterproof button worn as a pendant or
          wristband. Press it and a 24/7 monitoring center answers within seconds. There&apos;s
          nothing to charge and no smartphone to manage — which is exactly why it&apos;s the right
          fit for seniors who spend most of their time at home, and the wrong fit for those who
          don&apos;t. This guide covers the best options for 2026 and the two practical choices that
          actually matter: landline vs. cellular, and whether to add fall detection.
        </p>

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-8 text-sm leading-relaxed">
          <p className="eyebrow mb-2">Who it&apos;s for</p>
          <p className="text-ink-soft">
            Best for seniors who are <strong>mostly or always at home</strong> — limited mobility,
            rarely drive, or in assisted living. It is the <strong>cheapest monitored option</strong> and
            never needs charging. If your parent still drives or leaves home regularly, an in-home
            unit gives <strong>no protection outside the house</strong> — look at a{" "}
            <a href="/best-medical-alert-watches" className="text-brand underline">mobile GPS device or watch</a> instead.
          </p>
        </div>

        <SectionHeading eyebrow="Our top picks">Best In-Home Systems</SectionHeading>
        <div className="space-y-4 mb-10">
          {picks.map((p) => (
            <div key={p.name} className="bg-paper-raised border border-rule rounded-panel p-5">
              <span className="bg-brand-tint text-brand text-xs font-semibold px-2 py-0.5 rounded-full">{p.badge}</span>
              <h3 className="font-bold mt-2 mb-1">{p.name}</h3>
              <p className="text-brand font-semibold text-sm mb-2">{p.price}</p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-ink-mute mb-3">
                <div><dt className="inline font-medium text-ink">Range: </dt><dd className="inline">{p.range}</dd></div>
                <div><dt className="inline font-medium text-ink">Fall detection: </dt><dd className="inline">{p.fall}</dd></div>
              </dl>
              <p className="text-sm bg-band rounded p-2 mb-4">{p.note}</p>
              <a href={p.href} className="inline-block bg-brand text-white text-sm font-semibold px-4 py-2 rounded-card hover:bg-brand-dark transition-colors">
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="The comparison ledger">Side-by-Side Comparison</SectionHeading>
        <div className="ledger-table mb-10">
          <table className="min-w-[620px]">
            <thead>
              <tr>
                <th>System</th>
                <th>Starting Price</th>
                <th>Range</th>
                <th>Connection</th>
                <th>Fall Detection</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bay Alarm SOS Home", "$19.95/mo", "1,000 ft", "Landline or cellular", "+$10/mo"],
                ["Medical Guardian Classic", "$29.95/mo", "1,300 ft", "Landline or cellular", "+$10/mo"],
                ["Lifeline HomeSafe", "$29.95/mo", "800 ft", "Landline or cellular", "+$15/mo"],
                ["Life Alert (home)", "$49.95/mo (est.)", "800 ft", "Landline or cellular", "Not available"],
              ].map(([sys, price, range, conn, fall]) => (
                <tr key={sys}>
                  <td>{sys}</td>
                  <td>{price}</td>
                  <td>{range}</td>
                  <td>{conn}</td>
                  <td>{fall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="The key choice">Landline vs. Cellular: Which Base Station?</SectionHeading>
        <p className="text-ink-mute text-sm leading-relaxed mb-4">
          Every system above offers two versions of the base station. The right one depends entirely
          on the home, not the senior.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-sm">
          <div className="border border-brand-tint-edge bg-brand-tint/50 rounded-panel p-5">
            <p className="font-bold mb-2">Landline base station</p>
            <p className="text-ink-mute mb-3">Plugs into an existing phone jack. Usually a few dollars cheaper per month (Bay Alarm&apos;s $19.95 plan is landline).</p>
            <p className="text-ink-mute italic">Choose if: the home has reliable landline phone service the senior intends to keep.</p>
          </div>
          <div className="border border-affirm/30 bg-affirm-tint/60 rounded-panel p-5">
            <p className="font-bold mb-2">Cellular base station</p>
            <p className="text-ink-mute mb-3">Has a built-in cellular connection (AT&amp;T or Verizon) and needs no phone line. Works during a landline outage.</p>
            <p className="text-ink-mute italic">Choose if: the home has no landline, weak phone service, or you&apos;d rather not depend on it. Confirm cell coverage at the address.</p>
          </div>
        </div>

        <SectionHeading eyebrow="The add-on question">Should You Add Fall Detection?</SectionHeading>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">
          A standard button only works if the wearer is conscious and able to press it. Automatic
          fall detection closes that gap — the pendant calls the monitoring center on its own when
          it senses a hard fall. It adds about $10/month (Bay Alarm, Medical Guardian) or $15/month
          (Lifeline). Because falls in the home most often happen in the bathroom and on stairs —
          and falls are the leading cause of injury death for adults 65+ (<a href={SOURCES.cdcFalls.url} target="_blank" rel="noopener noreferrer nofollow" className="text-brand underline">CDC</a>) —
          it&apos;s worth the add-on for anyone with a fall history, balance issues, or who lives
          alone. For a lower-risk senior with family nearby, the standard button may be enough.
        </p>
        <p className="text-ink-soft text-sm leading-relaxed mb-10">
          Whichever you choose, the pendant must be <strong>waterproof and worn in the shower</strong> —
          that&apos;s where many serious falls happen. All three picks above are shower-safe.
        </p>

        <Verdict label="The desk's recommendation">
          For the lowest cost,{" "}
          <a href="/bay-alarm-medical-review" className="underline">Bay Alarm Medical&apos;s SOS Home</a>{" "}
          at $19.95/month is the best value in monitored in-home protection. For
          the longest range and the easiest path to add GPS later,{" "}
          <a href="/medical-guardian-review" className="underline">Medical Guardian&apos;s Classic Guardian</a>{" "}
          is the best overall. Skip Life Alert&apos;s in-home plan unless brand
          familiarity matters — at an estimated $49.95/month with a 3-year
          contract, it costs more than twice as much for comparable protection
          (<a href="/life-alert-cost" className="underline">see the full cost breakdown</a>).
        </Verdict>
        <div className="mb-8">
          <a href="/best-medical-alert-systems" className="inline-block bg-brand text-white font-semibold px-5 py-2.5 rounded-card hover:bg-brand-dark transition-colors">
            Compare All Medical Alert Systems →
          </a>
        </div>

        <SectionHeading eyebrow="Questions we hear most">Frequently Asked Questions</SectionHeading>
        <div className="space-y-4 mb-10">
          {faq.map(({ q, a }) => (
            <div key={q} className="bg-paper-raised border border-rule rounded-card p-4">
              <p className="font-semibold mb-2">{q}</p>
              <p className="text-sm text-ink-soft">{a}</p>
            </div>
          ))}
        </div>

        <CtaBlock
          brandKey="bay-alarm"
          heading="See the cheapest monitored in-home plan"
          note="Bay Alarm Medical's SOS Home is the lowest-cost monitored in-home option — from $19.95/mo (landline) or $24.95/mo (cellular), no contract, free spouse monitoring."
        />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 text-sm">
          <p className="eyebrow mb-3">Related reading</p>
          <ul className="space-y-2">
            <li><a href="/best-medical-alert-systems" className="text-brand underline">Best Medical Alert Systems (2026)</a></li>
            <li><a href="/best-medical-alert-watches" className="text-brand underline">Best Medical Alert Watches</a></li>
            <li><a href="/no-monthly-fee-medical-alert" className="text-brand underline">No Monthly Fee Options</a></li>
            <li><a href="/medical-alert-system-for-elderly" className="text-brand underline">Best Systems for the Elderly</a></li>
            <li><a href="/does-medicare-cover-medical-alert-systems" className="text-brand underline">Does Medicare Cover It?</a></li>
          </ul>
        </div>

        <Sources
          sources={[
            { label: "Bay Alarm Medical — SOS Home plans & pricing", url: "https://www.bayalarmmedical.com" },
            { label: "Medical Guardian — Classic Guardian", url: "https://www.medicalguardian.com" },
            { label: "Lifeline — HomeSafe (formerly Philips Lifeline)", url: "https://www.lifeline.com" },
            SOURCES.cdcFalls,
            SOURCES.cdcSteadi,
          ]}
        />
      </div>
    </>
  );
}
