import { Chip } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [languageIndex, setLanguageIndex] = useState<number>(0);

    const nextLanguage = () => {
        const nextIndex = getNextLanguageIndex();
        const nextName = getNextLanguageName();

        setLanguageIndex(nextIndex);
        i18n.changeLanguage(nextName);
    }

    const getNextLanguageIndex = () => {
        const langs = Object.keys(i18n.options.resources ?? {});
        return (languageIndex + 1) % langs.length;
    }

    const getNextLanguageName = () => {
        const langs = Object.keys(i18n.options.resources ?? {});
        return langs[(languageIndex + 1) % langs.length];
    }

    return (
        <Chip
            sx={{
                position: "absolute",
                top: 0, 
                right: 0,
                zIndex: 1000,
                margin: 2,
                color: "white",
            }}
            onClick={() => nextLanguage()}
            label={getNextLanguageName().toLocaleUpperCase()}
        />
    )
}