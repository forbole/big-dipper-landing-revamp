import {
  ABOUT,
  FAQ,
  DONATION,
  DOCS,
} from '@utils/links';
import { LinkType } from './types';

export const bdLinks: LinkType[] = [
  {
    key: 'about',
    url: ABOUT,
  },
  {
    key: 'faq',
    url: FAQ,
  },
  {
    key: 'donation',
    url: DONATION,
  },
  {
    key: 'docs',
    url: DOCS,
    external: true,
  },
];
