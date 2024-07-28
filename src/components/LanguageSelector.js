import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "it", lang: "Italian" },
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },

]

const LanguageSelector = ({ lan }) =>{
    
    const { i18n } = useTranslation()

    const changeLanguage = () => {
        const selected = languages.find((item) => item.code === i18n.language)
        const selectedIndex = languages.indexOf(selected)
        const numLan = languages.length

        const newLanguageIndex = (selectedIndex + 1) % numLan

        i18n.changeLanguage(languages[newLanguageIndex].code)
    }

    return(
        <div 
            onClick={() => changeLanguage()}
            className="cursor-pointer select-none"
        >
            <p>{i18n.language}</p>
        </div>
    )
}

export default LanguageSelector