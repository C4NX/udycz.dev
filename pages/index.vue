<template>
  <main class="bg-grid">
    <SectionHero />
    <div
      id="about"
      class="bg-base-100 rounded-lg mx-0 mb-0 md:mx-10 shadow-none md:shadow-lg md:mb-10 p-5 border border-base-200 space-y-10"
    >
      <SectionTitle titlei18n="about.title">
        <SectionAbout />
      </SectionTitle>
      <SectionTitle
        id="tech"
        titlei18n="tech.title"
      >
        <SectionTech />
      </SectionTitle>
      <SectionTitle
        id="projects"
        titlei18n="project.title"
      >
        <SectionProject />
      </SectionTitle>
    </div>
  </main>
</template>
