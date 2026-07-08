import { ChevronIcon } from "./Icon";

/**
 * DeviceTokenCard — a tasteful, clearly-branded TOKEN placeholder used where we
 * cannot yet ethically source a real, licensed device photo. It is deliberately
 * a typographic/geometric mark, NOT a fabricated product photo: no invented
 * render, no stock image pretending to be the device.
 *
 * The review-desk motif is preserved (brand tint, mono eyebrow, serif monogram)
 * so it reads as intentional art direction rather than a missing image. When the
 * owner supplies a licensed photo, swap the token for <ImageFigure> in place.
 *
 * Sizing mirrors an image slot (aspect-ratio box) so replacing it with a real
 * photo causes no layout shift.
 */
export default function DeviceTokenCard({
  brand,
  device,
  ratio = "4 / 3",
  className = "",
}: {
  /** Brand name, e.g. "Medical Guardian". */
  brand: string;
  /** Device / form factor, e.g. "MGMove smartwatch". */
  device: string;
  /** CSS aspect-ratio for the token slot. */
  ratio?: string;
  className?: string;
}) {
  const monogram = brand
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-card border border-brand-tint-edge bg-brand-tint ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${brand} ${device} — brand token (photo pending)`}
    >
      {/* Ledger-paper hairline texture, on-palette and subtle. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand-tint-edge) 1px, transparent 1px)",
          backgroundSize: "100% 1.5rem",
        }}
      />
      <span
        aria-hidden="true"
        className="relative flex h-16 w-16 items-center justify-center rounded-panel bg-brand text-white font-serif text-2xl font-bold shadow-card"
      >
        {monogram}
      </span>
      <p className="relative mt-3 font-serif text-sm font-bold text-brand-dark px-3 text-center">
        {brand}
      </p>
      <p className="relative eyebrow mt-1 text-[0.6rem] before:hidden">
        {device}
      </p>
      <p className="relative mt-2 flex items-center gap-1 text-[0.65rem] text-ink-mute">
        Photo pending
        <ChevronIcon className="h-3 w-3" />
      </p>
    </div>
  );
}
