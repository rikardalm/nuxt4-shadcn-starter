# CLI (@repo/cli)

Commander-based command-line interface.

## Structure

```
src/
  index.ts    # Entry point, command definitions
```

## Commands

- **Run**: `bun run cli -- <command>` (from root)
- **Example**: `bun run cli -- hello World`

## Conventions

- One command per logical action
- Use Commander's fluent API for options/arguments
- Provide helpful descriptions and examples
- Exit with appropriate codes (0 = success, 1 = error)

## Patterns

```ts
// Define commands with clear descriptions
program
  .command('hello <name>')
  .description('Greet someone')
  .option('-l, --loud', 'Shout the greeting')
  .action((name, options) => {
    const greeting = `Hello, ${name}!`
    console.log(options.loud ? greeting.toUpperCase() : greeting)
  })
```

## Output Guidelines

- Use stdout for results, stderr for errors/logs
- Support `--json` flag for machine-readable output where useful
- Keep output concise and scannable
