<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
    <NuxtLink
      v-for="item in $portfolio.technologies"
      :key="item.name"
      :to="item.href"
      class="flex border gap-2 p-4 justify-between items-center cursor-pointer hover:bg-base-200 rounded-md font-bold select-none"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon
        :name="item.icon"
        size="42"
      />
      {{ item.name }}
    </NuxtLink>
  </div>
</template>
