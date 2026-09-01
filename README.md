# Beatrice Commons

Landing page for Beatrice Commons — new townhomes for sale in Beatrice, Nebraska.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- Deployed on [Vercel](https://vercel.com) — pushes to `main` auto-deploy

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Reservation form → Notion

"Reserve My Spot" submissions POST to `/api/reserve`, which creates a row in
the **BC Website Leads** database in Notion. Two environment variables are
required (Vercel → Project → Settings → Environment Variables, and `.env.local`
for local dev):

- `NOTION_TOKEN` — internal integration secret from notion.so/profile/integrations
  (the integration must be connected to the BC Website Leads database)
- `NOTION_DATABASE_ID` — `3ce7b806467c806e935fe20efc312b8f`
