# IEEE EUI Student Branch Website

The website of the IEEE Student Branch at Egypt University of Informatics.
Built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS v4, and
[Bun](https://bun.sh). No database, no CMS — all content lives in this repo as
TypeScript/JSX files, so maintaining it only requires editing a file and
redeploying.

## Getting started

```bash
bun install
bun dev        # development server on http://localhost:3000
bun run build  # production build (also type-checks)
bun run lint   # eslint
```

## How to add an event

Every event is **one `.tsx` file** in `app/events/_content/`:

1. Copy an existing event file, e.g.
   `app/events/_content/solve-the-17-hackathon.tsx`, to
   `app/events/_content/<your-event-slug>.tsx`.
2. Edit the exported `event` object:
   - `id` — must match the file name; the page appears at `/events/<id>`.
   - `title`, `description`, `startDate`, `endDate`, `postedDate` — used by
     the events list, search, sorting, and the auto "Event Concluded" badge.
   - `societyCodes` — IEEE unit codes (see `app/societies-data.ts`); these
     drive the society filter on `/events`.
   - `theme`, `banner`, `meta`, `intro` — the page header (colors, banner
     image, icon facts, lead paragraph).
   - `content` — **plain JSX**. Everything below the header is yours: any
     sections, grids, images, and styles you want. No schema to follow.
3. Register it in `app/events/_content/index.ts` (one import + one array
   entry).

The generic page shell in `app/events/[slug]/page.tsx` renders the badge,
banner, title, meta row, and intro for every event, then drops in your
`content` — so all events stay consistent without limiting what each page can
contain.

## How to edit other content

- **Societies** (names, URL slugs, IEEE unit codes): `app/societies-data.ts` —
  the header, footer, events filter, and event cards all read from this one
  file.
- **Team members / awards** on the landing page: `app/team-data.ts`.
- **Society pages**: `app/societies/<slug>/page.tsx`.

## Images

Put images in `public/` and reference them with `next/image`. After adding
photos, run:

```bash
bun run optimize-images
```

This resizes anything larger than 1600px and re-encodes it, keeping the repo
and page loads small. It only overwrites a file when the result is smaller.
