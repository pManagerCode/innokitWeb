const colors = require("vuetify/es5/util/colors").default;

module.exports = {
  server: {
    port: 3000, // default: 3000
    // host: "0.0.0.0", // default: localhost
  },

  pageTransition: {
    name: "page",
    mode: "out-in",
    beforeEnter() {},
  },

  env: {
    baseUrl: process.env.BASE_URL || "http://liuxuebest.com",
  },

  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "/commonJavascript/dialogMovable.js" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#39b982" },
  /*
   ** Global CSS
   */
  css: ["assets/css/global.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "plugins/base",
    { src: "~/plugins/vue-excel-xlsx", mode: "client" },
    // { src: "~/plugins/screen-full", mode: "client" },
    { src: "~/plugins/vue-fullscreen", mode: "client" },

    "~/plugins/i18n.js",
    "~/plugins/vee-validate.js",
    { src: "~/plugins/vuetify-confirm", mode: "client" },

    // module for integration of tiptap-vuetify
    { src: "~/plugins/vuex-persist", ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/composition-api",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: [],
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#FF6C00",
          accent: "#89A9E2",
          secondary: "#312F52",
          info: "#2196F3",
          warning: colors.amber.base,
          error: "#D62305",
          success: "#007D3F",
          myGrey: "#DCD7CE",
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    // Add exception
    transpile: ["vee-validate/dist/rules", "vuetify/lib"],

    /*
     ** You can extend webpack config here
     */
    extend() {},
  },
};
