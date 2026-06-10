# Oceania

Oceania is a registry-first design system for React, Next.js, and TypeScript.
It follows the shadcn model: components are installed as editable source into
the consuming app instead of being hidden inside an opaque package.

The repository contains the component source, design tokens, and a local
registry app that publishes shadcn-compatible JSON files.

## What's Included

- React components built with TypeScript, Radix primitives, Tailwind CSS, and CVA
- Figma-sourced CSS tokens for color, typography, radii, and control sizing
- A Next.js registry/docs app for previewing components and installing them with shadcn
- Verification notes for fresh installs and browser QA

Current registry components:

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

## Develop

```bash
pnpm install
pnpm dev
```

The registry docs run at `http://localhost:3333`.

To run only the registry app:

```bash
pnpm --filter @oceania/registry dev
```

## Build The Registry

Registry files are generated into `apps/registry/public/r`.

```bash
pnpm registry:build
```

By default, generated install URLs point at `http://localhost:3333/r`. Set
`OCEANIA_REGISTRY_URL` when building for another host:

```bash
OCEANIA_REGISTRY_URL=https://example.com/r pnpm registry:build
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

## Install From The Registry

```bash
npx shadcn@latest add http://localhost:3333/r/button.json
npx shadcn@latest add http://localhost:3333/r/input.json
npx shadcn@latest add http://localhost:3333/r/select.json
```

Components depend on the Oceania token file. If the CLI does not import it
automatically, add this to the consuming app's global CSS:

```css
@import "./oceania-tokens.css";
```

You can also install the shared utility and tokens directly:

```bash
npx shadcn@latest add http://localhost:3333/r/utils.json
npx shadcn@latest add http://localhost:3333/r/tokens.json
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

The implementation is guided by shadcn registries, Radix primitives, Tailwind v4
theme variables, and mature component docs patterns. Notes live in
`docs/research/design-system-benchmarks.md`.
