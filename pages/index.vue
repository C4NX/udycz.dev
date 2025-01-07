<template>
  <main class="bg-grid">
    <SectionHero />
    <div class="bg-base-100 rounded-lg mx-0 mb-0 md:mx-10 shadow-none md:shadow-lg md:mb-10 p-5 border border-base-200 space-y-10" id="about">
      <SectionTitle titlei18n="about.title">
        <SectionAbout />
      </SectionTitle>
      <SectionTitle titlei18n="tech.title" id="tech">
        <SectionTech />
      </SectionTitle>
      <SectionTitle titlei18n="project.title" id="projects">
        <SectionProject />
      </SectionTitle>
    </div>
  </main>
</template>