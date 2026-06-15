# Fresh Install Verification

Date checked: 2026-06-10

## Scenario

Created a clean Next.js app in `/tmp/oceania-install-test`, initialized shadcn,
then installed Oceania components from the registry.

Hosted registry:

```bash
pnpm dlx shadcn@latest init -d --yes
pnpm dlx shadcn@latest add \
  https://oceania.praks.me/r/button.json \
  https://oceania.praks.me/r/input.json \
  https://oceania.praks.me/r/select.json \
  --yes --overwrite
```

Local registry, when the docs app is running on port `3333`:

```bash
pnpm dlx shadcn@latest init -d --yes
pnpm dlx shadcn@latest add \
  http://localhost:3333/r/button.json \
  http://localhost:3333/r/input.json \
  http://localhost:3333/r/select.json \
  --yes --overwrite
```

## Required Consumer Step

The CLI installs `app/oceania-tokens.css`. If it does not add the import for you,
add it to global CSS:

```css
@import "./oceania-tokens.css";
```

## Result

The app builds successfully with installed `Button`, `Input`, `InputField`, and
`Select` components.
