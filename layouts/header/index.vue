<template src="./HeaderComponent.html" />
<script>
export default {
  name: 'FerHeader',
  data () {
    return {
      menuActive: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted () {
    this.menuResponsive()
  },
  methods: {
    showMenu () {
      this.menuActive = !this.menuActive
    },
    menuResponsive () {
      this.mediaQuery('(min-width: 768px)', (mql) => {
        if (mql.matches) {
          this.menuActive = false
        } else {
          this.menuActive = false
        }
      })
    },
    mediaQuery (value, changeSize) {
      const mediumBp = window.matchMedia(value)
      mediumBp.addListener(changeSize)
      changeSize(mediumBp)
    }
  }
}
</script>
