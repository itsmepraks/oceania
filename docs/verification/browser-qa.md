# Browser QA

Date checked: 2026-06-10

## Registry Docs

Local target: `http://localhost:3333`
Hosted target: `https://oceania.praks.me`

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

Do not run `next build` and `next dev` against the same app at the same time.
They both write to `.next`, and the dev server can end up serving stale build
artifacts. Stop or restart the dev server after production builds before visual QA.
