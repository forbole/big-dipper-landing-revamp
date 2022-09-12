import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from '~src/components/iconsComponents';
import * as LINKS from '~src/utils/links';
import type { IconType, LinkType } from './types';

export const bdLinks: LinkType[] = [
  {
    key: 'about',
    url: LINKS.ABOUT,
  },
  {
    key: 'faq',
    url: LINKS.FAQ,
  },
  {
    key: 'donation',
    url: LINKS.DONATION,
  },
  {
    key: 'docs',
    url: LINKS.DOCS,
    external: true,
  },
];

export const forboleLinks: LinkType[] = [
  {
    key: 'stakeNow',
    url: LINKS.STAKE_NOW,
    external: true,
  },
  {
    key: 'networks',
    url: LINKS.NETWORKS,
    external: true,
  },
  {
    key: 'blog',
    url: LINKS.BLOG,
    external: true,
  },
];

export const socialLinks: IconType[] = [
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: LINKS.TWITTER,
  },
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: LINKS.TELEGRAM,
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: LINKS.GITHUB,
  },
  {
    component: <LinkedinIcon />,
    className: 'linkedin',
    url: LINKS.LINKEDIN,
  },
];

export const termsLinks: LinkType[] = [
  {
    key: 'termsAndConditions',
    url: LINKS.TERMS_AND_CONDITIONS,
  },
  {
    key: 'privacyPolicy',
    url: LINKS.PRIVACY_POLICY,
  },
];
