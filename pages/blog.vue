<template>
  <div class="text-center italic text-xl min-h-screen flex items-center justify-center flex-col bg-grid">
    <div class="flex flex-col items-center justify-center gap-4">
      <img
        src="https://c.tenor.com/nB_PLcXb3G0AAAAC/tenor.gif"
        alt="Under construction"
        class="w-64 h-64"
      >
      <div
        role="alert"
        class="alert alert-warning"
      >
        <Icon
          name="mdi:alert"
          size="20"
        />
        <span>{{ $t('base.underconstruction') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>
