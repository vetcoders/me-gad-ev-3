# Risk Register · me-gad-ev-3 @ main@b5ac6f5
Freshness: DIRTY - card was generated from a dirty worktree; verify changed files before relying on this card.
Full payload: 05-risk-register.full.json

This card collects risk signals and recommended actions for the current context scope.

hotspots + hubs (fan-in) → 01-structural-map.md §Hubs (hotspots and hubs domain owner)
authority (per-label counters) → 01-structural-map.md §Authority (authority domain owner)

## Cache & Snapshot Health

snapshot_health: dirty
cache_scope: DirtyWorktree
stale_snapshot: false · dirty_worktree: true

## Stale Assumptions

intent layer stale (no overlay cache yet) — refresh: `aicx overlay --repo /Volumes/vc-workspace/vetcoders/me-gad-ev-3 --format json`
runtime execution, delivery acceptance, and verification results: not measured; structural freshness does not establish product health

## Actions

executable actions (safe next + power-path, 44 items) → 00-core-map.md (safe next commands domain owner)

## What this card does not cover

This Risk Register does not include full source content. Use `loct slice`/`loct impact` for exact file-level surgery.
