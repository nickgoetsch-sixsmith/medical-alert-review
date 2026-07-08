import Link from "next/link";
import { SITE } from "@/lib/site";
import { ChevronIcon } from "./Icon";

export type Crumb = { label: string; href?: string };

/**
 * Shared breadcrumb trail + matching BreadcrumbList JSON-LD.
 *
 * Pass the intermediate + current nodes; "Home" is prepended automatically.
 * The last crumb is the current page (no href). Reviews live under a
 * Reviews > Brand path; guides under Buying Guides / Topics, matching the
 * header IA so the trail mirrors how users actually navigated in.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const full: Crumb[] = [{ label: "Home", href: "/" }, ...trail];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: c.href === "/" ? `${SITE.url}/` : `${SITE.url}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-ink-mute mb-6">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.label} className="flex items-center gap-x-1.5">
                {c.href && !last ? (
                  <Link href={c.href} className="hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span className={last ? "text-ink-soft" : ""} aria-current={last ? "page" : undefined}>
                    {c.label}
                  </span>
                )}
                {!last && (
                  <ChevronIcon className="w-3 h-3 text-rule shrink-0" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
