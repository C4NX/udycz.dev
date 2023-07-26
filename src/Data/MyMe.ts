import {IconTypeEnum} from "../Models/IconType";
import {Me, MeExperienceStatus, MeExperienceType} from "../Models/Me";
import {GithubIcon, LinkedInIcon} from "./MyIcons";

export const MyMe: Me = {
    firstName: "Alexis",
    lastName: "Udycz",
    pseudo: "NX",
    age: 19,
    experiences: [
        {
            key: "marne",
            name: "Stage Développeur Web FullStack - Châlons-en-Champagne / Département de la Marne (2023)",
            href: "https://www.marne.fr/",
            type: MeExperienceType.Internship,
            status: MeExperienceStatus.Finished,
        },
        {
            key: "but",
            name: "BUT Informatique - Reims / URCA (2021 - 2024)",
            href: "https://www.iut-rcc.fr/",
            type: MeExperienceType.School,
            status: MeExperienceStatus.InProgress,
        },
        {
            key: "lycee",
            name: "BAC STI2D SIN - Château-Thierry / Lycée Jules Verne (2018 - 2021)",
            href: "https://www.lpo-julesverne.fr/",
            type: MeExperienceType.School,
            status: MeExperienceStatus.Finished,
        }
    ],
    links: [
        {
            name: "Github",
            href: "https://github.com/C4NX",
            icon: GithubIcon,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/alexis-udycz/",
            icon: LinkedInIcon,
        },
        {
            name: "CV",
            href: "/documents/cv.pdf",
            icon: {
                type: IconTypeEnum.Brand,
                value: "document",
                color: "#181717"
            }
        },
        {
            name: "Mail",
            href: "mailto:udycz.alexis@gmail.com",
            icon: {
                type: IconTypeEnum.Brand,
                value: "mail",
                color: "#181717"
            }
        },
    ],
    translation: {
        en: {
            "me.links.github": "My Github profile with all my repositories",
            "me.links.linkedin": "My LinkedIn account",
            "me.links.mail": "Contact me ! (udycz.alexis@gmail.com)",
            "me.links.cv": "My CV (French)",
            "me.description": "I'm a 19-year-old developer who's been passionate about computers since I was a kid, and I spend a lot of my free time working on projects of all kinds. I mainly program in [PHP](https://www.php.net/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [TypeScript](https://www.typescriptlang.org/) and [C#](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/). I also sometimes work in [Python](https://www.python.org/) and [Lua](https://www.lua.org/) for tool or game development. After all, I'm passionate about video games and game modding. On a more personal note, I love listening to music while I work. I'm a big fan of « [Vocaloid](https://en.wikipedia.org/wiki/Vocaloid) » and « [Hyperpop](https://en.wikipedia.org/wiki/Hyperpop) » music, and sometimes I do a bit of music production. I'm currently studying for a Computer Science degree at the [University of Reims Champagne-Ardenne](https://www.univ-reims.eu/), and my goal is to become a web developer in the various languages I master.",
            "experience.but.description": "2nd year / 3 years. Option: C#",
            "experience.lycee.description": "High school diploma STI2D, Option: SIN (Information and Digital Systems).",
            "experience.marne.description": "Internship in the IT department of the Marne department. I worked on the development of an API First web application using react and symfony (from design to testing). The aim of this application is to set up a system for managing and monitoring departmental schemes within the Marne department.",
        },
        fr: {
            "me.links.github": "Mon compte Github avec tous mes projets",
            "me.links.linkedin": "Mon compte LinkedIn",
            "me.links.mail": "Me contacter ! (udycz.alexis@gmail.com)",
            "me.links.cv": "Mon CV",
            "me.description": "Jeune développeur de 19 ans, passionné d'informatique depuis mon plus jeune âge, je consacre une grande partie de mon temps libre à réaliser des projets en tout genre. Je programme principalement en [PHP](https://www.php.net/), [JavaScript](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript), [TypeScript](https://www.typescriptlang.org/) et [C#](https://learn.microsoft.com/fr-fr/dotnet/csharp/tour-of-csharp/). Il m'arrive aussi de faire du [Python](https://www.python.org/) ainsi que du [Lua](https://www.lua.org/) pour du développement sur des outils ou des jeux vidéo. Car justement, je suis passionné par le jeu vidéo ainsi que le modding de jeux vidéo. Plus personnellement, j'adore écouter de la musique quand je travaille. Je suis un grand fan de musique « [Vocaloid](https://fr.wikipedia.org/wiki/Vocaloid) » et « [Hyperpop](https://fr.wikipedia.org/wiki/Hyperpop) » et il m'arrive parfois de faire un peu de production musicale. Je suis actuellement étudiant en BUT Informatique à [l'Université de Reims Champagne-Ardenne](https://www.univ-reims.fr/), et mon objectif est de devenir développeur web dans les différents langages que je maîtrise.",
            "experience.but.description": "2ème année / 3 ans. Option: C#",
            "experience.lycee.description": "Baccalauréat STI2D, Option: SIN (Systèmes d'Information et Numérique).",
            "experience.marne.description": "Stage au sein du pôle projet du service informatique du département de la Marne. J'ai travaillé sur le développement d'une application web API First avec les technologies react et symfony, de la conception à la mise en test. Le but de cette application est de mettre en place un système de suivis et de gestion des schémas départementaux au sein du département de la Marne.",
        }
    }
}