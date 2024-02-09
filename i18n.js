module.exports = {
  defaultLocale: "en",
  loadLocaleFrom: (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
  locales: ["en"],
  pages: {
    "*": ["common"],
    "rgx:^/about": ["about"],
    "rgx:^/all-networks": ["all-networks"],
    "rgx:^/donation": ["donation"],
    "rgx:^/faq": ["faq"],
    "rgx:^/privacy-policy": ["privacy-policy"],
    "rgx:^/terms-and-conditions": ["terms-and-conditions"],
  },
};
