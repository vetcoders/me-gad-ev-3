<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import notes from '#lib/data/desk-notes.json';
  import { groupByProblem } from '#lib/kb/problems';
  import { uniqueById, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';

  let { ticket }: { ticket: number } = $props();

  const merged = $derived(uniqueById(reports as Report[]).filter((r) => r.mergedInto === ticket));
  const problems = $derived(groupByProblem(reports as Report[], tenantOf, notes.oneDayMove, ticket));
  const duplicates = $derived((reports as Report[]).filter((r) => r.mergedInto === ticket).length - merged.length);
  const channels = (p: { channels: Record<string, number> }) =>
    Object.entries(p.channels)
      .sort((a, b) => b[1] - a[1])
      .map(([c, n]) => `${c} ×${n}`)
      .join(' · ');
</script>

<p class="sum">
  <strong>{merged.length}</strong> reports in #{ticket} ·
  <strong>{problems.length}</strong>
  {problems.length === 1 ? 'problem' : 'problems'}
  {#if duplicates}<span class="dup"> · {duplicates} duplicate export rows dropped by id</span>{/if}
</p>

<table>
  <thead>
    <tr><th>problem</th><th>reports</th><th>tenants</th><th>via</th><th>seen</th></tr>
  </thead>
  <tbody>
    {#each problems as p (p.key)}
      <tr>
        <td><code>{p.key}</code> — {p.title}</td>
        <td>{p.reports.length}</td>
        <td>{p.tenants}</td>
        <td class="via">{channels(p)}</td>
        <td>{p.firstSeen} → {p.lastSeen}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .sum { font-size: 1.1rem; }
  .dup { color: var(--muted); font-size: 0.85em; }
  .via { color: var(--muted); font-size: 0.85em; }
</style>
