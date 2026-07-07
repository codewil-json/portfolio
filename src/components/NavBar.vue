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
          <router-link to="/" class="codewil-navigation-link">About</router-link>
          <router-link to="/" class="codewil-navigation-link">Skills</router-link>
          <router-link to="/" class="codewil-navigation-link">Services</router-link>
          <router-link to="/" class="codewil-navigation-link">Projects</router-link>
          <router-link to="/" class="codewil-navigation-link">Contact</router-link>
        </nav>
        <button class="theme">
          <i class="bi bi-moon"></i>
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
      menuOpen: false
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
      color: #666666;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #fa2828;
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
      color: #fa2828;
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
      position: absolute;
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
</style>
