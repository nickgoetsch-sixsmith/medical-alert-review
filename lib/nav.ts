// Central site information architecture — the single source of truth for the
// header mega-menu, the footer columns, and breadcrumb labels. Reviews and
// Buying Guides are kept as distinct branches so the taxonomy is MECE and every
// one of the 11 content pages is reachable from the primary nav.

export type NavItem = { href: string; label: string; blurb?: string };
export type NavGroup = { title: string; items: NavItem[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Reviews",
    items: [
      { href: "/medical-guardian-review", label: "Medical Guardian", blurb: "#1 Best Overall — GPS lineup, no contract" },
      { href: "/bay-alarm-medical-review", label: "Bay Alarm Medical", blurb: "Best Value — from $19.95/mo" },
      { href: "/life-alert-cost", label: "Life Alert Cost", blurb: "Fees, the 3-year contract & alternatives" },
    ],
  },
  {
    title: "Buying Guides",
    items: [
      { href: "/best-medical-alert-systems", label: "Best Systems 2026", blurb: "The full comparison ledger" },
      { href: "/medical-alert-system-for-elderly", label: "For the Elderly", blurb: "Picks for aging parents" },
      { href: "/in-home-medical-alert-systems", label: "In-Home Systems", blurb: "Cheapest monitored protection at home" },
      { href: "/best-medical-alert-watches", label: "Medical Alert Watches", blurb: "Monitored vs. Apple Watch" },
    ],
  },
  {
    title: "Topics",
    items: [
      { href: "/fall-detection-medical-alert", label: "Fall Detection", blurb: "How it works & who offers it" },
      { href: "/no-monthly-fee-medical-alert", label: "No Monthly Fee", blurb: "One-time-purchase options" },
      { href: "/does-medicare-cover-medical-alert-systems", label: "Does Medicare Cover It?", blurb: "Medicare, Advantage & Medicaid" },
    ],
  },
  {
    title: "The Desk",
    items: [
      { href: "/about", label: "About Us", blurb: "Who writes these reviews" },
      { href: "/methodology", label: "How We Evaluate", blurb: "Our scoring rubric & sources" },
    ],
  },
];

// Flat lookup: path -> human label, used for breadcrumb middle nodes.
export const PATH_LABEL: Record<string, string> = Object.fromEntries(
  NAV_GROUPS.flatMap((g) => g.items.map((i) => [i.href, i.label])),
);
