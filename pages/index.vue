<template>
  <main>
    <FerPresentation class="bg-theme-base" />
    <!-- <FerPortfolio class="bg-accent-100" /> -->
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
