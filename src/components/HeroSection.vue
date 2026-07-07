<template>
  <section class="hero">
    <div class="container">
      <div class="hero-container">
        <div class="col01">
            <h1 class="main_heading">
                Desenvolvedor
                <b class="black">Full Stack</b>
            </h1>
            <p>
                Transformo ideias em aplicações modernas, escaláveis e de alta performance, unindo precisão técnica a experiências excepcionais.
            </p>
            <div class="buttons">
                <a href="#" class="contact">
                    <span>Entrar em Contato</span>
                </a>
                <router-link to="/" class="btn-projects">
                    <span>Ver Projetos</span>
                </router-link>
            </div>
            <div class="chanels">
                <a href="#">
                    <i class="bi bi-github"></i> <span>Github</span>
                </a>
                <a href="#">
                    <i class="bi bi-linkedin"></i> <span>LinkedIn</span>
                </a>
                <a href="#">
                    <i class="bi bi-whatsapp"></i> <span>WhatsApp</span>
                </a>
            </div>
        </div>
        <div class="col02">
          <img :src="imgProfile" alt="Profile Image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data () {
    return {
      imgProfile: require('@/assets/profile_portfolio.png')
    }
  }
}
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  min-height: 400px;
  background: #F8F9FC;
  display: flex;
  align-items: center;
  padding: 100px 0;

  .hero-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .col01 {
      display: table-cell;
      vertical-align: middle;
      padding: 20px;

      h1 {
        font-size: 64px;
        margin-bottom: 20px;
        color: #000;
        font-weight: 700;
        font-family: 'Geist', sans-serif;
        letter-spacing: -2.56px;

        b.black {
          color: #666666;
          display: block;
          font-weight: 700;
        }
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 30px;
        color: #666666;
        max-width: 570px;
      }

      .buttons {
        display: flex;
        gap: 10px;

        .contact {
          padding: 16px 32px;
          text-decoration: none;
          color: #fff;
          background: #000000;
          border-radius: 4px;
          transition: all .3s ease;

          span {
            font-weight: 400;
            font-family: 'Geist', sans-serif;
          }

          &:hover {
            background: #1F2937;
          }
        }

        .btn-projects {
          padding: 16px 32px;
          text-decoration: none;
          color: #000;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
          transition: .3s;

          span {
            font-weight: 400;
            font-family: 'Geist', sans-serif;
          }

          &:hover {
            background: #F3F4F6;
          }
        }
      }

      .chanels {
        display: flex;
        gap: 30px;
        margin-top: 30px;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #111827;
          font-weight: 400;
          transition: color .3s;

          i {
            font-size: 1.2rem;
            margin-right: 8px;
          }

          &:hover {
            color: #374151;
          }
        }
      }
    }

    .col02 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 20px;

      img {
        width: 100%;
        max-width: 310px;
        height: auto;
        border-radius: 50%;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
    min-height: auto;

    .hero-container {
      flex-direction: column;

      .col01 {
        padding: 20px;

        h1 {
          font-size: 48px;
          letter-spacing: -1.92px;
          margin-bottom: 15px;

          b.black {
            display: block;
          }
        }

        p {
          font-size: 1rem;
          margin-bottom: 25px;
          max-width: 100%;
        }

        .buttons {
          flex-direction: column;
          gap: 10px;

          .contact,
          .btn-projects {
            width: 100%;
            text-align: center;
            padding: 14px 24px;
          }
        }

        .chanels {
          flex-direction: column;
          gap: 15px;
          margin-top: 25px;

          a i {
            font-size: 1rem;
            margin-right: 10px;
          }
        }
      }

      .col02 {
        order: -1;
        padding: 20px;

        img {
          max-width: 250px;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 0;

    .hero-container {
      .col01 {
        padding: 15px;

        h1 {
          font-size: 36px;
          letter-spacing: -1.44px;
          margin-bottom: 12px;
        }

        p {
          font-size: .95rem;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .buttons {
          .contact,
          .btn-projects {
            padding: 12px 20px;
            font-size: .9rem;
          }
        }

        .chanels {
          gap: 12px;
          margin-top: 20px;

          a {
            font-size: .9rem;

            i {
              font-size: .95rem;
              margin-right: 6px;
            }
          }
        }
      }

      .col02 {
        padding: 15px;

        img {
          max-width: 180px;
        }
      }
    }
  }
}
</style>
