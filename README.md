# Dash Nuxt

A Nuxt 4 application using the Bun runtime, Tailwind CSS v4, and shadcn-vue for UI components. The repo uses Biome for linting/formatting (JS/TS/JSON) and Prettier with the Tailwind plugin for Vue SFC formatting.

## Tech Stack

- Nuxt `^4.1.1` (Vue 3, file-based routing)
- Bun runtime (`bun@1.2.3` pinned in `package.json`)
- Tailwind CSS v4 (`@tailwindcss/postcss`), `tailwindcss-animate`
- shadcn-vue (components installed to `app/components/ui`)
- Biome for linting/formatting + import organizing
- Prettier + `prettier-plugin-tailwindcss` for `.vue` only
- simple-git-hooks pre-commit: Biome fix + TypeScript check

## Getting Started

Install dependencies (Bun):

```bash
bun install
```

Development server (default: http://localhost:3000):

```bash
bun run dev
# or specify port
bun run dev -- --port 3001
```

Build and preview:

```bash
bun run build
bun run preview
```

Type checking:

```bash
bun run typecheck
```

## Linting & Formatting

- Biome (JS/TS/JSON):
  - Check: `bun run lint`
  - Fix: `bun run lint:fix`
  - Format: `bun run format`
- Prettier for Vue (`.vue`) with Tailwind class sorting:
  - Check: `bun run lint:vue`
  - Write: `bun run format:vue`

Pre-commit hook runs Biome fixes and TypeScript checks:

```bash
# If hooks don’t run after cloning, run once
bun run postinstall
```

## Project Structure

```text
.
├─ app/
│  ├─ app.vue
│  ├─ assets/
│  │  └─ css/
│  │     └─ tailwind.css           # Tailwind v4 entry + design tokens
│  ├─ components/
│  │  └─ ui/
│  │     └─ button/
│  │        ├─ Button.vue
│  │        └─ index.ts            # Barrel export (import { Button } ...)
│  ├─ lib/
│  │  └─ utils.ts                  # cn() util (clsx + tailwind-merge)
│  └─ pages/
│     └─ index.vue                 # Example page rendering shadcn buttons
├─ components.json                  # shadcn-vue config
├─ nuxt.config.ts                   # Bun preset, PostCSS (Tailwind v4), shadcn
├─ tailwind.config.ts               # Tailwind plugins & theme extensions
├─ biome.json                       # Biome lint/format config
├─ prettier.config.mjs              # Prettier for Vue SFCs (Tailwind sort)
├─ package.json                     # Bun scripts + simple-git-hooks
└─ bun.lock                         # Bun lockfile
```

## Tailwind v4 Notes

- Tailwind is configured through PostCSS in `nuxt.config.ts` using `@tailwindcss/postcss`.
- Base CSS variables and Tailwind v4 theme tokens are defined in `app/assets/css/tailwind.css`.

## shadcn-vue

- Components are installed into `app/components/ui` and imported via the barrel file, for example:

```vue
<script setup lang="ts">
import { Button as UiButton } from '@/components/ui/button'
</script>

<template>
  <UiButton>Default</UiButton>
</template>
```

- To add more components:

```bash
# Uses components.json config in repo
bunx --bun shadcn-vue@latest add <component>
```

## Bun Runtime

All commands are run with Bun. If another package manager is used, ensure you maintain compatibility, but the project is configured and tested with Bun.

## Useful Links

- Nuxt 4 docs: https://nuxt.com/docs/4.x
- Tailwind v4: https://tailwindcss.com
- shadcn-vue: https://www.shadcn-vue.com
