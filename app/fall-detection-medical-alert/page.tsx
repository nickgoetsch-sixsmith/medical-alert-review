import type { Metadata } from "next";
import OutboundLink from "@/app/components/OutboundLink";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Byline from "@/app/components/Byline";
import DiagramFigure from "@/app/components/DiagramFigure";
import Sources from "@/app/components/Sources";
import { CheckIcon, CrossIcon, ChevronIcon } from "@/app/components/Icon";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import { SITE, SOURCES } from "@/lib/site";
import { AFFILIATE_LINKS, FTC_DISCLOSURE } from "@/lib/affiliate-links";

export const metadata: Metadata = {
  title: { absolute: "Fall Detection Medical Alerts: How They Work + Best of 2026" },
  description:
    "How automatic fall detection works, how accurate it really is, and which medical alert systems offer it in 2026 — accuracy, false alarms, and cost.",
  alternates: { canonical: `${SITE.url}/fall-detection-medical-alert` },
  openGraph: {
    title: "How Fall Detection Medical Alerts Work + Best Devices (2026)",
    description:
      "How automatic fall detection works, how accurate it is, and which medical alert systems offer it — with cited sources.",
    url: `${SITE.url}/fall-detection-medical-alert`,
    type: "article",
    images: [{ url: `${SITE.url}/og/fall-detection-medical-alert.png`, width: 1200, height: 630 }],
  },
};

const devices = [
  {
    rank: 1,
    name: "Medical Guardian MGMove",
    badge: "Best Overall",
    badgeColor: "bg-brand-tint text-brand",
    price: "$39.95/mo",
    fallDetectionCost: "+$10/mo",
    totalWithFD: "$49.95/mo",
    form: "Smartwatch",
    coverage: "Home + GPS",
    battery: "Up to 3 days",
    waterproof: "IP67",
    pros: ["Wrist-worn — harder to forget than a pendant", "GPS tracks location outside the home", "Long battery life for a smartwatch"],
    cons: ["Fall detection is a $10/mo add-on", "Watch form may feel unfamiliar to some seniors"],
    verdict: "Best overall fall detection watch for elderly — combines automatic detection with GPS and 24/7 US-based monitoring.",
    cta: { type: "site", label: "Medical Guardian", href: AFFILIATE_LINKS["medical-guardian"].url, btnLabel: "Visit Medical Guardian →" },
  },
  {
    rank: 2,
    name: "Bay Alarm Medical SOS All-in-One",
    badge: "Best Value",
    badgeColor: "bg-brand-tint text-brand",
    price: "$37.95/mo",
    fallDetectionCost: "+$10/mo",
    totalWithFD: "$47.95/mo",
    form: "Pendant or wristband",
    coverage: "Home + GPS",
    battery: "Up to 5 days",
    waterproof: "Yes",
    pros: ["Lowest base GPS price in class", "Free second-user monitoring included", "Works on both AT&T and Verizon networks"],
    cons: ["Fall detection add-on brings total to $47.95/mo", "App interface not as polished as Medical Guardian"],
    verdict: "Best value with fall detection — solid GPS monitoring at the lowest price point in this category.",
    cta: { type: "site", label: "Bay Alarm Medical", href: AFFILIATE_LINKS["bay-alarm"].url, btnLabel: "Visit Bay Alarm Medical →" },
  },
  {
    rank: 3,
    name: "Lively Mobile2",
    badge: "Most Affordable",
    badgeColor: "bg-brand-tint text-brand",
    price: "$24.99/mo",
    fallDetectionCost: "+$9.99/mo",
    totalWithFD: "$34.98/mo",
    form: "Compact mobile device",
    coverage: "Nationwide GPS",
    battery: "Up to 24 hours",
    waterproof: "IPX7",
    pros: ["Cheapest fall detection add-on ($9.99 vs $10–$15 at competitors)", "No contract required", "Urgent Response button with GPS"],
    cons: ["Battery requires daily charging", "No dedicated in-home base station"],
    verdict: "Most affordable fall detection option. Best for budget-conscious families who still need GPS coverage outside the home.",
    cta: { type: "amazon", label: "Lively Mobile2 (Amazon)", href: "https://www.amazon.com/s?k=Lively+Mobile2+medical+alert&tag=medicalalertreviews-20", btnLabel: "Check Price on Amazon →" },
  },
  {
    rank: 4,
    name: "Lifeline HomeSafe with AutoAlert",
    badge: "Best In-Home",
    badgeColor: "bg-brand-tint text-brand",
    price: "$29.95/mo",
    fallDetectionCost: "+$15/mo",
    totalWithFD: "$44.95/mo",
    form: "Pendant (home only)",
    coverage: "In-home only",
    battery: "Up to 5 days",
    waterproof: "Yes",
    pros: ["Lifeline pioneered medical alert systems in 1974 (formerly Philips Lifeline)", "Lightweight pendant comfortable for all-day wear", "Strong in-home detection range"],
    cons: ["No GPS — only works at home", "Fall detection add-on is the most expensive at $15/mo"],
    verdict: "Best for seniors who rarely leave home and prefer a familiar pendant style from a long-established brand.",
    cta: { type: "site", label: "Lifeline", href: AFFILIATE_LINKS["lifeline"].url, btnLabel: "Visit Lifeline →" },
  },
  {
    rank: 5,
    name: "Apple Watch SE (2nd Gen)",
    badge: "Best for Active Seniors",
    badgeColor: "bg-brand-tint text-brand",
    price: "$249 (device cost)",
    fallDetectionCost: "Built-in (no add-on)",
    totalWithFD: "$0/mo (calls 911 directly)",
    form: "Smartwatch",
    coverage: "GPS + cellular",
    battery: "Up to 18 hours",
    waterproof: "50m",
    pros: ["Fall detection built in — no monthly add-on fee", "Emergency SOS calls 911 directly", "Full smartwatch features"],
    cons: ["Requires an iPhone", "No 24/7 professional monitoring by default", "Battery needs daily charging"],
    verdict: "Best for tech-savvy active seniors who use iPhone and prefer calling 911 directly over professional monitoring.",
    cta: { type: "amazon", label: "Apple Watch SE (Amazon)", href: "https://www.amazon.com/dp/B0CHX9N594?tag=medicalalertreviews-20", btnLabel: "Check Price on Amazon →" },
  },
];

const comparisonData = [
  { label: "Base monitoring price", values: ["$39.95/mo", "$37.95/mo", "$24.99/mo", "$29.95/mo", "$249 device"] },
  { label: "Fall detection cost", values: ["+$10/mo", "+$10/mo", "+$9.99/mo", "+$15/mo", "Built-in"] },
  { label: "Total with fall detection", values: ["$49.95/mo", "$47.95/mo", "$34.98/mo", "$44.95/mo", "$0/mo after device"] },
  { label: "GPS coverage", values: ["Yes", "Yes", "Yes", "No", "Yes"] },
  { label: "Works outside home", values: ["Yes", "Yes", "Yes", "No", "Yes"] },
  { label: "Waterproof", values: ["IP67", "Yes", "IPX7", "Yes", "50m"] },
  { label: "Contract required", values: ["None", "None", "None", "Month-to-month", "None"] },
  { label: "24/7 professional monitoring", values: ["Yes", "Yes", "Yes", "Yes", "No (calls 911)"] },
];

const choosingCriteria = [
  {
    title: "Form factor determines whether they will actually wear it",
    body: "The best fall detection device is the one your parent will wear every day. A pendant left on the nightstand cannot detect a fall in the bathroom. Some seniors resist anything visible; a watch looks more normal. Others find watches uncomfortable. Choose based on what they will actually put on each morning — compliance matters more than specs.",
  },
  {
    title: "Calculate the real total cost, not the advertised base price",
    body: "Automatic fall detection is almost always a paid add-on, not included in the base plan price. Add-ons range from $9.99/month (Lively) to $15/month (Lifeline). A plan advertised at $29.95/mo can cost $44.95/mo with fall detection. Always calculate the full monthly total before comparing options.",
  },
  {
    title: "GPS is worth it for anyone who leaves home",
    body: "An in-home system will not detect a fall in a parking lot, at a grocery store, or at a neighbor's house. If your parent leaves home at all, choose a GPS-enabled device. The price premium over an in-home-only system is typically $5–10/month and is almost always worth it.",
  },
  {
    title: "Waterproofing is non-negotiable",
    body: "Falls happen most often in the bathroom and shower. Any fall detection device must be worn in the shower — look for IPX7 or better (withstands submersion in 1 meter of water for 30 minutes). Do not accept vague splash-resistant claims.",
  },
  {
    title: "Fall detection is a backup, not a replacement for the help button",
    body: "Automatic fall detection is a backup, not a replacement for the help button. Hard falls onto hard floors are detected most reliably; slow falls onto soft surfaces or in unusual positions may be missed. The manual help button remains the most reliable way to call for assistance, and detection is most valuable when the user cannot reach the button.",
  },
];

const faq = [
  {
    q: "How does automatic fall detection work on medical alert devices?",
    a: "Fall detection uses accelerometers to identify the motion pattern of a hard fall — a sudden downward acceleration followed by impact and stillness. When detected, the device plays an audible beep and waits 15–30 seconds for the user to cancel. If not cancelled, it automatically connects to a 24/7 monitoring center without requiring the user to press a button.",
  },
  {
    q: "How accurate is fall detection on medical alert systems?",
    a: "Accuracy varies by device and by the type of fall, and no manufacturer publishes a certified figure. Hard, sudden falls onto hard floors are detected most reliably. Slow-motion falls, stumbles without full impact, and falls onto soft surfaces are more likely to be missed. False alarms can occur from sitting down hard, dropping the device, or vigorous activity. No fall detection system is 100% reliable — the manual help button remains critical.",
  },
  {
    q: "What is the best fall detection device for elderly who live alone?",
    a: "For elderly people living alone, Medical Guardian with the fall detection add-on ($49.95/mo total) is our top pick — it combines automatic detection with GPS and 24/7 US-based professional monitoring on a month-to-month contract. Bay Alarm Medical at $47.95/mo is the best value option. For the lowest cost, Lively Mobile2 at $34.98/mo is the most affordable with GPS.",
  },
  {
    q: "What triggers a false alarm on fall detection devices?",
    a: "Common false alarm triggers include: sitting or lying down quickly, dropping the device on a hard floor, vigorous exercise, bending sharply, and bumping the device against a hard surface. Most devices include a 15–30 second cancellation window with an audible beep before connecting to the monitoring center, giving the user time to dismiss a false alarm.",
  },
  {
    q: "Does Medicare cover fall detection devices?",
    a: "Original Medicare (Parts A and B) does not cover fall detection medical alert devices. Some Medicare Advantage plans include a supplemental benefit for safety devices — check your specific plan. FSA and HSA funds can typically be used to purchase medical alert systems. Some states offer Medicaid waiver programs for low-income seniors.",
  },
  {
    q: "Do fall detection pendants work in the shower?",
    a: "Yes — most medical alert fall detection devices are waterproof (IPX7 or higher) and designed to be worn in the shower, which is one of the highest-risk locations for falls in elderly adults. Always verify the waterproof rating before purchasing; look for IPX7 or better.",
  },
  {
    q: "What is the difference between a fall detection pendant and a fall detection watch?",
    a: "A pendant hangs from the neck and detects falls from chest or hip motion. A watch sits on the wrist and detects falls from wrist impact plus overall body motion. Overall accuracy is comparable — the most important factor is which form factor the user will wear consistently every day.",
  },
  {
    q: "Can fall detection work outside the home?",
    a: "Only if the device includes GPS cellular capability. In-home-only systems with a base station will not detect falls or connect to monitoring outside the home. Devices like Medical Guardian MGMove, Bay Alarm Medical SOS All-in-One, and Lively Mobile2 include cellular GPS and work anywhere with cell coverage.",
  },
  {
    q: "How quickly does fall detection alert a monitoring center?",
    a: "Most devices connect to monitoring within 30–60 seconds of detecting a fall — including the cancellation window. Once connected, a trained monitoring agent typically responds in under 30 seconds. Emergency services can usually be dispatched within 2–3 minutes of the initial fall detection.",
  },
  {
    q: "Is fall detection worth the extra monthly cost?",
    a: "Yes, for most high-risk seniors. Fall detection add-ons cost $7–15/month — roughly $0.25/day. For a senior living alone, with a history of falls, balance issues, or conditions like Parkinson's disease that increase fall risk, automatic detection ensures help arrives even if they cannot press the button. The monthly cost is small compared to the medical costs from a fall that goes undetected for hours.",
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
  "name": "Best Fall Detection Medical Alert Systems 2026",
  "description": "Top automatic fall detection devices compared by accuracy, cost, and form factor.",
  "url": "https://medicalalertreview.com/fall-detection-medical-alert",
  "numberOfItems": 5,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Medical Guardian MGMove", "url": "https://medicalalertreview.com/medical-guardian-review" },
    { "@type": "ListItem", "position": 2, "name": "Bay Alarm Medical SOS All-in-One", "url": "https://medicalalertreview.com/bay-alarm-medical-review" },
    { "@type": "ListItem", "position": 3, "name": "Lively Mobile2", "url": "https://medicalalertreview.com/fall-detection-medical-alert" },
    { "@type": "ListItem", "position": 4, "name": "Lifeline HomeSafe with AutoAlert", "url": "https://medicalalertreview.com/fall-detection-medical-alert" },
    { "@type": "ListItem", "position": 5, "name": "Apple Watch SE", "url": "https://medicalalertreview.com/fall-detection-medical-alert" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Automatic Fall Detection Works + Best Devices (2026)",
  "datePublished": "2026-02-10",
  "dateModified": "2026-06-12",
  "author": { "@type": "Person", "name": "Carol Bennett" },
  "publisher": { "@type": "Organization", "name": "Medical Alert Review", "url": "https://medicalalertreview.com" },
  "mainEntityOfPage": "https://medicalalertreview.com/fall-detection-medical-alert",
};

export default function FallDetectionMedicalAlert() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[{ label: "Topics" }, { label: "Fall Detection" }]} />

        <h1 className="text-3xl font-bold mb-2">How Automatic Fall Detection Works — and the Best Devices in 2026</h1>
        <Byline updated="2026-06-12" />

        {/* Extractable direct answer for AI Overviews / featured snippets */}
        <div className="bg-brand-tint rounded-panel p-5 mb-6 text-sm">
          <p className="text-ink leading-relaxed">
            <strong>Automatic fall detection</strong> is a feature on some
            medical alert devices that uses an accelerometer to recognize the
            motion of a hard fall — a rapid drop, an impact, and then stillness
            — and connects to a 24/7 monitoring center on its own, without the
            user pressing a button. It is offered as a paid add-on (about
            $7–$15/month) on most systems, or built in on some smartwatches.
            Detection is a useful backup but is <strong>not 100% reliable</strong>,
            so it complements rather than replaces the manual help button.
          </p>
        </div>

        <div className="bg-paper-raised border border-rule rounded-panel p-5 mb-8 text-sm shadow-card">
          <p className="eyebrow mb-2">Why it matters</p>
          <p className="text-ink-soft mb-2">
            About 1 in 4 adults aged 65 and older fall each year, and falls are
            the leading cause of injury-related death in that age group
            (<a href={SOURCES.cdcFalls.url} target="_blank" rel="noopener noreferrer nofollow" className="text-brand underline">CDC older-adult falls data</a>).
            The critical risk is often not the fall itself but lying undetected
            for a long time afterward — automatic detection summons help even
            when the user cannot reach the button.
          </p>
          <ul className="text-ink-soft mt-2 space-y-0.5">
            <li><strong>Best overall:</strong> Medical Guardian MGMove with fall detection — about $49.95/mo</li>
            <li><strong>Best value:</strong> Bay Alarm Medical SOS All-in-One — about $47.95/mo</li>
            <li><strong>Most affordable:</strong> Lively Mobile2 with fall detection — about $34.98/mo</li>
          </ul>
        </div>

        <SectionHeading eyebrow="The comparison ledger">Fall Detection Devices at a Glance</SectionHeading>
        <div className="ledger-table mb-10">
          <table className="min-w-[580px]">
            <thead>
              <tr>
                <th>Feature</th>
                {devices.map(d => (
                  <th key={d.name}>{d.name.split(" ").slice(0, 2).join(" ")}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.label}>
                  <td className="whitespace-nowrap">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="Full reviews">Top Fall Detection Medical Alert Systems</SectionHeading>
        <div className="space-y-6 mb-10">
          {devices.map((d) => (
            <div key={d.name} className="bg-paper-raised border border-rule rounded-panel p-6">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-ink-mute font-medium">#{d.rank}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.badgeColor}`}>{d.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold">{d.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-brand font-semibold text-sm">{d.price}</p>
                  <p className="text-xs text-ink-mute">Fall detection: {d.fallDetectionCost}</p>
                  <p className="text-xs font-semibold text-ink-soft">Total: {d.totalWithFD}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-4 gap-3 text-sm mb-4">
                <div><p className="text-ink-mute text-xs">Form Factor</p><p className="font-medium">{d.form}</p></div>
                <div><p className="text-ink-mute text-xs">Coverage</p><p className="font-medium">{d.coverage}</p></div>
                <div><p className="text-ink-mute text-xs">Battery</p><p className="font-medium">{d.battery}</p></div>
                <div><p className="text-ink-mute text-xs">Waterproof</p><p className="font-medium">{d.waterproof}</p></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <ul className="space-y-1">
                  {d.pros.map(p => (
                    <li key={p} className="text-sm text-ink-soft flex gap-2"><CheckIcon className="w-4 h-4 text-affirm shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {d.cons.map(c => (
                    <li key={c} className="text-sm text-ink-soft flex gap-2"><CrossIcon className="w-4 h-4 text-sos shrink-0 mt-0.5" />{c}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm bg-band rounded p-3 mb-4 font-medium text-ink-soft">{d.verdict}</p>
              <OutboundLink
                href={d.cta.href}
                label={d.cta.label}
                className={d.cta.type === "amazon"
                  ? "inline-block bg-[#FF9900] text-white text-sm font-semibold px-4 py-2 rounded-card hover:bg-[#e68a00] transition-colors"
                  : "inline-block bg-brand text-white text-sm font-semibold px-4 py-2 rounded-card hover:bg-brand-dark transition-colors"
                }
              >{d.cta.btnLabel}</OutboundLink>
              <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="How it works">How Automatic Fall Detection Works</SectionHeading>
        <DiagramFigure
          src="/diagrams/fall-detection-how-it-works.svg"
          alt="Four-step diagram of automatic fall detection: 1 sensors detect a sudden drop and stillness, 2 a 15–30 second cancel window lets the user stop false alarms, 3 the device auto-dials the 24/7 monitoring center, 4 the operator dispatches help and notifies family"
          width={800}
          height={300}
        />

        <SectionHeading eyebrow="The honest limits">How Accurate Is Fall Detection — and What It Misses</SectionHeading>
        <div className="text-sm text-ink-soft leading-relaxed space-y-3 mb-6">
          <p>
            No medical alert manufacturer or independent body publishes a single
            certified accuracy figure, and accuracy varies by device, wear
            location, and the type of fall. The honest takeaway from published
            research and manufacturer guidance is that automatic detection
            reliably catches <strong>hard, sudden falls</strong> — a clear drop
            followed by impact — but is far less reliable for the kinds of falls
            that are common among frail seniors:
          </p>
          <ul className="space-y-2 list-disc list-inside text-ink-mute">
            <li>
              <strong>Slow or &ldquo;sliding&rdquo; falls</strong> — gradually
              sinking to the floor or sliding out of a chair often does not
              produce the sharp acceleration signature the sensor looks for, so
              it can be missed.
            </li>
            <li>
              <strong>Falls onto soft surfaces</strong> (a bed, a couch, deep
              carpet) cushion the impact and are detected less consistently.
            </li>
            <li>
              <strong>False alarms</strong> run the other way: sitting down hard,
              setting the pendant on a table, or vigorous activity can trigger an
              alert. This is why every reputable device includes a 15–30 second
              cancel window with an audible warning before it calls for help.
            </li>
          </ul>
          <p>
            Because of these gaps, clinical and consumer-safety guidance is
            consistent: treat automatic fall detection as a{" "}
            <strong>safety net, not a guarantee</strong>. The manual help button
            remains the most reliable way to summon help, and the device only
            works if it is actually worn — including in the bathroom and shower,
            where falls are most likely. For a senior with a history of falls,
            balance problems, or conditions such as Parkinson&apos;s disease, the
            add-on is usually worth it precisely because it covers the case where
            they cannot press the button.
          </p>
        </div>

        <SectionHeading eyebrow="Who offers it">Which Medical Alert Systems Offer Fall Detection?</SectionHeading>
        <p className="text-sm text-ink-mute mb-3 leading-relaxed">
          Almost every major monitored provider offers automatic fall detection,
          but the price and whether GPS is included vary. Built-in detection (no
          monthly add-on) is generally found only on consumer smartwatches.
        </p>
        <div className="ledger-table mb-10">
          <table className="min-w-[560px]">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Fall detection</th>
                <th>Add-on cost</th>
                <th>Works outside home</th>
              </tr>
            </thead>
            <tbody>
              {[
                { p: "Medical Guardian", fd: "Yes (most plans)", cost: "+$10/mo", gps: "Yes (GPS plans)" },
                { p: "Bay Alarm Medical", fd: "Yes (any plan)", cost: "+$10/mo", gps: "Yes (GPS plans)" },
                { p: "Lively Mobile2", fd: "Yes", cost: "+$9.99/mo", gps: "Yes" },
                { p: "Lifeline", fd: "Yes (AutoAlert)", cost: "+$15/mo", gps: "In-home only" },
                { p: "Apple Watch SE / newer", fd: "Built in", cost: "No add-on", gps: "Yes" },
                { p: "Life Alert", fd: "No automatic detection", cost: "—", gps: "Limited" },
              ].map((r) => (
                <tr key={r.p}>
                  <td>{r.p}</td>
                  <td>{r.fd}</td>
                  <td className="text-ink-mute">{r.cost}</td>
                  <td className="text-ink-mute">{r.gps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="Buyer's checklist">How to Choose a Fall Detection Device</SectionHeading>
        <div className="space-y-3 mb-10">
          {choosingCriteria.map(c => (
            <div key={c.title} className="bg-paper-raised border border-rule rounded-card p-4 text-sm">
              <p className="font-bold mb-1">{c.title}</p>
              <p className="text-ink-mute">{c.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="What it costs">Fall Detection Cost Breakdown (2026)</SectionHeading>
        <div className="ledger-table mb-10">
          <table className="min-w-[560px]">
            <thead>
              <tr>
                <th>System</th>
                <th>Base plan</th>
                <th>Fall detection</th>
                <th className="!text-brand">Total/mo</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Lively Mobile2", base: "$24.99", addon: "+$9.99", total: "$34.98" },
                { name: "Bay Alarm Medical", base: "$37.95", addon: "+$10.00", total: "$47.95" },
                { name: "Medical Guardian MGMove", base: "$39.95", addon: "+$10.00", total: "$49.95" },
                { name: "Lifeline HomeSafe", base: "$29.95", addon: "+$15.00", total: "$44.95" },
                { name: "Apple Watch SE", base: "$249 (device)", addon: "Built-in", total: "$0/mo" },
              ].map((r) => (
                <tr key={r.name}>
                  <td>{r.name}</td>
                  <td className="text-ink-mute">{r.base}</td>
                  <td className="text-ink-mute">{r.addon}</td>
                  <td className="font-semibold !text-brand">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="Questions we hear most">Frequently Asked Questions</SectionHeading>
        <div className="space-y-2 mb-10">
          {faq.map(({ q, a }) => (
            <details key={q} className="group bg-paper-raised border border-rule rounded-card overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-semibold text-sm list-none select-none">
                {q}
                <ChevronIcon className="w-4 h-4 text-brand ml-4 shrink-0 rotate-90 transition-transform group-open:-rotate-90" />
              </summary>
              <p className="px-4 pb-4 text-sm text-ink-soft">{a}</p>
            </details>
          ))}
        </div>

        <Verdict label="The desk's recommendation">
          For most families,{" "}
          <a href="/medical-guardian-review" className="underline">Medical Guardian</a>{" "}
          with the fall detection add-on ($49.95/mo) offers the best combination
          of automatic detection, GPS, and 24/7 US-based monitoring. If budget is
          the priority,{" "}
          <a href="/bay-alarm-medical-review" className="underline">Bay Alarm Medical</a>{" "}
          ($47.95/mo) is nearly as capable at a slightly lower total cost.
        </Verdict>

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 text-sm">
          <p className="eyebrow mb-3">Keep reading</p>
          <ul className="space-y-1">
            <li><a href="/best-medical-alert-systems" className="text-brand underline">Best Medical Alert Systems 2026 →</a></li>
            <li><a href="/best-medical-alert-watches" className="text-brand underline">Best Medical Alert Watches →</a></li>
            <li><a href="/medical-guardian-review" className="text-brand underline">Medical Guardian Full Review →</a></li>
            <li><a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical Full Review →</a></li>
          </ul>
        </div>

        <Sources
          sources={[
            SOURCES.cdcFalls,
            SOURCES.cdcSteadi,
            SOURCES.nia,
            { label: "Medical Guardian — official site (pricing & fall detection)", url: "https://www.medicalguardian.com" },
            { label: "Bay Alarm Medical — official site (plans & add-ons)", url: "https://www.bayalarmmedical.com" },
            { label: "Lifeline — AutoAlert (formerly Philips Lifeline)", url: "https://www.lifeline.com" },
            { label: "Apple — Use fall detection on Apple Watch", url: "https://support.apple.com/en-us/108896" },
          ]}
        />
      </div>
    </>
  );
}
