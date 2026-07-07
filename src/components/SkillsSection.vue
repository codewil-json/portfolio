<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <span class="subtitle">STACK TECNOLÓGICO</span>
        <h2>Especialidades & Ferramentas</h2>
      </div>

      <div class="skills-grid">
        <article
          v-for="stack in stacks"
          :key="stack.title"
          class="skill-card"
        >
          <div class="card-header">
            <i :class="['bi', stack.icon]"></i>
            <h3>{{ stack.title }}</h3>
          </div>

          <div class="tags">
            <span
              v-for="tech in stack.technologies"
              :key="tech"
              class="tag"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const stacks = [
  {
    title: 'Frontend',
    icon: 'bi-window',
    technologies: [
      'Vue.js',
      'React',
      'Next.js',
      'Angular',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Backend',
    icon: 'bi-hdd-network',
    technologies: [
      'Node.js',
      'Laravel',
      'Python',
      'FastAPI',
      'NestJS'
    ]
  },
  {
    title: 'Mobile & Database',
    icon: 'bi-phone',
    technologies: [
      'React Native',
      'Flutter',
      'PostgreSQL',
      'MongoDB',
      'Redis'
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: 'bi-tools',
    technologies: [
      'Git',
      'Docker',
      'AWS',
      'Linux',
      'Figma',
      'Vercel'
    ]
  }
]
</script>

<style scoped>
* {
  font-family: "Geist", sans-serif;
}

.skills {
  padding: 120px 0;
  background: #f8f9fb;
}

.container {
  width: min(1200px, 90%);
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.subtitle {
  display: block;
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9ca3af;
}

.section-header h2 {
  font-size: 32px;
  letter-spacing: -0.64px;
  font-weight: 700;
  color: #111827;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.skill-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 28px;
  transition: all .3s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, .08);
  border-color: #d1d5db;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.card-header i {
  font-size: 1.25rem;
  color: #111827;
}

.card-header h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 8px 14px;
  background: #f3f4f6;
  border-radius: 999px;
  font-size: .85rem;
  color: #4b5563;
  transition: all .25s ease;
  cursor: default;
}

.tag:hover {
  background: #111827;
  color: #fff;
}

@media (max-width: 768px) {
  .skills {
    padding: 80px 0;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .skill-card {
    padding: 24px;
  }
}
</style>
