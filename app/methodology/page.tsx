import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/app/components/Editorial";
import { EDITOR, SITE } from "@/lib/site";
import { RUBRIC } from "@/data/editorial-ratings";

export const metadata: Metadata = {
  title: { absolute: "How We Evaluate Medical Alert Systems | Methodology" },
  description:
    "How we rate medical alert systems: scoring weights for monitoring quality, pricing transparency, device usability, contract terms, and our sources.",
  alternates: { canonical: `${SITE.url}/methodology` },
};

// Single source of truth — the same rubric drives the per-page rating
// breakdown and the schema.org Review markup (see data/editorial-ratings.ts).
const criteria = RUBRIC.map((c) => ({
  weight: `${Math.round(c.weight * 100)}%`,
  name: c.label,
  detail: c.definition,
}));

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-ink-mute mb-6">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>{" "}
        › How We Evaluate
      </nav>

      <h1 className="text-3xl font-bold mb-3">How We Evaluate Medical Alert Systems</h1>
      <p className="text-ink-mute text-sm mb-8">
        Our research process, scoring weights, and the sources we rely on ·
        Last updated <time dateTime="2026-06-12">June 2026</time>
      </p>

      <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-5 mb-8 text-sm text-ink-soft leading-relaxed">
        <p className="eyebrow mb-3">Our standard</p>
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

      <SectionHeading eyebrow="The rubric">Our Scoring Criteria</SectionHeading>
      <div className="space-y-3 mb-10">
        {criteria.map((c) => (
          <div key={c.name} className="bg-paper-raised border border-rule rounded-card p-4 text-sm">
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-brand text-white text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
                {c.weight}
              </span>
              <p className="font-semibold">{c.name}</p>
            </div>
            <p className="text-ink-mute">{c.detail}</p>
          </div>
        ))}
      </div>

      <SectionHeading eyebrow="The math">How the Score Is Calculated</SectionHeading>
      <div className="bg-band border border-rule rounded-panel p-5 mb-10 text-sm text-ink-soft leading-relaxed">
        <p className="mb-2">
          We score each provider <strong>1–5 on every criterion above</strong>,
          with each score tied to a documented, cited fact on that review page
          (the pricing, contract terms, certifications, and published device
          specs you can see on the page itself). The overall is the
          weight-adjusted average of those five scores, rescaled to a 0–10
          number for readability. Because the inputs are fixed facts, the same
          provider always produces the same score — it is reproducible, not a
          gut feeling.
        </p>
        <p className="mb-2">
          This is an <strong>editorial rating</strong>: our own honest
          assessment as researchers, not an average of user reviews and not the
          result of first-hand lab testing. Each review page shows the full
          per-criterion breakdown so you can see exactly how the number was
          reached.
        </p>
        <p>
          Our <strong>ranking</strong> (&ldquo;Best Overall,&rdquo; &ldquo;Best
          Value&rdquo;) can differ slightly from the raw score, because a
          ranking also weighs who a system is best <em>for</em> — device
          breadth, use case, and fit — not the headline number alone. We call
          this out where it happens.
        </p>
      </div>

      <SectionHeading eyebrow="Our sources">Where Our Information Comes From</SectionHeading>
      <ul className="space-y-2 text-sm text-ink-mute mb-10 list-disc list-inside">
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

      <SectionHeading eyebrow="Staying accurate">How We Stay Current</SectionHeading>
      <p className="text-sm text-ink-mute mb-3 leading-relaxed">
        Medical alert pricing and plans change frequently. We re-check the
        provider pages on every review and update the &ldquo;last updated&rdquo;
        date when we make a substantive change. If you spot an out-of-date price
        or an error, we want to correct it.
      </p>

      <SectionHeading eyebrow="Full transparency">Editorial Independence &amp; Disclosure</SectionHeading>
      <div className="bg-band border border-rule rounded-panel p-6 text-sm text-ink-soft leading-relaxed mb-10">
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

      <SectionHeading eyebrow="Our byline">Who Writes These Reviews</SectionHeading>
      <p className="text-sm text-ink-mute leading-relaxed">
        Our reviews are published under the byline of{" "}
        <strong>{EDITOR.name}</strong>, {EDITOR.title} — the house editorial
        persona for Medical Alert Review. {EDITOR.bio} Learn more on our{" "}
        <a href="/about" className="text-brand underline">
          About page
        </a>
        .
      </p>
    </div>
  );
}
