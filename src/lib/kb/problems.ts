// What #4471 actually holds. causes.ts tells parser from hint by tenant and channel;
// desk-notes.json marks the reports the desk read as a one-day move. A report lands in
// exactly one problem, so the problem counts add up to the ticket's report count.
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

function problemOf(r: Report, t: Tenant | undefined, oneDayMove: readonly string[]): ProblemKey {
  if (oneDayMove.includes(r.id)) return 'one-day-move';
  const cause = causeOf(r, t);
  return cause ? KEY_OF_CAUSE[cause] : 'unplaced';
}

export function groupByProblem(
  reports: Report[],
  tenantOf: (r: Report) => Tenant | undefined,
  oneDayMove: readonly string[],
  ticket: number
): Problem[] {
  const merged = uniqueById(reports).filter((r) => r.mergedInto === ticket);
  const byKey = new Map<ProblemKey, Report[]>();
  for (const r of merged) {
    const key = problemOf(r, tenantOf(r), oneDayMove);
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
