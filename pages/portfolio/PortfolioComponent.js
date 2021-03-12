export default {
  name: 'Portfolio',
  async asyncData ({ $content }) {
    const data = await $content('portfolio')
      .only(['title', 'description', 'imageDesktop', 'imageMobile', 'slug'])
      .fetch()
    return {
      data
    }
  }
}
