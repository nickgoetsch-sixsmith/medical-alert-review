import Image from "next/image";

/**
 * ImageFigure — the shared photographic/illustrative image primitive, a sibling
 * of DiagramFigure (which is reserved for the generated SVG data diagrams).
 *
 * Every image is next/image-sized (explicit width/height → no CLS) with an alt
 * and an editorial caption. Above-the-fold hero images pass `eager` to load
 * immediately as the LCP element; card thumbnails default to lazy.
 *
 * Next 16 note: `priority` is deprecated in favor of `preload` / explicit
 * loading. For a hero LCP image we use loading="eager" + fetchPriority="high"
 * (the documented replacement), not the deprecated `priority` prop.
 */
export default function ImageFigure({
  src,
  alt,
  width,
  height,
  caption,
  eager = false,
  className = "",
  rounded = "panel",
  sizes,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** True for the above-the-fold LCP image on a page. */
  eager?: boolean;
  className?: string;
  rounded?: "card" | "panel" | "ledger";
  sizes?: string;
}) {
  const radius =
    rounded === "card"
      ? "rounded-card"
      : rounded === "ledger"
        ? "rounded-ledger"
        : "rounded-panel";

  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={`w-full h-auto ${radius} border border-rule bg-paper-raised`}
      />
      {caption && (
        <figcaption className="text-xs text-ink-mute mt-2">{caption}</figcaption>
      )}
    </figure>
  );
}
