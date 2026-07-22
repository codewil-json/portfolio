<template>
  <header>
    <div class="container">
      <div class="wrapper">
        <router-link to="/" class="codewil-brand">Wilson Acioli</router-link>
        <button class="toggle-nav" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="codewil-navigation" :class="{ active: menuOpen }">
          <a href="#about" class="codewil-navigation-link" @click="menuOpen = false">Sobre</a>
          <a href="#skills" class="codewil-navigation-link" @click="menuOpen = false">Skills</a>
          <a href="#services" class="codewil-navigation-link" @click="menuOpen = false">Serviços</a>
          <a href="#projects" class="codewil-navigation-link" @click="menuOpen = false">Projetos</a>
          <router-link to="/blog" class="codewil-navigation-link" @click="menuOpen = false">Blog</router-link>
          <a href="#contact" class="codewil-navigation-link" @click="menuOpen = false">Contato</a>
        </nav>
        <button class="theme" @click="toggleTheme">
          <i :class="isDark ? 'bi bi-moon' : 'bi bi-sun'"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      menuOpen: false,
      isDark: false
    }
  },

  mounted () {
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      this.isDark = true
      document.body.classList.add('dark')
    }
  },

  methods: {
    toggleTheme () {
      this.isDark = !this.isDark

      document.body.classList.toggle('dark')

      localStorage.setItem(
        'theme',
        this.isDark ? 'dark' : 'light'
      )
    }
  }
}

</script>

<style scoped lang="scss">
/* Navigation */
header {
  border-bottom: 1px solid #E5E7EB;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  .codewil-brand {
    font-size: 24px;
    font-weight: bold;
    color: #000;
    font-family: 'Geist', sans-serif;
  }

  .codewil-navigation {
    display: flex;
    gap: 2.5rem;

    .codewil-navigation-link {
      font-size: 1rem;
      font-weight: 500;
      color: #4B5563;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #000000;
      }
    }
  }

  .theme {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666666;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #111827;
    }
  }
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    gap: 1rem;

    .toggle-nav {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      z-index: 9999;
      top: 1rem;
      left: 1rem;

      span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        background-color: #666666;
        transition: all 0.3s ease-in-out;
      }

      &.active {
        span:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        span:nth-child(2) {
          opacity: 0;
        }

        span:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }
      }
    }

    .codewil-navigation {
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100vh;
      position: fixed;
      z-index: 9998;
      top: 0;
      left: -100%;
      background: #fff;
      padding: 4rem 2rem 0 1.5rem;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

      &.active {
        left: 0;
      }
    }

    .theme {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: -1 !important;
    }
  }
}

@media (min-width: 769px) {
  .wrapper {
    .toggle-nav {
      display: none;
    }
  }
}

.toggle-nav.active {
  position: fixed !important;
}
</style>
