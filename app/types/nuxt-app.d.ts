import type { Portfolio } from "./portfolio"

declare module "#app" {
  interface NuxtApp {
    $portfolio: Portfolio
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $portfolio: Portfolio
  }
}

declare module "nuxt/schema" {
  interface RuntimeConfig {
    appVersion: ?string
  }
  interface PublicRuntimeConfig {
    appVersion: string
  }
}
