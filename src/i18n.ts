import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { MyMe } from "./Data/MyMe";

const resources = {
    en: {
        translation: {
            "watermark": "Made with React, Material UI and ❤️",
            "hub.nolink": "No link provided",
            "hub.projects": "Public projects",
            "hub.links": "Links",
            "hub.aboutme": "About me",
            "hub.experience": "My pro/scholar experiences",
            "project.cv.description": "My CV (French)",
            "experience.status.0": "In progress",
            "experience.status.1": "Completed",
            ...MyMe.translation['en']
        }
    },
    fr: {
        translation: {
            "watermark": "Fait avec React, Material UI et du ❤️",
            "hub.nolink": "Aucun lien fourni",
            "hub.projects": "Projets publics",
            "hub.links": "Liens",
            "hub.aboutme": "À propos de moi",
            "hub.experience": "Mes expériences pro/scolaires",
            "project.cv.description": "Mon CV",
            "experience.status.0": "En cours",
            "experience.status.1": "Terminé",
            ...MyMe.translation['fr']
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;