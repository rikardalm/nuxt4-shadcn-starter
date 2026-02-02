# Repository Guidelines

Bun workspace monorepo with a Nuxt 4 web app, Hono BFF, and Commander CLI.

## Project Structure

```
apps/
  web/      # Nuxt 4 frontend (@repo/web)
  bff/      # Hono backend (@repo/bff)
  cli/      # Commander CLI (@repo/cli)
packages/
  shared/   # Shared utilities (@repo/shared)
```

## Development Commands

- **Web**: `bun run web` (http://localhost:3000)
- **BFF**: `bun run bff` (http://localhost:3001)
- **CLI**: `bun run cli -- <command>`
- **Build**: `bun run build`
- **Typecheck**: `bun run typecheck`
- **Lint**: `bun run lint` / `bun run lint:fix`
- **Format**: `bun run format` (Biome) / `bun run format:vue` (Prettier)

## Coding Standards

- TypeScript everywhere, strict mode
- Two-space indentation, 100-char line width
- Biome for JS/TS/JSON linting, Prettier for Vue SFCs
- Prefer named exports in barrel files

## Workspace Dependencies

```json
"dependencies": {
  "@repo/shared": "workspace:*"
}
```

## Commits & PRs

- Concise imperative subjects: `feat:`, `fix:`, `refactor:`, `chore:`
- Run before committing: `bun run lint:fix && bun run typecheck`

## Testing Philosophy

No tests yet. When adding: use Bun's test runner (`bun test`, `bun:test`), colocate tests
(`*.test.ts` or `*.spec.ts`), keep fast and deterministic.

## Security

- No secrets in code. Use `.env` (gitignored)
- Validate at system boundaries

## Keeping Docs Updated

Update CLAUDE.md files when you discover valuable patterns, gotchas, or workflows. Small wins compound.
