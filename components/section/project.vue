<template>
  <ProjectViewer
    :items="$portfolio.projects ?? []"
    :show-limit="4"
  />
</template>
