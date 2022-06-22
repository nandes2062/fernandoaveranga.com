<template>
  <div>
    <header class="text-white bg-sky-600 px-3 pt-6 pb-3">
      <h1 class="flex justify-center flex-nowrap text-center md:text-6xl sm:text-5xl text-3xl mb-4">
        🎬 Digital streaming Bolivia 🇧🇴
      </h1>
      <p class="text-center lg:text-2xl sm:text-xl text-lg mb-1.5 text-sky-100">¡Plataformas digitales de streaming a precios accesibles!</p>
    </header>
    <Nuxt />
    <footer class="bg-dark-base text-light-base w-full py-1">
      <div class="container mx-auto flex flex-wrap sm:justify-left justify-center px-2">
        <h3 class="text-xl text-center">
          <nuxt-link to="/">
            {{ new Date().getFullYear() }} © Fernando Averanga A. Todos los derechos reservados.
          </nuxt-link>
        </h3>
        <ul class="text-xl flex justify-center px-5">
          <li class="mx-2">
            <a class="hover:text-primary-base" href="https://api.whatsapp.com/send?phone=59162280788" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'whatsapp']"  />
            </a>
          </li>
          <li class="mx-2">
            <a class="hover:text-primary-base" href="https://twitter.com/2062nandes" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'twitter']"  />
            </a>
          </li>
          <li class="mx-2">
            <a class="hover:text-primary-base" href="https://bo.linkedin.com/in/fernando-javier-averanga-aruquipa" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'linkedin']"  />
            </a>
          </li>
          <!-- <li class="mx-2">
            <a class="hover:text-primary-base" href="https://github.com/nandes2062" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'github']"  />
            </a>
          </li>
          <li class="mx-2">
            <a class="hover:text-primary-base" href="https://gitlab.com/2062nandes" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'gitlab']"  />
            </a>
          </li> -->
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
// import FerWorkWithMe from './work-with-me'
export default {
  name: 'CuentasDeStreamingBolivia',
  head () {
    return {
      htmlAttrs: { lang: this.$i18n.locale }
    }
  }
}
</script>
