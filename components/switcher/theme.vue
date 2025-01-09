<template>
  <label
    class="swap swap-rotate btn btn-ghost"
    aria-label="Toggle theme"
  >
    <input
      type="checkbox"
      :checked="isDarkTheme"
      @change="toggleTheme"
    >
    <Icon
      name="mdi:white-balance-sunny"
      size="24"
      class="swap-off"
    />
    <Icon
      name="mdi:weather-night"
      size="24"
      class="swap-on"
    />
  </label>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"

const isDarkTheme = ref(false)

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}

const updateTheme = () => {
  document.body.setAttribute("data-theme", isDarkTheme.value ? "business" : "corporate")
}

onMounted(() => {
  const currentTheme = document.body.getAttribute("data-theme")
  if (currentTheme) {
    isDarkTheme.value = currentTheme === "business"
  }
  else {
    isDarkTheme.value = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  }
  updateTheme()
})

watch(isDarkTheme, updateTheme)
</script>
