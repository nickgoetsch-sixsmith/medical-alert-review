import { EDITOR } from "@/lib/site";

interface Props {
  /** ISO date string, e.g. "2026-05-29" */
  updated: string;
  /** Optional review rating to display, e.g. "9.4 / 10" */
  rating?: string;
  /** Human-readable updated label, defaults to month + year of `updated` */
  updatedLabel?: string;
}

/**
 * Consistent editorial byline used across all content pages.
 * Uses the house pen-name persona (Carol Bennett, Senior Editor) and links
 * to the transparent methodology page. No real-person likeness is used.
 */
export default function Byline({ updated, rating, updatedLabel }: Props) {
  const label =
    updatedLabel ??
    new Date(updated + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-6">
      <span className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1a5f7a] text-white text-xs font-bold"
        >
          EH
        </span>
        <span>
          By{" "}
          <span className="font-semibold text-gray-700">{EDITOR.name}</span>,{" "}
          {EDITOR.title}
        </span>
      </span>
      <span aria-hidden="true" className="text-gray-300">
        ·
      </span>
      <span>
        Updated <time dateTime={updated}>{label}</time>
      </span>
      {rating && (
        <>
          <span aria-hidden="true" className="text-gray-300">
            ·
          </span>
          <span>
            Rating: <strong className="text-gray-700">{rating}</strong>
          </span>
        </>
      )}
      <span aria-hidden="true" className="text-gray-300">
        ·
      </span>
      <a href="/methodology" className="text-[#1a5f7a] hover:underline">
        How we evaluate
      </a>
    </div>
  );
}
