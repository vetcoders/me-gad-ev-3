# me-gad-ev-3

Analysis of support ticket **#4471** ("dates parse mm/dd in eu locales") for the MEGA.dev
course challenge S01E03 *what it shows*: the desk merged 412 reports about wrong dates
into one ticket and marked it known — one issue, one fix queued. Reading the report
bodies shows the ticket holds **three different problems**, and the queued fix covers
only the largest.

| problem | reports | where |
| --- | --- | --- |
| `parser-order` — shared parser reads every date month first | 374 | all 11 tenants, every channel |
| `hint-mismatch` — booking-v3 hints `MM/DD/YYYY`, then reads the field day first | 33 | 3 booking-v3 tenants, form only |
| `one-day-move` — dates move by one day between viewers | 5 | a different defect entirely |

412 unique reports (the export's 427 rows hold 15 duplicates; deduplicated by id).
Full derivation lives in code, not prose: `src/lib/kb/problems.ts`.

## What's here

- `src/` — the support desk's kb export (SvelteKit + mdsvex), plus:
  - `src/lib/kb/problems.ts` — splits #4471 into its real problems,
  - `src/lib/kb/ProblemTable.svelte` — computes every count at render time,
  - `src/routes/kb/incidents/4471-what-it-shows/+page.svx` — the signed kb page.
- `tickets/` — the three issue texts, one per problem, filed as GitHub issues in this repo.
- `rendered/` — the static export: the kb pages exactly as the desk will see them
  (open `rendered/kb/incidents/4471-what-it-shows.html`).

## Run it

```bash
pnpm install
pnpm run dev        # browse the kb at /kb
pnpm run build      # static export to build/ — the pages as the desk will see them
```

---

𝚅𝚒𝚋𝚎𝚌𝚛𝚊𝚏𝚝𝚎𝚍. with AI Agents by Vetcoders (c)2024-2026 LibraxisAI
