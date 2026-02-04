export default defineI18nConfig(() => ({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  messages: {
    fr: {
      localeName: "Français",
      base: {
        seemore: "En savoir plus",
        seemoreCount: "{count} projets en plus...",
        underconstruction: "Cette page est en construction. Revenez plus tard s'il vous plaît.",
      },
      header: {
        about: "À propos",
        project: "Projets",
        blog: "Blog",
        language_select: "Sélectionner la langue",
      },
      hero: {
        title: "Étudiant & développeur full-stack de {age} ans, actuellement en formation d'ingénieur systèmes d'information.",
      },
      tech: {
        title: "Compétences techniques",
      },
      about: {
        title: "À propos de moi",
        text: "Hey ! Moi c'est Alexis — développeur web full-stack en alternance et étudiant en école d’ingénieur au CNAM de Reims. Passionné par le développement web et logiciel, j’aime apprendre en continu, découvrir de nouvelles technologies, construire des projets concrets et partager mes connaissances. J'accorde une grande importance à la qualité du code, à l’expérience utilisateur et à l’impact réel de ce que je développe. Ah et j'adore les ratons laveurs 🦝😉",
      },
      project: {
        "title": "Projets",
        "status": {
          inprogress: "En cours",
          completed: "Terminé",
          planned: "Prévu",
        },
        "demo": "Voir la démo de ce projet",
        "source": "Voir le code source de ce projet",
        "tags": "Tags",
        "empty": "Aucun projet pour le moment",
        "assoplus": {
          name: "Asso+ (2025)",
          description: "Une application web pour la gestion des membres, des adhésions et des donations pour les associations.",
        },
        "takeavet": {
          name: "Take'A Vet (2022)",
          description: "Un site web de gestion de rendez-vous pour les vétérinaires.",
        },
        "homelab": {
          name: "Mon Homelab",
          description: "Un projet personnel pour héberger mes services et applications sur mon propre serveur.",
        },
        "portfolio-2025": {
          name: "Mon Portfolio (2025)",
          description: "Le site web que vous êtes en train de visiter, construit avec Nuxt.js 4 et DaisyUI 5.",
        },
        "cartoon-fantasy": {
          name: "Cartoon Fantasy (2023 - Aujourd'hui)",
          description: "Cartoon Fantasy est un des projets de l'association Realms of Fantasy. Je travaille dessus depuis plus d'un an en tant que développeur full-stack.",
        },
        "nuit-info-2024": {
          name: "Nuit de l'informatique (2024)",
          description: "Participation à la Nuit de l'informatique 2024, un événement qui consiste à développer un projet en une nuit, avec différents thèmes, contraintes et défis.",
        },
        "cliche-android": {
          name: "Cliché (2025)",
          description: "Une application Android \"instagram-like\" pour partager des photos et interagir avec une communauté. Réalisée dans le cadre du CNAM.",
        },
      },
      footer: {
        service: "Services",
        social: "Réseaux sociaux",
        message: "Fait avec 💜 en utilisant ",
        and: "et",
        rights: "Tous droits réservés",
      },
    },
    en: {
      localeName: "English",
      base: {
        seemore: "See more",
        seemoreCount: "{count} more...",
        underconstruction: "This page is under construction. Please come back later.",
      },
      header: {
        about: "About",
        project: "Projects",
        blog: "Blog",
        language_select: "Select Language",
      },
      hero: {
        title: "Student & full-stack developer of {age} years old, currently learning to be an information systems engineer.",
      },
      tech: {
        title: "Technical Skills",
      },
      about: {
        title: "About Me",
        text: "Hey! I'm Alexis — a full-stack web developer currently doing an apprenticeship and studying engineering at CNAM in Reims. Passionate about web and software development, I enjoy continuous learning, discovering new technologies, building real-world projects, and sharing my knowledge. I place great importance on code quality, user experience, and the real-world impact of what I build. Oh, and I love raccoons 🦝😉",
      },
      project: {
        "title": "Projects",
        "status": {
          inprogress: "In Progress",
          completed: "Completed",
          planned: "Planned",
        },
        "demo": "Check the demo !",
        "source": "Check the sources !",
        "tags": "Tags",
        "empty": "No projects available at the moment",
        "assoplus": {
          name: "Asso+ (2025)",
          description: "A web application for managing members, memberships, and donations for associations.",
        },
        "takeavet": {
          name: "Take'A Vet (2022)",
          description: "A website for scheduling appointments for veterinarians.",
        },
        "homelab": {
          name: "My Homelab",
          description: "A personal project to host my services and applications on my own server.",
        },
        "portfolio-2025": {
          name: "My Portfolio (2025)",
          description: "The website you're currently visiting, built with Nuxt.js 4 and DaisyUI 5.",
        },
        "cartoon-fantasy": {
          name: "Cartoon Fantasy (2023 - Present)",
          description: "Cartoon Fantasy is one of Realms of Fantasy association’s projects. I worked on it for over a year as a full-stack developer.",
        },
        "nuit-info-2024": {
          name: "La Nuit de l'Informatique (2024)",
          description: "Participated in La Nuit de l'Informatique 2024, an event where participants develop a project in just one night, with various themes, constraints, and challenges.",
        },
        "cliche-android": {
          name: "Cliché (2025)",
          description: "An Instagram-like Android application to share photos and interact with a community. Developed as part of CNAM.",
        },
      },
      footer: {
        service: "Services",
        social: "Social Media",
        message: "Made with 💜 using ",
        and: "and",
        rights: "All rights reserved",
      },
    },
  },
}))
