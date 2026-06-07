# Design System Benchmarks

Oceania is registry-first, so the closest model is shadcn/ui: source files are copied
into the consuming app and stay editable. The registry should stay flat, schema-valid,
and easy to inspect.

## References

- shadcn custom registries: https://ui.shadcn.com/docs/registry
- shadcn registry item schema: https://ui.shadcn.com/docs/registry/registry-item-json
- shadcn registry index schema: https://ui.shadcn.com/docs/registry/registry-json
- Radix primitives: https://www.radix-ui.com/primitives/docs
- Radix composition and `asChild`: https://www.radix-ui.com/primitives/docs/guides/composition
- Radix accessibility guidance: https://www.radix-ui.com/primitives/docs/overview/accessibility
- Tailwind v4 theme variables: https://tailwindcss.com/docs/theme
- Storybook component documentation patterns: https://storybook.js.org/docs

## Decisions For Oceania

- Prefer Radix primitives for controls with interaction or keyboard semantics.
- Preserve `asChild` where composition matters, especially buttons, links, tooltips,
  and breadcrumb links.
- Keep tokens in CSS custom properties and expose Tailwind v4 `@theme` aliases in
  the docs app.
- Show install command, variants, states, and usage for every V1 component.
- Treat Figma as the source of visual truth, but keep implementation idiomatic React.
