# bun-fullstack-monorepo

A modern fullstack monorepo powered by [Bun](https://bun.sh) workspaces.

## Stack

| App | Tech | Port |
|-----|------|------|
| **web** | Nuxt 4 + Tailwind v4 + shadcn-vue | 3000 |
| **bff** | Hono | 3001 |
| **cli** | Commander | — |

Shared utilities live in `packages/shared`.

## Quick Start

```bash
bun install

bun run web      # Start Nuxt frontend
bun run bff      # Start Hono API
bun run cli -- hello World
```

## Structure

```
apps/
  web/        → Nuxt 4 frontend
  bff/        → Hono API server
  cli/        → Command-line tool
packages/
  shared/     → Shared utilities & types
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run web` | Start Nuxt dev server |
| `bun run bff` | Start Hono dev server |
| `bun run cli -- <cmd>` | Run CLI command |
| `bun run build` | Build all packages |
| `bun run typecheck` | Type check all packages |
| `bun run lint` | Lint with Biome |
| `bun run format` | Format with Biome + Prettier |

## AI Agent Support

This repo includes hierarchical `CLAUDE.md` files (with `AGENTS.md` symlinks) for AI coding assistants:

```
CLAUDE.md                   → Repo-wide conventions
apps/web/CLAUDE.md          → Nuxt/Vue specifics
apps/bff/CLAUDE.md          → Hono patterns
apps/cli/CLAUDE.md          → CLI conventions
packages/shared/CLAUDE.md   → Shared package guidelines
```

Context-aware guidance at every level of the codebase.

## Tooling

- **Runtime**: [Bun](https://bun.sh)
- **Package Manager & Test Runner**: [Bun](https://bun.sh) (`bun install`, `bun test`)
- **Linting**: [Biome](https://biomejs.dev) + Prettier (Vue)
- **Types**: TypeScript strict mode
- **UI**: [shadcn-vue](https://www.shadcn-vue.com)

## License

MIT
