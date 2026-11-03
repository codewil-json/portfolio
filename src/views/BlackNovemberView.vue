<template>
  <main class="black-november">
    <div class="glow glow-purple"></div>
    <div class="glow glow-emerald"></div>

    <div class="page-content">
      <header class="campaign-header">
        <div class="campaign-badge">
          <span class="campaign-dot"></span>
          <span class="campaign-name">BLACK NOVEMBER</span>
          <span class="badge-divider">|</span>
          <span class="campaign-discount">20% OFF EM TODAS AS SOLUÇÕES</span>
        </div>

        <h1>
          Transforme seus processos &
          <span class="gradient-text">alavanque seu negócio</span>
        </h1>
        <p class="campaign-description">
          Conte um pouco sobre o seu projeto e receba uma proposta com
          <strong>20% de desconto</strong> em automações, IA, sistemas web e integrações.
        </p>
      </header>

      <section class="form-card" aria-labelledby="form-title">
        <div class="accent-line"></div>

        <div class="coupon">
          <div class="coupon-icon"><i class="bi bi-ticket-perforated"></i></div>
          <div>
            <p class="coupon-caption">Cupom de desconto especial</p>
            <div class="coupon-code">
              <span>BLACK20</span>
              <span class="coupon-tag">20% OFF</span>
            </div>
          </div>
          <span class="coupon-guarantee"><i class="bi bi-check-circle-fill"></i> Aplicado</span>
        </div>

        <h2 id="form-title" class="visually-hidden">Solicite sua proposta Black November</h2>

        <form @submit.prevent="sendLead">
          <fieldset class="form-section">
            <legend><span class="section-number purple">1</span> Informações de contato</legend>
            <div class="form-grid">
              <div class="field">
                <label for="lead-name">Nome completo <span aria-hidden="true">*</span></label>
                <input
                  id="lead-name"
                  v-model.trim="form.name"
                  type="text"
                  autocomplete="name"
                  placeholder="Ex.: Carlos Oliveira"
                  required
                />
              </div>

              <div class="field">
                <label for="lead-email">E-mail <span aria-hidden="true">*</span></label>
                <input
                  id="lead-email"
                  v-model.trim="form.email"
                  type="email"
                  autocomplete="email"
                  placeholder="carlos@empresa.com.br"
                  required
                />
              </div>

              <div class="field full-width">
                <label for="lead-whatsapp">WhatsApp com DDD <span aria-hidden="true">*</span></label>
                <input
                  id="lead-whatsapp"
                  :value="form.whatsapp"
                  type="tel"
                  autocomplete="tel"
                  inputmode="tel"
                  maxlength="15"
                  placeholder="(82) 99999-9999"
                  required
                  @input="formatWhatsApp"
                />
                <small>Usaremos este número para retornar com a proposta.</small>
              </div>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend><span class="section-number purple">2</span> Sobre o seu negócio</legend>
            <div class="form-grid">
              <div class="field">
                <label for="lead-company">Empresa ou projeto <span aria-hidden="true">*</span></label>
                <input
                  id="lead-company"
                  v-model.trim="form.company"
                  type="text"
                  autocomplete="organization"
                  placeholder="Ex.: Tech Solutions"
                  required
                />
              </div>

              <div class="field">
                <label for="lead-role">Cargo ou atuação <span class="optional">(opcional)</span></label>
                <input
                  id="lead-role"
                  v-model.trim="form.role"
                  type="text"
                  autocomplete="organization-title"
                  placeholder="Ex.: Diretoria de Operações"
                />
              </div>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend><span class="section-number green">3</span> Soluções de interesse</legend>
            <p class="section-hint">Selecione uma ou mais opções.</p>
            <div class="solutions-grid">
              <label
                v-for="solution in solutions"
                :key="solution.value"
                class="solution-card"
                :class="{ selected: form.solutions.includes(solution.value) }"
              >
                <input
                  v-model="form.solutions"
                  type="checkbox"
                  :value="solution.value"
                />
                <span class="solution-icon"><i :class="['bi', solution.icon]"></i></span>
                <span class="solution-copy">
                  <strong>{{ solution.title }}</strong>
                  <small>{{ solution.description }}</small>
                </span>
                <i class="bi bi-check-circle-fill solution-check" aria-hidden="true"></i>
              </label>
            </div>
            <p v-if="validationError" class="validation-message" role="alert">{{ validationError }}</p>
          </fieldset>

          <fieldset class="form-section">
            <legend><span class="section-number purple">4</span> Seu projeto ou desafio</legend>
            <label class="field" for="lead-description">
              <span class="visually-hidden">Descreva seu projeto ou desafio atual</span>
              <textarea
                id="lead-description"
                v-model.trim="form.description"
                rows="4"
                placeholder="Conte brevemente sobre o que gostaria de construir ou sobre os gargalos que deseja resolver."
              ></textarea>
            </label>
          </fieldset>

          <fieldset class="form-section">
            <legend><span class="section-number green">5</span> Previsão de início</legend>
            <div class="urgency-grid">
              <label
                v-for="option in urgencyOptions"
                :key="option.value"
                class="urgency-card"
                :class="{ selected: form.urgency === option.value }"
              >
                <input v-model="form.urgency" type="radio" name="urgency" :value="option.value" />
                <span class="radio-indicator"></span>
                <span>
                  <strong>{{ option.title }}</strong>
                  <small>{{ option.description }}</small>
                </span>
              </label>
            </div>
          </fieldset>

          <div class="submit-section">
            <button type="submit" :disabled="sending">
              <span>{{ sending ? 'Enviando seus dados...' : 'Garantir meus 20% OFF' }}</span>
              <i v-if="!sending" class="bi bi-rocket-takeoff"></i>
              <span v-else class="spinner" aria-hidden="true"></span>
            </button>
            <p class="privacy-note">
              <i class="bi bi-shield-check"></i>
              Seus dados serão usados somente para entrarmos em contato sobre sua proposta.
            </p>
            <p v-if="errorMessage" class="form-feedback error" role="alert">{{ errorMessage }}</p>
          </div>
        </form>
      </section>

      <footer class="page-footer">
        &copy; {{ currentYear }} CodeWil · Soluções Digitais & Inteligência Artificial
      </footer>
    </div>

    <div
      v-if="showSuccess"
      class="modal-backdrop"
      role="presentation"
      @click.self="showSuccess = false"
      @keydown.esc="showSuccess = false"
    >
      <section
        class="success-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
      >
        <div class="success-icon"><i class="bi bi-check-lg"></i></div>
        <h2 id="success-title">Pedido enviado com sucesso!</h2>
        <p>
          Obrigado, {{ submittedLead.name }}. Recebemos seu interesse pelo cupom
          <strong>BLACK20</strong> e entraremos em contato.
        </p>

        <div class="lead-summary">
          <div><span>Empresa</span><strong>{{ submittedLead.company }}</strong></div>
          <div><span>Cupom</span><strong>BLACK20 · 20% OFF</strong></div>
        </div>

        <a
          class="whatsapp-button"
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-whatsapp"></i>
          Continuar no WhatsApp
        </a>
        <button class="close-button" type="button" @click="showSuccess = false">Fechar</button>
      </section>
    </div>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser'

const WHATSAPP_NUMBER = '5582996012515'

export default {
  name: 'BlackNovemberView',
  data () {
    return {
      form: {
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        role: '',
        solutions: ['Agentes de IA e assistentes inteligentes'],
        description: '',
        urgency: 'Urgente - Início imediato'
      },
      solutions: [
        {
          value: 'Agentes de IA e assistentes inteligentes',
          title: 'Agentes de IA',
          description: 'Assistentes para WhatsApp, atendimento e vendas',
          icon: 'bi-robot'
        },
        {
          value: 'Automação de processos (RPA/n8n)',
          title: 'Automação de processos',
          description: 'Workflows, RPA e tarefas repetitivas',
          icon: 'bi-gear-wide-connected'
        },
        {
          value: 'Desenvolvimento de software e sistemas web',
          title: 'Sistemas web & SaaS',
          description: 'Plataformas personalizadas sob medida',
          icon: 'bi-code-slash'
        },
        {
          value: 'Sites estratégicos e páginas de conversão',
          title: 'Sites & páginas de conversão',
          description: 'Páginas estratégicas focadas em resultados',
          icon: 'bi-window'
        },
        {
          value: 'Integrações de ferramentas e APIs',
          title: 'Integrações de APIs',
          description: 'Conexão entre CRMs, ERPs e ferramentas',
          icon: 'bi-plug'
        },
        {
          value: 'Consultoria estratégica em IA e TI',
          title: 'Consultoria em IA & TI',
          description: 'Diagnóstico técnico e arquitetura de soluções',
          icon: 'bi-lightbulb'
        }
      ],
      urgencyOptions: [
        {
          value: 'Urgente - Início imediato',
          title: 'Imediato / este mês',
          description: 'Prioridade alta'
        },
        {
          value: 'Próximos 30-60 dias',
          title: 'Próximos 30–60 dias',
          description: 'Planejamento em curso'
        },
        {
          value: 'Apenas cotando / orçamento',
          title: 'Apenas cotando',
          description: 'Levantamento prévio'
        }
      ],
      sending: false,
      showSuccess: false,
      errorMessage: '',
      validationError: '',
      whatsappUrl: '',
      submittedLead: {
        name: '',
        company: ''
      }
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  methods: {
    formatWhatsApp (event) {
      const digits = event.target.value.replace(/\D/g, '').slice(0, 11)
      let formatted = digits

      if (digits.length > 2 && digits.length <= 6) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`
      } else if (digits.length > 6 && digits.length <= 10) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
      } else if (digits.length > 10) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
      } else if (digits.length > 0) {
        formatted = `(${digits}`
      }

      this.form.whatsapp = formatted
    },
    async sendLead () {
      this.errorMessage = ''
      this.validationError = ''

      if (this.form.solutions.length === 0) {
        this.validationError = 'Selecione pelo menos uma solução de interesse.'
        return
      }

      const phoneDigits = this.form.whatsapp.replace(/\D/g, '')
      if (phoneDigits.length !== 10 && phoneDigits.length !== 11) {
        this.errorMessage = 'Informe um WhatsApp válido com DDD.'
        return
      }

      const serviceId = process.env.VUE_APP_SERVICE_ID
      const templateId = process.env.VUE_APP_TEMPLATE_ID
      const publicKey = process.env.VUE_APP_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        this.errorMessage = 'O envio de mensagens está temporariamente indisponível. Tente novamente mais tarde.'
        return
      }

      this.sending = true

      const leadMessage = [
        'Novo lead — campanha Black November (cupom BLACK20 / 20% OFF)',
        '',
        `Nome: ${this.form.name}`,
        `E-mail: ${this.form.email}`,
        `WhatsApp: ${this.form.whatsapp}`,
        `Empresa/projeto: ${this.form.company}`,
        `Cargo/atuação: ${this.form.role || 'Não informado'}`,
        `Soluções de interesse: ${this.form.solutions.join(', ')}`,
        `Previsão de início: ${this.form.urgency}`,
        `Descrição do projeto: ${this.form.description || 'Não informado'}`
      ].join('\n')

      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: this.form.name,
            from_email: this.form.email,
            message: leadMessage
          },
          { publicKey }
        )

        this.submittedLead = {
          name: this.form.name,
          company: this.form.company
        }

        const whatsappMessage = [
          `Olá! Meu nome é ${this.form.name}, da empresa/projeto ${this.form.company}.`,
          '',
          'Acabei de enviar o formulário da campanha Black November (20% OFF).',
          `Soluções de interesse: ${this.form.solutions.join(', ')}.`,
          `Previsão de início: ${this.form.urgency}.`,
          'Cupom: BLACK20.'
        ].join('\n')

        this.whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
        this.showSuccess = true
        this.form = {
          name: '',
          email: '',
          whatsapp: '',
          company: '',
          role: '',
          solutions: ['Agentes de IA e assistentes inteligentes'],
          description: '',
          urgency: 'Urgente - Início imediato'
        }
      } catch (error) {
        this.errorMessage = 'Não foi possível enviar seus dados agora. Confira sua conexão e tente novamente.'
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.black-november {
  --page-bg: #05070c;
  --card-bg: rgba(15, 23, 42, 0.82);
  --input-bg: rgba(8, 14, 27, 0.9);
  --border: #293448;
  --muted: #9aa5b7;
  position: relative;
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 48px 20px 24px;
  color: #f8fafc;
  background: var(--page-bg);
  font-family: 'Geist', sans-serif;
  scrollbar-color: var(--page-bg) var(--page-bg);
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--page-bg);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--page-bg);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #111827;
  }

  .glow {
    position: absolute;
    z-index: 0;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(1px);
  }

  .glow-purple {
    top: -220px;
    left: calc(50% - 260px);
    background: radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%);
  }

  .glow-emerald {
    right: -320px;
    bottom: 8%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.14), transparent 70%);
  }

  .page-content {
    position: relative;
    z-index: 1;
    width: min(840px, 100%);
    margin: auto;
  }

  .campaign-header {
    margin: 0 auto 30px;
    text-align: center;

    h1 {
      max-width: 760px;
      margin: 0 auto 14px;
      color: #fff;
      font-size: clamp(2rem, 5vw, 3.25rem);
      font-weight: 800;
      letter-spacing: -0.055em;
      line-height: 1.12;
      text-wrap: balance;
    }
  }

  .campaign-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 9px 15px;
    border: 1px solid rgba(139, 92, 246, 0.32);
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(88, 28, 135, 0.38), rgba(15, 23, 42, 0.8), rgba(6, 78, 59, 0.38));
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.045em;
  }

  .campaign-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 12px rgba(52, 211, 153, 0.75);
  }

  .campaign-name {
    color: #fbbf24;
  }

  .badge-divider {
    color: #64748b;
  }

  .campaign-discount {
    color: #6ee7b7;
  }

  .gradient-text {
    display: block;
    color: #6ee7b7;
    background: linear-gradient(120deg, #fff 12%, #a7f3d0 64%, #10b981);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .campaign-description {
    max-width: 650px;
    margin: 0 auto;
    color: #b6c0cf;
    font-size: 0.98rem;
    line-height: 1.7;

    strong {
      color: #34d399;
    }
  }

  .form-card {
    position: relative;
    overflow: hidden;
    padding: clamp(22px, 5vw, 42px);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 26px;
    background: var(--card-bg);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
    backdrop-filter: blur(16px);
  }

  .accent-line {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6, #34d399, #fbbf24);
  }

  .coupon {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid rgba(16, 185, 129, 0.34);
    border-radius: 16px;
    background: rgba(6, 78, 59, 0.25);
  }

  .coupon-icon {
    display: grid;
    width: 42px;
    height: 42px;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 12px;
    color: #6ee7b7;
    background: rgba(16, 185, 129, 0.16);
    font-size: 1.25rem;
  }

  .coupon-caption {
    margin: 0 0 4px;
    color: #6ee7b7;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .coupon-code {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 800;
  }

  .coupon-tag {
    padding: 3px 7px;
    border-radius: 99px;
    color: #052e25;
    background: #34d399;
    font-size: 0.62rem;
  }

  .coupon-guarantee {
    margin-left: auto;
    color: #6ee7b7;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .form-section {
    min-width: 0;
    margin: 0;
    padding: 0 0 26px;
    border: 0;

    & + .form-section {
      padding-top: 24px;
      border-top: 1px solid rgba(148, 163, 184, 0.14);
    }

    legend {
      display: flex;
      float: none;
      width: 100%;
      align-items: center;
      gap: 10px;
      margin: 0 0 17px;
      color: #f8fafc;
      font-size: 1rem;
      font-weight: 700;
    }
  }

  .section-number {
    display: inline-grid;
    width: 27px;
    height: 27px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid currentColor;
    border-radius: 9px;
    font-size: 0.72rem;

    &.purple {
      color: #c4b5fd;
      background: rgba(139, 92, 246, 0.14);
    }

    &.green {
      color: #6ee7b7;
      background: rgba(16, 185, 129, 0.14);
    }
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 17px 20px;
  }

  .field {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 7px;

    label,
    > span:not(.visually-hidden) {
      color: #d3dae5;
      font-size: 0.78rem;
      font-weight: 600;
    }

    label span:not(.optional) {
      color: #6ee7b7;
    }

    .optional,
    small {
      color: var(--muted);
      font-size: 0.72rem;
      font-weight: 400;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid rgba(100, 116, 139, 0.46);
      border-radius: 11px;
      outline: none;
      color: #f8fafc;
      background: var(--input-bg);
      font: inherit;
      font-size: 0.86rem;
      transition: border-color 0.18s ease, box-shadow 0.18s ease;

      &::placeholder {
        color: #687487;
      }

      &:focus {
        border-color: #a78bfa;
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.16);
      }
    }

    input {
      height: 46px;
      padding: 0 14px;
    }

    textarea {
      min-height: 120px;
      padding: 13px 14px;
      resize: vertical;
    }
  }

  .full-width {
    grid-column: 1 / -1;
  }

  .section-hint {
    margin: -9px 0 13px;
    color: var(--muted);
    font-size: 0.76rem;
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 11px;
  }

  .solution-card {
    position: relative;
    display: flex;
    min-height: 78px;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid rgba(100, 116, 139, 0.32);
    border-radius: 15px;
    cursor: pointer;
    background: rgba(8, 14, 27, 0.46);
    transition: border-color 0.18s ease, background 0.18s ease;

    &:hover {
      border-color: rgba(148, 163, 184, 0.6);
    }

    &.selected {
      border-color: rgba(52, 211, 153, 0.72);
      background: rgba(16, 185, 129, 0.09);
    }

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
    }

    input:focus-visible + .solution-icon {
      outline: 2px solid #a78bfa;
      outline-offset: 3px;
    }
  }

  .solution-icon {
    display: grid;
    width: 40px;
    height: 40px;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 11px;
    color: #c4b5fd;
    background: #1e293b;
    font-size: 1.1rem;
  }

  .solution-copy {
    display: flex;
    min-width: 0;
    flex: 1;
    flex-direction: column;
    gap: 4px;

    strong {
      color: #f8fafc;
      font-size: 0.8rem;
    }

    small {
      color: var(--muted);
      font-size: 0.69rem;
      line-height: 1.4;
    }
  }

  .solution-check {
    color: #34d399;
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .selected .solution-check {
    opacity: 1;
    transform: scale(1);
  }

  .validation-message,
  .form-feedback {
    margin: 11px 0 0;
    color: #fca5a5;
    font-size: 0.82rem;
  }

  .urgency-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .urgency-card {
    display: flex;
    min-height: 72px;
    align-items: center;
    gap: 10px;
    padding: 11px;
    border: 1px solid rgba(100, 116, 139, 0.32);
    border-radius: 13px;
    cursor: pointer;
    background: rgba(8, 14, 27, 0.46);

    &.selected {
      border-color: rgba(167, 139, 250, 0.72);
      background: rgba(139, 92, 246, 0.1);
    }

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
    }

    input:focus-visible + .radio-indicator {
      outline: 2px solid #a78bfa;
      outline-offset: 3px;
    }

    strong,
    small {
      display: block;
    }

    strong {
      color: #f8fafc;
      font-size: 0.72rem;
      line-height: 1.4;
    }

    small {
      margin-top: 3px;
      color: var(--muted);
      font-size: 0.65rem;
    }
  }

  .radio-indicator {
    display: grid;
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid #64748b;
    border-radius: 50%;

    &::after {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #a78bfa;
      content: '';
      opacity: 0;
    }

  }

  .urgency-card.selected .radio-indicator {
    border-color: #a78bfa;
  }

  .urgency-card.selected .radio-indicator::after {
    opacity: 1;
  }

  .submit-section {
    padding-top: 2px;

    button {
      display: flex;
      width: 100%;
      min-height: 58px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 0;
      border-radius: 15px;
      color: #fff;
      background: linear-gradient(100deg, #10b981, #0d9488 52%, #7c3aed);
      box-shadow: 0 12px 30px rgba(16, 185, 129, 0.16);
      cursor: pointer;
      font: inherit;
      font-size: 0.98rem;
      font-weight: 800;
      transition: filter 0.18s ease, transform 0.18s ease;

      &:hover:not(:disabled) {
        filter: brightness(1.08);
        transform: translateY(-1px);
      }

      &:disabled {
        cursor: wait;
        opacity: 0.72;
      }
    }
  }

  .privacy-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin: 13px 0 0;
    color: var(--muted);
    font-size: 0.72rem;
    line-height: 1.5;
    text-align: center;

    i {
      color: #34d399;
      font-size: 0.95rem;
    }
  }

  .spinner {
    width: 17px;
    height: 17px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  .page-footer {
    padding: 22px 8px 0;
    color: #778194;
    font-size: 0.72rem;
    text-align: center;
  }

  .modal-backdrop {
    position: fixed;
    z-index: 10;
    inset: 0;
    display: grid;
    overflow-y: auto;
    place-items: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.82);
    backdrop-filter: blur(10px);
  }

  .success-modal {
    width: min(470px, 100%);
    padding: 32px;
    border: 1px solid rgba(52, 211, 153, 0.35);
    border-radius: 24px;
    background: #0f172a;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
    text-align: center;

    h2 {
      margin: 0 0 10px;
      color: #fff;
      font-size: 1.55rem;
      font-weight: 800;
    }

    > p {
      margin: 0 0 21px;
      color: #b6c0cf;
      font-size: 0.88rem;
      line-height: 1.6;
    }

    > p strong {
      color: #6ee7b7;
    }
  }

  .success-icon {
    display: grid;
    width: 66px;
    height: 66px;
    margin: 0 auto 18px;
    place-items: center;
    border: 1px solid rgba(52, 211, 153, 0.4);
    border-radius: 50%;
    color: #34d399;
    background: rgba(16, 185, 129, 0.14);
    font-size: 2rem;
  }

  .lead-summary {
    margin-bottom: 18px;
    padding: 14px;
    border: 1px solid rgba(100, 116, 139, 0.25);
    border-radius: 13px;
    background: rgba(8, 14, 27, 0.72);
    text-align: left;

    div {
      display: flex;
      justify-content: space-between;
      gap: 15px;

      & + div {
        margin-top: 10px;
      }
    }

    span {
      color: var(--muted);
      font-size: 0.77rem;
    }

    strong {
      color: #fff;
      font-size: 0.77rem;
      text-align: right;
    }
  }

  .whatsapp-button {
    display: flex;
    min-height: 49px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 12px;
    color: #052e25;
    background: #34d399;
    font-size: 0.86rem;
    font-weight: 800;
    transition: background 0.18s ease;

    &:hover {
      color: #052e25;
      background: #6ee7b7;
    }
  }

  .close-button {
    margin-top: 13px;
    padding: 8px 14px;
    border: 0;
    color: #aab4c3;
    background: transparent;
    cursor: pointer;
    font: inherit;
    font-size: 0.76rem;

    &:hover {
      color: #fff;
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  .black-november {
    padding: 32px 14px 20px;

    .campaign-header {
      margin-bottom: 22px;
    }

    .campaign-badge {
      flex-wrap: wrap;
      justify-content: center;
      gap: 7px;
      padding: 8px 11px;
      font-size: 0.62rem;
    }

    .campaign-description {
      font-size: 0.88rem;
    }

    .coupon-guarantee {
      display: none;
    }

    .form-grid,
    .solutions-grid {
      grid-template-columns: 1fr;
    }

    .urgency-grid {
      grid-template-columns: 1fr;
    }

    .urgency-card {
      min-height: 58px;
    }

    .success-modal {
      padding: 26px 20px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .black-november *,
  .black-november *::before,
  .black-november *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
