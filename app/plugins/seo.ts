import { defineNuxtPlugin } from '#app'
import { useSeoMeta, defineOrganization, defineWebSite } from '#imports'

export default defineNuxtPlugin(() => {
  const siteUrl = process.env.NUXT_SITE_URL || 'http://localhost:3000'

  useSeoMeta({
    title: 'Dash Nuxt',
    ogTitle: 'Dash Nuxt',
    description: 'Nuxt 4 + Bun + Tailwind v4 + shadcn-vue starter.',
    ogDescription: 'Nuxt 4 + Bun + Tailwind v4 + shadcn-vue starter.',
    ogType: 'website',
    ogUrl: siteUrl,
    twitterCard: 'summary_large_image'
  })

  defineWebSite({ name: 'Dash Nuxt', inLanguage: 'en' })
  defineOrganization({ name: 'Dash Nuxt' })
})
