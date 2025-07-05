<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Alexis Udycz - ${titleChunk}` : "Alexis Udycz - udycz.dev"
  },
  meta: [
    {
      name: "description",
      content: "Alexis Udycz - Portfolio",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
})
</script>
