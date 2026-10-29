# hint-mismatch: booking-v3 hints MM/DD/YYYY, then reads the field day first

**Covers 34 of 427 reports merged into support ticket #4471.**

## Problem

booking-v3 prints `MM/DD/YYYY` under its date field. People type what the hint says
(month first), and the form then parses the input the tenant's way (day first). The
stored date is flipped even though the user followed the instructions on screen. Same
symptom as `parser-order`, different defect: here the form's own hint and its parser
disagree.

## Evidence

- R-41230 (copper.studio, form): "My client came on 1 June instead of 6 January."
- R-41251 (pale.harbour, form): "Wednesday 7 January showed as Wednesday 1 July. I moved it myself."

## Affected

Only the three tenants on booking-v2's successor form booking-v3 (alder.physio,
copper.studio, pale.harbour), only through the form channel (form ×33). First seen
2026-04-17, last 2026-09-22.

## Fix direction

One truth for the field: make the hint match what the form actually parses (or parse
what the hint promises). The parser fix queued on #4471 does not touch this — the
mismatch is inside booking-v3's form.

## Count

Unique reports (deduplicated by id) arriving via the `form` channel from tenants whose
form is `booking-v3`, excluding the 5 desk-noted one-day-move reports (none of the 5 is
in this group). Derivation: `src/lib/kb/problems.ts`; rendered on the kb page
`/kb/incidents/4471-what-it-shows`.
