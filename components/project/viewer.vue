<template>
  <div v-if="props.showTags ?? true">
    <div class="flex gap-4 items-center flex-wrap p-4 mb-4 bg-base-200 rounded-lg">
      <h2 class="font-bold">
        {{ $t('project.tags') }} :
      </h2>
      <button
        v-for="tag in allTags"
        :key="tag.name"
        :class="{ 'badge badge-outline badge-lg flex gap-2 items-center justify-center transition duration-200': true, 'badge-primary': selectedTags.includes(tag.name), 'badge-secondary': !selectedTags.includes(tag.name) }"
        @click="toggleTag(tag.name)"
      >
        <Icon :name="tag.icon" />
        {{ tag.name }}
      </button>
    </div>
  </div>
  <p
    v-if="displayedItems.length === 0"
    class="text-center font-thin my-10 italic"
  >
    {{ $t('project.empty') }}
  </p>
  <div
    v-else
    class="flex flex-wrap justify-between gap-10 px-5"
  >
    <ProjectCard
      v-for="item in displayedItems"
      :key="item.id"
      :item="item"
    />
  </div>
  <h2
    v-if="showLimit && undisplayedCount > 0"
    class="my-10"
  >
    <NuxtLink
      to="/projects"
      class="link group relative flex items-center justify-center font-bold no-underline text-xl"
    >
      {{ $t('seemoreCount', { count: undisplayedCount }) }}
      <Icon
        name="mdi:arrow-right"
        size="24"
        class="translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none"
      />
    </NuxtLink>
  </h2>
</template>

<script lang="ts" setup>
import type { Project, Tag } from "~/types/portfolio"

const allTags = ref<Tag[]>([])
const selectedTags = ref<string[]>([])
const displayedItems = ref<Project[]>([])

const props = defineProps<{
  /**
   * List of projects to display
   */
  items: Project[]
  /**
   * Maximum number of items to display
   */
  showLimit?: number
  /**
   * If true, tags will be displayed
   */
  showTags?: boolean
}>()

// Count of items that are not displayed
const undisplayedCount = computed(() => props.items.length - displayedItems.value.length)

watch(undisplayedCount, () => {
  console.log("Undisplayed count:", undisplayedCount.value)
})

/**
 * Refreshes the displayed items based on the selected tags and other props
 */
const refreshDisplayedItems = () => {
  let filteredItems = props.items.filter(item => selectedTags.value.length === 0 || item.tags.some(tag => selectedTags.value.includes(tag.name)))
  if (props.showLimit && props.showLimit > 0) {
    filteredItems = filteredItems.slice(0, props.showLimit)
  }
  displayedItems.value = filteredItems
}

/**
 * Toggles a tag in the selected tags list
 * @param tag Tag to toggle
 */
const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  }
  else {
    selectedTags.value = [...selectedTags.value, tag]
  }
  refreshDisplayedItems()
}

// Watch for changes in the items prop and refresh displayed items
watch(props.items, () => {
  allTags.value = Array.from(new Set(props.items.flatMap(item => item.tags)))
  refreshDisplayedItems()
}, { immediate: true })
</script>
