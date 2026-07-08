/**
 * Inline SVG icon set — replaces the ✓ / ✗ / ⚠ text glyphs that shipped
 * across the review pages. Consistent stroke style, currentColor-driven so
 * each icon inherits the surrounding token color (affirm / sos / caution).
 *
 * All icons are decorative by default (aria-hidden); the adjacent text carries
 * the meaning. Sizing is controlled by the caller via className (e.g. "w-4 h-4").
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function base(props: IconProps) {
  const { title, className = "w-4 h-4", ...rest } = props;
  return {
    className,
    viewBox: "0 0 20 20",
    role: title ? ("img" as const) : undefined,
    "aria-hidden": title ? undefined : true,
    ...rest,
  };
}

/** Affirmative check inside a soft disc — "what we like". */
export function CheckIcon(props: IconProps) {
  const { title } = props;
  return (
    <svg fill="none" {...base(props)}>
      {title ? <title>{title}</title> : null}
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.12" />
      <path
        d="M6 10.4l2.6 2.6L14.5 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Negative mark — "what to watch for" / not available. */
export function CrossIcon(props: IconProps) {
  const { title } = props;
  return (
    <svg fill="none" {...base(props)}>
      {title ? <title>{title}</title> : null}
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.12" />
      <path
        d="M7 7l6 6M13 7l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Caution triangle — validated complaints / heads-up. */
export function WarnIcon(props: IconProps) {
  const { title } = props;
  return (
    <svg fill="none" {...base(props)}>
      {title ? <title>{title}</title> : null}
      <path
        d="M10 2.5l7.5 13a1 1 0 01-.87 1.5H3.37a1 1 0 01-.87-1.5l7.5-13a1 1 0 011.74 0z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M10 3.2l7.1 12.3a.7.7 0 01-.6 1.05H3.5a.7.7 0 01-.6-1.05L10 3.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 8v3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

/** Chevron — disclosure / continuation affordance. */
export function ChevronIcon(props: IconProps) {
  return (
    <svg fill="none" {...base(props)}>
      <path
        d="M7 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
