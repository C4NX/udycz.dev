import { IconTypeEnum } from "../Models/IconType";
import { Me } from "../Models/Me";
import { GithubIcon, LinkedInIcon } from "./MyIcons";

export const MyMe: Me = {
    firstName: "Alexis",
    lastName: "Udycz",
    pseudo: "NX",
    age: 19,
    school: [
        {
            name: "IUT de Reims-Châlons-Charleville",
            href: "https://www.iut-rcc.fr/"
        },
        {
            name: "Université de Reims Champagne-Ardenne (URCA)",
            href: "https://www.univ-reims.fr/",
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
            name: "Mail",
            href: "mailto:udycz.alexis@gmail.com",
            icon: {
                type: IconTypeEnum.Brand,
                value: "mail",
                color: "#181717"
            }
        }
    ],
    translation: {
        en: {
            "me.links.github": "My Github profile with all my repositories",
            "me.links.linkedin": "My LinkedIn account",
            "me.links.mail": "Contact me ! (udycz.alexis@gmail.com)",
            "me.description": "I'm a 19-year-old developer who's been passionate about computers since I was very young, and I spend a lot of my free time working on projects of all kinds. My versatility allows me to work with different programming languages, although my favorites are PHP, JavaScript and C#. Apart from programming, I have a great passion for video games and Rooster Teeth's RWBY series. I'm also a big fan of Vocaloid and SynthV music. I'm currently studying computer science at the University of Reims Champagne-Ardenne, and my goal is to become a web developer!",
        },
        fr: {
            "me.links.github": "Mon compte Github avec tous mes projets",
            "me.links.linkedin": "Mon compte LinkedIn",
            "me.links.mail": "Me contacter ! (udycz.alexis@gmail.com)",
            "me.description": "Jeune développeur de 19 ans passionné d'informatique depuis mon plus jeune âge, je consacre une grande partie de mon temps libre à réaliser des projets en tout genre. Ma polyvalence me permet de travailler avec différents langages de programmation, bien que mes préférences aillent vers le PHP, JavaScript et le C#. En dehors de la programmation, j'ai une grande passion pour les jeux vidéos et la série RWBY de Rooster Teeth. Je suis également un grand fan des musiques Vocaloid et SynthV. Actuellement étudiant en BUT Informatique à l'Université de Reims Champagne-Ardenne, mon objectif est de devenir développeur web !",
        }
    }
}