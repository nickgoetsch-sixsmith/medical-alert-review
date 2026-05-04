import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Medical Alert Review | How We Research and Rate Systems",
  description:
    "Medical Alert Review is an independent editorial site. We research, compare, and rate medical alert systems for seniors based on monitoring quality, pricing transparency, contract terms, and ease of use.",
  alternates: { canonical: "https://medicalalertreview.com/about" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Medical Alert Review",
  "url": "https://medicalalertreview.com",
  "description": "Independent reviews and comparisons of medical alert systems for elderly parents and seniors.",
  "sameAs": [],
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
          <a href="/" className="hover:text-[#1a5f7a]">Home</a> › About
        </nav>

        <h1 className="text-3xl font-bold mb-4">About Medical Alert Review</h1>
        <p className="text-gray-500 text-sm mb-8">Independent research for families choosing senior safety devices</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Medical Alert Review was built by adult children and family caregivers who went through the process of choosing a medical alert system for aging parents — and found that most information online was either written by the brands themselves or buried in affiliate spam. We set out to make the comparison process clear, honest, and actually useful.
        </p>

        <h2 className="text-xl font-bold mb-4">Who Reviews These Systems</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              role: "Family Caregivers",
              desc: "Our core team are adult children who have purchased and set up medical alert systems for elderly parents. We evaluate ease of setup, comfort, and real-world reliability from a caregiver perspective.",
              icon: "👨‍👩‍👧",
            },
            {
              role: "Consumer Researchers",
              desc: "We analyze pricing transparency, contract terms, cancellation policies, and monitoring center certifications. We contact customer service as anonymous buyers to test response quality.",
              icon: "🔬",
            },
            {
              role: "Senior Safety Advocates",
              desc: "Our reviewers include individuals with backgrounds in elder care and occupational therapy who advise on device wearability, button accessibility, and fall detection reliability.",
              icon: "🏥",
            },
          ].map(({ role, desc, icon }) => (
            <div key={role} className="border rounded-xl p-5">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold mb-2">{role}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">How We Rate Medical Alert Systems</h2>
        <div className="space-y-4 mb-10 text-sm">
          {[
            ["Monitoring Quality (30%)", "We evaluate monitoring center certifications (UL Listed, Five Diamond), average response time, and whether centers are US-based with 24/7 staffing."],
            ["Pricing Transparency (25%)", "We check whether advertised pricing matches actual invoices, whether equipment fees are disclosed upfront, and whether contract terms are clearly stated before purchase."],
            ["Device Quality & Comfort (20%)", "We assess wearability, waterproofing, battery life, button press force, and whether devices are comfortable enough for daily 24/7 wear."],
            ["Contract Terms & Cancellation (15%)", "We evaluate contract length, early termination fees, and how easy it is to cancel. Month-to-month with no fees scores highest."],
            ["Caregiver Tools (10%)", "We test caregiver apps, family notification systems, location tracking accuracy, and customer support responsiveness."],
          ].map(([criterion, desc]) => (
            <div key={criterion} className="border rounded-lg p-4">
              <p className="font-semibold mb-1">{criterion}</p>
              <p className="text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Our Disclosure Policy</h2>
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700 leading-relaxed mb-8">
          <p className="mb-3">
            Medical Alert Review may earn a referral fee when readers purchase through links on this site. This never influences our ratings or recommendations — brands cannot pay to improve their scores.
          </p>
          <p>
            Our top picks are based on the criteria above. If a lower-rated product has a higher affiliate commission, we still rank it lower. We update pricing and product information at least quarterly to keep comparisons accurate.
          </p>
        </div>

        <div className="bg-[#e8f4f8] rounded-xl p-6 text-sm">
          <p className="font-semibold mb-2">Have a question or correction?</p>
          <p className="text-gray-700">
            If you notice outdated pricing, an error in our comparisons, or have a first-hand experience with one of the systems we review, we want to hear it. Accuracy matters most in this category.
          </p>
        </div>
      </div>
    </>
  );
}
