module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    'rgx:^/donation': ['donation'],
    'rgx:^/about': ['about'],
    'rgx:^/faq': ['faq'],
    'rgx:^/terms-and-conditions': ['terms'],
    'rgx:^/privacy-policy': ['privacy'],
  },
  loadLocaleFrom: (lang, ns) => require(`./public/locales/${lang}/${ns}.json`),
};
