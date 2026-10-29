# Core Map · me-gad-ev-3 @ main@b5ac6f5
Freshness: DIRTY - card was generated from a dirty worktree; verify changed files before relying on this card.
Full payload: 00-core-map.full.json

This card tells you where you are, what is risky, and what actions are safe next.

## Identity

repo_id: me-gad-ev-3
branch: main
snapshot_commit: b5ac6f5
snapshot_id: main@b5ac6f5
store_revision: unavailable — no overlay document (cold store); refresh with `aicx overlay`
overlay_revision: unavailable — no overlay document (cold store); refresh with `aicx overlay`
anchor_catalog_revision: unavailable — no overlay document (cold store); refresh with `aicx overlay`

## Freshness

structural: DIRTY - card was generated from a dirty worktree; verify changed files before relying on this card.
intent: intent layer stale (no overlay cache yet) — refresh: `aicx overlay --repo /Volumes/vc-workspace/vetcoders/me-gad-ev-3 --format json`
runtime execution: not measured · verification results: not measured
coverage: selected targets 8 / indexed files 86 · returned neighborhood files 31 · symbols 88 · imports 5 · selection truncated true
Coverage counts describe returned evidence; zero is not proof that the repository has no such surface.
cache/snapshot details → 05-risk-register.md §Cache & Snapshot Health (freshness domain owner)

## Risk Summary

- rendered/_app/immutable/chunks/7sY2pnHC.js · fan-in 12 → 01-structural-map.md

authority (per-label counters) → 01-structural-map.md §Authority (authority domain owner)

## Safe Next Commands

loct slice rendered/_app/immutable/chunks/7sY2pnHC.js — Slice this file to inspect its direct dependencies and immediate consumers before editing.
loct impact rendered/_app/immutable/chunks/7sY2pnHC.js — Assess the transitive blast radius and downstream consumers of this file before modifying.
loct slice rendered/_app/immutable/entry/app.nFr_GrWY.js — Slice this file to inspect its direct dependencies and immediate consumers before editing.

## What this card does not cover

This Core Map does not include dependency consumers, runtime entrypoints, or prior decisions. For code changes, read `01-structural-map.md` next.
