import { EDITOR } from "@/lib/site";
import {
  computeRating,
  OVERALL_BEST,
  type ProviderRating,
} from "@/data/editorial-ratings";

/**
 * On-page editorial rating: an overall star score plus a transparent
 * per-criterion breakdown. Reads the SAME data the Review JSON-LD emits,
 * so the visible rating always equals the marked-up rating.
 *
 * Compliance: this is the publication's own editorial score (not user
 * reviews and not lab testing). It is attributed to the house editorial
 * persona and links to the public methodology.
 */

function Stars({ value, max }: { value: number; max: number }) {
  // value/max on a 0-1 scale -> 5 stars.
  const pct = Math.max(0, Math.min(1, value / max));
  const starsFilled = pct * 5;
  return (
    <span
      className="relative inline-block leading-none"
      role="img"
      aria-label={`${value.toFixed(1)} out of ${max}`}
    >
      <span className="text-gray-300 text-xl tracking-tight select-none">
        ★★★★★
      </span>
      <span
        className="absolute left-0 top-0 overflow-hidden text-[#f5a623] text-xl tracking-tight select-none"
        style={{ width: `${(starsFilled / 5) * 100}%` }}
        aria-hidden="true"
      >
        ★★★★★
      </span>
    </span>
  );
}

export default function EditorialRating({
  provider,
}: {
  provider: ProviderRating;
}) {
  const { overallTen, breakdown } = computeRating(provider);

  const reviewedLabel = new Date(
    provider.reviewed + "T00:00:00",
  ).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <section
      aria-label="Editorial rating"
      className="border rounded-xl p-5 mb-8 bg-white"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1">
        <div className="flex items-center gap-2">
          <Stars value={overallTen} max={OVERALL_BEST} />
          <span className="text-2xl font-bold text-gray-900">
            {overallTen.toFixed(1)}
            <span className="text-base font-normal text-gray-400">
              {" "}
              / {OVERALL_BEST}
            </span>
          </span>
        </div>
        <span className="text-xs text-gray-500">
          Editorial score by {EDITOR.name}, {EDITOR.title} · checked{" "}
          {reviewedLabel} ·{" "}
          <a href="/methodology" className="text-[#1a5f7a] hover:underline">
            how we score
          </a>
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Our own editorial rating from a published rubric — derived from the
        cited facts on this page, not user reviews or first-hand lab testing.
      </p>

      <div className="space-y-2">
        {breakdown.map((row) => {
          const pct = (row.score / 5) * 100;
          return (
            <div key={row.key} className="text-sm">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-medium text-gray-700">
                  {row.label}
                  <span className="text-gray-400 font-normal">
                    {" "}
                    · {Math.round(row.weight * 100)}%
                  </span>
                </span>
                <span className="font-semibold text-gray-900 shrink-0">
                  {row.score.toFixed(1)}
                  <span className="text-gray-400 font-normal"> / 5</span>
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-[#1a5f7a] rounded-full"
                  style={{ width: `${pct}%` }}
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{row.basis}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
