import { join } from 'path'
// Langs translates
import langs from './lang'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Fernando Javier Averanga Aruquipa',
    htmlAttrs: { lang: 'es'},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ingeniero UI, Ingeniero de Sistemas, Desarrollador web, Bolivia' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        id: 'hs-script-loader',
        async: true,
        defer: true,
        src: '//js.hs-scripts.com/8400368.js'
      },
      {
        async: true,
        defer: true,
        src: 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // SCSS file in the project
    '@/sass/styles.scss'
  ],
  styleResources: { 
    scss: [ 
      '~/sass', 
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/global-components.js',
    {
      src: "~/plugins/headroom.js",
      ssr: true
    },
    {
      src: "~/plugins/vuescrollactive.js",
      ssr: true
    },
    {
      src: '~/plugins/vuescrollreveal',
      ssr: false
    }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      'nuxt-i18n', { /* module options */ }
    ],
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
  ],
  generate: {
    async ready () {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['slug']).fetch()
      console.log(files)
    }
  },
  // Or with global options
  i18n: {
    locales: [
      {
        code: 'es',
        name: 'Español'
      },
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'de',
        name: 'Deutschland'
      }
    ],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: langs
    }
  },
  //alternative place for config
  fontawesome: {
    imports: []
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
        'postcss-custom-properties': {},
        cssnano: {
          preset: 'default'
        }
      },
      preset: {
        autoprefixer: {}
      }
    }
  }
}
