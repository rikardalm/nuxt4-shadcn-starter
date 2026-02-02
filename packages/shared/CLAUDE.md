# Shared Package (@repo/shared)

Shared utilities and types used across all apps.

## Structure

```
src/
  index.ts    # Main exports (cn utility, shared types)
```

## What Goes Here

- Utility functions used by multiple apps (e.g., `cn()`)
- Shared TypeScript types and interfaces
- Constants and configuration shared across packages
- Pure functions with no app-specific dependencies

## What Doesn't Go Here

- App-specific logic
- UI components (those belong in `apps/web`)
- API routes or handlers
- Anything with side effects or external dependencies

## Conventions

- Export everything from `src/index.ts`
- Keep functions pure and well-typed
- Document non-obvious utilities with JSDoc
- No runtime dependencies unless absolutely necessary

## Usage

```ts
// In any app
import { cn } from '@repo/shared'
```
