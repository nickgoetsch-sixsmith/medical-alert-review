/**
 * Editorial layout motif — the shared "independent review desk" furniture.
 *
 * These are the primitives every content page inherits so the identity is
 * enforced from one place, not re-styled per page:
 *   - Eyebrow:       mono/uppercase kicker
 *   - SectionHeading: eyebrow + serif h2 pair
 *   - Band:          alternating section background bands
 *   - Verdict:       authored pull-quote / verdict block (reserved SOS variant)
 *
 * No fabricated claims live here — these are presentation shells only.
 */
import type { ReactNode } from "react";

/* ── Eyebrow kicker ─────────────────────────────────────────────────────── */
export function Eyebrow({
  children,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  tone?: "brand" | "sos";
  className?: string;
}) {
  return (
    <p
      className={`eyebrow ${tone === "sos" ? "eyebrow-sos" : ""} ${className}`}
    >
      {children}
    </p>
  );
}

/* ── Section heading: eyebrow + serif h2 ────────────────────────────────── */
export function SectionHeading({
  eyebrow,
  children,
  id,
  tone = "brand",
  as: As = "h2",
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  id?: string;
  tone?: "brand" | "sos";
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={`mb-5 ${className}`}>
      <Eyebrow tone={tone} className="mb-2">
        {eyebrow}
      </Eyebrow>
      <As
        id={id}
        className={`${As === "h2" ? "text-2xl" : "text-xl"} font-bold scroll-mt-24`}
      >
        {children}
      </As>
    </div>
  );
}

/* ── Alternating section band ───────────────────────────────────────────── */
export function Band({
  children,
  tone = "paper",
  className = "",
}: {
  children: ReactNode;
  tone?: "paper" | "band" | "tint";
  className?: string;
}) {
  const bg =
    tone === "band"
      ? "bg-band border-y border-rule"
      : tone === "tint"
        ? "bg-brand-tint border-y border-brand-tint-edge"
        : "bg-paper";
  return (
    <section className={`${bg} ${className}`}>
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">{children}</div>
    </section>
  );
}

/* ── Verdict pull-quote block ───────────────────────────────────────────── */
export function Verdict({
  label = "The verdict",
  children,
  tone = "brand",
  cite,
}: {
  label?: string;
  children: ReactNode;
  tone?: "brand" | "sos";
  cite?: string;
}) {
  const sos = tone === "sos";
  return (
    <figure
      className={`relative rounded-panel border-l-4 pl-6 pr-5 py-6 my-8 ${
        sos
          ? "border-sos bg-sos-tint"
          : "border-brand bg-brand-tint"
      }`}
    >
      <figcaption
        className={`eyebrow ${sos ? "eyebrow-sos" : ""} mb-3`}
      >
        {label}
      </figcaption>
      <blockquote
        className={`font-serif text-xl md:text-[1.35rem] leading-snug ${
          sos ? "text-sos-dark" : "text-brand-dark"
        }`}
      >
        {children}
      </blockquote>
      {cite ? (
        <cite className="mt-3 block text-xs not-italic text-ink-mute">
          {cite}
        </cite>
      ) : null}
    </figure>
  );
}
