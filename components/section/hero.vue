<template>
  <div
    class="min-h-screen w-full flex-1 flex-col duration-300 motion-reduce:transition-none flex items-center justify-center animate-fade-in">
    <div class="hero">
      <div class="hero-content text-center flex flex-col gap-5">
        <div class="max-w-md flex flex-col gap-4">
          <NuxtImg src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Alexis%20Udycz" alt="Alexis Udycz"
            class="w-40 h-40 mx-auto animate-scale-in mask mask-squircle" />
          <p class="text-6xl font-extrabold hover:scale-110 transform duration-200 cursor-default select-none">
            {{ $portfolio.firstName }} {{ $portfolio.lastName }}
          </p>
          <p>
            {{ $t('hero.title', { age: getAgeFromBirthDate($portfolio.birthDate) }) }}
          </p>
          <div class="flex gap-2 justify-center" v-if="$portfolio.links">
            <a v-for="link in $portfolio.links" :key="link.name" :href="link.href" target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-105 transform duration-200 text-neutral-800 dark:text-neutral-200">
              <Icon :name="link.icon" size="32" v-if="link.icon" />
            </a>
          </div>
          <div class="flex justify-center">
            <NuxtLink to="#about" class="link group relative flex items-center justify-center font-bold no-underline text-neutral-800 dark:text-neutral-200">
              {{ $t('seemore') }}
              <Icon name="mdi:arrow-right" size="24"
                class="translate-x-[5px] duration-200 group-hover:translate-x-[8px] motion-reduce:transition-none" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

/**
 * Returns the age from a birth date
 * @param birthDate Birth date
 */
const getAgeFromBirthDate = (birthDate: Date) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};
</script>

<style></style>