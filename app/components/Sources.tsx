import type { SourceRef } from "@/lib/site";

interface Props {
  sources: SourceRef[];
  /** Optional note shown above the list */
  note?: string;
}

/**
 * Renders a cited-sources block. Used on YMYL (health/safety) pages so that
 * statistics, pricing, and certification claims are traceable to authoritative
 * or first-party sources.
 */
export default function Sources({ sources, note }: Props) {
  return (
    <div className="border-t border-rule pt-6 mt-10 text-sm">
      <h2 className="font-semibold text-ink-soft mb-2">Sources &amp; references</h2>
      {note && <p className="text-ink-mute mb-3">{note}</p>}
      <ul className="space-y-1 text-ink-mute">
        {sources.map((s) => (
          <li key={s.url} className="flex gap-2">
            <span aria-hidden="true" className="text-ink-mute">
              ›
            </span>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-brand hover:underline break-words"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-ink-mute mt-3">
        Pricing and plan details are drawn from each provider&apos;s official
        website and verified periodically; confirm current rates at the point of
        purchase. Statistics are cited from the sources above.
      </p>
    </div>
  );
}
