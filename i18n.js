/* eslint-disable */
const workaround = require('next-translate/lib/cjs/plugin/utils.js');

workaround.defaultLoader =
  '(l, n) => import(`~public/locales/${l}/${n}.json`).then(m => m.default)';

module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    'rgx:^/donation': ['donation'],
    'rgx:^/about': ['about'],
    'rgx:^/faq': ['faq'],
    'rgx:^/terms-and-conditions': ['terms-and-conditions'],
    'rgx:^/privacy-policy': ['privacy-policy'],
    'rgx:^/all-networks': ['all-networks'],
  },
};
