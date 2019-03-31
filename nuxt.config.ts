import NuxtConfiguration from '@nuxt/config'
import pkg from './package.json';
const environment = process.env.NODE_ENV || "development";
const envSet = require(`./env.${environment}.js`);

const config: NuxtConfiguration = {
  mode: 'universal',
  srcDir: "app",

  /*
  ** ENVIRONMENT PROPERTIES
  ** See https://ja.nuxtjs.org/api/configuration-env
  */
  env: envSet,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    [
      "nuxt-i18n",
      {
        parsePages: false,
        locales: [{ code: "en", iso: "en_US" }, { code: "ja", iso: "ja_JP" }],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: require("./app/assets/msg/common")
        },
        vueI18nLoader: true
      }
    ],
    // Doc: https://github.com/nuxt-community/sitemap-module
    "@nuxtjs/sitemap"
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Sitemap
  */
  sitemap: {
    path: "/sitemap.xml",
    hostname: envSet.baseUrl,
    generate: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

export default config;
