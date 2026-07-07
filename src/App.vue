<template>
  <NavBar />
  <HeroSection />
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&display=swap');

* {
  text-decoration: none !important;
}
</style>
