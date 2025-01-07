<template>
  <main class="min-h-screen w-full flex-col grow flex bg-grid pt-20 p-5 md:p-20">
    <ProjectViewer :items="$portfolio.projects ?? []" :show-tags="true" />
  </main>
</template>

<script lang="ts" setup>

useHead({
  title: 'Projects',
})

</script>

<style></style>