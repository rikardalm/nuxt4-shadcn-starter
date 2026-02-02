# Repository Guidelines

Bun workspace monorepo with a Nuxt 4 web app, Hono BFF, and Commander CLI. Styled with Tailwind CSS v4 and shadcn-vue. Linting by Biome (JS/TS/JSON) and Prettier (Vue SFCs).

## Project Structure

```
apps/
  web/                      # Nuxt 4 frontend (@repo/web)
    app/
      assets/css/tailwind.css
      components/ui/        # shadcn components
      lib/utils.ts          # re-exports cn() from @repo/shared
      pages/
    nuxt.config.ts
    tailwind.config.ts
    components.json         # shadcn-vue CLI config
  bff/                      # Hono backend (@repo/bff)
    src/index.ts
  cli/                      # Commander CLI (@repo/cli)
    src/index.ts
packages/
  shared/                   # Shared utilities (@repo/shared)
    src/index.ts            # cn() utility, shared types
biome.json                  # Biome config (root)
prettier.config.mjs         # Prettier (Vue only)
```

## Development Commands

- **Web app**: `bun run web` (Nuxt at http://localhost:3000)
- **BFF**: `bun run bff` (Hono at http://localhost:3001)
- **CLI**: `bun run cli -- <command>` (e.g., `bun run cli -- hello World`)
- **Build all**: `bun run build`
- **Type check**: `bun run typecheck`
- **Lint**: `bun run lint` / `bun run lint:fix`
- **Format**: `bun run format` (Biome) / `bun run format:vue` (Prettier)
- **Add shadcn component**: `cd apps/web && bunx --bun shadcn-vue@latest add <name>`

## Coding Style

- TypeScript, two-space indentation, 100-char line width
- Vue SFCs: PascalCase filenames, routes in `apps/web/app/pages/`
- Shared utilities go in `packages/shared/src/`
- Tailwind v4 tokens in `apps/web/app/assets/css/tailwind.css`

## Workspace Dependencies

Use `@repo/shared` for shared code:
```json
"dependencies": {
  "@repo/shared": "workspace:*"
}
```

## Testing

No test framework configured. If adding tests, prefer Vitest + `@nuxt/test-utils`.

## Commits & PRs

- Concise imperative subjects (e.g., `feat: add profile card`)
- Run before committing: `bun run lint:fix && bun run typecheck`

## Security

- No secrets in code. Use `.env` locally (gitignored)
- Static assets in `apps/web/public/`

## Keeping This Document Updated

**Update this CLAUDE.md whenever you discover something valuable:**
- New patterns or conventions that worked well
- Commands or workflows that aren't documented
- Gotchas or pitfalls worth avoiding
- Dependency quirks or configuration insights

Small documentation wins compound over time. If you learned it the hard way, save the next person (or yourself) the trouble.
