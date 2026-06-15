# Contributing

Thanks for taking a look at Oceania. This project is a shadcn-compatible
component registry, so changes should keep the source easy to copy, inspect,
and customize after install.

## Setup

```bash
pnpm install
pnpm --filter @oceania/registry dev
```

The registry app runs at `http://localhost:3333`.

## Before Opening a PR

Run the full local gate:

```bash
pnpm verify
```

This checks formatting/lint rules, TypeScript, registry generation, and the
Next.js production build.

## Component Changes

- Keep components source-editable. Avoid hidden runtime behavior that only works
  inside this repo.
- Use the existing Oceania CSS variables instead of hard-coded colors or sizes.
- Keep Radix behavior intact when wrapping primitives.
- Update the registry output by running `pnpm registry:build` when component
  source or tokens change.
- Add or update verification notes when install behavior changes.

## Commit Scope

Keep PRs focused. Component changes, registry generation changes, and docs
changes are all welcome, but they should be easy to review as a single story.

## Reporting Issues

Use GitHub issues for bugs, install problems, accessibility issues, and
component requests. Include reproduction steps, package versions, and the exact
registry URL or component name when possible.
