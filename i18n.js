module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  keySeparator: ':',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
