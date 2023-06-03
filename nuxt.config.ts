export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/pwa',],
    components: [
        { path: '~/components/layouts', prefix: 'Layouts' },
        '~/components'
    ],
    pwa: {
      manifest: { 
        name: 'My Nuxt 3 portfolio website',
        short_name: 'My portfolio',
        description: "My portfolio built with Nuxt 3",
        lang: 'en',
      },
    },
    app: {
      head: {
        title: 'My portfolio',
        htmlAttrs:{
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: "Hey, I'm Hessel - a detail-oriented web developer with a passion"},
          { name:'robots', content: 'nofollow'},

        ], 
        link: [ 
          { rel: 'stylesheet', href: 'style.css'},
          { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
          { rel: 'stylesheet', media: 'all', href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,400;1,200;1,300&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap'}
        ]
      },
    },
  })
  