# oceania

Oceania is a registry-first design system for React, Next.js, and TypeScript.
It follows the shadcn model: components are installed as editable source into
the consuming app instead of being hidden inside an opaque package.

## Structure

- `packages/ui` — the component library source (React + TypeScript + Tailwind + Radix + CVA)
- `apps/registry` — Next.js site that hosts the component registry JSON for `npx shadcn add <url>` installs

## Develop

```bash
pnpm install
pnpm dev
```

The registry docs run at:

```bash
http://localhost:3333
```

## Verify

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

## Install From The Local Registry

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

## Design System References

The implementation is guided by shadcn registries, Radix primitives, Tailwind v4
theme variables, and mature component docs patterns. Notes live in
`docs/research/design-system-benchmarks.md`.
