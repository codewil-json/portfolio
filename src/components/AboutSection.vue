<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about__left">
        <span class="about__subtitle">SOBRE MIM</span>

        <h2 class="about__title">
          Paixão por Engenharia<br />
          de Software.
        </h2>
      </div>

      <div class="about__right">
        <p>
          Sou um desenvolvedor apaixonado por criar soluções tecnológicas que
          resolvem problemas complexos. Com foco no desenvolvimento Web e
          Mobile, atuo na construção de APIs robustas, sistemas corporativos de
          alta disponibilidade e arquiteturas SaaS escaláveis.
        </p>

        <p>
          Acredito que a tecnologia deve ser invisível e eficiente. Minha
          abordagem combina as melhores práticas de Clean Code com as
          ferramentas mais modernas do ecossistema JavaScript e Python,
          garantindo que cada integração seja fluida e cada interface,
          intuitiva.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sem necessidade de lógica
</script>

<style scoped>
.about {
  padding: 120px 0;
  background: #fff;
}

.container {
  width: min(1200px, 90%);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  align-items: flex-start;
}

.about__subtitle {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: #9ca3af;
  margin-bottom: 18px;
}

.about__title {
  font-size: 32px;
  font-family: 'Geist', sans-serif;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.64px;
  color: #111827;
}

.about__right p {
  color: #6b7280;
  font-size: 1.125rem;
  line-height: 1.9;
  margin-bottom: 2rem;
}

.about__right p:last-child {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about {
    padding: 80px 0;
  }

  .about__title {
    font-size: 2.3rem;
  }

  .about__right p {
    font-size: 1rem;
  }
}
</style>
