# Akyannyan Info (homepage + privacy)

Public light-theme site for Google OAuth Branding URLs and users who need a Privacy Policy.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Homepage |
| `/privacy` | Privacy Policy (English + Burmese intro) |

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deploy (for Google Console)

1. Deploy this project (Vercel / Netlify / Cloudflare Pages).
2. In Google Auth Platform → **Branding**:
   - **Homepage URL:** `https://YOUR_DOMAIN/`
   - **Privacy policy URL:** `https://YOUR_DOMAIN/privacy`
3. Authorized domains: add `YOUR_DOMAIN` (no `https://`).

`vercel.json` and `public/_redirects` already rewrite SPA routes.

## Theme

**Light only** — tokens match `akyannyan-mobile` light palette (`#F3F6EF` bg, jade `#177A44`, gold `#8A5A00`).
