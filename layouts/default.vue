<template>
  <div>
    <fer-header />
    <Nuxt />
    <!-- <fer-work-with-me /> -->
    <fer-footer />
  </div>
</template>
<script>
import FerHeader from './header'
import FerFooter from './footer'
// import FerWorkWithMe from './work-with-me'
export default {
  name: 'Default',
  components: {
    FerHeader,
    FerFooter
    // FerWorkWithMe
  },
  head () {
    return {
      htmlAttrs: { lang: this.$i18n.locale },
      title: 'Fernando Javier Averanga Aruquipa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ingenierio de Software Web / Consultor en tecnologías web'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Fernando Javier Averanga Aruquipa'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Ingenierio de Software Web / Consultor en tecnologías web'
        }
      ]
    }
  }
}
</script>
