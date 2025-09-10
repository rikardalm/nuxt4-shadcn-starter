# Repository Guidelines

This repository is a Nuxt 4 application running on the Bun runtime, styled with Tailwind CSS v4 and using shadcn-vue for UI components. Linting/formatting is handled by Biome (JS/TS/JSON) and Prettier (Vue SFCs).

## Project Structure & Module Organization

```
app/                  # Nuxt source
  assets/css/tailwind.css  # Tailwind v4 entry + tokens
  components/ui/           # shadcn components (e.g., button/)
  lib/utils.ts             # utilities (e.g., cn())
  pages/                   # routes (e.g., index.vue)
nuxt.config.ts         # Bun preset, PostCSS (Tailwind v4), shadcn config
tailwind.config.ts     # Tailwind plugins & theme extensions
components.json        # shadcn-vue CLI config
biome.json             # Biome config
prettier.config.mjs    # Prettier (Vue only, Tailwind plugin)
```

## Build, Test, and Development Commands

- Dev server: `bun run dev` (use `-- --port 3001` to change port)
- Build/Preview: `bun run build` / `bun run preview`
- Type check: `bun run typecheck`
- Lint (Biome): `bun run lint` / fix `bun run lint:fix`
- Format: `bun run format` (Biome) and `bun run format:vue` (Prettier for .vue)
- Add shadcn component: `bunx --bun shadcn-vue@latest add <name>`

## Coding Style & Naming Conventions

- Use TypeScript. Two-space indentation, 100-char line width.
- Vue SFCs: PascalCase filenames (e.g., `Button.vue`), routes in `app/pages/`.
- Prefer named exports in utility barrels (e.g., `components/ui/button/index.ts`).
- Tailwind v4 classes; tokens live in `app/assets/css/tailwind.css`.

## Testing Guidelines

- No test framework is configured yet. If adding tests, prefer Vitest + `@nuxt/test-utils` and place files near sources (`*.spec.ts`). Keep tests fast and deterministic.

## Commit & Pull Request Guidelines

- Commit style: concise, imperative subject (e.g., `feat: add profile card`). Group related changes.
- PRs: describe intent, link issues, add screenshots for UI changes, list testing steps.
- Ensure CI-like checks pass locally: `bun run lint:fix`, `bun run format:vue`, `bun run typecheck`.

## Security & Configuration Tips

- Do not commit secrets. Use `.env` locally (ignored). Static assets go in `public/`.
- Keep Bun pinned via `packageManager` in `package.json`.

## Agent-Specific Notes

- When adding components, prefer `app/components/ui/` via the shadcn CLI. Avoid modifying generated files unless necessary.
