<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-brand">
        <h3>Wilson Acioli</h3>
        <p>© 2026 Wilson Acioli. Feito com precisão.</p>
      </div>

      <nav class="footer-nav">
        <a
          href="https://www.linkedin.com/in/wilsonacioli/"
          target="_blank"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/acioliwilson"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://x.com/WilsonAcioli"
          target="_blank"
        >
          Twitter
        </a>
      </nav>

      <button
        class="scroll-top"
        @click="scrollTop"
        aria-label="Voltar ao topo"
      >
        <i class="bi bi-chevron-up"></i>
      </button>
    </div>
  </footer>
</template>

<script setup>
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 60px 0;
  background: #f8f8f8;
  border-top: 1px solid #ececec;

  .container {
    width: min(1200px, 92%);
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-brand {
    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #111;
      margin-bottom: 14px;
    }

    p {
      font-size: 0.9rem;
      color: #888;
    }
  }

  .footer-nav {
    display: flex;
    gap: 40px;

    a {
      text-decoration: none;
      color: #888;
      font-size: 0.95rem;
      transition: 0.3s;

      &:hover {
        color: #111;
      }
    }
  }

  .scroll-top {
    width: 46px;
    height: 46px;
    border: 1px solid #e5e5e5;
    background: #fafafa;
    border-radius: 14px;
    cursor: pointer;
    transition: 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 18px;
      color: #666;
    }

    &:hover {
      background: #111;
      border-color: #111;

      i {
        color: #fff;
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .container {
      flex-direction: column;
      gap: 35px;
      text-align: center;
    }

    .footer-nav {
      gap: 25px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
