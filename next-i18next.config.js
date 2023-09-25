// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
const i18nConfig = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru']
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  ns: ['translation'],
  defaultNS: 'translation',
  reloadOnPrerender: process.env.NODE_ENV === 'development'
};

module.exports = i18nConfig;
