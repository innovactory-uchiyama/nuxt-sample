export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtsample',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'this is sample page' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = 'source-map'
      }
    }
  },

  i18n: {
    baseUrl: 'https://uchiyama-pagetest.s3.ap-northeast-1.amazonaws.com',
    locales: [
      { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'ja',
    langDir: 'locales/',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'ja'
    }
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.forEach(r => {
        if (r.path.endsWith('/')) {
          // "/" で終わっている場合は index.html を指定
          r.path += 'index.html'
        } else {
          // それ以外はファイル名 + .html の形式になるため
          // パス名を .html 付きに修正
          r.path += '.html'
        }
      })
      // CloudFront の仕様対応
      // ドキュメントルートのみルートオブジェクトを追加
      routes.push({
        path: '/index.html',
        alias: '/',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  generate: {
    routes: [
      '/',
      '/en',
      '/subpage',
      '/en/subpage'
    ]
  }
}
