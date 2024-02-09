module.exports = {
  locales: ["en"],
  defaultLocale: "en",
  loadLocaleFrom: (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    "*": ["common"],
    "rgx:^/donation": ["donation"],
    "rgx:^/about": ["about"],
    "rgx:^/faq": ["faq"],
    "rgx:^/terms-and-conditions": ["terms-and-conditions"],
    "rgx:^/privacy-policy": ["privacy-policy"],
    "rgx:^/all-networks": ["all-networks"],
  },
};
