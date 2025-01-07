<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Alexis Udycz - ${titleChunk}` : 'Alexis Udycz - udycz.dev'
  },
  meta: [
    {
      name: 'description',
      content: 'Alexis Udycz - Portfolio'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ],
})
</script>

<style>
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #404040 #f5fcff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #f5fcff;
}

*::-webkit-scrollbar-thumb {
  background-color: #404040;
  border-radius: 20px;
  border: 2px solid #ffffff;
}
</style>