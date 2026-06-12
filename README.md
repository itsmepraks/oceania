# Oceania

Oceania is a small registry-first design system for React, Next.js, and
TypeScript. It follows the shadcn model: install the components as editable
source, keep the tokens with them, and change the code in your app when you
need to.

The repo has three jobs: hold the component source, keep the design tokens in
one place, and publish shadcn-compatible registry files from the docs app.

## What's In Here

- React components built with TypeScript, Radix primitives, Tailwind CSS, and CVA
- Figma-sourced CSS tokens for color, typography, radii, and control sizing
- A Next.js registry/docs app for previewing components and installing them with shadcn
- Verification notes for fresh installs and browser QA

Current components:

- Button
- Input and InputField
- Textarea
- Checkbox
- Radio group
- Switch
- Slider
- Select
- Tabs
- Breadcrumb
- Pagination
- Tooltip

## Workspace

- `packages/ui` — the component library source (React + TypeScript + Tailwind + Radix + CVA)
- `apps/registry` — Next.js site that hosts the component registry JSON for `npx shadcn add <url>` installs
- `docs/verification` — installation and browser QA notes
- `docs/research` — design-system research notes

## Requirements

- Node.js 20 or newer
- pnpm 10.33.0, as declared by `packageManager`

## Develop Locally

```bash
pnpm install
pnpm dev
```

The registry docs run at `http://localhost:3333`.

To run only the registry app:

```bash
pnpm --filter @oceania/registry dev
```

## Build the Registry

Registry files are generated into `apps/registry/public/r`.

```bash
pnpm registry:build
```

By default, generated registry dependencies point at hosted JSON files like
`https://oceania.praks.me/r/button.json`.

For a local-only build, or for another host, set `OCEANIA_REGISTRY_URL`:

```bash
OCEANIA_REGISTRY_URL=<origin>/r pnpm registry:build
```

## Verify Changes

```bash
pnpm lint
pnpm typecheck
pnpm registry:build
pnpm --filter @oceania/registry build
```

Or run the full local gate:

```bash
pnpm verify
```

Fresh install and browser QA notes are documented in:

- `docs/verification/fresh-install.md`
- `docs/verification/browser-qa.md`

## Install from the Registry

Use the hosted registry when you just want to install something:

```bash
npx shadcn@latest add https://oceania.praks.me/r/button.json
npx shadcn@latest add https://oceania.praks.me/r/input.json
npx shadcn@latest add https://oceania.praks.me/r/select.json
```

When you are working against the local docs app, use localhost instead:

```bash
npx shadcn@latest add http://localhost:3333/r/button.json
npx shadcn@latest add http://localhost:3333/r/input.json
npx shadcn@latest add http://localhost:3333/r/select.json
```

Components depend on the Oceania token file. If the CLI does not wire it into
your app automatically, add this to the consuming app's global CSS:

```css
@import "./oceania-tokens.css";
```

You can also install the shared utility and tokens directly:

```bash
npx shadcn@latest add https://oceania.praks.me/r/utils.json
npx shadcn@latest add https://oceania.praks.me/r/tokens.json
```

## Package Exports

The workspace package `@oceania/ui` exports the component source for local
development:

```ts
import { Button, Input, Select } from "@oceania/ui";
import "@oceania/ui/styles/tokens.css";
```

Individual component paths are also exported:

```ts
import { Button } from "@oceania/ui/components/button";
```

## Common Scripts

- `pnpm dev` — run all development servers through Turborepo
- `pnpm build` — build all packages and apps
- `pnpm check` — run Biome checks across the repository
- `pnpm format` — format the repository with Biome
- `pnpm lint` — lint source and config files
- `pnpm typecheck` — run TypeScript checks
- `pnpm registry:build` — generate shadcn registry JSON
- `pnpm verify` — run the local validation gate

## Design System References

The implementation leans on shadcn registries, Radix primitives, Tailwind v4
theme variables, and component docs patterns that have held up in real projects.
Notes live in `docs/research/design-system-benchmarks.md`.
