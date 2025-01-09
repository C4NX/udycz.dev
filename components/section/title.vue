<template>
  <div :id="props.id">
    <h1 class="text-3xl font-extrabold mb-5 text-center">
      {{ $t(props.titlei18n) }}
    </h1>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  titlei18n: string
  id?: string
}>()
</script>
