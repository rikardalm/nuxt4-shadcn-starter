# BFF (@repo/bff)

Hono backend-for-frontend API server.

## Structure

```
src/
  index.ts    # Entry point, route definitions
```

## Commands

- **Dev**: `bun run bff` (from root) or `bun run dev` (from here)
- **Port**: http://localhost:3001

## Conventions

- Group routes by feature/resource
- Use Hono's built-in validators for request validation
- Return consistent JSON response shapes
- Keep handlers thin — delegate to services/utilities

## Patterns

```ts
// Prefer chained routes
app.get('/users', listUsers)
   .get('/users/:id', getUser)
   .post('/users', createUser)

// Use middleware for cross-cutting concerns
app.use('/api/*', authMiddleware)
```

## Error Handling

- Use Hono's `HTTPException` for API errors
- Return structured error responses: `{ error: string, code?: string }`
- Log errors server-side, sanitize client responses
