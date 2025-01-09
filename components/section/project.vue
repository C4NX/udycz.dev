<template>
  <ProjectViewer
    :items="$portfolio.projects ?? []"
    :show-limit="3"
  />
</template>
