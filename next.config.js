/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate');

const nextConfig = nextTranslate({
  basePath: process.env.BASE_PATH ?? '',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [375, 768, 1280, 1920],
  },
});

module.exports = nextConfig;
