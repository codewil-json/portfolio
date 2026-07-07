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
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProcessTimeLine from '../components/ProcessTimeLine.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

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
