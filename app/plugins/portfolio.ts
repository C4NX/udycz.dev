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
    name: "Angular 18",
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
    href: "https://supabase.com/",
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
      name: "Github",
      href: "https://github.com/C4NX",
      icon: "mdi:github",
    },
    {
      name: "Mastodon",
      href: "https://mastodon.social/@alexudy",
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
      imageSrc: "/images/projects/nuit-info-2024/cover.jpg",
    },
    {
      id: "portfolio-2025",
      tags: [technologies.nuxtjs, technologies.tailwind],
      status: ProjectStatus.InProgress,
      imageSrc: "/images/projects/portfolio-2025/cover.png",
      sourceHref: "https://github.com/C4NX/udycz.dev",
      demoHref: "https://udycz.dev",
    },
    {
      id: "cartoon-fantasy",
      tags: [technologies.symfony],
      status: ProjectStatus.InProgress,
      demoHref: "https://cartoon-fantasy.net",
    },
    {
      id: "takeavet",
      tags: [technologies.symfony],
      status: ProjectStatus.Completed,
      sourceHref: "https://github.com/C4NX/takeavet-react",
      imageSrc: "/images/projects/takeavet/cover.png",
    },
    {
      id: "assoplus",
      tags: [technologies.nuxtjs, technologies.postgresql],
      status: ProjectStatus.InProgress,
      imageSrc: "/images/projects/assoplus/cover.webp",
    },
    {
      id: "homelab",
      tags: [technologies.docker, otherTechnologies.proxmox],
      status: ProjectStatus.InProgress,
      sourceHref: "https://github.com/C4NX/udycz.dev",
      imageSrc: "/images/projects/homelab/cover.png",
    },
  ],
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("portfolio", portfolio)
})
