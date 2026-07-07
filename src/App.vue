<template>
  <NavBar />
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ServicesSection />
  <ProcessTimeLine />
  <FeaturedProjects />
  <ContactSection />
  <FooterSection />
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessTimeLine from './components/ProcessTimeLine.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    SkillsSection,
    ServicesSection,
    ProcessTimeLine,
    FeaturedProjects,
    ContactSection,
    FooterSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&display=swap');

* {
  text-decoration: none !important;
}
</style>
