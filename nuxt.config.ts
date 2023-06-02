export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    components: [
        { path: '~/components/layouts', prefix: 'Layouts' },
        '~/components'
    ],
    app: {
      head: {
        link: [ 
          { rel: 'stylesheet', href: 'style.css'},
          { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,400;1,200;1,300&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap'}
        ]
      },
    },
  })
  