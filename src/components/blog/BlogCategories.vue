<template>
  <aside class="blog-categories container mt-4">
    <h3 class="title">Categorias</h3>
    <ul class="categories-list">
      <li
        v-for="cat in categories"
        :key="cat.id || cat.name"
        :class="{ active: cat.name === selected }
        "
      >
        <button @click="select(cat.name)">{{ cat.name }} <span v-if="cat.count">({{ cat.count }})</span></button>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'BlogCategories',
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'select'],
  computed: {
    selected () {
      return this.modelValue
    }
  },
  methods: {
    select (name) {
      this.$emit('update:modelValue', name)
      this.$emit('select', name)
    }
  }
}
</script>

<style scoped>
.blog-categories {
  padding: 1rem;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 6px;
}
.blog-categories .title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}
.blog-categories ul { list-style: none; padding: 0; margin: 0; }
.blog-categories li { margin: 0.25rem 0; }
.blog-categories button {
  background: none; border: none; padding: 0; color: var(--text-color, #111827); cursor: pointer;
}
.blog-categories li.active button { font-weight: 600; }
.categories-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.categories-list li { margin: 0; border-radius: 6px; background: var(--surface, #f8f9fa); padding: 0.25rem 0.5rem; }
@media (max-width: 600px) {
  .blog-categories { padding: 0.5rem; }
}
</style>
