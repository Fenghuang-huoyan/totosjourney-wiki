export const siteConfig = {
  siteName: "Toto's Journey Guide",
  domain: 'totosjourney.wiki',
  url: 'https://totosjourney.wiki',
  gameTitle: "Toto's Journey",
  steamAppId: 3724300,
  steamUrl: 'https://store.steampowered.com/app/3724300/Totos_Journey/',
  supportEmail: 'community@hanumangames.com',
  social: [
    { href: 'https://totosjourney.com/', label: 'totosjourney.com' },
    { href: 'https://discord.gg/hq2r6tBmPJ', label: 'Discord' },
    { href: 'https://x.com/HanumanGames', label: 'X' },
    { href: 'https://www.youtube.com/@Hanuman-Games', label: 'YouTube' },
    { href: 'https://www.instagram.com/totosjourneygame/', label: 'Instagram' },
  ],
  developer: 'Hanuman Games',
  publisher: 'Hanuman Games, Creata Games',
  tagline:
    "Unofficial English fan guide for the cozy adventure that is still coming to Steam on 18 November 2026.",
  locale: 'en',
  themeColor: '#121a14',
  contentRoot: 'totosjourney',
  homeTitle: "Toto's Journey Guide — Release Date and What the Game Is",
  homeDescription:
    "Unofficial English guide to Toto's Journey (Steam AppID 3724300). Hanuman Games and Creata Games, planned release 18 November 2026, still coming soon. A cozy adventure about Toto. Not affiliated with the developers or Valve.",
  analytics: {
    gaId: '',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      "Official Steam library hero for Toto's Journey: a small white and brown dog runs a dirt path beside a brown mouse, through tall grass, red mushrooms, and blue butterflies",
    header: '/images/official/steam/header.jpg',
    headerAlt:
      "Official Steam header for Toto's Journey: a white and brown dog looks up at a pink butterfly beside the painted title on a blue sky",
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    "totosjourney.wiki is an unofficial fan-made guide for Toto's Journey. It is not affiliated with, endorsed by, or sponsored by Hanuman Games, Creata Games, Valve, or Steam, and it is not affiliated with the Oz books or films. Hanuman Games describes the game as an independent story inspired by L. Frank Baum's public-domain book The Wonderful Wizard of Oz. All game content, names, artwork, and trademarks belong to their respective owners. This site does not sell the game, recover accounts, or invent puzzle solutions. The support email in the footer is the one printed on the Steam store page. Mail sent there does not reach the people who edit this wiki.",
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/walkthrough', label: 'Walkthrough' },
    { href: '/puzzles', label: 'Puzzles' },
    { href: '/collectibles', label: 'Collectibles' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  footerNav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/walkthrough', label: 'Walkthrough' },
    { href: '/puzzles', label: 'Puzzles' },
    { href: '/collectibles', label: 'Collectibles' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  version: {
    label: 'Checked 12 Nov 2026',
    detail:
      "Store text, platforms, languages, categories, system requirements, the demo listing, and the English store page are from the Steam appdetails API on 12 Nov 2026, when the full game was still marked coming soon. Developer posts linked from the Steam news feed for AppID 3724300 were read the same day. No launch client was played. The full-game appdetails payload did not include a public price.",
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/3724300/Totos_Journey/',
      label: 'Steam store page',
    },
    {
      href: 'https://store.steampowered.com/app/5371190/Totos_Journey_Demo/',
      label: 'Steam demo page',
    },
    {
      href: 'https://totosjourney.com/',
      label: 'totosjourney.com',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
