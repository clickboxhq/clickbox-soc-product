
# SOCBOX Interactivity + Premium UI + Feature Completion

This is a very large scope (six phases, effectively re-architecting the whole app from static mock to a working analyst tool). I want to confirm the plan and sequencing before writing code, because doing all of it in one pass would take many hours of tool calls and produce a huge, hard-to-review change.

No auth work will be added in any phase, per your instruction.

## Proposed approach

Introduce a single **client-side state store** (Zustand) that owns all mutable SOCBOX data — alerts, incidents, investigations, email cases, identities, endpoints, threat intel, notes, verdicts, scenario progress. Every module reads from and writes to this store, so actions in one place (resolve an alert) immediately update counts elsewhere (dashboard "Open Incidents"). Data persists to `localStorage` so refreshes keep state. No backend/Cloud needed for this pass.

On top of that store, add a **UI primitives layer**: motion wrappers (page fade/slide via framer-motion), skeletons, animated counters, elevation tokens, sparkline component, trend indicator, empty/error states, and a real ⌘K command palette (cmdk).

Then walk each module and wire real interactivity + the premium visual system uniformly.

## Phased delivery (I recommend shipping in this order across multiple turns)

### Turn A — Foundation (this turn if you approve)
1. `src/lib/store.ts` — Zustand store + localStorage persistence, seeded from existing `soc-data.ts`, exposes actions: `resolveAlert`, `assignAlert`, `setStatus`, `addNote`, `submitEmailVerdict`, `completeScenario`, etc.
2. `src/components/soc/ui/` — `<Motion>`, `<Skeleton>`, `<CountUp>`, `<Sparkline>`, `<Trend>`, `<EmptyState>`, `<ErrorState>`, elevation utility classes in `styles.css`.
3. `src/components/soc/command-palette.tsx` — cmdk-powered ⌘K palette that indexes modules + all store entities (users, devices, alerts, MITRE IDs, scenarios) and navigates on select. Wire global keybind.
4. Typography scale tokens in `styles.css` (display / metric / h1 / h2 / label-caps / body / meta) applied via utility classes; refactor existing modules to use them.

### Turn B — Interactivity pass on core modules
- Alerts: real filters (severity/status/source/MITRE/search), row-click opens drawer with full context, assign/resolve/escalate actions mutate store, badge transitions animate, dashboard counts update live.
- Incidents + Investigations: same pattern; investigation workspace persists notes and status.
- Dashboard: animated count-ups derived from store; sparklines on KPI cards; trend indicators.

### Turn C — Email Investigation loop (Phase 3)
- Expand `soc-data.ts` to 18 varied email cases (clear phish / clear benign / ambiguous) with per-case SPF/DKIM/DMARC, headers, URLs, attachments, and hidden ground truth + evidence weights.
- Investigation view with verdict submission (Phishing / Benign / Suspicious) + notes.
- Scoring screen comparing analyst verdict vs ground truth, listing evidence correctly weighted vs missed.
- Persist case state and reopen with prior notes/verdict.

### Turn D — Identity Center, Endpoint Center, Threat Intelligence (Phase 5)
Clickable profiles, real investigation workflow, sparkline risk trend per user, threat-intel entries that link to correlated alerts in the store.

### Turn E — Scenario Engine + Instructor Portal (Phase 4)
Instructor can create scenarios (difficulty, module, ground truth), view cohort completion from store, and add hints on a specific student investigation.

### Turn F — SOCBOX Copilot (Phase 6)
Rule-based assistant panel: "suggest next steps," "draft exec brief from incident X," "explain T1566.002." Reads live incident/alert data from the store. No external AI unless you want Lovable AI wired in — say the word and I'll add it in this turn.

### Turn G — Polish sweep
Page transitions, skeleton loaders on route enter, empty/error states everywhere, icon audit (lucide throughout, consistent stroke), green accent used only for primary actions / active nav / positive trend / key metric highlight.

## Technical details

- **State**: Zustand + `persist` middleware (localStorage key `socbox:v1`). Selectors keep re-renders tight.
- **Motion**: framer-motion (already installed). `<AnimatePresence>` on route outlets for fade/slide; `layout` prop for badge status transitions.
- **Palette**: `cmdk` package.
- **Charts/sparklines**: lightweight inline SVG (no new dep) to keep bundle small; existing chart library restyled with brand tokens.
- **Typography**: extend `styles.css` with `.t-display`, `.t-metric`, `.t-h1`, `.t-h2`, `.t-label` (uppercase tracked), `.t-body`, `.t-meta`. Refactor modules to use them instead of ad-hoc `text-[12px]`.
- **Elevation**: three-tier shadow tokens (`--elev-1/2/3`) plus a `--ring-selected` for active rows.

## What I need from you

1. **Approve the phased delivery** (Turn A first, then continue turn-by-turn) vs "do it all now in one huge turn." I strongly recommend phased — one-shot risks breakage and is hard to review.
2. **Copilot (Phase 6)**: rule-based only, or wire real Lovable AI (adds a server function and uses your Lovable AI credits)?
3. Anything you want to explicitly deprioritize?

If you just reply "go" I'll start with **Turn A (Foundation)** using the defaults above (phased delivery, rule-based Copilot in Phase 6).
