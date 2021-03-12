import IndexMixin from '@/modules/index/index'
export default {
  name: 'Inicio',
  mixins: [IndexMixin],
  async asyncData ({ $content }) {
    const portfolio = await $content('portfolio')
      .only(['title', 'description', 'imageDesktop', 'imageMobile', 'slug'])
      .limit(6)
      .fetch()
    return {
      portfolio
    }
  }
}
