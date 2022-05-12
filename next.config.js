const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  poweredByHeader: false,
  nextConfig: {
    reactStrictMode: true,
  },
  experimental: {
    outputStandalone: true,
  },
});
