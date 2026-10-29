// What #4471 actually holds. The desk's causeOf tells parser from hint by tenant and channel.
// desk-notes.json marks reports the desk re-read as one-day-move — a footnote within a
// group, not a separate problem. A report lands in exactly one problem (parser or hint).
import { causeOf, uniqueById, type Report, type Tenant } from '#lib/kb/causes';

export type ProblemKey = 'parser-order' | 'hint-mismatch' | 'one-day-move' | 'unplaced';

export type Problem = {
  key: ProblemKey;
  title: string;
  reports: Report[];
  tenants: number;
  channels: Record<string, number>;
  firstSeen: string;
  lastSeen: string;
};

const TITLES: Record<ProblemKey, string> = {
  'parser-order': 'shared parser reads every date month first',
  'hint-mismatch': 'booking-v3 hints MM/DD/YYYY, then reads the field day first',
  'one-day-move': 'dates move by one day between viewers',
  unplaced: 'no cause on file',
};

const KEY_OF_CAUSE = { parser: 'parser-order', hint: 'hint-mismatch' } as const;

function problemOf(r: Report, t: Tenant | undefined): ProblemKey {
  // The desk's own classification: causeOf determines parser vs hint.
  // one-day-move is a re-reading of reports within a group, not a separate cause.
  // Those reports stay in their cause group (parser or hint).
  const cause = causeOf(r, t);
  return cause ? KEY_OF_CAUSE[cause] : 'unplaced';
}

export function groupByProblem(
  reports: Report[],
  tenantOf: (r: Report) => Tenant | undefined,
  _oneDayMove: readonly string[], // kept for API compat; odm is a footnote, not a problem
  ticket: number
): Problem[] {
  const merged = uniqueById(reports).filter((r) => r.mergedInto === ticket);
  const byKey = new Map<ProblemKey, Report[]>();
  for (const r of merged) {
    const key = problemOf(r, tenantOf(r));
    byKey.set(key, [...(byKey.get(key) ?? []), r]);
  }
  return [...byKey.entries()]
    .map(([key, rs]) => {
      const days = rs.map((r) => r.receivedAt.slice(0, 10)).sort();
      return {
        key,
        title: TITLES[key],
        reports: rs,
        tenants: new Set(rs.map((r) => r.tenant)).size,
        channels: rs.reduce<Record<string, number>>(
          (n, r) => ({ ...n, [r.channel]: (n[r.channel] ?? 0) + 1 }),
          {}
        ),
        firstSeen: days[0],
        lastSeen: days[days.length - 1],
      };
    })
    .sort((a, b) => b.reports.length - a.reports.length);
}
