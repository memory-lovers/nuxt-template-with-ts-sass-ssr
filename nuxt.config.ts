import NuxtConfiguration from '@nuxt/config'
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const environment = process.env.NODE_ENV || "development";
const envSet = require(`./env.${environment}.js`);
import commonHead from "./commonHead";

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
  head: commonHead(envSet.baseUrl),

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "~/assets/css/buefy.scss",
    "~/assets/css/transition.scss"
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
    // Doc: https://github.com/nuxt-community/analytics-module
    "@nuxtjs/google-analytics",
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
  ** Google Analytics module configurations
  */
  "google-analytics": {
    id: envSet.GA_ID
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
    publicPath: "/assets/",
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (!ctx.isDev && ctx.isClient && config.plugins != null) {
        config.plugins.push(
          new UglifyJsPlugin({
            sourceMap: true,
            parallel: true,
            extractComments: { filename: "LICENSES" },
            uglifyOptions: {
              output: {
                comments: /^\**!|@preserve|@license|@cc_on/
              },
              compress: {
                drop_console: true
              }
            }
          })
        );
      }
    }
  }
}

export default config;
