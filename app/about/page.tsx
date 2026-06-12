import type { Metadata } from "next";
import Link from "next/link";
import { EDITOR, SITE } from "@/lib/site";

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
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#1a5f7a]">
            Home
          </Link>{" "}
          › About
        </nav>

        <h1 className="text-3xl font-bold mb-4">About Medical Alert Review</h1>
        <p className="text-gray-500 text-sm mb-8">
          Independent research for families choosing senior safety devices ·
          Last updated <time dateTime="2026-06-12">June 2026</time>
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Medical Alert Review exists because most information about medical
          alert systems online is either written by the brands themselves or
          buried in affiliate spam. We set out to make the comparison process
          clear, honest, and genuinely useful for the adult children and
          caregivers who do this research on behalf of an aging parent.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          We are an independent editorial team. We compare published, verifiable
          information — manufacturer specifications, official provider pricing,
          monitoring-center certifications, and guidance from authoritative
          health organizations — and we explain the trade-offs in plain
          language. We do not run a clinical testing lab, and we are careful not
          to overstate safety claims on what is, ultimately, a health-and-safety
          decision.
        </p>

        <h2 className="text-xl font-bold mb-4">Who Writes These Reviews</h2>
        <div className="border rounded-xl p-6 mb-10 flex flex-col sm:flex-row gap-5 items-start">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1a5f7a] text-white text-xl font-bold"
          >
            {EDITOR.name
              .split(/\s+/)
              .map((part) => part[0])
              .join("")
              .toUpperCase()}
          </div>
          <div>
            <h3 className="font-bold text-lg">{EDITOR.name}</h3>
            <p className="text-[#1a5f7a] text-sm font-medium mb-2">
              {EDITOR.title}, Medical Alert Review
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {EDITOR.bio} &ldquo;{EDITOR.name}&rdquo; is the consistent house
              editorial persona under which our reviews are published. Our work
              is research-and-comparison journalism: we read the specs and the
              fine print so families don&apos;t have to.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">How We Rate Medical Alert Systems</h2>
        <div className="space-y-4 mb-6 text-sm">
          {[
            [
              "Monitoring Quality (30%)",
              "We verify monitoring-center certifications (UL-listed, CSAA Five Diamond), whether centers are US-based and staffed 24/7, and the response times each provider publishes.",
            ],
            [
              "Pricing Transparency (25%)",
              "We record advertised pricing, equipment fees, and add-on costs from each provider's official site, then calculate the true annual cost and flag any gap between headline and real-world price.",
            ],
            [
              "Device Quality & Comfort (20%)",
              "We compare published specs — water-resistance rating, battery life, range, and form factor — and weight comfort and simplicity for daily senior wear.",
            ],
            [
              "Contract Terms & Cancellation (15%)",
              "We document contract length, early-termination fees, and money-back guarantees. Month-to-month with no penalty scores highest.",
            ],
            [
              "Caregiver Tools (10%)",
              "We assess each provider's caregiver app, family-notification features, and published support channels.",
            ],
          ].map(([criterion, desc]) => (
            <div key={criterion} className="border rounded-lg p-4">
              <p className="font-semibold mb-1">{criterion}</p>
              <p className="text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-10">
          Read the full breakdown — including the exact sources we rely on — on
          our{" "}
          <a href="/methodology" className="text-[#1a5f7a] underline">
            How We Evaluate
          </a>{" "}
          page.
        </p>

        <h2 className="text-xl font-bold mb-4">Our Disclosure Policy</h2>
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700 leading-relaxed mb-8">
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

        <div className="bg-[#e8f4f8] rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Have a question or correction?</p>
          <p className="text-gray-700">
            If you notice outdated pricing, an error in our comparisons, or have
            a first-hand experience with one of the systems we review, we want
            to hear it. Accuracy matters most in this category.
          </p>
        </div>
      </div>
    </>
  );
}
