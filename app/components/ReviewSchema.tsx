import { EDITOR, SITE } from "@/lib/site";
import {
  computeRating,
  OVERALL_BEST,
  OVERALL_WORST,
  type ProviderRating,
} from "@/data/editorial-ratings";

/**
 * Emits schema.org `Review` JSON-LD for a single reviewed SERVICE.
 *
 * COMPLIANCE:
 * - `Review` + `reviewRating` is the correct type for a single editorial
 *   review of one service. We do NOT emit `aggregateRating` (there is no
 *   genuine corpus of user reviews to aggregate).
 * - `ratingValue` is computed from the published rubric in
 *   data/editorial-ratings.ts and equals the number shown on the page.
 * - `author` is the house editorial persona (a Person byline); the site is
 *   the `publisher`. No fabricated credentials are asserted.
 * - The reviewed item is a `Service`, since these are monitored services,
 *   not Amazon-style products.
 */
export default function ReviewSchema({
  provider,
  pageUrl,
}: {
  provider: ProviderRating;
  pageUrl: string;
}) {
  const { overallTen } = computeRating(provider);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Service",
      name: provider.name,
      serviceType: "Medical alert / personal emergency response service",
      brand: { "@type": "Brand", name: provider.brand },
      url: provider.url,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: overallTen.toFixed(1),
      bestRating: String(OVERALL_BEST),
      worstRating: String(OVERALL_WORST),
    },
    author: {
      "@type": "Person",
      name: EDITOR.name,
      jobTitle: EDITOR.title,
      description: EDITOR.bio,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    datePublished: provider.reviewed,
    url: pageUrl,
    reviewBody: provider.verdict,
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
