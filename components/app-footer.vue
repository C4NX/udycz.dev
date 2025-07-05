<template>
  <footer class="footer md:footer-horizontal bg-base-200 text-base-content p-10">
    <aside>
      <div class="indicator">
        <span
          v-if="appVersion"
          class="indicator-item badge badge-success badge-outline"
        >v{{ appVersion }}</span>
        <h2 class="text-2xl font-bold my-2">
          udycz<span class="text-secondary">.dev</span>
        </h2>
      </div>
      <p>
        {{ $t('footer.message') }}
        <NuxtLink
          to="https://nuxt.com/"
          class="link"
          rel="noopener noreferrer"
          target="_blank"
        >NuxtJS</NuxtLink>
        {{ $t('footer.and') }}
        <NuxtLink
          to="https://daisyui.com/"
          class="link"
          rel="noopener noreferrer"
          target="_blank"
        >DaisyUI.</NuxtLink>
      </p>
      <p>
        © Alexis Udycz (2024{{ currentYear > 2024 ? ` - ${currentYear}` : '' }}). {{ $t('footer.rights') }}
      </p>
    </aside>
    <nav v-if="$portfolio.services">
      <h6 class="footer-title">
        {{ $t('footer.service') }}
      </h6>
      <a
        v-for="service in $portfolio.services"
        :key="service.name"
        class="link link-hover"
        :href="service.href"
        rel="noopener noreferrer"
        target="_blank"
      >{{ service.name }}</a>
    </nav>
    <nav v-if="$portfolio.links">
      <h6 class="footer-title">
        {{ $t('footer.social') }}
      </h6>
      <a
        v-for="link in $portfolio.links"
        :key="link.name"
        :href="link.href"
        class="link link-hover"
      >{{ link.name }}</a>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
const { appVersion } = useRuntimeConfig().public
const currentYear = computed(() => new Date().getFullYear())
</script>
