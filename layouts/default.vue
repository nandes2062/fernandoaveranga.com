<template>
  <div>
    <fer-header />
    <Nuxt />
    <fer-footer />
  </div>
</template>
<script>
import FerHeader from './header'
import FerFooter from './footer'
export default {
  name: 'Default',
  components: {
    FerHeader,
    FerFooter
  },
  head () {
    return {
      htmlAttrs: { lang: this.$i18n.locale }
    }
  }
}
</script>
