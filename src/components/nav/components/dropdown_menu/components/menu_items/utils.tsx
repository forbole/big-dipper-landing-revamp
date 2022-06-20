import {
  HOME,
  ALL_NETWORKS,
  ABOUT,
  FAQ,
  FEEDBACK,
  DONATION,
  DOCS,
} from '@utils/links';

export const getMenuItems = () => {
  return [
    {
      key: 'home',
      url: HOME,
    },
    {
      key: 'allNetworks',
      url: ALL_NETWORKS,
    },
    {
      key: 'about',
      url: ABOUT,
    },
    {
      key: 'faq',
      url: FAQ,
    },
    {
      key: 'feedback',
      url: FEEDBACK,
    },
    {
      key: 'donation',
      url: DONATION,
    },
    {
      key: 'docs',
      url: DOCS,
    },
  ];
};
