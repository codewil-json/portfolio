<template>
  <section
    id="process"
    ref="section"
    class="process"
    :class="{ visible: isVisible }"
  >
    <div class="container">
      <div class="section-header">
        <span class="subtitle">METODOLOGIA</span>
        <h2>Como eu trabalho</h2>
      </div>

      <div class="timeline">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="timeline-item"
          :style="{ transitionDelay: `${index * 180}ms` }"
        >
          <div class="step-number">
            {{ index + 1 }}
          </div>

          <h3>{{ step.title }}</h3>

          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const section = ref(null)
const isVisible = ref(false)

const steps = [
  {
    title: 'Descoberta',
    description:
      'Entendimento profundo das necessidades do negócio e definição de requisitos.'
  },
  {
    title: 'Planejamento',
    description:
      'Criação de protótipos, escolha da stack e definição da arquitetura do sistema.'
  },
  {
    title: 'Desenvolvimento',
    description:
      'Codificação iterativa com revisões constantes e foco em qualidade de software.'
  },
  {
    title: 'Entrega',
    description:
      'Deploy em produção, monitoramento e treinamento para utilização do sistema.'
  }
]

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    {
      threshold: 0.35
    }
  )

  observer.observe(section.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
* {
  font-family: 'Geist', sans-serif;
}

.process {
  padding: 120px 0;
  background: #F8F9FC;
}

.container {
  width: min(1200px, 90%);
  margin: auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.subtitle {
  display: block;
  margin-bottom: 12px;

  font-size: 12px;
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

.timeline {
  position: relative;
    z-index: 0 !important;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

/* Linha cinza */

.timeline::before {
  content: '';

  position: absolute;
  top: 15px;
  left: 16px;
  right: 16px;

  height: 1px;

  background: #e5e7eb;
}

/* Linha preta animada */

.timeline::after {
  content: '';

  position: absolute;
  top: 15px;
  left: 16px;

  width: calc(100% - 32px);
  height: 2px;

  background: #111827;

  transform: scaleX(0);
  transform-origin: left;

  transition: transform 1.4s ease;
}

.process.visible .timeline::after {
  transform: scaleX(1);
}

.timeline-item {
  position: relative;

  opacity: 0;
  transform: translateY(35px);

  transition:
    opacity .7s ease,
    transform .7s ease;
}

.process.visible .timeline-item {
  opacity: 1;
  transform: translateY(0);
}

.step-number {
  position: relative;
  z-index: 500 !important;

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  border-radius: 8px;
  background: #111827;

  color: white;
  font-size: 13px;
  font-weight: 600;

  transform: scale(.5);

  transition: transform .45s ease;
}

.process.visible .step-number {
  transform: scale(1);
}

.timeline-item h3 {
  margin-bottom: 12px;

  font-size: 22px;
  font-weight: 600;
  letter-spacing: -.44px;

  color: #111827;
}

.timeline-item p {
  max-width: 240px;

  color: #6b7280;
  font-size: 15px;
  line-height: 1.7;
}

@media (max-width: 992px) {

.timeline {
  grid-template-columns: repeat(2,1fr);
  row-gap:48px;
}

.timeline::before,
.timeline::after{
  display:none;
}

}

@media (max-width:768px){

.process{
  padding:80px 0;
}

.timeline{
  grid-template-columns:1fr;
}

.timeline-item p{
  max-width:100%;
}

}
</style>
