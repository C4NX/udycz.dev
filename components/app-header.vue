<template>
  <header>
    <div class="navbar fixed z-100 backdrop-blur-md bg-base-100/80">
      <div class="flex-1 flex justify-start items-center gap-1">
        <div class="dropdown sm:hidden">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle"
          >
            <Icon
              name="mdi:menu"
              size="24"
            />
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li
              v-for="link in links"
              :key="link.nameI18n"
            >
              <NuxtLink :to="link.href">{{ $t(link.nameI18n) }}</NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink
          class="ml-4 text-lg font-bold hover:scale-110 transform duration-200"
          to="/"
        >
          udycz<span class="text-secondary">.dev</span>
        </NuxtLink>
        <ul class="menu menu-horizontal px-1 hidden sm:inline-flex gap-1">
          <li
            v-for="link in links"
            :key="link.nameI18n"
          >
            <NuxtLink
              :to="link.href"
              class="hover:underline"
            >{{ $t(link.nameI18n) }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex-1 flex items-center justify-end">
        <SwitcherTheme />
        <I18nSwitcher />
        <NuxtLink
          to="https://github.com/C4NX/udycz.dev"
          class="btn btn-ghost"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            name="mdi:github"
            size="24"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const links = [
  { nameI18n: "header.about", href: "/#about" },
  { nameI18n: "header.project", href: "/projects" },
  { nameI18n: "header.blog", href: "/blog" },
]
</script>
