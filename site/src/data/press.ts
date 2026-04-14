export type PressItem = {
  slug: string;
  publication: string;
  title: string;
  date: string;
  href: string;
  logo: string;
  /** Optional CSS filter override. Defaults to `brightness(0)` to flatten to dark monochrome. */
  logoFilter?: string;
  /** Whether this item appears in the "Featured In" banner. Defaults to true. */
  inBanner?: boolean;
};

export const press: PressItem[] = [
  {
    slug: 'hemp-gazette',
    publication: 'Hemp Gazette',
    title: 'Senator Amy Klobuchar Taking On Intoxicating Hemp Ban',
    date: 'January 2026',
    href: 'https://hempgazette.com/news/klobuchar-hemp-ban-hg2636/',
    logo: '',
    inBanner: false,
  },
  {
    slug: 'quiver-quant',
    publication: 'Quiver Quantitative',
    title: 'Press Release: Klobuchar and Duluth Business Leaders Call for Changes to Federal Hemp Ban',
    date: 'December 2025',
    href: 'https://www.quiverquant.com/news/Press+Release%3A+Klobuchar+and+Duluth+Business+Leaders+Call+for+Changes+to+Federal+Hemp+Ban/',
    logo: '',
    inBanner: false,
  },
  {
    slug: 'fox21',
    publication: 'Fox 21',
    title: 'Senator Amy Klobuchar speaks on potential hemp ban',
    date: 'December 2025',
    href: 'https://www.fox21online.com/news/senator-amy-klobuchar-speaks-on-potential-hemp-ban/article_09800b11-6c1b-5386-9103-de802c6fb61b.html',
    logo: '',
    inBanner: false,
  },
  {
    slug: 'star-tribune',
    publication: 'Star Tribune',
    title: 'Minnesota lawmakers vowed to save the hemp-derived THC industry. Their push has stalled in Congress.',
    date: 'December 2025',
    href: 'https://www.startribune.com/minnesota-lawmakers-vowed-to-save-the-hemp-derived-thc-industry-their-push-has-stalled-in-congress/601635551',
    logo: '/images/logos/star-tribune.svg',
  },
  {
    slug: 'duluth-news-tribune',
    publication: 'Duluth News Tribune',
    title: 'Local small businesses brace for federal hemp ban',
    date: 'December 2025',
    href: 'https://www.duluthnewstribune.com/business/local-small-businesses-brace-for-federal-hemp-ban',
    logo: '/images/logos/duluth-news-tribune.png',
  },
  {
    slug: 'wdio',
    publication: 'WDIO',
    title: 'U.S. Senators developing new laws for THC and the Hemp industry',
    date: 'December 2025',
    href: 'https://www.wdio.com/front-page/top-stories/u-s-senators-developing-new-laws-for-thc-and-the-hemp-industry/',
    logo: '/images/logos/wdio.png',
    logoFilter: 'grayscale(1) brightness(0.85)',
  },
  {
    slug: 'star-tribune-fight',
    publication: 'Star Tribune',
    title: "Minnesota's hemp-derived THC companies prepare to fight ban on Capitol Hill",
    date: 'November 2025',
    href: 'https://www.startribune.com/minnesotas-hemp-derived-thc-companies-prepare-to-fight-ban-on-capitol-hill/601523793',
    logo: '',
    inBanner: false,
  },
  {
    slug: 'minnpost',
    publication: 'MinnPost',
    title: 'As hemp THC industry lobbies Congress for regulations, could Minnesota be a national model?',
    date: 'November 2025',
    href: 'https://www.minnpost.com/state-government/2025/11/as-hemp-thc-industry-lobbies-congress-for-regulations-could-minnesota-be-a-national-model/',
    logo: '/images/logos/minnpost.svg',
  },
  {
    slug: 'twin-cities-business',
    publication: 'Twin Cities Business',
    title: 'Sen. Amy Klobuchar, Tina Smith Fighting to Reverse Hemp Ban',
    date: 'November 2025',
    href: 'https://tcbmag.com/sen-amy-klobuchar-tina-smith-fighting-to-reverse-hemp-ban/',
    logo: '/images/logos/twin-cities-business.svg',
  },
  {
    slug: 'prx',
    publication: 'PRX',
    title: 'Hemp-derived THC industry feature',
    date: '2025',
    href: 'https://exchange.prx.org/pieces/600068?m=false',
    logo: '/images/logos/prx.svg',
  },
  {
    slug: 'brewer-magazine',
    publication: 'Brewer Magazine',
    title: 'Cider Corner: Factors That Led Wild State Cider to Consider Expanding',
    date: 'April 2023',
    href: 'https://thebrewermagazine.com/factors-that-led-wild-state-cider-to-consider-expanding/',
    logo: '/images/logos/brewer-magazine.png',
  },
];
