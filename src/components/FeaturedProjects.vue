<template>
  <section class="featured-projects" id="projects">
    <div class="container">
      <span class="subtitle">PORTFÓLIO</span>
      <h2>Projetos em Destaque</h2>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img
              :src="project.image"
              :alt="project.title"
            />
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3>{{ project.title }}</h3>

              <div class="actions">
                <a
                  :href="project.demo"
                  target="_blank"
                >
                  <i class="bi bi-box-arrow-up-right"></i>
                </a>

                <a
                  :href="project.github"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>
                </a>
              </div>
            </div>

            <p>
              {{ project.description }}
            </p>

            <div class="technologies">
              <span
                v-for="tech in project.techs"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'SaaS Financeiro',
    image: 'https://picsum.photos/600/350?1',
    description:
      'Plataforma de gestão financeira completa com integração bancária e IA para análise de gastos.',
    techs: ['Next.js', 'Tailwind', 'PostgreSQL'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'E-commerce App',
    image: 'https://picsum.photos/600/350?2',
    description:
      'Aplicativo mobile para delivery focado em experiência de usuário fluida.',
    techs: ['React Native', 'Node.js', 'Redis'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Monitoramento IoT',
    image: 'https://picsum.photos/600/350?3',
    description:
      'Painel de controle em tempo real para dispositivos industriais.',
    techs: ['Vue.js', 'FastAPI', 'MQTT'],
    demo: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Gestão de Conteúdo',
    image: 'https://picsum.photos/600/350?4',
    description:
      'CMS customizado para agências criativas.',
    techs: ['Laravel', 'Alpine.js'],
    demo: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Documentação API',
    image: 'https://picsum.photos/600/350?5',
    description:
      'Portal dinâmico para desenvolvedores.',
    techs: ['Docusaurus', 'React'],
    demo: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Plataforma TaskMaster',
    image: 'https://picsum.photos/600/350?6',
    description:
      'Gerenciador de tarefas corporativo.',
    techs: ['Angular', 'Firebase'],
    demo: '#',
    github: '#'
  }
]
</script>

<style lang="scss" scoped>
.featured-projects {
  padding: 100px 0;
  background: #fafafa;

  .container {
    width: min(1200px, 92%);
    margin: 0 auto;
  }

  .subtitle {
    display: block;
    text-align: center;
    font-size: 12px;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 12px;
  }

  h2 {
    text-align: center;
    font-size: 32px;
    letter-spacing: -0.64px;
    font-weight: 700;
    margin-bottom: 70px;
    color: #222;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 40px;
  }

  .project-card {
    display: flex;
    flex-direction: column;

    &:hover {
      .project-image img {
        transform: scale(1.05);
      }

      .actions a {
        opacity: 1;
      }
    }
  }

  .project-image {
    overflow: hidden;
    border-radius: 14px;
    margin-bottom: 20px;

    img {
      width: 100%;
      display: block;
      transition: all 0.4s ease;
    }
  }

  .project-content {
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 1.3rem;
        color: #222;
        font-weight: 600;
      }

      .actions {
        display: flex;
        gap: 12px;

        a {
          color: #777;
          font-size: 1.1rem;
          transition: 0.3s;

          &:hover {
            color: #000;
            transform: translateY(-2px);
          }
        }
      }
    }

    p {
      margin: 18px 0;
      line-height: 1.7;
      color: #666;
      font-size: 0.95rem;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      span {
        background: #efefef;
        color: #666;
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 6px;
      }
    }
  }
}

@media (max-width: 768px) {
  .featured-projects {
    padding: 70px 0;

    h2 {
      font-size: 2rem;
      margin-bottom: 50px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
}
</style>
