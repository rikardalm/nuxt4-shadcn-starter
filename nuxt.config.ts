// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
  },
  modules: ["shadcn-nuxt", "nuxt-security", "@nuxtjs/sitemap", "nuxt-schema-org"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  components: [{ path: "app/components", extensions: ["vue"] }],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      titleTemplate: (title?: string) => (title ? `${title} · Dash Nuxt` : "Dash Nuxt"),
      meta: [
        { name: "description", content: "Nuxt 4 + Bun + Tailwind v4 + shadcn-vue starter." },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Dash Nuxt" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [{ rel: "canonical", href: process.env.NUXT_SITE_URL || "http://localhost:3000" }],
    },
  },
  shadcn: {
    // where to install generated components
    componentDir: "app/components/ui",
    // optional: prefix component names, e.g., UiButton
    prefix: "",
  },
  security: {
    // Enable strict security headers in production only
    enabled: process.env.NODE_ENV === "production",
  },
  sitemap: {
    siteUrl: process.env.NUXT_SITE_URL || "http://localhost:3000",
    autoLastmod: true,
    sitemaps: true,
    xsl: false,
    autoI18n: false,
  },
  schemaOrg: {
    host: process.env.NUXT_SITE_URL || "http://localhost:3000",
  },
});
