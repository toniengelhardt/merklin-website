export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || '',
      appUrl: process.env.APP_URL || '',
      repoUrl: process.env.REPO_URL || '',
      feedbackEmail: 'gm@merklin.xyz',
      twitterUrl: '',
      discordUrl: '',
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    '@unocss/nuxt',
    'nuxt-icon',
  ],
  experimental: {
    reactivityTransform: true,
  },
  devServer: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT ? +process.env.PORT : 3000,
  },
  typescript: {
    shim: false,
  },
  css: [
    'assets/css/style.css',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        translate: 'no',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', key: 'favicon' },
      ],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN || '',
  },
})
