<template>
  <NavBar />

  <BlogHero />
  <BlogCategories
    :categories="categories"
    v-model="selectedCategory"
  />
  <BlogPosts :posts="filteredPosts" />
  <BlogNewsletter />

  <FooterSection />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

import BlogHero from '../components/blog/BlogHero.vue'
import BlogCategories from '../components/blog/BlogCategories.vue'
import BlogPosts from '../components/blog/BlogPosts.vue'
import BlogNewsletter from '../components/blog/BlogNewsletter.vue'
import posts from '../blog/posts'

export default {
  name: 'BlogView',

  components: {
    NavBar,
    BlogHero,
    BlogCategories,
    BlogPosts,
    BlogNewsletter,
    FooterSection
  },

  data () {
    return {
      posts,
      selectedCategory: ''
    }
  },

  computed: {
    categories () {
      const counts = {}
      this.posts.forEach(post => {
        const category = post.category || 'Sem categoria'
        counts[category] = (counts[category] || 0) + 1
      })
      return Object.keys(counts).map(name => ({ name, count: counts[name] }))
    },

    filteredPosts () {
      if (!this.selectedCategory) {
        return this.posts
      }
      return this.posts.filter(post => post.category === this.selectedCategory)
    }
  }
}
</script>
