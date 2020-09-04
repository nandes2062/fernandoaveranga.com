<template>
  <main>
    <FerPresentation class="bg-theme-base" />
    <separator-section class="bg-accent-100" color="var(--light-color)" />
    <FerPortfolio :data="portfolio" class="bg-accent-100" />
    <separator-section color="hsl(var(--accent-HS), 90%)" />
  </main>
</template>

<script>
import FerPresentation from '@/components/index/01-presentation'
import FerPortfolio from '@/components/index/02-portfolio'

const indexComponents = {
  FerPresentation,
  FerPortfolio
}
export default {
  name: 'Inicio',
  components: {
    ...indexComponents
  },
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
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
