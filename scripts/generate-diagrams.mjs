// Generates the site's original SVG diagrams into public/diagrams/.
// All numbers come from the same published provider pricing cited on the
// pages that embed these charts — keep them in sync when pricing changes.
// Run: node scripts/generate-diagrams.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const BRAND = "#1a5f7a";
const ACCENT = "#e8f4f8";
const GRAY = "#6b7280";
const LIGHT = "#d1d5db";
const SANS = "Arial, Helvetica, sans-serif";

const W = 800;

function barChart({ title, subtitle, bars, maxValue, fmt, height = 420, highlight }) {
  const pad = { top: 88, right: 40, bottom: 56, left: 40 };
  const chartW = W - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const slot = chartW / bars.length;
  const barW = Math.min(96, slot * 0.6);

  let svg = "";
  // gridlines
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (chartH * i) / 4;
    const v = maxValue * (1 - i / 4);
    svg += `<line x1="${pad.left}" y1="${y}" x2="${W - pad.right}" y2="${y}" stroke="${LIGHT}" stroke-width="1"/>`;
    svg += `<text x="${pad.left - 6}" y="${y + 4}" text-anchor="end" font-family="${SANS}" font-size="11" fill="${GRAY}">${fmt(v)}</text>`;
  }
  bars.forEach((b, i) => {
    const x = pad.left + slot * i + (slot - barW) / 2;
    const h = (b.value / maxValue) * chartH;
    const y = pad.top + chartH - h;
    const fill = b.name === highlight ? "#b45309" : BRAND;
    svg += `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="4" fill="${fill}"/>`;
    svg += `<text x="${x + barW / 2}" y="${y - 8}" text-anchor="middle" font-family="${SANS}" font-size="14" font-weight="bold" fill="#111827">${b.label}</text>`;
    const words = b.name.split(" ");
    const lines = words.length > 2 ? [words.slice(0, 2).join(" "), words.slice(2).join(" ")] : [b.name];
    lines.forEach((ln, j) => {
      svg += `<text x="${x + barW / 2}" y="${pad.top + chartH + 18 + j * 14}" text-anchor="middle" font-family="${SANS}" font-size="12" fill="${GRAY}">${ln}</text>`;
    });
  });
  return wrap(height, title, subtitle, svg);
}

function wrap(height, title, subtitle, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${height}" width="${W}" height="${height}" role="img" aria-label="${title}">
<rect width="${W}" height="${height}" fill="#ffffff"/>
<text x="40" y="40" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#111827">${title}</text>
<text x="40" y="62" font-family="${SANS}" font-size="13" fill="${GRAY}">${subtitle}</text>
${body}
</svg>`;
}

mkdirSync("public/diagrams", { recursive: true });

// 1. Starting monthly price — used on / and /best-medical-alert-systems
writeFileSync(
  "public/diagrams/monthly-cost-comparison.svg",
  barChart({
    title: "Starting monthly price, compared",
    subtitle: "Advertised base in-home plan price per provider, June 2026 — before fall-detection or GPS add-ons",
    bars: [
      { name: "Bay Alarm Medical", value: 19.95, label: "$19.95" },
      { name: "Lively Mobile2", value: 24.99, label: "$24.99" },
      { name: "Medical Guardian", value: 29.95, label: "$29.95" },
      { name: "Lifeline", value: 29.95, label: "$29.95" },
      { name: "Life Alert", value: 49.95, label: "$49.95" },
    ],
    maxValue: 60,
    fmt: (v) => `$${Math.round(v)}`,
    highlight: "Life Alert",
  })
);

// 2. Life Alert 3-year total vs alternatives — used on /life-alert-cost
writeFileSync(
  "public/diagrams/life-alert-3-year-cost.svg",
  barChart({
    title: "What 3 years actually costs",
    subtitle: "36-month total at each provider's base advertised rate (Life Alert requires a 36-month contract)",
    bars: [
      { name: "Bay Alarm Medical", value: 718, label: "$718" },
      { name: "Lively Mobile2", value: 900, label: "$900" },
      { name: "Medical Guardian", value: 1078, label: "$1,078" },
      { name: "Life Alert (home)", value: 1798, label: "$1,798" },
      { name: "Life Alert (full)", value: 3238, label: "$3,238" },
    ],
    maxValue: 3600,
    fmt: (v) => `$${Math.round(v).toLocaleString("en-US")}`,
    highlight: "Life Alert (full)",
  })
);

// 3. How fall detection works — used on /fall-detection-medical-alert
// Steps mirror the prose on that page (including the 15–30s cancel window).
{
  const height = 300;
  const steps = [
    {
      n: "1",
      head: "Fall detected",
      body: ["Accelerometer senses a", "sudden drop and impact,", "then stillness."],
    },
    {
      n: "2",
      head: "Cancel window",
      body: ["Device beeps 15–30 sec —", "user can cancel a false", "alarm before it dials."],
    },
    {
      n: "3",
      head: "Center connects",
      body: ["If not cancelled, it auto-", "dials the 24/7 monitoring", "center. No button press."],
    },
    {
      n: "4",
      head: "Help dispatched",
      body: ["Operator speaks through", "the device, calls EMS, and", "notifies family contacts."],
    },
  ];
  let body = "";
  const boxW = 176, boxY = 92, boxH = 150, gap = 16;
  const startX = (W - (boxW * 4 + gap * 3)) / 2;
  steps.forEach((s, i) => {
    const x = startX + i * (boxW + gap);
    body += `<rect x="${x}" y="${boxY}" width="${boxW}" height="${boxH}" rx="10" fill="${ACCENT}" stroke="${BRAND}" stroke-opacity="0.25"/>`;
    body += `<circle cx="${x + 26}" cy="${boxY + 28}" r="13" fill="${BRAND}"/>`;
    body += `<text x="${x + 26}" y="${boxY + 33}" text-anchor="middle" font-family="${SANS}" font-size="13" font-weight="bold" fill="#fff">${s.n}</text>`;
    body += `<text x="${x + 46}" y="${boxY + 33}" font-family="${SANS}" font-size="13.5" font-weight="bold" fill="#111827">${s.head}</text>`;
    s.body.forEach((ln, j) => {
      body += `<text x="${x + 14}" y="${boxY + 64 + j * 17}" font-family="${SANS}" font-size="11.5" fill="#374151">${ln}</text>`;
    });
  });
  writeFileSync(
    "public/diagrams/fall-detection-how-it-works.svg",
    wrap(height, "How automatic fall detection works", "The sequence every monitored fall-detection device follows after a detected fall", body)
  );
}

// 4. One-time cost vs subscription — used on /no-monthly-fee-medical-alert
{
  const height = 420;
  const pad = { top: 88, right: 220, bottom: 56, left: 56 };
  const chartW = W - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const months = 36, maxCost = 1100;
  const xOf = (m) => pad.left + (m / months) * chartW;
  const yOf = (c) => pad.top + chartH - (c / maxCost) * chartH;
  let body = "";
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (chartH * i) / 4;
    const v = maxCost * (1 - i / 4);
    body += `<line x1="${pad.left}" y1="${y}" x2="${W - pad.right}" y2="${y}" stroke="${LIGHT}"/>`;
    body += `<text x="${pad.left - 6}" y="${y + 4}" text-anchor="end" font-family="${SANS}" font-size="11" fill="${GRAY}">$${Math.round(v).toLocaleString("en-US")}</text>`;
  }
  [0, 12, 24, 36].forEach((m) => {
    body += `<text x="${xOf(m)}" y="${pad.top + chartH + 20}" text-anchor="middle" font-family="${SANS}" font-size="11" fill="${GRAY}">${m === 0 ? "Month 0" : m + " mo"}</text>`;
  });
  // one-time device: ~$200 flat
  body += `<line x1="${xOf(0)}" y1="${yOf(200)}" x2="${xOf(36)}" y2="${yOf(200)}" stroke="${BRAND}" stroke-width="3"/>`;
  // subscription: $19.95/mo cumulative
  body += `<path d="M ${xOf(0)} ${yOf(0)} L ${xOf(36)} ${yOf(19.95 * 36)}" stroke="#b45309" stroke-width="3" fill="none"/>`;
  const lx = W - pad.right + 14;
  body += `<rect x="${lx}" y="${pad.top + 8}" width="14" height="4" fill="${BRAND}"/>`;
  body += `<text x="${lx + 20}" y="${pad.top + 14}" font-family="${SANS}" font-size="12" fill="#111827">One-time device (~$200,</text>`;
  body += `<text x="${lx + 20}" y="${pad.top + 30}" font-family="${SANS}" font-size="12" fill="#111827">no professional monitoring)</text>`;
  body += `<rect x="${lx}" y="${pad.top + 48}" width="14" height="4" fill="#b45309"/>`;
  body += `<text x="${lx + 20}" y="${pad.top + 54}" font-family="${SANS}" font-size="12" fill="#111827">Monitored plan ($19.95/mo,</text>`;
  body += `<text x="${lx + 20}" y="${pad.top + 70}" font-family="${SANS}" font-size="12" fill="#111827">24/7 monitoring center)</text>`;
  body += `<text x="${lx}" y="${pad.top + 104}" font-family="${SANS}" font-size="12" font-weight="bold" fill="#111827">Break-even: ~10 months.</text>`;
  body += `<text x="${lx}" y="${pad.top + 122}" font-family="${SANS}" font-size="12" fill="${GRAY}">The trade-off isn't price —</text>`;
  body += `<text x="${lx}" y="${pad.top + 138}" font-family="${SANS}" font-size="12" fill="${GRAY}">it's who answers the call.</text>`;
  writeFileSync(
    "public/diagrams/no-monthly-fee-cost-curve.svg",
    wrap(height, "No-monthly-fee device vs. monitored subscription", "Cumulative cost over 3 years — one-time devices call 911 or family directly instead of a monitoring center", body)
  );
}

console.log("diagrams written to public/diagrams/");
