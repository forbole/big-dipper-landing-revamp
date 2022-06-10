import {
  HOME,
  ABOUT,
  FAQ,
  DONATION,
  TERMS_AND_CONDITIONS,
  PRIVACY_POLICY,
} from '@utils/links';

export const getMenuItems = () => {
  return [
    {
      key: 'overview',
      url: HOME,
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
      key: 'donation',
      url: DONATION,
    },
    {
      key: 'termsAndConditions',
      url: TERMS_AND_CONDITIONS,
    },
    {
      key: 'privacyPolicy',
      url: PRIVACY_POLICY,
    },
  ];
};
