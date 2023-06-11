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
            "me.description": "I'm a 19-year-old developer who's been passionate about computers since I was a kid, and I spend a lot of my free time working on projects of all kinds. I mainly program in PHP, JavaScript, TypeScript and C#. I also sometimes work in Python and Lua for tool or game development. After all, I'm passionate about video games and game modding. On a more personal note, I love listening to music while I work. I'm a big fan of « Vocaloid » and « Hyperpop » music, and sometimes I do a bit of music production. I'm currently studying for a Computer Science degree at the University of Reims Champagne-Ardenne, and my goal is to become a web developer in the various languages I master.",
        },
        fr: {
            "me.links.github": "Mon compte Github avec tous mes projets",
            "me.links.linkedin": "Mon compte LinkedIn",
            "me.links.mail": "Me contacter ! (udycz.alexis@gmail.com)",
            "me.description": "Jeune développeur de 19 ans, passionné d'informatique depuis mon plus jeune âge, je consacre une grande partie de mon temps libre à réaliser des projets en tout genre. Je programme principalement en PHP, JavaScript, TypeScript et C#. Il m'arrive aussi de faire du Python ainsi que du Lua pour du développement sur des outils ou des jeux vidéo. Car justement, je suis passionné par le jeu vidéo ainsi que le modding de jeux vidéo. Plus personnellement, j'adore écouter de la musique quand je travaille. Je suis un grand fan de musique « Vocaloid » et « Hyperpop » et il m'arrive parfois de faire un peu de production musicale. Je suis actuellement étudiant en BUT Informatique à l'Université de Reims Champagne-Ardenne, et mon objectif est de devenir développeur web dans les différents langages que je maîtrise.",
        }
    }
}