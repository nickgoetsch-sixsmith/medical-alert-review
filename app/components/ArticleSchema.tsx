import { EDITOR, SITE } from "@/lib/site";

/**
 * Emits Article / MedicalWebPage JSON-LD for a content page.
 *
 * FRESHNESS + E-E-A-T:
 * - `datePublished` / `dateModified` are driven off the same `updated` date the
 *   visible <Byline> shows, so the marked-up freshness always equals the
 *   on-page freshness (no drift).
 * - `author` is the disclosed house editorial persona (a Person) with a `url`
 *   pointing to /about, where the pen-name policy is explained. No fabricated
 *   credentials are asserted.
 * - `publisher` is the site Organization.
 *
 * Use `type="MedicalWebPage"` for YMYL health-info guides (coverage, elderly,
 * in-home, fall detection) and `type="Article"` for the rest. MedicalWebPage is
 * a subtype that signals a health topic to search engines.
 */
export default function ArticleSchema({
  headline,
  path,
  published,
  updated,
  type = "Article",
  description,
}: {
  headline: string;
  /** Page path beginning with "/", e.g. "/life-alert-cost". */
  path: string;
  /** ISO date first published, e.g. "2026-01-20". */
  published: string;
  /** ISO date last modified — pass the same value used by <Byline updated=…>. */
  updated: string;
  type?: "Article" | "MedicalWebPage";
  description?: string;
}) {
  const url = `${SITE.url}${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    ...(description ? { description } : {}),
    datePublished: published,
    dateModified: updated,
    author: {
      "@type": "Person",
      name: EDITOR.name,
      jobTitle: EDITOR.title,
      description: EDITOR.bio,
      url: `${SITE.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(type === "MedicalWebPage"
      ? { lastReviewed: updated, audience: { "@type": "MedicalAudience", audienceType: "Patient / caregiver" } }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
