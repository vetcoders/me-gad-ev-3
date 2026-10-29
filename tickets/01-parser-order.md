# parser-order: shared parser reads every date month first

**Covers 388 of 427 reports merged into support ticket #4471.**

## Problem

The shared date parser in `sched-prod` reads every typed date month first (`MM/DD`).
Every tenant on file writes the day first (their locales: en-GB, nl-NL, cs-CZ, it-IT,
fr-FR, pl-PL, pt-PT, da-DK, en-IE, de-DE, es-ES — all day-first). Any date whose day is
12 or lower parses as the wrong month; a day of 13 or higher lands in the wrong month or
fails.

## Evidence

- R-41200 (harbour.dental, app): "Our 7 April reminder went out on 4 July." — 07/04 read as April 7th's mirror, 4 July.
- R-41615: October bookings appeared as January — 01/10 read as 10 January.

## Affected

All 11 tenants, every channel (app ×202, email ×147, form ×25). First seen 2026-04-01,
still arriving at export time (2026-10-04).

## Fix direction

Parse with the tenant's locale (the desk's own `causes.ts` derives day-first from
`Intl.DateTimeFormat`), never a global month-first default. The fix already queued on
#4471 addresses this problem — and only this one.

## Count

412 unique reports in the export (427 rows minus 15 duplicate export rows, deduplicated
by id) minus 33 covered by `hint-mismatch` (#2) and 5 covered by `one-day-move` (#3).
Derivation: `src/lib/kb/problems.ts` in this repo; rendered on the kb page
`/kb/incidents/4471-what-it-shows`.
