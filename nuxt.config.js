export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f5bd00' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://dev.hsv.beer/api/v1/'
  },
  bootstrapVue: {
    componentPlugins: ['LayoutPlugin', 'ImagePlugin', 'CollapsePlugin', 'LinkPlugin', 'ModalPlugin', 'SidebarPlugin']
  },
  webfontloader: {
    custom: {
      families: ['Montserrat:n4,n5', 'Oswald:n5'],
      urls: [
        'https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap',
        'https://fonts.googleapis.com/css?family=Oswald:500&display=swap'
      ]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend (config, ctx) {}
  },
  server: {
    port: process.env.PORT || 8000
  }
}
