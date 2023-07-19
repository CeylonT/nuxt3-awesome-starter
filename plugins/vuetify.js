import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
    ssr: true,
    components: {
      ...components,
      ...labsComponents,
    },
    directives,
    theme: {
      defaultTheme: 'default',
      themes: {
        default: {
          dark: false,
          colors: {
            primary: '#006971',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
