import {
  ABOUT,
  ALL_NETWORKS,
  DOCS,
  DONATION,
  FAQ,
  FEEDBACK,
  HOME,
} from '@/src/utils/links';

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
      key: 'helpAndSupport',
      submenus: [
        {
          key: 'faq',
          url: FAQ,
        },
        {
          key: 'donation',
          url: DONATION,
        },
        {
          key: 'feedback',
          url: FEEDBACK,
        },
      ],
    },
    {
      key: 'about',
      url: ABOUT,
    },
    {
      key: 'docs',
      url: DOCS,
    },
  ];
};
