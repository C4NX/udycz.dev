<template>
  <div class="card bg-base-100 image-full shadow-sm hover:scale-105 transform duration-300 rounded-lg">
    <figure v-if="item.imageSrc">
      <NuxtImg
        :src="item.imageSrc"
        :alt="$t(`project.${item.id}.name`)"
        class="select-none"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title flex flex-wrap items-center">
        <span class="flex-1">
          {{ $t(`project.${item.id}.name`) }}
        </span>
        <div
          v-if="item.status"
          :class="['badge flex gap-1 text-black dark:text-white', getBadgeColorFromProjectStatus(item.status)]"
        >
          <Icon
            :name="getIconFromProjectStatus(item.status)"
            size="16"
          />
          {{ $t(`project.status.${item.status}`) }}
        </div>
      </h2>
      <p>
        {{ $t(`project.${item.id}.description`) }}
      </p>
      <div class="flex gap-2 flex-wrap">
        <div
          v-for="tech in item.tags"
          :key="tech.name"
          class="badge badge-outline"
        >
          {{ tech.name }}
        </div>
      </div>
      <div class="card-actions justify-end">
        <a
          v-if="item.demoHref"
          :href="item.demoHref"
          class="btn btn-primary tooltip"
          :data-tip="$t('project.demo')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="line-md:link" size="24" />
        </a>
        <a
          v-if="item.sourceHref"
          :href="item.sourceHref"
          class="btn btn-primary tooltip"
          :data-tip="$t('project.source')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="mdi:github" size="24" />
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
