<template>
  <div>
    <fer-header />
    <Nuxt />
    <fer-footer />
    <!-- Start of HubSpot Embed Code -->
    <script id="hs-script-loader" type="text/javascript" async defer src="//js.hs-scripts.com/8400368.js" />
    <!-- End of HubSpot Embed Code -->
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
