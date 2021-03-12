export default {
  async asyncData ({ $content, params }) {
    try {
      const page = await $content('portfolio', params.slug).fetch()
      return {
        page
      }
    } catch (error) {
      const page = []
      return {
        page
      }
    }
  }
}
