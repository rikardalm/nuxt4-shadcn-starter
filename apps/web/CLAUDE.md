# Web App (@repo/web)

Nuxt 4 frontend with Tailwind CSS v4 and shadcn-vue components.

## Structure

```
app/
  assets/css/tailwind.css   # Tailwind v4 entry + design tokens
  components/ui/            # shadcn components (generated)
  components/               # App components
  lib/utils.ts              # Re-exports cn() from @repo/shared
  pages/                    # File-based routing
  plugins/                  # Nuxt plugins
public/                     # Static assets
nuxt.config.ts
tailwind.config.ts
components.json             # shadcn-vue CLI config
```

## Commands

- **Dev**: `bun run web` (from root) or `bun run dev` (from here)
- **Add shadcn component**: `bunx --bun shadcn-vue@latest add <name>`

## Conventions

- Vue SFCs use PascalCase filenames (`UserProfile.vue`)
- Pages use kebab-case for URL-friendly routes
- Prefer `<script setup lang="ts">` syntax
- Use `@/` alias for imports from `app/`
- Tailwind v4 tokens live in `assets/css/tailwind.css`

## Component Guidelines

- shadcn components go in `components/ui/` — avoid modifying generated code
- App-specific components go in `components/`
- Use `cn()` from `@/lib/utils` for conditional classes

## Styling

- Tailwind v4 with CSS-first configuration
- Design tokens defined in `tailwind.css` using `@theme`
- Prefer utility classes over custom CSS
