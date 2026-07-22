<template>
    <NavBar />
    <main class="container py-5">

        <article v-if="post" class="article">

            <div class="mb-3">

                <span class="badge bg-primary me-2">
                    {{ post.category }}
                </span>

                <span v-for="tag in post.tags" :key="tag" class="badge bg-secondary me-2">
                    {{ tag }}
                </span>

            </div>

            <h1 class="display-4 fw-bold">

                {{ post.title }}

            </h1>

            <div class="text-muted mb-4">

                👤 Wilson Acioli

                •

                📅 {{ post.date }}

                •

                🕒 {{ post.readTime }}

            </div>

            <div class="alert alert-light border">

                <strong>Resumo</strong>

                <p class="mb-0">

                    {{ post.description }}

                </p>

            </div>

            <!-- <div class="toc">

                <h5>

                    Índice

                </h5>

                <ol>

                    <li><a href="#oque">O que é HTMX?</a></li>

                    <li><a href="#como">Como funciona?</a></li>

                    <li><a href="#vantagens">Vantagens</a></li>

                    <li><a href="#comparacao">HTMX x Vue</a></li>

                    <li><a href="#conclusao">Conclusão</a></li>

                </ol>

            </div> -->

            <hr>

            <div class="article-content" v-html="post.content" />

            <hr>

            <section class="mt-5">

                <h3>

                    Continue lendo

                </h3>

                <div class="row">

                    <div v-for="related in relatedPosts" :key="related.slug" class="col-lg-4 mb-3">

                        <div class="card h-100">

                            <div class="card-body">

                                <h5>

                                    {{ related.title }}

                                </h5>

                                <p>

                                    {{ related.description }}

                                </p>

                                <router-link :to="'/blog/' + related.slug">

                                    Ler artigo →

                                </router-link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section class="mt-5 p-5 bg-dark text-white rounded">

                <h2>

                    Precisa desenvolver um sistema?

                </h2>

                <p>

                    Desenvolvo sistemas web,
                    dashboards,
                    integrações
                    e soluções com IA.

                </p>

                <a href="mailto:codewil.json@gmail.com" class="btn btn-light">

                    Solicitar orçamento

                </a>

            </section>

        </article>

    </main>
    <FooterSection />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import posts from '../blog/posts'
import FooterSection from '../components/FooterSection.vue'

export default {
  name: 'BlogPostView',
  components: {
    NavBar,
    FooterSection
  },

  computed: {
    post () {
      return posts.find(
        p => p.slug === this.$route.params.slug
      )
    },

    relatedPosts () {
      return posts
        .filter(
          p =>
            p.slug !== this.post.slug
        )
        .slice(0, 3)
    }
  }
}
</script>

<style scoped>
.article {

    max-width: 900px;

    margin: auto;

}

.article-content {

    line-height: 1.9;

    font-size: 1.15rem;

}

.article-content h2 {

    margin-top: 50px;

}

.toc {

    background: #f8f9fa;

    padding: 20px;

    border-radius: 10px;

    margin-bottom: 30px;

}

.article img {

    width: 100%;

    border-radius: 10px;

    margin: 30px 0;

}
</style>
