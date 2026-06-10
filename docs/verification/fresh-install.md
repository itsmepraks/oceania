# Fresh Install Verification

Date checked: 2026-06-10

## Scenario

Created a clean Next.js app in `/tmp/oceania-install-test`, initialized shadcn,
then installed Oceania components from the local registry:

```bash
pnpm dlx shadcn@latest init -d --yes
pnpm dlx shadcn@latest add \
  http://localhost:3333/r/button.json \
  http://localhost:3333/r/input.json \
  http://localhost:3333/r/select.json \
