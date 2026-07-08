import type { Metadata } from "next";
import Byline from "@/app/components/Byline";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ArticleSchema from "@/app/components/ArticleSchema";
import CtaBlock from "@/app/components/CtaBlock";
import Sources from "@/app/components/Sources";
import { SectionHeading } from "@/app/components/Editorial";
import { SITE, SOURCES } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Does Medicare Cover Medical Alert Systems? (2026)" },
  description:
    "Original Medicare does not cover medical alert systems, but some Medicare Advantage and Medicaid plans do. Here's exactly how to check your coverage in 2026.",
  alternates: { canonical: `${SITE.url}/does-medicare-cover-medical-alert-systems` },
  openGraph: {
    title: "Does Medicare Cover Medical Alert Systems? (2026)",
    description:
      "Original Medicare doesn't cover medical alert systems — but some Medicare Advantage and state Medicaid plans do. How to check your coverage.",
    url: `${SITE.url}/does-medicare-cover-medical-alert-systems`,
    type: "article",
    images: [{ url: `${SITE.url}/og/does-medicare-cover-medical-alert-systems.png`, width: 1200, height: 630 }],
  },
};

const programs = [
  {
    program: "Original Medicare (Part A & B)",
    covers: "No",
    tone: "no",
    detail: "Medical alert systems are not classified as durable medical equipment, so they are not a covered benefit.",
  },
  {
    program: "Medicare Advantage (Part C)",
    covers: "Sometimes",
    tone: "maybe",
    detail: "Some plans include a personal emergency response system (PERS) as a supplemental benefit. Coverage and the approved device vary by plan.",
  },
  {
    program: "Medicare Supplement (Medigap)",
    covers: "No",
    tone: "no",
    detail: "Medigap only helps with Original Medicare's out-of-pocket costs. It does not add new benefits like a medical alert device.",
  },
  {
    program: "Medicaid",
    covers: "Often",
    tone: "yes",
    detail: "Many states cover a PERS through Home & Community-Based Services (HCBS) waivers for residents who qualify.",
  },
  {
    program: "PACE",
    covers: "Often",
    tone: "yes",
    detail: "Programs of All-Inclusive Care for the Elderly can include a medical alert device as part of a care plan when medically appropriate.",
  },
  {
    program: "VA benefits",
    covers: "Sometimes",
    tone: "maybe",
    detail: "Eligible veterans may receive a personal emergency response system through VA care when prescribed by a VA provider.",
  },
];

const faq = [
  { q: "Does Medicare cover medical alert systems?", a: "Original Medicare (Part A and Part B) does not cover medical alert systems. They are not classified as durable medical equipment, so there is no benefit for them. However, some Medicare Advantage (Part C) plans do cover a medical alert device as a supplemental benefit, and many state Medicaid programs cover one through a home-and-community-based services waiver." },
  { q: "Does Medicare Part B cover a medical alert button?", a: "No. Part B covers durable medical equipment such as walkers and wheelchairs, but a medical alert system does not meet Medicare's definition of durable medical equipment, so Part B does not pay for it." },
  { q: "Which Medicare Advantage plans cover medical alert systems?", a: "There is no single list — it depends on the individual plan. Since 2020, CMS has allowed Medicare Advantage plans to offer a personal emergency response system as a supplemental benefit, and a growing number do. Check your plan's Summary of Benefits or Evidence of Coverage, or call the number on your member card and ask specifically about 'PERS' or 'personal emergency response system' coverage." },
  { q: "Does Medicaid pay for a medical alert system?", a: "In many states, yes. Medicaid often covers a personal emergency response system through Home & Community-Based Services (HCBS) waivers for seniors who qualify and want to remain in their own home. Benefits and eligibility vary by state — your state Medicaid office or local Area Agency on Aging can confirm." },
  { q: "Is a medical alert system tax deductible?", a: "It may be. If a doctor recommends a medical alert system for a diagnosed medical condition, the cost can sometimes count toward deductible medical expenses, and some FSA or HSA plans reimburse it. Rules are specific — confirm with a tax professional or your plan administrator before assuming it qualifies." },
  { q: "What if my plan won't cover a medical alert system?", a: "Most people pay out of pocket. The good news is that monitored service no longer requires an expensive contract: Bay Alarm Medical starts at $19.95/month with no contract, and Medical Guardian at $29.95/month. That is far less than Life Alert's $49.95/month with its 3-year commitment." },
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

const toneClass: Record<string, string> = {
  yes: "text-affirm bg-affirm-tint",
  maybe: "text-caution bg-caution-tint",
  no: "text-sos bg-sos-tint",
};

export default function DoesMedicareCoverMedicalAlertSystems() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleSchema
        type="MedicalWebPage"
        headline="Does Medicare Cover Medical Alert Systems? (2026)"
        description="Original Medicare doesn't cover medical alert systems, but some Medicare Advantage and Medicaid plans do. How to check your coverage."
        path="/does-medicare-cover-medical-alert-systems"
        published="2026-03-01"
        updated="2026-06-17"
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[{ label: "Topics" }, { label: "Does Medicare Cover It?" }]} />

        <h1 className="text-3xl font-bold mb-2">Does Medicare Cover Medical Alert Systems?</h1>
        <Byline updated="2026-06-17" />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-8 text-sm leading-relaxed">
          <p className="eyebrow mb-2">The short answer</p>
          <p className="text-ink-soft">
            <strong>Original Medicare (Parts A and B) does not cover medical alert systems.</strong>{" "}
            But you may still get help paying for one: some <strong>Medicare Advantage (Part C)</strong>{" "}
            plans include a medical alert device as a supplemental benefit, and many state{" "}
            <strong>Medicaid</strong> programs cover one for seniors who qualify. Below is exactly
            how to check each one — and what to do if none of them apply to you.
          </p>
        </div>

        <SectionHeading eyebrow="The comparison ledger">Coverage at a Glance</SectionHeading>
        <div className="ledger-table mb-10">
          <table className="min-w-[560px]">
            <thead>
              <tr>
                <th>Program</th>
                <th>Covers a medical alert?</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((p) => (
                <tr key={p.program} className="align-top">
                  <td>{p.program}</td>
                  <td>
                    <span className={`inline-block px-2 py-0.5 rounded-badge text-xs font-semibold ${toneClass[p.tone]}`}>
                      {p.covers}
                    </span>
                  </td>
                  <td className="text-ink-mute">{p.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="Original Medicare">Why Original Medicare Says No</SectionHeading>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">
          Original Medicare pays for <strong>durable medical equipment</strong> (DME) — things like
          walkers, hospital beds, and wheelchairs that are primarily medical, used in the home, and
          expected to last years. A medical alert system does not meet that definition, so Medicare
          treats it as a personal convenience or safety item rather than covered equipment. That
          applies whether the device is an in-home base unit or a mobile GPS pendant, and it is true
          even when a doctor recommends one after a fall.
        </p>
        <p className="text-ink-soft text-sm leading-relaxed mb-10">
          Medicare Supplement (Medigap) plans do not change this. Medigap only helps with the
          deductibles, copays, and coinsurance of Original Medicare — it never adds a benefit that
          Original Medicare itself does not have.
        </p>

        <SectionHeading eyebrow="Part C">Medicare Advantage: Sometimes Yes</SectionHeading>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">
          This is where coverage actually becomes possible. Since 2020, the Centers for Medicare &amp;
          Medicaid Services has allowed Medicare Advantage plans to offer expanded supplemental
          benefits, and a growing number now include a <strong>personal emergency response system
          (PERS)</strong> — the formal name for a medical alert device. Coverage is not universal,
          and the plan usually specifies which device or vendor it will pay for.
        </p>
        <div className="bg-band rounded-panel p-5 mb-4 text-sm">
          <p className="font-semibold mb-2">How to check your Medicare Advantage plan in 5 minutes</p>
          <ol className="space-y-2 text-ink-soft list-decimal pl-5">
            <li>Find your plan&apos;s <em>Summary of Benefits</em> or <em>Evidence of Coverage</em> (mailed each fall, also on the plan&apos;s website).</li>
            <li>Search the document for &ldquo;personal emergency response&rdquo; or &ldquo;PERS.&rdquo;</li>
            <li>If you can&apos;t find it, call the member-services number on your insurance card and ask: &ldquo;Does my plan cover a personal emergency response system, and which device or brand?&rdquo;</li>
            <li>Ask whether it is fully covered or a reimbursement, and whether you must use a specific provider.</li>
          </ol>
        </div>
        <p className="text-ink-soft text-sm leading-relaxed mb-10">
          One caution: if your plan covers a specific vendor&apos;s device, that device may not be the
          one that scores best in our <a href="/best-medical-alert-systems" className="text-brand underline">comparison of the best systems</a>.
          A covered-but-mediocre device can still be the right call if it&apos;s free — just go in knowing
          the trade-off.
        </p>

        <SectionHeading eyebrow="Medicaid">Often Yes, Through a Waiver</SectionHeading>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">
          For seniors who qualify for Medicaid, coverage is common. Many states pay for a PERS
          through <strong>Home &amp; Community-Based Services (HCBS) waivers</strong> — programs
          designed to help people stay safely in their own homes instead of moving to a nursing
          facility. Because Medicaid is run state by state, the benefit name, eligibility, and
          approved vendors all vary.
        </p>
        <p className="text-ink-soft text-sm leading-relaxed mb-10">
          The fastest way to find out is to contact your <strong>state Medicaid office</strong> or
          your local <strong>Area Agency on Aging</strong>, which can tell you whether you qualify
          and which medical alert providers participate in your state. The free{" "}
          <a href={SOURCES.eldercare.url} target="_blank" rel="noopener noreferrer nofollow" className="text-brand underline">Eldercare Locator</a>{" "}
          connects you to the right local agency by ZIP code.
        </p>

        <SectionHeading eyebrow="More options">Other Ways to Get Help Paying</SectionHeading>
        <ul className="text-sm text-ink-soft space-y-3 mb-10 list-disc pl-5">
          <li><strong>PACE</strong> (Programs of All-Inclusive Care for the Elderly): for seniors dual-eligible for Medicare and Medicaid, a medical alert device can be part of the care plan.</li>
          <li><strong>VA benefits:</strong> eligible veterans may receive a PERS through the VA when a VA provider prescribes it.</li>
          <li><strong>Long-term care insurance:</strong> some policies reimburse monitoring service — check your policy&apos;s in-home-care provisions.</li>
          <li><strong>FSA / HSA:</strong> a medical alert system recommended by a doctor for a diagnosed condition is often an eligible expense; confirm with your plan administrator.</li>
          <li><strong>Tax deduction:</strong> when medically necessary and doctor-recommended, the cost may count toward itemized medical expenses. Ask a tax professional.</li>
        </ul>

        <div className="bg-brand-tint rounded-panel p-6 text-sm mb-8">
          <p className="font-semibold mb-3 text-lg">If You&apos;re Paying Out of Pocket</p>
          <p className="text-ink-soft mb-4">
            Most families pay for a medical alert system themselves — and it costs far less than it
            used to. Monitored service no longer requires a long contract:{" "}
            <a href="/bay-alarm-medical-review" className="text-brand underline">Bay Alarm Medical starts at $19.95/month</a>{" "}
            with no contract, and <a href="/medical-guardian-review" className="text-brand underline">Medical Guardian at $29.95/month</a>.
            If you want to avoid recurring fees entirely, see our guide to{" "}
            <a href="/no-monthly-fee-medical-alert" className="text-brand underline">no-monthly-fee options</a>{" "}
            and understand the trade-offs first.
          </p>
          <a href="/best-medical-alert-systems" className="inline-block bg-brand text-white font-semibold px-5 py-2.5 rounded-card hover:bg-brand-dark transition-colors">
            Compare the Best Medical Alert Systems →
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
          heading="Paying out of pocket? Start here"
          note="If your plan won't cover a device, a no-contract monitored plan is the affordable route. Bay Alarm Medical starts at $19.95/mo with free spouse monitoring and a 30-day guarantee."
        />

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 text-sm">
          <p className="eyebrow mb-3">Related reading</p>
          <ul className="space-y-2">
            <li><a href="/life-alert-cost" className="text-brand underline">Life Alert Cost &amp; Cheaper Alternatives</a></li>
            <li><a href="/best-medical-alert-systems" className="text-brand underline">Best Medical Alert Systems (2026)</a></li>
            <li><a href="/no-monthly-fee-medical-alert" className="text-brand underline">No Monthly Fee Medical Alert Options</a></li>
            <li><a href="/medical-alert-system-for-elderly" className="text-brand underline">Best Medical Alert Systems for the Elderly</a></li>
          </ul>
        </div>

        <Sources
          sources={[
            SOURCES.medicare,
            SOURCES.medicareAdvantage,
            SOURCES.medicaid,
            SOURCES.eldercare,
          ]}
          note="Coverage rules come from Medicare.gov, Medicaid.gov, and CMS. Medicare Advantage and Medicaid benefits vary by plan and by state — always confirm with your specific plan or state office before purchasing."
        />
      </div>
    </>
  );
}
