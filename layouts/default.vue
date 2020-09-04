<template>
  <div>
    <fer-header />
    <Nuxt />
    <fer-work-with-me />
    <fer-footer />
    <!-- Start of HubSpot Embed Code -->
    <!-- <script id="hs-script-loader" type="text/javascript" async defer src="//js.hs-scripts.com/8400368.js" /> -->
    <!-- End of HubSpot Embed Code -->
  </div>
</template>
<script>
import FerHeader from './header'
import FerFooter from './footer'
import FerWorkWithMe from './work-with-me'
export default {
  name: 'Default',
  components: {
    FerHeader,
    FerFooter,
    FerWorkWithMe
  },
  head () {
    return {
      htmlAttrs: { lang: this.$i18n.locale }
    }
  }
}
</script>
