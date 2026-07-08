import type { Metadata } from "next";
import Byline from "@/app/components/Byline";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import DeviceTokenCard from "@/app/components/DeviceTokenCard";
import CtaBlock from "@/app/components/CtaBlock";
import DiagramFigure from "@/app/components/DiagramFigure";
import Sources from "@/app/components/Sources";
import EditorialRating from "@/app/components/EditorialRating";
import ReviewSchema from "@/app/components/ReviewSchema";
import RelatedReviews from "@/app/components/RelatedReviews";
import { SectionHeading, Verdict } from "@/app/components/Editorial";
import { ChevronIcon } from "@/app/components/Icon";
import { SITE, SOURCES } from "@/lib/site";
import { PROVIDERS, computeRating } from "@/data/editorial-ratings";

const provider = PROVIDERS["life-alert"];
const rating = computeRating(provider);

export const metadata: Metadata = {
  title: { absolute: "Life Alert Cost 2026: Fees, Contract & Alternatives" },
  description:
    "How much does Life Alert cost in 2026? Monthly fees from $49.95, the 3-year contract, and whether cheaper no-contract alternatives are a better value.",
  alternates: { canonical: `${SITE.url}/life-alert-cost` },
  openGraph: {
    title: "Life Alert Cost 2026 | Monthly Fees & Cheaper Alternatives",
    description:
      "Life Alert pricing, the 3-year contract, upfront fees, and whether cheaper no-contract alternatives offer better value.",
    url: `${SITE.url}/life-alert-cost`,
    type: "article",
    images: [{ url: `${SITE.url}/og/life-alert-cost.png`, width: 1200, height: 630 }],
  },
};

export default function LifeAlertCost() {
  const faq = [
    { q: "How much does Life Alert cost per month in 2026?", a: "Life Alert costs between $49.95 and $89.95 per month depending on the plan. The base home plan is $49.95/month. Adding a mobile GPS button costs more. All plans require a 3-year contract." },
    { q: "Does Life Alert require a contract?", a: "Yes. Life Alert requires a 3-year contract, which is the longest commitment in the industry. Early termination fees apply if you cancel before the contract ends." },
    { q: "Is Life Alert worth the cost?", a: "Life Alert has strong brand recognition and reliable monitoring, but it is significantly more expensive than comparable services. Medical Guardian and Bay Alarm Medical offer similar or better features starting at $19.95 to $29.95 per month with no long-term contract." },
    { q: "What is the cheapest medical alert system?", a: "Bay Alarm Medical starts at $19.95/month with no contract — less than half the cost of Life Alert's base plan. Medical Guardian starts at $29.95/month. Both offer comparable 24/7 monitoring." },
    { q: "Does Life Alert have fall detection?", a: "Life Alert does not currently offer automatic fall detection — you must press the button yourself. Competitors like Medical Guardian and Bay Alarm Medical offer fall detection as an add-on." },
    { q: "Does Medicare cover Life Alert?", a: "Original Medicare (Parts A and B) does not cover Life Alert or any medical alert system. Some Medicare Advantage (Part C) plans include a personal emergency response system as a supplemental benefit, and some state Medicaid waiver programs cover one — check your specific plan before paying out of pocket." },
    { q: "Can you buy Life Alert at Walmart or Amazon?", a: "No. Life Alert is sold only directly by the company, by phone, as a monitored subscription with a contract. Devices sold at Walmart or Amazon under similar names are different products — typically one-time-purchase buttons without Life Alert's 24/7 monitoring." },
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
      <ReviewSchema provider={provider} pageUrl={`${SITE.url}/life-alert-cost`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs
          trail={[
            { label: "Reviews", href: "/best-medical-alert-systems" },
            { label: "Life Alert Cost" },
          ]}
        />

        <h1 className="text-3xl font-bold mb-2">Life Alert Cost in 2026: What You Will Actually Pay</h1>
        <Byline updated="2026-06-12" rating={`${rating.overallTen.toFixed(1)} / 10`} />

        <DeviceTokenCard
          brand="Life Alert"
          device="HELP pendant + base unit"
          ratio="16 / 7"
          className="mb-8"
        />

        <EditorialRating provider={provider} />

        <div className="bg-caution-tint border border-caution/30 rounded-panel p-5 mb-8 text-sm">
          <p className="eyebrow eyebrow-caution mb-2">Heads up</p>
          <p className="font-semibold text-caution mb-1">The 3-Year Contract</p>
          <p className="text-caution">Life Alert requires a 36-month contract for all plans — the longest commitment in the industry. Most competitors are month-to-month with no cancellation fees.</p>
        </div>

        <SectionHeading eyebrow="What it costs">Life Alert Pricing Breakdown</SectionHeading>
        <div className="ledger-table mb-8">
          <table className="min-w-[560px]">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Monthly Cost</th>
                <th>3-Year Total</th>
                <th>Coverage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Home Plan", "$49.95", "$1,798", "Home button + base unit"],
                ["Home + Mobile", "$69.95", "$2,518", "Home + GPS mobile button"],
                ["Home + Mobile + Neck", "$89.95", "$3,238", "All devices included"],
              ].map(([plan, mo, total, cov]) => (
                <tr key={plan}>
                  <td>{plan}</td>
                  <td>{mo}</td>
                  <td className="text-sos font-semibold">{total}</td>
                  <td className="text-ink-mute">{cov}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DiagramFigure
          src="/diagrams/life-alert-3-year-cost.svg"
          alt="Bar chart of 36-month totals at base advertised rates: Bay Alarm Medical $718, Lively Mobile2 $900, Medical Guardian $1,078, Life Alert home plan $1,798, Life Alert with all devices $3,238"
          width={800}
          height={420}
          caption="36-month totals at each provider's base advertised rate — Life Alert's own minimum contract length. Sources below."
        />

        <SectionHeading eyebrow="Side by side">Life Alert vs. Cheaper Alternatives</SectionHeading>
        <div className="ledger-table mb-8">
          <table className="min-w-[560px]">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Starting Price</th>
                <th>Contract</th>
                <th>Fall Detection</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Life Alert", "$49.95/mo", "3 years", "No"],
                ["Bay Alarm Medical", "$19.95/mo", "None", "Yes (+$10/mo)"],
                ["Medical Guardian", "$29.95/mo", "None", "Yes (+$10/mo)"],
                ["Lively Mobile2", "$24.99/mo", "None", "Yes (+$6.99/mo)"],
              ].map(([brand, price, contract, fall]) => (
                <tr key={brand} className={brand === "Life Alert" ? "bg-sos-tint/60" : ""}>
                  <td>{brand}</td>
                  <td>{price}</td>
                  <td>{contract}</td>
                  <td>{fall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="The fine print">Watch for Upfront Fees</SectionHeading>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">
          The monthly rate is not the whole bill. Life Alert quotes pricing by phone, and
          customers commonly report a one-time installation/activation charge of roughly
          $96–$198 depending on the package — on top of the first month. Because nothing is
          published, the only way to know your real first-year cost is to ask the sales rep
          three questions before agreeing to anything: What is the one-time fee? What is the
          total monthly charge with every device I&apos;m getting? What exactly ends this
          contract early?
        </p>
        <p className="text-ink-soft text-sm leading-relaxed mb-10">
          For comparison, Bay Alarm Medical and Medical Guardian publish their rates online,
          require no long-term contract, and let you cancel without a termination fee.
        </p>

        <SectionHeading eyebrow="Paying for it">Does Medicare or Medicaid Pay for Life Alert?</SectionHeading>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">
          <strong>Original Medicare (Parts A &amp; B) does not cover medical alert systems</strong>,
          Life Alert included — they are not classified as durable medical equipment. There are
          two real paths to help with the cost (covered in full in our guide to{" "}
          <a href="/does-medicare-cover-medical-alert-systems" className="text-brand underline">whether
          Medicare covers medical alert systems</a>):
        </p>
        <ul className="text-sm text-ink-soft space-y-3 mb-6 list-disc pl-5">
          <li>
            <strong>Medicare Advantage (Part C):</strong> some plans include a personal emergency
            response system (PERS) as a supplemental benefit. Whether Life Alert specifically is
            covered depends on the plan&apos;s vendor — many plans contract with a different PERS
            provider. Call the number on the plan card and ask about &ldquo;PERS&rdquo; coverage.
          </li>
          <li>
            <strong>Medicaid:</strong> many states cover a PERS through Home and Community-Based
            Services (HCBS) waivers for seniors who qualify. Your state&apos;s Area Agency on
            Aging can tell you whether you qualify and which vendors participate.
          </li>
        </ul>
        <p className="text-ink-soft text-sm leading-relaxed mb-10">
          Some long-term-care insurance policies and veterans&apos; programs also reimburse
          medical alert service. If cost is the obstacle, check those before committing to a
          36-month contract at full price — or start with a no-contract provider at less than
          half the monthly rate.
        </p>

        <SectionHeading eyebrow="Where to buy">Can You Buy Life Alert in a Store?</SectionHeading>
        <p className="text-ink-soft text-sm leading-relaxed mb-10">
          No. Life Alert sells only direct, by phone, as a monitored subscription — you will not
          find it on the shelf at Walmart, Walgreens, Best Buy, or Amazon. Devices sold in those
          stores under similar-sounding names are one-time-purchase buttons that dial family or
          911 without professional monitoring (we compare those on our{" "}
          <a href="/no-monthly-fee-medical-alert" className="text-brand underline">
            no-monthly-fee guide</a>). That difference matters: a $40 store button is not a
          cheaper Life Alert — it is a different product with no one on the other end.
        </p>

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

        <Verdict label="The desk's bottom line" tone="sos">
          Life Alert charges 2–3&times; more than competitors and locks you into
          a 3-year contract. For most families,{" "}
          <a href="/bay-alarm-medical-review" className="underline">Bay Alarm Medical</a>{" "}
          or <a href="/medical-guardian-review" className="underline">Medical Guardian</a>{" "}
          offer equal or better protection at a fraction of the cost.
        </Verdict>
        <p className="text-xs text-ink-mute -mt-4 mb-2">
          Life Alert does not publish detailed pricing on its website and quotes
          rates by phone. The figures above reflect commonly reported plan costs
          and Life Alert&apos;s standard 36-month contract; confirm your exact
          quote and contract terms with Life Alert directly before signing.
        </p>

        <CtaBlock
          brandKey="bay-alarm"
          heading="Compare a no-contract alternative first"
          note="Bay Alarm Medical delivers UL-listed 24/7 monitoring from $19.95/mo with no 3-year lock-in — less than half Life Alert's monthly rate. See its current plans before you commit."
        />

        <div className="mt-8">
          <RelatedReviews currentHref="/life-alert-cost" />
        </div>

        <Sources
          sources={[
            { label: "Life Alert — official site", url: "https://www.lifealert.com" },
            { label: "Medical Guardian — official pricing", url: "https://www.medicalguardian.com" },
            { label: "Bay Alarm Medical — official pricing", url: "https://www.bayalarmmedical.com" },
            SOURCES.medicare,
            SOURCES.cdcFalls,
          ]}
          note="Life Alert pricing is not published online and is quoted by phone; figures reflect commonly reported rates and Life Alert's standard contract terms. Competitor prices are from each provider's official site."
        />
      </div>
    </>
  );
}
