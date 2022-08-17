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
      key: 'helpsAndSupport',
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
