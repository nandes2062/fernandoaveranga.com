<template>
  <main>
    <FerPresentation class="bg-theme-base" />
  </main>
</template>

<script>
import FerPresentation from '@/components/index/01-presentation'

const indexComponents = {
  FerPresentation
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
