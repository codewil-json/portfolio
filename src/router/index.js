import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import posts from '../blog/posts'

const SITE_NAME = 'CodeWil'
const SITE_URL = 'https://www.codewil.site'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Wilson Acioli | Desenvolvedor Full Stack & Soluções Digitais',
      description:
        'Desenvolvedor Full Stack especializado em Vue, React, Laravel, Node.js e soluções digitais.',
      canonical: SITE_URL + '/'
    }
  },
  {
    path: '/links',
    name: 'links',
    component: () => import('../views/MyLinks.vue'),
    meta: {
      title: 'Links | CodeWil',
      description:
        'Todos os links oficiais de Wilson Acioli e CodeWil.',
      canonical: SITE_URL + '/links'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      title: 'Blog | CodeWil',
      description:
        'Artigos sobre Vue, Laravel, SEO, Inteligência Artificial e Desenvolvimento Web.',
      canonical: SITE_URL + '/blog'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  let title = 'Wilson Acioli | Desenvolvedor Full Stack & Soluções Digitais'
  let description =
    'Desenvolvedor Full Stack especializado em Vue, React, Laravel, Node.js e soluções digitais.'
  let canonical = SITE_URL + '/'
  let ogImage = DEFAULT_IMAGE

  if (to.name === 'blog-post') {
    const post = posts.find((p) => p.slug === to.params.slug)

    if (post) {
      title = `${post.title} | ${SITE_NAME}`
      description = post.description
      canonical = `${SITE_URL}/blog/${post.slug}`

      if (post.cover) {
        ogImage = post.cover.startsWith('http')
          ? post.cover
          : `${SITE_URL}${post.cover}`
      }
    }
  } else if (to.meta) {
    title = to.meta.title || title
    description = to.meta.description || description
    canonical = to.meta.canonical || canonical
  }

  // TITLE
  document.title = title

  // DESCRIPTION
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', description)

  // CANONICAL
  document
    .querySelector("link[rel='canonical']")
    ?.setAttribute('href', canonical)

  // OG
  document
    .querySelector("meta[property='og:title']")
    ?.setAttribute('content', title)

  document
    .querySelector("meta[property='og:description']")
    ?.setAttribute('content', description)

  document
    .querySelector("meta[property='og:url']")
    ?.setAttribute('content', canonical)

  document
    .querySelector("meta[property='og:image']")
    ?.setAttribute('content', ogImage)

  // TWITTER
  document
    .querySelector("meta[name='twitter:title']")
    ?.setAttribute('content', title)

  document
    .querySelector("meta[name='twitter:description']")
    ?.setAttribute('content', description)

  document
    .querySelector("meta[name='twitter:image']")
    ?.setAttribute('content', ogImage)

  // GOOGLE ANALYTICS
  if (window.gtag) {
    window.gtag('config', 'G-D7KM5NYTTW', {
      page_path: to.fullPath
    })
  }
})

export default router
