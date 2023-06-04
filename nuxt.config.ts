export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    components: [
        { path: '~/components/layouts', prefix: 'Layouts' },
        '~/components'
    ],
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
          { rel: 'stylesheet', media: 'all', href: 'https://fonts.googleapis.com/css2?family=Kanit&family=Roboto&display=swap'}
        ]
      },
    },
  })
  