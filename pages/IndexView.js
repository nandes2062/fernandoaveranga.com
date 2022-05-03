import IndexModuleMixin from './IndexModuleMixin'
export default {
  name: 'Inicio',
  mixins: [IndexModuleMixin],
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
