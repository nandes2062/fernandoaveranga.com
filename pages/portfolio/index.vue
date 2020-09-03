<template src="./IndexComponent.html" />
<script>
export default {
  name: 'Portfolio',
  async asyncData ({ $content }) {
    const data = await $content('portfolio')
      .only(['title', 'description', 'image', 'slug'])
      .fetch()
    return {
      data
    }
  }
}
</script>
