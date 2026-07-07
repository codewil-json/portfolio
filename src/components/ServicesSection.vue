<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <span class="subtitle">O QUE FAÇO</span>
        <h2>Soluções digitais completas de ponta a ponta.</h2>
      </div>

      <div class="services-grid">
        <article
          v-for="service in services"
          :key="service.title"
          class="service-card"
        >
          <div class="icon">
            <i :class="['bi', service.icon]"></i>
          </div>

          <h3>{{ service.title }}</h3>

          <p>
            {{ service.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Web Development',
    icon: 'bi-laptop',
    description:
      'Sites, sistemas web e aplicações responsivas desenvolvidas com foco em performance, SEO e experiência do usuário.'
  },
  {
    title: 'Mobile Development',
    icon: 'bi-phone',
    description:
      'Aplicativos Android e iOS utilizando tecnologias modernas para entregar velocidade, estabilidade e ótima usabilidade.'
  },
  {
    title: 'Sistemas Customizados',
    icon: 'bi-gear',
    description:
      'Desenvolvimento de softwares sob medida para automatizar processos internos, reduzir custos e aumentar a produtividade.'
  },
  {
    title: 'APIs & Integrações',
    icon: 'bi-diagram-3',
    description:
      'Criação de APIs RESTful, GraphQL e integração entre sistemas, ERPs, CRMs e serviços de terceiros.'
  },
  {
    title: 'BI & Dashboards',
    icon: 'bi-grid',
    description:
      'Dashboards estratégicos e indicadores para acompanhamento de métricas, análises e tomada de decisão baseada em dados.'
  },
  {
    title: 'Consultoria Técnica',
    icon: 'bi-headset',
    description:
      'Consultoria em arquitetura, revisão de código, modernização de sistemas e definição das melhores práticas de desenvolvimento.'
  }
]
</script>

<style scoped>
* {
  font-family: 'Geist', sans-serif;
}

.services {
  padding: 120px 0;
  background: #ffffff;
}

.container {
  width: min(1200px, 90%);
  margin: 0 auto;
}

.section-header {
  max-width: 620px;
  margin-bottom: 64px;
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
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.64px;
  color: #111827;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 24px;
}

.service-card {
  padding: 32px;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  background: #fff;
  transition: all .3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(0,0,0,.08);
  border-color: #d1d5db;
}

.icon {
  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  border-radius: 12px;
  background: #f3f4f6;
}

.icon i {
  font-size: 20px;
  color: #111827;
}

.service-card h3 {
  margin-bottom: 16px;
  font-size: 1.45rem;
  font-weight: 600;
  color: #111827;
}

.service-card p {
  line-height: 1.8;
  font-size: .95rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .services {
    padding: 80px 0;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 28px;
  }
}
</style>
