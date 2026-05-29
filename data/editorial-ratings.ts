// Editorial ratings — transparent, reproducible scoring for medical-alert
// SERVICES (not Amazon products; there are no ASINs and no genuine on-site
// user-review corpus, so we do NOT fabricate an aggregateRating).
//
// COMPLIANCE / YMYL NOTE
// ----------------------
// These are the publication's own EDITORIAL scores (the Wirecutter/PCMag
// model), assigned by the house editorial persona (see lib/site.ts -> EDITOR).
// Every per-criterion score is derived from the real, cited attributes already
// documented on each review page (pricing, contract terms, monitoring-center
// certification, published device specs). Each score carries a one-line
// `basis` so the number is reproducible and defensible — not arbitrary.
//
// We claim research/editorial judgement, NOT first-hand lab testing or
// clinical credentials. Scores are 1-5 per criterion; the overall is a
// weighted average. The on-page display and the schema.org `Review` JSON-LD
// both read from THIS file, so the visible rating always equals the marked-up
// rating.

export type CriterionKey =
  | "monitoring"
  | "pricing"
  | "fallDetection"
  | "equipment"
  | "ease";

export interface Criterion {
  key: CriterionKey;
  /** Short label shown on-page. */
  label: string;
  /** Weight in the overall score. Weights sum to 1. */
  weight: number;
  /** How this criterion is judged (shown on the methodology page). */
  definition: string;
}

// Rubric — weights sum to 1.0. Kept consistent with /methodology.
export const RUBRIC: Criterion[] = [
  {
    key: "monitoring",
    label: "Response time & monitoring quality",
    weight: 0.3,
    definition:
      "Whether the monitoring center is US-based, 24/7, and UL-listed and/or CSAA Five Diamond certified, plus the response time the provider publishes.",
  },
  {
    key: "pricing",
    label: "Pricing & contract transparency",
    weight: 0.25,
    definition:
      "Headline price vs. true annual cost, equipment/activation fees, add-on clarity, contract length, and cancellation terms. No-contract, fee-transparent plans score highest.",
  },
  {
    key: "fallDetection",
    label: "Fall-detection accuracy & availability",
    weight: 0.15,
    definition:
      "Whether automatic fall detection is offered at all, on which devices, and at what add-on cost. Availability across plans is weighted; no provider's detector is treated as perfectly accurate.",
  },
  {
    key: "equipment",
    label: "Equipment, range & battery",
    weight: 0.15,
    definition:
      "Published device specs: form factors offered (pendant, wristband, smartwatch), GPS availability, in-home range, water resistance, and battery life.",
  },
  {
    key: "ease",
    label: "Ease of setup & use for seniors",
    weight: 0.15,
    definition:
      "Simplicity of setup, comfort and clarity of the wearable, caregiver-app and family-notification tools, and published support channels.",
  },
];

export interface ScoredCriterion {
  /** 1-5, derived from documented facts. */
  score: number;
  /** Why this score — traceable to a cited fact on the review page. */
  basis: string;
}

export interface ProviderRating {
  /** Stable id (matches the route slug where reviewed). */
  id: string;
  /** Service name as marked up in schema. */
  name: string;
  /** Brand for itemReviewed. */
  brand: string;
  /** Provider's official site (used in schema itemReviewed.url where shown). */
  url: string;
  /** ISO date the scores were last reviewed. */
  reviewed: string;
  /** Per-criterion 1-5 scores with their basis. */
  scores: Record<CriterionKey, ScoredCriterion>;
  /** One-line editorial summary used as reviewBody. */
  verdict: string;
}

export const PROVIDERS: Record<string, ProviderRating> = {
  "medical-guardian": {
    id: "medical-guardian",
    name: "Medical Guardian Medical Alert System",
    brand: "Medical Guardian",
    url: "https://www.medicalguardian.com",
    reviewed: "2026-05-29",
    verdict:
      "The most complete package — UL-listed 24/7 US monitoring, the widest device lineup from home button to GPS smartwatch, and transparent month-to-month pricing. Fall detection is a $10/mo add-on rather than included.",
    scores: {
      monitoring: {
        score: 5,
        basis:
          "24/7 US-based, UL-listed monitoring center; provider publishes sub-30-second average response time.",
      },
      pricing: {
        score: 4,
        basis:
          "Month-to-month, no contract, 30-day guarantee; true annual cost is published, but some GPS devices carry a $99–$149 equipment fee and fall detection adds $10/mo.",
      },
      fallDetection: {
        score: 4,
        basis:
          "Automatic fall detection offered on every plan as a $10/mo add-on; not included by default.",
      },
      equipment: {
        score: 5,
        basis:
          "Widest range in the set — home base, compact GPS, and two smartwatch options; nationwide GPS; up to 1,300 ft in-home range.",
      },
      ease: {
        score: 4,
        basis:
          "Caregiver app with location tracking; smartwatch form factor; offset by reported 10–20 min general-support hold times.",
      },
    },
  },
  "bay-alarm-medical": {
    id: "bay-alarm-medical",
    name: "Bay Alarm Medical",
    brand: "Bay Alarm Medical",
    url: "https://www.bayalarmmedical.com",
    reviewed: "2026-05-29",
    verdict:
      "The best value in the set: lowest starting price, free spouse monitoring on home plans, no equipment fee on most plans, and a UL-listed / CSAA Five Diamond monitoring center. Fewer device options than Medical Guardian.",
    scores: {
      monitoring: {
        score: 5,
        basis:
          "24/7 US-based monitoring that is UL-listed and CSAA Five Diamond certified; redundant AT&T + Verizon networks.",
      },
      pricing: {
        score: 5,
        basis:
          "Lowest starting price ($19.95/mo), no equipment fee on most plans, no activation fee, month-to-month, 30-day guarantee, free spouse monitoring on home plans.",
      },
      fallDetection: {
        score: 4,
        basis:
          "Automatic fall detection available on any plan as a $10/mo add-on; not included by default.",
      },
      equipment: {
        score: 4,
        basis:
          "Pendant, GPS button, smartwatch, and all-in-one device; nationwide GPS; up to 1,000 ft in-home range; fewer SKUs than Medical Guardian.",
      },
      ease: {
        score: 4,
        basis:
          "Caregiver app (requires a smartphone) and multiple support channels; one of the longest-established brands (since 1946); peak-hour support waits reported.",
      },
    },
  },
  "life-alert": {
    id: "life-alert",
    name: "Life Alert",
    brand: "Life Alert",
    url: "https://www.lifealert.com",
    reviewed: "2026-05-29",
    verdict:
      "Strong brand recognition and reliable 24/7 US monitoring, but a 3-year contract, the highest starting price in the set, upfront equipment fees, no automatic fall detection, and pricing it will not publish online.",
    scores: {
      monitoring: {
        score: 4,
        basis:
          "24/7 US-based monitoring with a fast published response; proprietary network and fewer publicly documented certifications than UL/CSAA peers.",
      },
      pricing: {
        score: 2,
        basis:
          "Highest starting price (~$49.95/mo), mandatory 3-year contract with early-termination penalties, $95–$198 upfront fees, and pricing not published online.",
      },
      fallDetection: {
        score: 1,
        basis:
          "No automatic fall detection offered — the user must press the button.",
      },
      equipment: {
        score: 3,
        basis:
          "Reliable home button and base unit with a waterproof pendant; GPS is an add-on and the lineup is narrower than competitors.",
      },
      ease: {
        score: 3,
        basis:
          "Simple, familiar button-and-base experience seniors recognize, but no caregiver app and the long contract reduces flexibility.",
      },
    },
  },
};

/** Bounds for any rating shown or marked up (1-5 per criterion). */
export const CRITERION_MIN = 1;
export const CRITERION_MAX = 5;

/** We display and mark up the overall on a 0-10 scale to match the site. */
export const OVERALL_BEST = 10;
export const OVERALL_WORST = 1;

export interface ComputedRating {
  /** Weighted average on the 1-5 criterion scale. */
  weightedFive: number;
  /** Same value rescaled to the 0-10 site convention, 1 decimal. */
  overallTen: number;
  /** Per-criterion rows for on-page display, in rubric order. */
  breakdown: Array<{
    key: CriterionKey;
    label: string;
    weight: number;
    score: number;
    basis: string;
  }>;
}

/**
 * Pure, reproducible computation: weighted average of the 1-5 criterion
 * scores, then rescaled to the site's 0-10 convention. No randomness, no
 * hidden inputs — the same provider data always yields the same number.
 */
export function computeRating(provider: ProviderRating): ComputedRating {
  let weightedFive = 0;
  const breakdown = RUBRIC.map((c) => {
    const sc = provider.scores[c.key];
    weightedFive += sc.score * c.weight;
    return {
      key: c.key,
      label: c.label,
      weight: c.weight,
      score: sc.score,
      basis: sc.basis,
    };
  });
  // Rescale 1-5 -> 1-10 linearly so the worst possible is 1 and best is 10,
  // matching OVERALL_WORST/OVERALL_BEST.
  const overallTen =
    OVERALL_WORST +
    ((weightedFive - CRITERION_MIN) / (CRITERION_MAX - CRITERION_MIN)) *
      (OVERALL_BEST - OVERALL_WORST);
  return {
    weightedFive: Math.round(weightedFive * 100) / 100,
    overallTen: Math.round(overallTen * 10) / 10,
    breakdown,
  };
}

/** Convenience accessor used by pages. */
export function getRating(id: string): {
  provider: ProviderRating;
  computed: ComputedRating;
} | null {
  const provider = PROVIDERS[id];
  if (!provider) return null;
  return { provider, computed: computeRating(provider) };
}
