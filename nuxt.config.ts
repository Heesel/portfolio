export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    components: [
        { path: '~/components/layouts', prefix: 'Layouts' },
        '~/components'
    ],
    app: {
        head: {
          link: [{ rel: 'stylesheet', href: '' }]
        }
    }
  })
  