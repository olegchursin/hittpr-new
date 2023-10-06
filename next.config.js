// @ts-check
const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.fs = false;
    }
    return config;
  }
};

module.exports = nextConfig;
