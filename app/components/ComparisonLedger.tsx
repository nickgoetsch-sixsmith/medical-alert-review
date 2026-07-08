/**
 * ComparisonLedger — the authored "ledger" that replaces default bordered
 * comparison tables. It reads like an editor's tally sheet: a mono column
 * header rail, ruled rows, and per-cell verdict icons instead of ✓/✗ text.
 *
 * Semantic cell values: pass a plain string for neutral facts, or an object
 * { tone, text } to render an inline icon (affirm / warn / deny) with the
 * on-palette color. The data itself is unchanged — this is presentation only.
 *
 * Renders as a real <table> for a11y + SEO, restyled to shed the default grid.
 */
import { CheckIcon, CrossIcon, WarnIcon } from "./Icon";

export type LedgerCell =
  | string
  | { tone: "affirm" | "deny" | "warn"; text: string };

export type LedgerRow = { label: string; values: LedgerCell[] };

function Cell({ value, highlight }: { value: LedgerCell; highlight?: boolean }) {
  const base = `px-3 py-3 text-sm align-middle ${
    highlight ? "bg-brand-tint/50" : ""
  }`;
  if (typeof value === "string") {
    return <td className={`${base} text-ink-soft`}>{value}</td>;
  }
  const map = {
    affirm: { Icon: CheckIcon, color: "text-affirm" },
    deny: { Icon: CrossIcon, color: "text-sos" },
    warn: { Icon: WarnIcon, color: "text-caution" },
  } as const;
  const { Icon, color } = map[value.tone];
  return (
    <td className={base}>
      <span className="inline-flex items-center gap-1.5 text-ink">
        <Icon className={`w-4 h-4 shrink-0 ${color}`} />
        <span>{value.text}</span>
      </span>
    </td>
  );
}

export default function ComparisonLedger({
  columns,
  rows,
  rowHeader = "",
  highlightColumn,
  caption,
  footnote,
}: {
  /** Column headers (the products being compared). */
  columns: string[];
  rows: LedgerRow[];
  /** Header for the left-hand label column, e.g. "Feature". */
  rowHeader?: string;
  /** 0-based index of the column to accent (e.g. the top pick). */
  highlightColumn?: number;
  caption?: string;
  footnote?: string;
}) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-ledger border border-rule bg-paper-raised shadow-card">
        <table className="w-full min-w-[600px] border-collapse">
          {caption ? (
            <caption className="sr-only">{caption}</caption>
          ) : null}
          <thead>
            <tr className="border-b border-rule">
              <th
                scope="col"
                className="text-left px-3 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-mute"
              >
                {rowHeader}
              </th>
              {columns.map((c, i) => (
                <th
                  key={c}
                  scope="col"
                  className={`text-left px-3 py-3 font-serif text-sm font-bold ${
                    i === highlightColumn
                      ? "bg-brand-tint text-brand-dark"
                      : "text-ink"
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-rule last:border-0"
              >
                <th
                  scope="row"
                  className="text-left px-3 py-3 font-medium text-sm text-ink-mute whitespace-nowrap"
                >
                  {row.label}
                </th>
                {row.values.map((v, j) => (
                  <Cell
                    key={j}
                    value={v}
                    highlight={j === highlightColumn}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? (
        <figcaption className="mt-2 text-xs text-ink-mute px-1">
          {footnote}
        </figcaption>
      ) : null}
    </figure>
  );
}
