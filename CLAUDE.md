# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Kelvin Cheong's personal portfolio site (`new.ckmk.io`) — a React + Vite + TypeScript rewrite of the old Next.js `ckmk.io` site. Content (bio, career timeline, skills) is being migrated from `../ckmk.io/ckmk.io/app/` per `PROFILE.MD`; consult that file for source data and open questions (e.g. an unresolved date-overlap in the timeline that needs user confirmation) before adding/editing content in `src/content.ts`.

Package manager is Bun (`bun.lock` present), but scripts are plain `vite`/`tsc`/`eslint` and work with `npm`/`bun` interchangeably.

## Commands

- `bun install` — install dependencies
- `bun run dev` — start Vite dev server
- `bun run build` — typecheck (`tsc -b`) then production build via Vite
- `bun run preview` — preview the production build
- `bun run lint` — run ESLint over the whole project

There is no test runner configured in this project.

## Architecture

Single-page app, no router — `App.tsx` renders everything and swaps between a `'home'` and `'projects'` view via local `useState`, with `ProjectsOverlay` conditionally shown on top rather than a route change.

- `src/content.ts` — all static content (identity, social links, career timeline, skill/framework lists) as typed data, imported by components. Content edits belong here, not inline in JSX.
- `src/useThemeChoice.ts` — theme state (`system` | `dark` | `light`), persisted to `localStorage` under `chrome-theme`, applied by setting `data-chrome` on `document.documentElement`. Uses `useLayoutEffect` deliberately to avoid a flash of the wrong theme before first paint — the default stylesheet is dark, so keep that ordering intact if touching this hook.
- `src/components/` — one component per section: `Backdrop`, `Hero`, `Timeline`, `SkillsMarquee` (used twice, once with `reverse` for the frameworks list), `NavDock` (nav + theme switcher, exports the `View` type used by `App`), `ProjectsOverlay`.

Path alias `@/*` → `./src/*` is declared in `tsconfig.app.json` but is **not** wired into `vite.config.ts` — don't rely on `@/` imports actually resolving at build/dev time unless `vite.config.ts` is updated to match (e.g. via `vite-tsconfig-paths` or an explicit `resolve.alias`).
