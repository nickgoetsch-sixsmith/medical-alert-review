import type { Metadata } from "next";
import DiagramFigure from "@/app/components/DiagramFigure";
import DeviceTokenCard from "@/app/components/DeviceTokenCard";
import OutboundLink from "@/app/components/OutboundLink";
import CtaBlock from "@/app/components/CtaBlock";
import { Eyebrow, SectionHeading } from "@/app/components/Editorial";
import { CheckIcon, ChevronIcon } from "@/app/components/Icon";
import { AFFILIATE_LINKS, FTC_DISCLOSURE } from "@/lib/affiliate-links";
import { computeRating, PROVIDERS } from "@/data/editorial-ratings";

const ratingOf = (id: string) =>
  `${computeRating(PROVIDERS[id]).overallTen.toFixed(1)}/10`;

export const metadata: Metadata = {
  title: "Medical Alert Systems, Reviewed Independently for Seniors",
  description:
    "Compare the best medical alert systems for seniors in 2026: Medical Guardian, Bay Alarm Medical, and Life Alert on pricing, fall detection, and contracts.",
  alternates: { canonical: "https://medicalalertreview.com/" },
};

const featured = [
  {
    rank: 1,
    name: "Medical Guardian",
    badge: "Best Overall",
    badgeColor: "bg-brand-tint text-brand",
    price: "$29.95/mo",
    rating: ratingOf("medical-guardian"),
    pros: ["GPS + home coverage", "No long-term contract", "24/7 US-based monitoring"],
    href: "/medical-guardian-review",
    brandKey: "medical-guardian" as const,
    device: "MGMove smartwatch + home base",
  },
  {
    rank: 2,
    name: "Bay Alarm Medical",
    badge: "Best Value",
    badgeColor: "bg-brand-tint text-brand",
    price: "$19.95/mo",
    rating: ratingOf("bay-alarm-medical"),
    pros: ["Lowest monthly fee", "Free spouse monitoring", "Fall detection add-on"],
    href: "/bay-alarm-medical-review",
    brandKey: "bay-alarm" as const,
    device: "SOS All-in-One device",
  },
  {
    rank: 3,
    name: "Life Alert",
    badge: "Most Recognized",
    badgeColor: "bg-brand-tint text-brand",
    price: "$49.95/mo",
    rating: ratingOf("life-alert"),
    pros: ["Iconic brand recognition", "Nationwide coverage", "Waterproof help button"],
    href: "/life-alert-cost",
    brandKey: "life-alert" as const,
    device: "HELP pendant + base unit",
  },
];

const quickLinks = [
  { label: "Medical Guardian Review", href: "/medical-guardian-review", desc: "Full breakdown of pricing, devices, and monitoring" },
  { label: "Bay Alarm Medical Review", href: "/bay-alarm-medical-review", desc: "Best value pick — starting at $19.95/mo" },
  { label: "Life Alert Cost", href: "/life-alert-cost", desc: "What Life Alert actually costs in 2026" },
  { label: "No Monthly Fee Options", href: "/no-monthly-fee-medical-alert", desc: "Pay once, no recurring charges" },
  { label: "Fall Detection Devices", href: "/fall-detection-medical-alert", desc: "Auto-detect falls without pressing a button" },
  { label: "Systems for Elderly", href: "/medical-alert-system-for-elderly", desc: "Top picks for aging parents and seniors" },
  { label: "Medical Alert Watches", href: "/best-medical-alert-watches", desc: "Monitored smartwatches vs. Apple Watch fall detection" },
  { label: "In-Home Systems", href: "/in-home-medical-alert-systems", desc: "Cheapest monitored protection for stay-at-home seniors" },
  { label: "Does Medicare Cover It?", href: "/does-medicare-cover-medical-alert-systems", desc: "Medicare, Medicare Advantage, and Medicaid coverage explained" },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Medical Alert Review",
    "url": "https://medicalalertreview.com",
    "description": "Independent reviews of the best medical alert systems for seniors",
    "publisher": {
      "@type": "Organization",
      "name": "Medical Alert Review",
      "url": "https://medicalalertreview.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-brand-tint border-b border-brand-tint-edge">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-16">
          <Eyebrow className="mb-4">The Independent Review Desk</Eyebrow>
          <h1 className="text-3xl md:text-[2.75rem] leading-[1.08] font-bold text-brand-dark mb-4 max-w-3xl">
            Medical Alert Systems, Reviewed Independently for Seniors
          </h1>
          <p className="text-ink-soft text-lg max-w-2xl mb-6">
            We research and compare every major medical alert system from published specs, official pricing, and monitoring-center certifications — so you can find the right fit for your loved one without the sales pressure.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-dark font-medium mb-8">
            <li>Pricing verified against official rate sheets</li>
            <li className="sm:border-l sm:border-brand/30 sm:pl-6">No paid rankings</li>
            <li className="sm:border-l sm:border-brand/30 sm:pl-6">Reviewed quarterly</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="/best-medical-alert-systems"
              className="inline-flex items-center justify-center min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
            >
              See our top picks →
            </a>
            <a
              href="/methodology"
              className="inline-flex items-center justify-center min-h-[44px] bg-paper-raised text-brand font-semibold px-6 py-3 rounded-card border border-brand hover:bg-brand-tint transition-colors"
            >
              How we evaluate
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <SectionHeading eyebrow="Top picks · June 2026">Our Top Picks</SectionHeading>
        <p className="text-ink-mute mb-8 text-sm -mt-2">
          Ranked by Carol Bennett, Senior Editor · Based on monitoring quality, pricing transparency, and ease of use ·{" "}
          <a href="/methodology" className="text-brand hover:underline">How we evaluate</a>
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((s) => (
            <div key={s.name} className="group flex flex-col bg-paper-raised border border-rule rounded-card p-6 shadow-card hover:shadow-lift hover:border-brand/40 transition-all">
              <DeviceTokenCard brand={s.name} device={s.device} className="mb-4" />
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-badge ${s.badgeColor}`}>{s.badge}</span>
                </div>
                <div className="flex items-center gap-1 bg-affirm-tint border border-affirm/20 px-2 py-0.5 rounded-badge">
                  <svg className="w-3 h-3 text-star" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-xs font-bold text-affirm">{s.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">
                <a href={s.href} className="hover:text-brand focus-visible:text-brand">{s.name}</a>
              </h3>
              <p className="text-brand font-semibold mb-3">{s.price}</p>
              <ul className="space-y-1.5 mb-4 flex-1">
                {s.pros.map((p) => (
                  <li key={p} className="text-sm text-ink-soft flex gap-2 items-start">
                    <CheckIcon className="w-4 h-4 text-affirm shrink-0 mt-0.5" />{p}
                  </li>
                ))}
              </ul>
              <div className="mt-2 border-t border-rule pt-4 flex flex-col gap-2">
                <OutboundLink
                  href={AFFILIATE_LINKS[s.brandKey].url}
                  label={s.name}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded-card hover:bg-brand-dark transition-colors"
                >
                  See Plans at {s.name}
                  <ChevronIcon className="w-3.5 h-3.5" />
                </OutboundLink>
                <a href={s.href} className="inline-flex items-center justify-center gap-1.5 min-h-[44px] text-sm font-semibold text-brand hover:underline">
                  Read full review
                  <ChevronIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-ink-mute mt-4">{FTC_DISCLOSURE}</p>
        <div className="mt-8">
          <DiagramFigure
            src="/diagrams/monthly-cost-comparison.svg"
            alt="Bar chart of starting monthly prices: Bay Alarm Medical $19.95, Lively Mobile2 $24.99, Medical Guardian $29.95, Lifeline $29.95, Life Alert $49.95"
            width={800}
            height={420}
            caption="Advertised base in-home plan rates from each provider's official pricing, June 2026."
          />
        </div>
      </section>

      <section className="bg-band border-y border-rule">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <SectionHeading eyebrow="The full desk">Browse by Topic</SectionHeading>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="group flex flex-col bg-paper-raised border border-rule rounded-card p-4 hover:border-brand hover:shadow-card transition-all">
                <p className="font-semibold text-brand mb-1">{l.label}</p>
                <p className="text-sm text-ink-mute mb-3 flex-1">{l.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:gap-2 transition-all">
                  Read more
                  <ChevronIcon className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-2 mb-6">
          <SectionHeading eyebrow="Our method" className="mb-0">How We Review Medical Alert Systems</SectionHeading>
          <a href="/methodology" className="text-sm font-semibold text-brand hover:underline pb-1">
            Read our full methodology →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-ink-soft">
          <div className="border-t-2 border-brand pt-4">
            <p className="font-semibold text-ink mb-1">Independent Research</p>
            <p>We evaluate each system on monitoring response time, device quality, pricing transparency, and contract terms.</p>
          </div>
          <div className="border-t-2 border-brand pt-4">
            <p className="font-semibold text-ink mb-1">No Paid Rankings</p>
            <p>Our top picks are based on merit. We may earn a referral fee, but it never influences our scores or recommendations.</p>
          </div>
          <div className="border-t-2 border-brand pt-4">
            <p className="font-semibold text-ink mb-1">Regularly Updated</p>
            <p>Pricing and features change often. We review and update every page at least quarterly.</p>
          </div>
        </div>
        <CtaBlock
          brandKey="bay-alarm"
          heading="Start with our best-value pick"
          note="Bay Alarm Medical is the lowest-cost monitored option in our comparison — no contract, free spouse monitoring, and a 30-day guarantee. Compare its plans, or read the full ranking above."
        />
      </section>
    </>
  );
}
