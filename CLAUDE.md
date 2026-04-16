# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# This is a template website 
- This website is a template for showcasing a general business.
- code everything with the goal of reusability.
- use `site-content.ts` for all meta data.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

No test runner is configured.

## Architecture

**Next.js 16 + React 19 App Router** — this is not Next.js 14. APIs and conventions may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.

**Tailwind CSS v4** — configuration is CSS-first. There is no `tailwind.config.js`. Theme tokens, CSS variables, and `@custom-variant` rules live in [app/globals.css](app/globals.css). The `@theme inline` block maps CSS variables to Tailwind color/font utilities.

**CSS Variables** — design tokens use oklch colors defined in `:root` and `.dark` blocks in `globals.css`. Dark mode is toggled via the `.dark` class (not `prefers-color-scheme`).

**Component library** — shadcn/ui components are in [components/ui/](components/ui/). They use `@base-ui/react` (not `@radix-ui/react`) as the primitive layer and CVA for variants. Add new shadcn components with:
```bash 
npx shadcn@latest add <component>
```

**Path alias** — `@/*` resolves to the project root. Use `@/components/ui/...`, `@/lib/utils`, etc. 

**`cn` utility** — [lib/utils.ts](lib/utils.ts) exports `cn()` (clsx + tailwind-merge). Always use it when conditionally applying Tailwind classes.

## Design System 

* **Background:** Deep Charcoal/Off-Black (`#0F1113` or `bg-zinc-950`).
* **Surface Color:** Dark Grey cards (`#1A1C1E` or `bg-zinc-900/50`).
* **Typography:**
  * **Headers:** Wide, bold Sans-Serif (e.g., *Syne*, *Archivo Black*, or *Space Grotesk*).
  * **Body:** Clean, light Sans-Serif (e.g., *Inter* or *Plus Jakarta Sans*).
* **Spacing:** Large gutters and generous padding (80px+ between sections).
* Only use visual components from `components/ui` and `components\magicui` where possible. For `magicUI`, follow `components\magicui\SKILL.md`.
* Only use `lucide-react` icons where possible.
* Use `framer-motion`.
* Always following `/frontend-design`.

## Tech Stack

* **Framework:** Next.js 16 (App Router), React 19.
* **Styling:** Tailwind CSS v4.
* **Icons:** Lucide React.
* **Animation:** Framer Motion (for entrance fades and hover scaling).
* **Images:** Next/Image with placeholder "blur" for premium loading feel.

## Key Tailwind Patterns

```tsx
// Card Wrapper
const Card = "bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8";

// Typography
const H2 = "text-4xl font-bold uppercase tracking-tighter mb-8";
const Label = "text-xs uppercase text-zinc-500 tracking-[0.2em]";
```
