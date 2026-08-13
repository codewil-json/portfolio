<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-info">
        <h2>
          Vamos construir algo
          <br />
          incrível?
        </h2>

        <p>
          Estou disponível para novos projetos, consultorias ou apenas um
          café virtual para discutirmos tecnologia.
        </p>

        <div class="info-list">
          <div class="info-item">
            <div class="icon">
              <i class="bi bi-envelope"></i>
            </div>

            <div>
              <small>E-mail</small>
              <span>acioliwilson@icloud.com</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <i class="bi bi-telephone"></i>
            </div>

            <div>
              <small>WhatsApp</small>
              <span>+55 (82) 99601-2515</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <i class="bi bi-geo-alt"></i>
            </div>

            <div>
              <small>Localização</small>
              <span>Maceió, AL - Brasil</span>
            </div>
          </div>
        </div>

        <div class="socials">
          <a href="https://www.linkedin.com/in/wilsonacioli/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>

          <a href="https://github.com/acioliwilson" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>

      <div class="contact-form">
        <form @submit.prevent="sendEmail">
          <div class="field">
            <label for="name">Nome Completo</label>
            <input id="name" v-model="form.name" type="text" placeholder="Seu nome" required />
          </div>

          <div class="field">
            <label for="email">E-mail Corporativo</label>
            <input id="email" v-model="form.email" type="email" placeholder="seu@email.com" required />
          </div>

          <div class="field">
            <label for="message">Sua Mensagem</label>
            <textarea id="message" v-model="form.message" rows="5" placeholder="Como posso te ajudar?"
              required></textarea>
          </div>

          <button type="submit" :disabled="sending">
            {{ sending ? 'Enviando...' : 'Enviar Mensagem' }}
          </button>

          <p v-if="successMessage" class="form-message success">
            {{ successMessage }}
          </p>

          <p v-if="errorMessage" class="form-message error">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },

      sending: false,
      successMessage: '',
      errorMessage: ''
    }
  },

  methods: {
    async sendEmail () {
      this.sending = true
      this.successMessage = ''
      this.errorMessage = ''

      try {
        await emailjs.send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          {
            from_name: this.form.name,
            from_email: this.form.email,
            message: this.form.message
          },
          {
            publicKey: process.env.VUE_APP_PUBLIC_KEY
          }
        )

        this.successMessage = 'Mensagem enviada com sucesso! Obrigado pelo contato.'

        this.form = {
          name: '',
          email: '',
          message: ''
        }
      } catch (error) {
        console.error('ERRO EMAILJS:', error)
        console.error('STATUS:', error.status)
        console.error('MENSAGEM:', error.text)

        this.errorMessage = `Erro: ${error.text || 'Falha ao enviar mensagem'}`
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 120px 0;
  background: #f7f7f7;

  .container {
    width: min(1200px, 92%);
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
  }

  .contact-info {
    h2 {
      font-size: 32px;
      letter-spacing: -0.64px;
      line-height: 1.1;
      font-weight: 700;
      color: #1f1f1f;
      font-weight: 700;
      margin-bottom: 30px;
    }

    p {
      color: #666;
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 50px;
      max-width: 500px;
    }
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 18px;

    .icon {
      width: 48px;
      height: 48px;
      border: 1px solid #e3e3e3;
      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #fff;

      i {
        font-size: 18px;
        color: #111;
      }
    }

    small {
      display: block;
      color: #999;
      font-size: 13px;
      margin-bottom: 6px;
    }

    span {
      font-size: 17px;
      font-weight: 600;
      color: #222;
    }
  }

  .socials {
    display: flex;
    gap: 12px;

    a {
      width: 42px;
      height: 42px;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      background: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #111;
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        background: #111;
        color: #fff;
      }
    }
  }

  .contact-form {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 18px;
    padding: 35px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);

    form {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .field {
      display: flex;
      flex-direction: column;

      label {
        font-size: 13px;
        color: #777;
        margin-bottom: 10px;
      }

      input,
      textarea {
        border: 1px solid #e6e6e6;
        background: #fafafa;
        border-radius: 10px;
        padding: 15px 18px;
        font-size: 15px;
        outline: none;
        transition: 0.3s;

        &:focus {
          border-color: #111;
          background: #fff;
        }
      }

      textarea {
        resize: none;
      }
    }

    button {
      height: 54px;
      border: none;
      border-radius: 10px;
      background: #000;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        opacity: 0.9;
      }
    }
  }
}

@media (max-width: 992px) {
  .contact {
    .container {
      grid-template-columns: 1fr;
      gap: 70px;
    }

    .contact-info {
      h2 {
        font-size: 3rem;
      }
    }
  }
}

@media (max-width: 576px) {
  .contact {
    padding: 80px 0;

    .contact-info {
      h2 {
        font-size: 2.4rem;
      }
    }

    .contact-form {
      padding: 25px;
    }
  }
}

.form-message.success {
  color: #28a745;
  font-size: 14px;
  margin-top: 10px;
}
.form-message.error {
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
}
</style>
