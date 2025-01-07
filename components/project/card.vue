<template>
  <div class="flex gap-2 justify-center align-center flex-1 hover:scale-105 transform duration-300">
    <div class="card image-full flex-1 before:!rounded-lg !rounded-lg shadow-lg">
      <figure v-if="item.imageSrc">
        <NuxtImg :src="item.imageSrc" :alt="$t(`project.${item.id}.name`)" class="select-none blur-sm" />
      </figure>
      <div class="card-body">
        <h2 class="card-title flex flex-wrap items-center">
          <span class="flex-1">
            {{ $t(`project.${item.id}.name`) }}
          </span>
          <div :class="['badge flex gap-1 text-black dark:text-white', getBadgeColorFromProjectStatus(item.status)]"
            v-if="item.status">
            <Icon :name="getIconFromProjectStatus(item.status)" size="16" />
            {{ $t(`project.status.${item.status}`) }}
          </div>
        </h2>
        <p class="text-justify">{{ $t(`project.${item.id}.description`) }}</p>
        <div class="flex gap-2 flex-wrap">
          <div class="badge badge-outline" v-for="tech in item.tags" :key="tech.name">{{ tech.name }}</div>
        </div>
        <div class="card-actions">
          <div class="flex gap-2 w-full justify-end">
            <div class="tooltip" :data-tip="$t('project.demo')" v-if="item.demoHref">
              <a :href="item.demoHref" class="btn btn-primary text-white bg-opacity-50 rounded-lg" target="_blank"
                rel="noopener noreferrer">
                <Icon name="line-md:link" size="24" />
              </a>
            </div>
            <div class="tooltip" :data-tip="$t('project.source')" v-if="item.sourceHref">
              <a :href="item.sourceHref" class="btn btn-primary text-white bg-opacity-50 rounded-lg" target="_blank"
                rel="noopener noreferrer">
                <Icon name="mdi:github" size="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ProjectStatus, type Project } from '~/types/portfolio';

const getIconFromProjectStatus = (status: string) => {
  switch (status) {
    case ProjectStatus.InProgress:
      return 'mdi:progress-pencil'
    case ProjectStatus.Completed:
      return 'mdi:thumb-up'
    case ProjectStatus.Deprecated:
      return 'mdi:alert'
    default:
      return 'mdi:help'
  }
}

const getBadgeColorFromProjectStatus = (status: string) => {
  switch (status) {
    case ProjectStatus.InProgress:
      return 'badge-warning'
    case ProjectStatus.Completed:
      return 'badge-success'
    case ProjectStatus.Deprecated:
      return 'badge-error'
    default:
      return 'badge-ghost'
  }
}

defineProps<{
  item: Project
}>()

</script>