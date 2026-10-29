# Structural Map · me-gad-ev-3 @ main@b5ac6f5
Freshness: DIRTY - card was generated from a dirty worktree; verify changed files before relying on this card.
Full payload: 01-structural-map.full.json

This card contains dependency and symbol topology for the selected scope.

## Hubs (fan-in ≥ 10) — domain owner: this card

| # | File | Fan-in | Fan-out | Role |
|--:|---|--:|--:|---|
| 1 | rendered/_app/immutable/chunks/7sY2pnHC.js | 12 | 0 | js · 3 LOC |

hotspots:rendered/_app/immutable/chunks/7sY2pnHC.js · importers 12 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/entry/app.nFr_GrWY.js · importers 6 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/entry/start.CW706yvM.js · importers 6 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:src/lib/kb/causes.ts · importers 6 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/CyFM6xai.js · importers 5 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/DK3Fl9T5.js · importers 5 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/DleOsMbn.js · importers 3 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/entry/payload.DSmR2FwN.js · importers 3 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:src/lib/kb/locales.ts · importers 3 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/ArbtAjo-.js · importers 2 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/B4SwtwhY.js · importers 2 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/BxfaItDQ.js · importers 2 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/CRzLMJPS.js · importers 2 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/CyHOsG6R.js · importers 2 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:rendered/_app/immutable/chunks/ZPXVwAJw.js · importers 2 · mitigation: `loct slice` before edit, `loct impact` before delete
hotspots:src/lib/kb/problems.ts · importers 1 · mitigation: `loct slice` before edit, `loct impact` before delete

## Consumers per hub (DECISION-COMPLETE: all edges inline, grouped)

rendered/_app/immutable/chunks/7sY2pnHC.js ← rendered/_app/immutable/chunks/{CyFM6xai.js,DleOsMbn.js}
rendered/_app/immutable/chunks/CRzLMJPS.js ← rendered/_app/immutable/entry/{app.nFr_GrWY.js,start.CW706yvM.js}
rendered/_app/immutable/entry/payload.DSmR2FwN.js ← rendered/_app/immutable/entry/start.CW706yvM.js

## Import graph — shape

5 edges resolved from 5 imports · 31 files · 88 symbols · 25 slice consumers
File clusters: rendered (24) · src (7)
structural entrypoints: none in slice

## Reachability — domain owner: this card

no reachability data — semantic pass found no entrypoints

## Authority — domain owner: this card

authority:RepoVerified 1 · LoctreeDerived 21 · AicxOperator 0 · AicxAgent 0 · AicxFailure 0 · SemanticGuess 0 · StaleOrUnknown 0

## What this card does not cover

This Structural Map does not include runtime behavior, env contracts, or verification gates. Read `02-runtime-map.md` and `04-verification-gates.md` before changing behavior.
