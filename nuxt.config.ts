/* eslint-disable nuxt/nuxt-config-keys-order */
import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/eslint",
  ],
  plugins: ["~/plugins/portfolio.ts"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    /* https://github.com/nuxt-modules/i18n/issues/3238#issuecomment-2672492536 */
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
      },
    ],
    defaultLocale: "fr",
    experimental: {
      localeDetector: "./localeDetector.ts",
    },
  },
  ssr: false,
  devtools: { enabled: false },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  runtimeConfig: {
    public: {
      appVersion: process.env.APP_VERSION,
    },
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
        jsx: false,
      },
    },
  },
})
