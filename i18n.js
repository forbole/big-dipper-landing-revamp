module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    'rgx:^/donation': ['donation'],
    'rgx:^/about': ['about'],
    'rgx:^/faq': ['faq'],
  },
  loadLocaleFrom: (lang, ns) => require(`./public/locales/${lang}/${ns}.json`),
};
