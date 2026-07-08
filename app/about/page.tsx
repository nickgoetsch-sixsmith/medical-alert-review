import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/app/components/Editorial";
import { EDITOR, SITE } from "@/lib/site";
import { RUBRIC } from "@/data/editorial-ratings";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Medical Alert Review is an independent editorial site comparing medical alert systems using published specs, official pricing, and cited health sources.",
  alternates: { canonical: `${SITE.url}/about` },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description:
    "Independent reviews and comparisons of medical alert systems for elderly parents and seniors, based on published specifications, official pricing, and authoritative health sources.",
  sameAs: [],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-ink-mute mb-6">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>{" "}
          › About
        </nav>

        <h1 className="text-3xl font-bold mb-4">About Medical Alert Review</h1>
        <p className="text-ink-mute text-sm mb-8">
          Independent research for families choosing senior safety devices ·
          Last updated <time dateTime="2026-06-12">June 2026</time>
        </p>

        <p className="text-ink-soft leading-relaxed mb-6">
          Medical Alert Review exists because most information about medical
          alert systems online is either written by the brands themselves or
          buried in affiliate spam. We set out to make the comparison process
          clear, honest, and genuinely useful for the adult children and
          caregivers who do this research on behalf of an aging parent.
        </p>
        <p className="text-ink-soft leading-relaxed mb-10">
          We are an independent editorial team. We compare published, verifiable
          information — manufacturer specifications, official provider pricing,
          monitoring-center certifications, and guidance from authoritative
          health organizations — and we explain the trade-offs in plain
          language. We do not run a clinical testing lab, and we are careful not
          to overstate safety claims on what is, ultimately, a health-and-safety
          decision.
        </p>

        <SectionHeading eyebrow="Who we are">Who Writes These Reviews</SectionHeading>
        <div className="bg-paper-raised border border-rule rounded-panel p-6 mb-10 flex flex-col sm:flex-row gap-5 items-start shadow-card">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand text-white text-xl font-bold"
          >
            {EDITOR.name
              .split(/\s+/)
              .map((part) => part[0])
              .join("")
              .toUpperCase()}
          </div>
          <div>
            <h3 className="font-bold text-lg">{EDITOR.name}</h3>
            <p className="text-brand text-sm font-medium mb-2">
              {EDITOR.title}, Medical Alert Review
            </p>
            <p className="text-sm text-ink-mute leading-relaxed">
              {EDITOR.bio} &ldquo;{EDITOR.name}&rdquo; is the consistent house
              editorial persona under which our reviews are published. Our work
              is research-and-comparison journalism: we read the specs and the
              fine print so families don&apos;t have to.
            </p>
          </div>
        </div>

        <SectionHeading eyebrow="Our rubric">How We Rate Medical Alert Systems</SectionHeading>
        <div className="space-y-4 mb-6 text-sm">
          {RUBRIC.map((c) => (
            <div key={c.key} className="bg-paper-raised border border-rule rounded-card p-4">
              <p className="font-semibold mb-1">
                {c.label} ({Math.round(c.weight * 100)}%)
              </p>
              <p className="text-ink-mute">{c.definition}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-mute mb-10">
          Read the full breakdown — including the exact sources we rely on — on
          our{" "}
          <a href="/methodology" className="text-brand underline">
            How We Evaluate
          </a>{" "}
          page.
        </p>

        <SectionHeading eyebrow="Our guardrails">What We Don&apos;t Do</SectionHeading>
        <ul className="text-sm text-ink-soft space-y-2 mb-10 list-disc pl-5">
          <li>We don&apos;t accept payment, free service, or gifts from providers in exchange for placement or scores.</li>
          <li>We don&apos;t run phone lead-generation — there is no call center behind this site selling you anything.</li>
          <li>We don&apos;t claim hands-on lab testing we haven&apos;t done. When a number is a commonly reported figure rather than a published price, we say so on the page.</li>
          <li>We don&apos;t let an affiliate commission decide a ranking. Our cheapest-to-join recommendation (Bay Alarm Medical) and our top overall pick (Medical Guardian) are set by the scoring rubric on our methodology page.</li>
        </ul>

        <SectionHeading eyebrow="Full transparency">Our Disclosure Policy</SectionHeading>
        <div className="bg-band border border-rule rounded-panel p-6 text-sm text-ink-soft leading-relaxed mb-8">
          <p className="mb-3">
            Medical Alert Review may earn a referral fee when readers purchase
            through links on this site. This never influences our ratings or
            recommendations — brands cannot pay to improve their scores.
          </p>
          <p>
            Our top picks are based on the criteria above. If a lower-rated
            product carries a higher affiliate commission, we still rank it
            lower. This site provides general information and is not medical
            advice; for guidance about a specific health condition, consult a
            qualified healthcare professional.
          </p>
        </div>

        <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 text-sm">
          <p className="eyebrow mb-3">Get in touch</p>
          <p className="font-semibold mb-2">Have a question or correction?</p>
          <p className="text-ink-soft">
            If you notice outdated pricing, an error in our comparisons, or have
            a first-hand experience with one of the systems we review, we want
            to hear it. Accuracy matters most in this category.
          </p>
        </div>
      </div>
    </>
  );
}
