// Shared "Related Reviews" continuation rail.
//
// Every money page should link UP to the /best-medical-alert-systems hub plus a
// few sibling reviews so no page dead-ends. Extracted from the rail originally
// inlined in medical-alert-system-for-elderly.
//
// Pass the current page's slug so it is excluded from the sibling list.

type ReviewLink = { href: string; label: string };

const ALL_REVIEWS: ReviewLink[] = [
  { href: "/medical-guardian-review", label: "Medical Guardian Review" },
  { href: "/bay-alarm-medical-review", label: "Bay Alarm Medical Review" },
  { href: "/life-alert-cost", label: "Life Alert Cost Breakdown" },
  { href: "/fall-detection-medical-alert", label: "Fall Detection Medical Alert Guide" },
  { href: "/best-medical-alert-watches", label: "Best Medical Alert Watches" },
  { href: "/in-home-medical-alert-systems", label: "Best In-Home Medical Alert Systems" },
];

export default function RelatedReviews({
  currentHref,
  max = 4,
}: {
  currentHref: string;
  max?: number;
}) {
  const siblings = ALL_REVIEWS.filter((r) => r.href !== currentHref).slice(0, max);

  return (
    <div className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 text-sm">
      <p className="eyebrow mb-3">Related reviews</p>
      <ul className="space-y-2">
        <li>
          <a href="/best-medical-alert-systems" className="text-brand underline font-medium">
            Best Medical Alert Systems of 2026 — full comparison
          </a>
        </li>
        {siblings.map((r) => (
          <li key={r.href}>
            <a href={r.href} className="text-brand underline">
              {r.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
