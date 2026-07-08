# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Vite dev server with HMR
npm run build    # production build to dist/
npm run lint     # ESLint (flat config in eslint.config.js)
npm run preview  # serve the production build locally
```

There are no tests in this project.

## Architecture

Personal portfolio site for Bharadwaz Avula — a React 19 + Vite single-page app in plain JavaScript (no TypeScript), deployed on Vercel.

**Almost everything lives in `src/Portfolio.jsx` (~770 lines).** The entry point `src/main.jsx` renders `<Portfolio />` and injects Vercel Analytics. Portfolio.jsx is organized top-to-bottom in commented sections:

- **Data** — `personalData`, `skills`, `projects`, `certifications` constants. Content changes (bio, links, new projects, skill lists, certificate names/URLs) are edits here, not component changes. The resume button points at `personalData.resumeLink` (`/resume.pdf` — the actual file goes in `public/`).
- **Icons** — inline SVG components.
- **Animations hook** — `useInView` (IntersectionObserver) wrapped by a `Reveal` component that adds the `.reveal`/`.in` classes for scroll-into-view animations.
- **Components** — `Navbar`, `Hero`, `About`, `Skills`, `Projects`/`ProjectCard`, `Certifications`, `Contact`, `Footer`.
- **Main App** — composes the sections and embeds one global `<style>` tag holding all CSS: Google Fonts import (Space Grotesk headings, Inter body), dark theme via CSS custom properties on `:root`, all component classes, and the 860px mobile breakpoint.

All styling lives in that embedded `<style>` block as classes (per-project accent colors are passed as a `--project-color` inline CSS variable) — there is no active CSS file.

**Unused Vite template leftovers:** `src/App.jsx`, `src/App.css`, and `src/index.css` are not imported by anything (main.jsx renders Portfolio.jsx and imports no CSS). Editing them has no effect on the site.

Static assets referenced by absolute path (e.g. `/profile.jpeg`) live in `public/`.
