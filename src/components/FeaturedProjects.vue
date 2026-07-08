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
import hub from '@/assets/hub.png'
import landing from '@/assets/landing.png'
import links from '@/assets/links.png'
import resultados from '@/assets/resultados.png'
import gaiaesena from '@/assets/gaiaesena.png'
import claude from '@/assets/claude.png'

const projects = [
  {
    id: 1,
    title: 'Hub Analítico Executivo (InvestLoto)',
    image: hub,
    description:
      'MVP que centraliza faturamento, ticket médio e dados transacionais em tempo real, transformando planilhas complexas em decisões ágeis.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Landing Page Institucional (codewil)',
    image: landing,
    description:
      'Página de alta conversão em dark mode focada em atrair empresas, destacando a transformação de processos manuais em automações inteligentes.',
    techs: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'n8n', 'Python'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Site para Escritório de Advocacia (Gaia & Sena)',
    image: gaiaesena,
    description:
      'Landing page corporativa voltada para autoridade jurídica e captação ativa de clientes, com integração direta para conversão no WhatsApp.',
    techs: ['WordPress', 'Elementor', 'SASS', 'JavaScript'],
    demo: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Agregador de Links (Linktree Customizado)',
    image: links,
    description:
      'Aplicação web leve de bio link desenvolvida com design system próprio para conectar redes sociais, GitHub, portfólio e contatos diretos.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Vite'],
    demo: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Portal de Resultados (Resultados da Mega-Sena)',
    image: resultados,
    description:
      'Portal dinâmico para desenvolvedores.',
    techs: ['Python', 'BeautifulSoup', 'React', 'Tailwind CSS', 'Express'],
    demo: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Landing Page para Curso Interativo de IA no Marketing Digital',
    image: claude,
    description:
      'Plataforma interativa no estilo slideshow para venda de curso, focada em experiência do usuário fluida e conversão de profissionais.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable', 'Framer Motion'],
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
