<template>
  <aside class="blog-newsletter container mb-5">
    <div class="newsletter-header">
      <h3 class="title">Newsletter</h3>
      <p>Receba novos artigos, lançamentos e dicas diretamente no seu e-mail.</p>
    </div>

    <form class="newsletter-form" @submit.prevent="subscribe">
      <input
        id="newsletter-email"
        type="email"
        v-model="email"
        placeholder="Digite seu e-mail"
        required
      />
      <button type="submit">Assinar</button>
    </form>

    <p class="newsletter-note">Sem spam. Newsletter mensal com conteúdo relevante.</p>
    <p v-if="status" class="newsletter-status bold">{{ status }}</p>
  </aside>
</template>

<script>
export default {
  name: 'BlogNewsletter',
  data () {
    return {
      email: '',
      status: ''
    }
  },
  methods: {
    async subscribe () {
      if (!this.email) {
        this.status = 'Por favor, informe um e-mail válido.'
        return
      }

      try {
        const response = await fetch('http://localhost:3000/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email })
        })

        const result = await response.json()

        if (!result.success) {
          this.status = result.message || 'Erro ao enviar. Tente novamente.'
          return
        }

        this.status = 'Obrigado! Você está inscrito para novidades.'
        this.email = ''
      } catch (error) {
        this.status = 'Erro ao conectar com o servidor. Tente novamente.'
      }
    }
  }
}
</script>

<style scoped>
.blog-newsletter {
  padding: 1.5rem;
  background: var(--surface, #fff);
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 1rem;
}

.newsletter-header {
  margin-bottom: 1rem;
}

.blog-newsletter .title {
  margin: 0 0 0.5rem 0;
  font-size: 1.15rem;
}

.blog-newsletter p {
  margin: 0;
  color: var(--muted, #666);
  line-height: 1.6;
}

.newsletter-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  margin: 1rem 0 0.5rem;
}

.newsletter-form input {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  color: #111827;
}

.newsletter-form button {
  padding: 0.9rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background: #111827;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
}

.newsletter-form button:hover {
  background: #333;
}

.newsletter-note {
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
}

.newsletter-status {
  margin-top: 0.75rem;
  font-size: 0.95rem;
  color: #1f8a70;
}
.bold {
    font-weight: 600;
}
</style>
