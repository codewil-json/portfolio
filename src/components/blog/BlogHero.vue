<template>
  <section class="blog-hero">
    <div class="container">

      <div class="row align-items-center">

        <div class="col-lg-8">

          <span class="hero-label">
            BLOG
          </span>

          <h1 class="hero-title">
            Compartilhando conhecimento sobre
            <span>Desenvolvimento de Software</span>
          </h1>

          <p class="hero-description">
            Artigos sobre Vue.js, JavaScript, Python, Laravel, SEO,
            Inteligência Artificial, arquitetura de software, performance
            e boas práticas para criar aplicações modernas.
          </p>

          <div class="hero-actions">

            <router-link
              to="/#contact"
              class="btn btn-dark btn-lg"
            >
              Desenvolva seu projeto
            </router-link>

            <a
              href="#posts"
              class="btn btn-outline-dark btn-lg"
            >
              Explorar artigos
            </a>

          </div>

        </div>

        <div class="col-lg-4">

          <div class="hero-card">

            <h5>
              📚 O que você encontra aqui
            </h5>

            <ul>

              <li>Vue.js</li>

              <li>JavaScript</li>

              <li>Python</li>

              <li>Laravel</li>

              <li>SEO</li>

              <li>Integrações</li>

              <li>APIs</li>

              <li>Inteligência Artificial</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogHero'
}
</script>

<style scoped>

.blog-hero {
  padding: 140px 0 90px;
  background: #f8f9fc;
}

.hero-label {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #6c757d;
}

.hero-title {
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1.15;
  color: #111827;
  margin-bottom: 30px;
}

.hero-title span {
  color: #6b7280;
}

.hero-description {
  max-width: 700px;
  font-size: 1.2rem;
  line-height: 1.9;
  color: #6b7280;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.hero-card {
  padding: 35px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, .08);
}

.hero-card h5 {
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-card ul {
  padding-left: 20px;
  margin: 0;
}

.hero-card li {
  margin-bottom: 12px;
  color: #495057;
}

@media (max-width: 992px) {

  .blog-hero {
    padding: 110px 0 70px;
    text-align: center;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
    margin-bottom: 40px;
  }

}

@media (max-width: 576px) {

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

}

</style>
