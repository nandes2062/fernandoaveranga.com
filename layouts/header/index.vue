<template src="./HeaderComponent.html" />
<script>
export default {
  name: 'FerHeader',
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
