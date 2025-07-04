export default defineI18nConfig(() => ({
  locales: ["fr", "en"],
  defaultLocale: "en",
  messages: {
    fr: {
      localeName: "Français",
      seemore: "En voir plus",
      seemoreCount: "En voir {count} de plus...",
      header: {
        about: "À propos",
        project: "Projets",
        blog: "Blog",
      },
      hero: {
        title: "Étudiant / Développeur full-stack de {age} ans, et aspirant ingénieur logiciel.",
      },
      tech: {
        title: "Compétences techniques",
      },
      about: {
        title: "À propos de moi",
      },
      project: {
        title: "Projets remarquables",
        status: {
          inprogress: "En cours",
          completed: "Terminé",
          planned: "Prévu",
        },
        demo: "Voir la démo de ce projet",
        source: "Voir le code source de ce projet",
        tags: "Tags",
        empty: "Aucun projet pour le moment",
      },
      footer: {
        service: "Services",
        social: "Réseaux sociaux",
        message: "Fait avec 💜 en utilisant ",
        and: "et",
        rights: "Tous droits réservés",
      },
      thanks: "Merci d'avoir lu jusqu'ici !",
      underconstruction: "Cette page est en construction. Revenez plus tard s'il vous plaît.",
    },
    en: {
      localeName: "English",
      seemore: "See more",
      seemoreCount: "See {count} more...",
      header: {
        about: "About",
        project: "Projects",
        blog: "Blog",
      },
      hero: {
        title: "Student / Full-stack developer of {age} years old, and aspiring software engineer.",
      },
      tech: {
        title: "Hard skills",
      },
      about: {
        title: "About me",
        text: "Adipisicing voluptate adipisicing voluptate incididunt eiusmod eu exercitation anim ex.Adipisicing voluptate adipisicing voluptate incididunt eiusmod eu exercitation anim ex.Adipisicing voluptate adipisicing voluptate incididunt eiusmod eu exercitation anim ex.Adipisicing voluptate adipisicing voluptate incididunt eiusmod eu exercitation anim ex.Adipisicing voluptate adipisicing voluptate incididunt eiusmod eu exercitation anim ex.Adipisicing voluptate adipisicing voluptate incididunt eiusmod eu exercitation anim ex.Adipisicing voluptate adipisicing voluptate incididunt eiusmod eu exercitation anim ex.",
      },
      project: {
        "title": "Featured projects",
        "status": {
          inprogress: "WIP",
          completed: "Completed",
          planned: "Planned",
        },
        "nuit-info-2024": {
          name: "Nuit de l'info 2024",
          description: "La Nuit de l'Info is a national competition that brings together students, teachers and companies to work together on the development of a web application. We were six in our team.",
        },
        "portfolio": {
          name: "Portfolio",
          description: "It's this website! I made it using NuxtJS and DaisyUI.",
        },
        "demo": "See demo of this project",
        "source": "See source of this project",
        "tags": "Tags",
        "empty": "No projects yet",
      },
      footer: {
        service: "Services",
        social: "Socials",
        message: "Made with 💜 using ",
        and: "and",
        rights: "All rights reserved",
      },
      thanks: "Thanks for reading this far!",
      underconstruction: "This page is under construction. Please come back later.",
    },
  },
}))
