<template>
  <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
    <figure
      v-if="item.imageSrc"
      class="h-32 sm:h-40 md:h-48 lg:h-60 overflow-hidden"
    >
      <img
        :src="item.imageSrc"
        :alt="$t(`project.${item.id}.name`)"
        class="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        loading="lazy"
      >
    </figure>
    <div class="card-body p-5">
      <h2 class="card-title text-lg sm:text-xl font-bold flex-wrap gap-y-2 justify-between">
        {{ $t(`project.${item.id}.name`) }}
        <span
          v-if="item.status"
          :class="['badge badge-sm font-normal capitalize', getBadgeColorFromProjectStatus(item.status)]"
        >
          <Icon
            :name="getIconFromProjectStatus(item.status)"
            size="14"
            class="align-middle mr-1"
          />
          {{ $t(`project.status.${item.status}`) }}
        </span>
      </h2>

      <p class="text-base-content/80 mt-2 text-sm sm:text-base">
        {{ $t(`project.${item.id}.description`) }}
      </p>

      <div class="flex flex-wrap gap-2 mt-3">
        <div
          v-for="tech in item.tags"
          :key="tech.name"
          class="badge badge-outline badge-sm px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors"
        >
          {{ tech.name }}
        </div>
      </div>

      <div class="card-actions justify-end mt-4">
        <a
          v-if="item.demoHref"
          :href="item.demoHref"
          class="btn btn-square btn-sm btn-primary tooltip tooltip-left"
          :data-tip="$t('project.demo')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="line-md:link"
            size="18"
          />
        </a>
        <a
          v-if="item.sourceHref"
          :href="item.sourceHref"
          class="btn btn-square btn-sm btn-secondary tooltip tooltip-left"
          :data-tip="$t('project.source')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="mdi:github"
            size="18"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProjectStatus, type Project } from "~/types/portfolio"

const getIconFromProjectStatus = (status: ProjectStatus) => {
  switch (status) {
    case ProjectStatus.InProgress:
      return "mdi:progress-pencil"
    case ProjectStatus.Completed:
      return "mdi:thumb-up"
    case ProjectStatus.Deprecated:
      return "mdi:alert"
    default:
      return "mdi:help"
  }
}

const getBadgeColorFromProjectStatus = (status: ProjectStatus) => {
  switch (status) {
    case ProjectStatus.InProgress:
      return "badge-warning"
    case ProjectStatus.Completed:
      return "badge-success"
    case ProjectStatus.Deprecated:
      return "badge-error"
    default:
      return "badge-ghost"
  }
}

defineProps<{
  item: Project
}>()
</script>
