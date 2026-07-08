// Central affiliate / outbound brand-link configuration.
//
// Keyed by brand slug. For now each `url` is the brand's official homepage.
// TODO: replace with Impact/CJ/Partnerize tracked deep link once enrolled.
//
// Rendering CTAs from this map keeps the outbound destination in one place and
// makes it trivial to swap in tracked links network-by-network without touching
// every review page. Pair each CTA with the inline FTC disclosure (FTC_DISCLOSURE).

export type AffiliateLink = { name: string; url: string };

export const AFFILIATE_LINKS: Record<string, AffiliateLink> = {
  "medical-guardian": {
    name: "Medical Guardian",
    // TODO: replace with Impact/CJ/Partnerize tracked deep link once enrolled
    url: "https://www.medicalguardian.com",
  },
  "bay-alarm": {
    name: "Bay Alarm Medical",
    // TODO: replace with Impact/CJ/Partnerize tracked deep link once enrolled
    url: "https://www.bayalarmmedical.com",
  },
  "life-alert": {
    name: "Life Alert",
    // Life Alert runs no public affiliate program; this is the brand's own
    // direct site (honest, non-tracked). Leave as-is unless an affiliate
    // relationship is established.
    url: "https://www.lifealert.com",
  },
  lifeline: {
    name: "Lifeline",
    // TODO: replace with Impact/CJ/Partnerize tracked deep link once enrolled
    url: "https://www.lifeline.com",
  },
  mobilehelp: {
    name: "MobileHelp",
    // TODO: replace with Impact/CJ/Partnerize tracked deep link once enrolled
    url: "https://www.mobilehelp.com",
  },
  lively: {
    name: "Lively",
    // TODO: replace with Impact/CJ/Partnerize tracked deep link once enrolled
    url: "https://www.lively.com",
  },
} as const;

// One-line inline FTC disclosure to render directly under each affiliate CTA.
export const FTC_DISCLOSURE =
  "If you buy through this link we may earn a commission — it never changes our ratings.";
