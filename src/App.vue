<script>

// !!!!!! Don't use ts !!!!!!
// Weird behaviour handling the import
// breaks everything
// :(
// - 🐇 / 13/06/2022 (DD/MM/YYYY) @ 09:42PM

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Hero from './components/hero.vue'
import footer from './components/footer.vue'
import placeholderHome from './components/placeholderHome.vue'
export default {
  components: {
    'Hero': Hero,
    'Footer': footer,
    'placeholderHome': placeholderHome
  }
}

</script>


<template>
  <Hero/>
  <placeholderHome/>
  <Footer/>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D9D9D9;
}

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%; 
  background-color: #0D0D0D;
}

</style>
