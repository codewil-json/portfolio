<template>
  <div class="links-page">
    <div class="bg-grid"></div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <button class="share-btn" id="shareBtn" aria-label="Compartilhar página">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    </button>

    <main class="panel">
      <!-- Perfil -->
      <section class="profile">
        <div class="avatar-wrap">
          <div class="avatar-ring"></div>
          <div class="avatar">
            <img src="https://codewil-json.github.io/links/foto.JPEG" alt="Wilson Acioli" />
            <!-- <span>SN</span> -->
          </div>
          <span class="status-dot" title="Disponível para projetos"></span>
        </div>

        <h1 class="name">
          Wilson Acioli
          <span class="verified" title="Verificado">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2l2.4 2.1 3.1-.5 1.2 2.9 2.9 1.2-.5 3.1L23 15l-2.1 2.4.5 3.1-2.9 1.2-1.2 2.9-3.1-.5L12 23l-2.4-2.1-3.1.5-1.2-2.9L2.4 17l.5-3.1L1 12l2.1-2.4-.5-3.1 2.9-1.2L6.7 2.4l3.1.5L12 2z"
                opacity="0.25" />
              <path d="M10.5 14.6l-2-2-1.2 1.2 3.2 3.2 5.6-5.6-1.2-1.2z" fill="var(--bg)" />
            </svg>
          </span>
        </h1>
        <p class="handle">@codewil.dev</p>
        <p class="bio"><span id="typed"></span><span class="cursor" aria-hidden="true"></span></p>
      </section>

      <!-- Skills marquee -->
      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
          <span class="chip">Product Design</span>
          <span class="chip">Figma</span>
          <span class="chip">UI / UX</span>
          <span class="chip">Design System</span>
          <span class="chip">Frontend</span>
          <span class="chip">Prototipagem</span>
          <span class="chip">Backend</span>
          <!-- duplicado para loop contínuo -->
          <span class="chip">Product Design</span>
          <span class="chip">Figma</span>
          <span class="chip">UI / UX</span>
          <span class="chip">Design System</span>
          <span class="chip">Frontend</span>
          <span class="chip">Prototipagem</span>
          <span class="chip">Backend</span>
        </div>
      </div>

      <!-- Links -->
      <nav class="links" aria-label="Meus links">

        <router-link to="/" class="link-card featured" data-link="portfolio" rel="noopener"
          style="--glow:#7c5cff; animation-delay:0.2s;">
          <span class="sheen"></span>
          <span class="link-icon" style="background:rgba(124,92,255,0.15); border-color:rgba(124,92,255,0.4);">
            <svg viewBox="0 0 24 24" fill="none" stroke="#7c5cff" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </span>
          <span class="link-body">
            <span class="link-title">Meu Portfólio</span>
            <span class="link-sub">Projetos, cases e experimentos</span>
          </span>
          <span class="link-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg></span>
          </router-link>

        <a class="link-card" data-link="instagram" href="https://instagram.com/wilacioli" target="_blank" rel="noopener"
          style="--glow:#ff3d81; animation-delay:0.3s;">
          <span class="sheen"></span>
          <span class="link-icon" style="background:rgba(255,61,129,0.12); border-color:rgba(255,61,129,0.35);">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff3d81" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </span>
          <span class="link-body">
            <span class="link-title">Instagram</span>
            <span class="link-sub">Bastidores e conteúdo tech</span>
          </span>
          <span class="link-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg></span>
        </a>

        <a class="link-card" data-link="github" href="https://github.com/acioliwilson" target="_blank" rel="noopener"
          style="--glow:#7c5cff; animation-delay:0.2s;">
          <span class="sheen"></span>
          <span class="link-icon" style="background:rgba(124,92,255,0.1); border-color:rgba(124,92,255,0.35);">
            <svg viewBox="0 0 24 24" fill="#7c5cff">
              <path
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.08 11.08 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.45-2.69 5.42-5.26 5.71.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.2.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </span>
          <span class="link-body">
            <span class="link-title">GitHub</span>
            <span class="link-sub">Projetos mais recentes</span>
          </span>
          <span class="link-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg></span>
        </a>

        <a class="link-card" data-link="linkedin" href="https://www.linkedin.com/in/wilsonacioli" target="_blank"
          rel="noopener" style="--glow:#00e5ff; animation-delay:0.4s;">
          <span class="sheen"></span>
          <span class="link-icon" style="background:rgba(0,229,255,0.1); border-color:rgba(0,229,255,0.35);">
            <svg viewBox="0 0 24 24" fill="#00e5ff">
              <path
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </span>
          <span class="link-body">
            <span class="link-title">LinkedIn</span>
            <span class="link-sub">Vamos nos conectar</span>
          </span>
          <span class="link-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg></span>
        </a>

        <a class="link-card" data-link="email" href="mailto:codewil.json@gmail.com"
          style="--glow:#1cff9d; animation-delay:0.5s;">
          <span class="sheen"></span>
          <span class="link-icon" style="background:rgba(28,255,157,0.1); border-color:rgba(28,255,157,0.35);">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1cff9d" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
          </span>
          <span class="link-body">
            <span class="link-title">Fale comigo</span>
            <span class="link-sub">Aberto para novos projetos</span>
          </span>
          <span class="link-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg></span>
        </a>

      </nav>

      <footer class="footer">
        <p>Feito com <span style="color:var(--c3)">&#9829;</span> por &lt;codewil&gt;</p>
      </footer>
    </main>

    <div id="toast" class="toast"></div>
  </div>
</template>

<script>
/* global gtag */
export default {
  data () {
    return {
      typingTimeout: null,
      mouseMoveHandler: null
    }
  },
  methods: {
    async share () {
      if (typeof gtag === 'function') {
        gtag('event', 'share_clicked')
      }
      const data = {
        title: document.title,
        text: 'Confira meus links!',
        url: window.location.href
      }
      try {
        if (navigator.share) {
          await navigator.share(data)

          if (typeof gtag === 'function') {
            gtag('event', 'share_completed')
          }
        } else {
          await navigator.clipboard.writeText(window.location.href)

          if (typeof gtag === 'function') {
            gtag('event', 'link_copied')
          }
          this.showToast('Link copiado!')
        }
      } catch (e) { }
    },
    showToast (msg) {
      const toast = document.getElementById('toast')
      if (!toast) return
      toast.textContent = msg
      toast.classList.add('show')
      setTimeout(() => {
        toast.classList.remove('show')
      }, 2200)
    },
    startTyping () {
      const phrases = [
        'Product Designer & Dev.',
        'Transformo ideias em interfaces.',
        'Figma, UI/UX e código.',
        'Vamos criar algo incrível?'
      ]
      const typed = document.getElementById('typed')
      if (!typed) return
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
      if (reduce) {
        typed.textContent = phrases[0]
        return
      }
      let pi = 0
      let ci = 0
      let deleting = false
      const type = () => {
        const word = phrases[pi]
        typed.textContent = deleting
          ? word.slice(0, ci--)
          : word.slice(0, ci++)

        let delay = deleting ? 40 : 70

        if (!deleting && ci > word.length) {
          deleting = true
          delay = 1600
        } else if (deleting && ci < 0) {
          deleting = false
          ci = 0
          pi = (pi + 1) % phrases.length
          delay = 300
        }

        this.typingTimeout = setTimeout(type, delay)
      }

      type()
    },

    initCards () {
      document.querySelectorAll('.link-card').forEach(card => {
        const sheen = card.querySelector('.sheen')

        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect()

          const x = e.clientX - r.left
          const y = e.clientY - r.top

          const rx = ((y / r.height) - 0.5) * -8
          const ry = ((x / r.width) - 0.5) * 8

          card.style.transform =
            `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`

          if (sheen) {
            sheen.style.setProperty('--mx', `${x}px`)
            sheen.style.setProperty('--my', `${y}px`)
          }
        })

        card.addEventListener('mouseleave', () => {
          card.style.transform = ''
        })

        card.addEventListener('click', () => {
          const name = card.dataset.link

          if (typeof gtag === 'function') {
            gtag('event', `${name}_click`)

            gtag('event', 'link_click', {
              link_name: name,
              link_url: card.href
            })
          }
        })
      })
    },
    initParallax () {
      const blobs = document.querySelectorAll('.blob')
      this.mouseMoveHandler = (e) => {
        const cx = e.clientX / window.innerWidth - 0.5
        const cy = e.clientY / window.innerHeight - 0.5
        blobs.forEach((blob, i) => {
          const d = (i + 1) * 14
          blob.style.marginLeft = `${cx * d}px`
          blob.style.marginTop = `${cy * d}px`
        })
      }
      window.addEventListener('mousemove', this.mouseMoveHandler)
    }
  },
  mounted () {
    const shareBtn = document.getElementById('shareBtn')
    if (shareBtn) {
      shareBtn.addEventListener('click', this.share)
    }
    this.startTyping()
    this.initCards()
    this.initParallax()
  },
  beforeUnmount () {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout)
    }
    if (this.mouseMoveHandler) {
      window.removeEventListener('mousemove', this.mouseMoveHandler)
    }
    const shareBtn = document.getElementById('shareBtn')

    if (shareBtn) {
      shareBtn.removeEventListener('click', this.share)
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.links-page {
  --bg: #060608;
  --panel: rgba(18, 18, 26, 0.55);
  --card: rgba(255, 255, 255, 0.04);
  --card-hover: rgba(255, 255, 255, 0.07);
  --border: rgba(255, 255, 255, 0.09);
  --text: #f5f5fa;
  --muted: #9494a6;
  --c1: #00e5ff;
  --c2: #7c5cff;
  --c3: #ff3d81;
  --ok: #1cff9d;
  --radius: 18px;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 40px 18px 60px;

  overflow-x: hidden;
  position: relative;

  -webkit-font-smoothing: antialiased;
}

/* ===== Background ===== */
.bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(124, 92, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124, 92, 255, 0.055) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 100%);
  animation: gridMove 22s linear infinite;
}

@keyframes gridMove {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 44px 44px;
  }
}

.blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
  pointer-events: none;
  will-change: transform;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: var(--c2);
  opacity: 0.4;
  top: -140px;
  left: -110px;
  animation: float1 15s ease-in-out infinite;
}

.blob-2 {
  width: 340px;
  height: 340px;
  background: var(--c1);
  opacity: 0.35;
  bottom: -120px;
  right: -90px;
  animation: float2 17s ease-in-out infinite;
}

.blob-3 {
  width: 280px;
  height: 280px;
  background: var(--c3);
  opacity: 0.22;
  top: 45%;
  left: -140px;
  animation: float1 19s ease-in-out infinite reverse;
}

@keyframes float1 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(40px, 50px) scale(1.12);
  }
}

@keyframes float2 {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(-50px, -40px) scale(1.16);
  }
}

/* ===== Panel ===== */
.panel {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 440px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 30px 24px 26px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}

/* ===== Profile ===== */
.profile {
  text-align: center;
  opacity: 0;
  animation: fadeUp 0.7s ease forwards;
}

.avatar-wrap {
  position: relative;
  width: 108px;
  height: 108px;
  margin: 0 auto 16px;
}

.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, var(--c1), var(--c2), var(--c3), var(--c1));
  animation: spin 6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.avatar {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #0c0c14;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 38px;
  font-weight: 700;
  border: 4px solid var(--bg);
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-dot {
  position: absolute;
  bottom: 6px;
  right: 6px;
  width: 19px;
  height: 19px;
  background: var(--ok);
  border: 3px solid var(--bg);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 12px var(--ok);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    box-shadow: 0 0 8px var(--ok);
  }

  50% {
    box-shadow: 0 0 18px var(--ok);
  }
}

.name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -0.5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(90deg, var(--c1), var(--c2), var(--c3), var(--c1));
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 6s linear infinite;
}

@keyframes shine {
  to {
    background-position: 300% 0;
  }
}

.verified {
  color: var(--c1);
  display: inline-flex;
  -webkit-text-fill-color: initial;
}

.handle {
  color: var(--muted);
  font-size: 15px;
  margin-top: 4px;
}

.bio {
  color: #c3c3d0;
  font-size: 14.5px;
  line-height: 1.6;
  margin-top: 12px;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  min-height: 46px;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--c1);
  vertical-align: text-bottom;
  margin-left: 1px;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* ===== Skills marquee ===== */
.marquee {
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  opacity: 0;
  animation: fadeUp 0.7s ease 0.15s forwards;
}

.marquee-track {
  display: flex;
  gap: 8px;
  width: max-content;
  animation: scroll 18s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes scroll {
  to {
    transform: translateX(-50%);
  }
}

.chip {
  font-size: 12px;
  font-weight: 500;
  color: var(--c1);
  white-space: nowrap;
  background: rgba(0, 229, 255, 0.07);
  border: 1px solid rgba(0, 229, 255, 0.2);
  padding: 6px 13px;
  border-radius: 100px;
}

/* ===== Links ===== */
.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 16px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  text-decoration: none;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}

.link-card .sheen {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s;
  background: radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), var(--glow), transparent 60%);
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.link-card:hover {
  background: var(--card-hover);
  border-color: var(--glow);
  box-shadow: 0 16px 40px -16px var(--glow);
}

.link-card:hover .sheen {
  opacity: 0.5;
}

.link-card:active {
  filter: brightness(0.95);
}

.link-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  transition: transform 0.25s;
  transform: translateZ(20px);
}

.link-card:hover .link-icon {
  transform: translateZ(30px) scale(1.08) rotate(-5deg);
}

.link-icon svg {
  width: 22px;
  height: 22px;
}

.link-body {
  flex: 1;
  min-width: 0;
  transform: translateZ(14px);
}

.link-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 15.5px;
  display: block;
}

.link-sub {
  font-size: 12.5px;
  color: var(--muted);
  margin-top: 2px;
}

.link-arrow {
  flex-shrink: 0;
  color: var(--muted);
  transition: transform 0.25s, color 0.25s;
}

.link-card:hover .link-arrow {
  transform: translateX(4px);
  color: var(--glow);
}

.featured {
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.16), rgba(0, 229, 255, 0.1));
  border-color: rgba(124, 92, 255, 0.4);
}

/* ===== Footer ===== */
.footer {
  text-align: center;
  color: var(--muted);
  font-size: 12.5px;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.7s forwards;
}

/* ===== Share ===== */
.share-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 5;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: transform 0.2s, border-color 0.2s;
}

.share-btn:hover {
  transform: scale(1.08);
  border-color: var(--c1);
}

.toast {
  position: fixed;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%) translateY(90px);
  background: var(--c1);
  color: #04121a;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: 100px;
  z-index: 10;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 30px -8px var(--c1);
}

.toast.show {
  transform: translateX(-50%) translateY(0);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }

  .cursor {
    display: none;
  }
}
</style>
