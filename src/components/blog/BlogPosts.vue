<template>
  <section id="posts" class="blog-posts container">
    <div v-if="posts.length" class="blog-posts__grid">
      <article v-for="post in posts" :key="post.slug" class="blog-posts__item">
        <a :href="'/blog/' + post.slug" class="blog-posts__link">
          <h2 class="blog-posts__title">{{ post.title }}</h2>
          <p v-if="post.description" class="blog-posts__excerpt">{{ post.description }}</p>
          <footer class="blog-posts__meta">
            <time v-if="post.date" :datetime="post.date">{{ post.date }}</time>
            <span v-if="post.tags && post.tags.length" class="blog-posts__tags">
              <span v-for="tag in post.tags" :key="tag" class="blog-posts__tag">{{ tag }}</span>
            </span>
          </footer>
        </a>
      </article>
    </div>

    <p v-else class="blog-posts__empty">Nenhum post encontrado.</p>
  </section>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.blog-posts {
  padding: 2rem 0;
}

.blog-posts__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.blog-posts__item {
  background: var(--surface, #fff);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-posts__link {
  display: block;
  padding: 1.4rem;
  color: inherit;
  text-decoration: none;
}

.blog-posts__item:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.blog-posts__title {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
}

.blog-posts__excerpt {
  margin: 0 0 1rem;
  color: var(--muted, #666);
  line-height: 1.6;
}

.blog-posts__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--muted, #777);
}

.blog-posts__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.blog-posts__tag {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.75rem;
  padding: 0.25rem 0.6rem;
}

.blog-posts__empty {
  text-align: center;
  color: var(--muted, #777);
}
</style>
