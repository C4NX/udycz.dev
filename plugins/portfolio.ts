import { ProjectStatus, type Portfolio } from "~/types/portfolio"

const technologies = {
  symfony: {
    name: "Symfony",
    icon: "skill-icons:symfony-light",
    href: "https://symfony.com/",
  },
  flask: {
    name: "Flask",
    icon: "skill-icons:flask-light",
    href: "https://flask.palletsprojects.com/",
  },
  angular: {
    name: "Angular 17",
    icon: "devicon:angular",
    href: "https://angular.dev/",
  },
  nuxtjs: {
    name: "NuxtJS",
    icon: "skill-icons:nuxtjs-light",
    href: "https://nuxtjs.org/",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: "skill-icons:tailwindcss-light",
    href: "https://tailwindcss.com/",
  },
  supabase: {
    name: "Supabase",
    icon: "skill-icons:supabase-light",
    href: "https://supabase.io/",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "skill-icons:postgresql-light",
    href: "https://www.postgresql.org/",
  },
  mssql: {
    name: "Microsoft SQL Server 2016",
    icon: "devicon:microsoftsqlserver",
    href: "https://www.microsoft.com/en-us/sql-server",
  },
  kubernetes: {
    name: "Kubernetes",
    icon: "skill-icons:kubernetes",
    href: "https://kubernetes.io/",
  },
  docker: {
    name: "Docker",
    icon: "skill-icons:docker",
    href: "https://www.docker.com/",
  },
}

const otherTechnologies = {
  nextjs: {
    name: "NextJS",
    icon: "skill-icons:nextjs-light",
    href: "https://nextjs.org/",
  },
  proxmox: {
    name: "Proxmox",
    icon: "simple-icons:proxmox",
    href: "https://proxmox.com/",
  },
}

const portfolio: Portfolio = {
  firstName: "Alexis",
  lastName: "Udycz",
  email: "contact@udycz.dev",
  birthDate: new Date("2003-10-16"),
  technologies: Object.values(technologies),
  links: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/alexis-udycz/",
      icon: "mdi:linkedin",
    },
    {
      name: "Mastodon",
      href: "https://mastodon.social/@c4nx",
      icon: "mdi:mastodon",
    },
  ],
  services: [
    {
      name: "status.udycz.dev",
      href: "https://status.udycz.dev",
    },
  ],
  projects: [
    {
      id: "nuit-info-2024",
      tags: [otherTechnologies.nextjs],
      status: ProjectStatus.Completed,
      sourceHref: "https://github.com/Sakusai/Nuit-info",
      imageSrc: "img/projects/nuit-info-2024/cover.webp",
    },
    {
      id: "portfolio",
      tags: [technologies.nuxtjs, technologies.tailwind],
      status: ProjectStatus.InProgress,
      sourceHref: "https://github.com/C4NX/udycz.dev",
      // imageSrc: 'https://placehold.co/600x400',
      demoHref: "https://udycz.dev",
    },
    {
      id: "cartoon-fantasy",
      tags: [technologies.symfony],
      status: ProjectStatus.InProgress,
      // imageSrc: 'https://placehold.co/600x400',
      demoHref: "https://cartoon-fantasy.net",
    },
    {
      id: "takeavet",
      tags: [technologies.symfony],
      status: ProjectStatus.Completed,
      sourceHref: "https://github.com/C4NX/udycz.dev",
      // imageSrc: 'https://placehold.co/600x400',
    },
    {
      id: "homelab",
      tags: [technologies.docker, otherTechnologies.proxmox],
      status: ProjectStatus.InProgress,
      sourceHref: "https://github.com/C4NX/udycz.dev",
      // imageSrc: 'https://placehold.co/600x400',
    },
  ],
}

// for (let i = 0; i < 15; i++) {
//     portfolio.projects?.push(
//         ((i: number): Project => ({
//             id: 'nuxt-portfolio-' + i,
//             isFeatured: true,
//             imageSrc: 'https://placehold.co/600x400',
//             tags: Object.values(technologies),
//             sourceHref: 'https://github.com/udycz/nuxt-portfolio',
//             demoHref: 'https://udycz.dev',
//             status: ProjectStatus.InProgress,
//         }))(i)
//     )
// }

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("portfolio", portfolio)
})
