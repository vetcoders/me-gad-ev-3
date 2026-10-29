# one-day-move: dates move by one day between viewers

**Covers 5 of 412 reports merged into support ticket #4471.**

## Problem

No day/month flip at all: the same event shows on different days for different viewers,
or shifts by exactly one day. This is a date stored or rendered at a day boundary
without its timezone (a date-only value pinned to midnight and converted across zones).
It was merged into #4471 because the subject lines matched the flip reports
(the desk merges on subject alone — kb decision 0001).

## Evidence (all five)

- R-41344 (pale.harbour, email): "Client in Lisbon got Tuesday. Client in Toronto got Monday. Same meeting. We held it twice."
- R-41202 (kettle.books, email): "Invite says Tuesday 12 May. Calendar says Monday 11 May."
- R-41209 (alder.physio, app): "Every booking in June is one day off. Only June."
- R-41236 (nine.lanterns, app): "The invite arrived before I made the booking."
- R-41620 (lantern.row, email): "Tuesday 6 October showed as Monday."

## Affected

5 tenants, email ×3 and app ×2. First seen 2026-04-02, last 2026-10-04. The desk itself
flagged these ids in `desk-notes.json` as read differently from where they were filed.

## Fix direction

Store and render event dates with the event's timezone (or as plain calendar dates,
never as midnight timestamps). Needs its own ticket and owner: the queued parser fix on
#4471 does not touch this defect.

## Count

The 5 report ids the desk listed in `desk-notes.json` under `oneDayMove`; an independent
body-reading pass over all 412 unique reports found exactly the same 5 and no others.
Derivation: `src/lib/kb/problems.ts`; rendered on the kb page
`/kb/incidents/4471-what-it-shows`.
