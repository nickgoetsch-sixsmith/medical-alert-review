import OutboundLink from "./OutboundLink";
import { ChevronIcon } from "./Icon";
import { AFFILIATE_LINKS, FTC_DISCLOSURE } from "@/lib/affiliate-links";

/**
 * CtaBlock — the standardized end-of-page conversion prompt used after the
 * FAQ / buying-factors block on pages that previously had no outbound CTA.
 *
 * It renders a tracked OutboundLink to the recommended brand (from
 * lib/affiliate-links.ts) with the shared FTC microcopy underneath. `heading`
 * frames it as a next step; `note` gives one honest line of context. Reserved
 * SOS red is never used here — this is a routine (not emergency) affordance.
 */
export default function CtaBlock({
  brandKey,
  heading = "Ready to compare plans?",
  note,
  ctaLabel,
}: {
  /** Key into AFFILIATE_LINKS, e.g. "bay-alarm" | "medical-guardian". */
  brandKey: keyof typeof AFFILIATE_LINKS;
  heading?: string;
  note?: string;
  /** Overrides the default "See Plans at {Brand} →" button text. */
  ctaLabel?: string;
}) {
  const brand = AFFILIATE_LINKS[brandKey];
  const label = ctaLabel ?? `See Plans at ${brand.name}`;

  return (
    <section
      aria-label="Compare plans"
      className="bg-brand-tint border border-brand-tint-edge rounded-panel p-6 my-10"
    >
      <p className="eyebrow mb-3">Next step</p>
      <h2 className="font-serif text-xl font-bold text-brand-dark mb-2">{heading}</h2>
      {note && <p className="text-sm text-ink-soft mb-4 max-w-prose">{note}</p>}
      <OutboundLink
        href={brand.url}
        label={brand.name}
        className="inline-flex items-center justify-center gap-1.5 min-h-[44px] bg-brand text-white font-semibold px-6 py-3 rounded-card hover:bg-brand-dark transition-colors"
      >
        {label}
        <ChevronIcon className="w-4 h-4" />
      </OutboundLink>
      <p className="text-xs text-ink-mute mt-2">{FTC_DISCLOSURE}</p>
    </section>
  );
}
