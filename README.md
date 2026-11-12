# Toto's Journey Guide

Unofficial English fan guide for [Toto's Journey](https://store.steampowered.com/app/3724300/Totos_Journey/) (Steam AppID **3724300**), aimed at **totosjourney.wiki**.

Not affiliated with Hanuman Games, Creata Games, Valve, or Steam, and not affiliated with the Oz books or films. The site does not sell the game or recover accounts. On 12 November 2026 the full game was still marked coming soon for 18 November 2026.

## Build

```bash
npm install
npm run dev      # http://localhost:4331
npm run build
npm run preview  # http://localhost:4331
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://totosjourney.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/totosjourney/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/totosjourney/ads.config.ts` | Ad slot left empty for this domain |
| Active site | `sites/active` → `totosjourney` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/totosjourney/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so the base layout does not load Google Analytics. The Adsterra Native Banner after Quick Answer is disabled. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.

## Pages

Content pages: `/`, `/guide`, `/walkthrough`, `/puzzles`, `/collectibles`.

Also: `/about`, `/privacy`, `/disclaimer`, and a 404. There is no codes page. The Steam sources checked on 12 November 2026 do not describe a redeem-code system.
