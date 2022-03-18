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
      htmlAttrs: { lang: this.$i18n.locale }
    }
  }
}
</script>
