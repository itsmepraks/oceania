# oceania

Oceania is a registry-first design system for React, Next.js, and TypeScript.
It follows the shadcn model: components are installed as editable source into
the consuming app instead of being hidden inside an opaque package.

## Structure

- `packages/ui` — the component library source (React + TypeScript + Tailwind + Radix + CVA)
- `apps/registry` — Next.js site that hosts the component registry JSON for `npx shadcn add <url>` installs

