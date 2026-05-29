import type { Metadata } from "next";
import { EDITOR, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Evaluate Medical Alert Systems | Our Methodology",
  description:
    "Our research methodology for rating medical alert systems: how we score monitoring quality, pricing transparency, device usability, contract terms, and the sources we rely on.",
  alternates: { canonical: `${SITE.url}/methodology` },
};

const criteria = [
  {
    weight: "30%",
    name: "Monitoring quality & certification",
    detail:
      "We verify whether each provider's monitoring centers are UL-listed and/or CSAA Five Diamond certified, whether centers are US-based and staffed 24/7, and the response times the provider publishes. Certification status is confirmed against the provider's official documentation.",
  },
  {
    weight: "25%",
    name: "Pricing transparency",
    detail:
      "We record advertised monthly rates, equipment fees, activation charges, and add-on costs (fall detection, GPS) directly from each provider's official website, then calculate the true annual cost. We flag any gap between the headline price and what a buyer actually pays.",
  },
  {
    weight: "20%",
    name: "Device usability & specifications",
    detail:
      "We compare published manufacturer specifications: water-resistance rating, battery life, range, form factor (pendant, wristband, smartwatch), and button design. For senior users we weight comfort, simplicity, and shower-safe waterproofing heavily.",
  },
  {
    weight: "15%",
    name: "Contract terms & cancellation",
    detail:
      "We document contract length, early-termination penalties, and money-back guarantees from each provider's terms. Month-to-month plans with no cancellation penalty score highest; multi-year contracts score lowest.",
  },
  {
    weight: "10%",
    name: "Caregiver tools & support",
    detail:
      "We assess the features of each provider's caregiver app and family-notification options, and the published support channels (phone, chat, email), based on the provider's own documentation and aggregated public customer reviews.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <a href="/" className="hover:text-[#1a5f7a]">
          Home
        </a>{" "}
        › How We Evaluate
      </nav>

      <h1 className="text-3xl font-bold mb-3">How We Evaluate Medical Alert Systems</h1>
      <p className="text-gray-500 text-sm mb-8">
        Our research process, scoring weights, and the sources we rely on.
      </p>

      <div className="bg-[#e8f4f8] rounded-xl p-5 mb-8 text-sm text-gray-700 leading-relaxed">
        <p className="mb-2">
          <strong>What we are — and what we are not.</strong> Medical Alert
          Review is an independent editorial site. We are researchers and
          editors who compare published, verifiable information: manufacturer
          specifications, official provider pricing, monitoring-center
          certifications, and guidance from authoritative health organizations.
        </p>
        <p>
          We do <strong>not</strong> operate a clinical lab, and we do not claim
          to have physically tested every device in long-term home trials. When
          we state a fact, our goal is for it to be traceable to a cited,
          first-party or authoritative source. Where evidence is mixed or a
          provider does not publish a detail, we say so plainly.
        </p>
      </div>

      <h2 className="text-xl font-bold mb-4">Our Scoring Criteria</h2>
      <div className="space-y-3 mb-10">
        {criteria.map((c) => (
          <div key={c.name} className="border rounded-lg p-4 text-sm">
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-[#1a5f7a] text-white text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
                {c.weight}
              </span>
              <p className="font-semibold">{c.name}</p>
            </div>
            <p className="text-gray-600">{c.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Where Our Information Comes From</h2>
      <ul className="space-y-2 text-sm text-gray-600 mb-10 list-disc list-inside">
        <li>
          <strong>Provider websites</strong> for current pricing, plans,
          device specifications, and contract terms.
        </li>
        <li>
          <strong>Authoritative health organizations</strong> (such as the U.S.
          Centers for Disease Control and Prevention and the National Institute
          on Aging) for fall statistics and safety guidance.
        </li>
        <li>
          <strong>Certification bodies</strong> (Underwriters Laboratories,
          the Central Station Alarm Association) for monitoring-center
          credentials.
        </li>
        <li>
          <strong>Aggregated public customer reviews</strong> to identify
          common, recurring complaints — which we then assess for fairness
          rather than repeat uncritically.
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-4">How We Stay Current</h2>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        Medical alert pricing and plans change frequently. We re-check the
        provider pages on every review and update the &ldquo;last updated&rdquo;
        date when we make a substantive change. If you spot an out-of-date price
        or an error, we want to correct it.
      </p>

      <h2 className="text-xl font-bold mb-4">Editorial Independence &amp; Disclosure</h2>
      <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700 leading-relaxed mb-10">
        <p className="mb-3">
          We may earn a referral commission when readers purchase through links
          on this site. This <strong>never</strong> influences our ratings or
          rankings — a higher commission does not buy a higher score, and our
          recommendations follow the scoring criteria above.
        </p>
        <p>
          This site provides general information for families comparing products
          and is not medical advice. For guidance about a specific health
          condition or fall risk, consult a qualified healthcare professional.
        </p>
      </div>

      <h2 className="text-xl font-bold mb-4">Who Writes These Reviews</h2>
      <p className="text-sm text-gray-600 leading-relaxed">
        Our reviews are published under the byline of{" "}
        <strong>{EDITOR.name}</strong>, {EDITOR.title} — the house editorial
        persona for Medical Alert Review. {EDITOR.bio} Learn more on our{" "}
        <a href="/about" className="text-[#1a5f7a] underline">
          About page
        </a>
        .
      </p>
    </div>
  );
}
