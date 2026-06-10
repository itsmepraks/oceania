# Browser QA

Date checked: 2026-06-10

## Registry Docs

Target: `http://localhost:3333`

Desktop check:

- Page loaded successfully.
- No console errors on clean load.
- Install commands and token cards rendered.
- No detected horizontal overflow.

Mobile check:

- Viewport: `390 x 844`.
- Page loaded successfully after restarting the dev server following production build.
- No detected horizontal overflow.

## Notes

Running `next build` while `next dev` is active can leave the dev server with stale
`.next` artifacts. Restart the dev server after production builds before visual QA.
