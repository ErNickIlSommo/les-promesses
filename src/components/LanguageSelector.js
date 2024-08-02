import React, { useState } from "react";
import { useTranslation } from "react-i18next";


// Imports
import arrow from "../assets/downArrow.svg"

const languages = [
    { code: "it", lang: "Ita" },
    { code: "en", lang: "Eng" },
    { code: "fr", lang: "Fra" },

]

const LanguageSelector = ({ lan }) =>{
    
    const { i18n } = useTranslation()

    const startLan = languages.find((item) => item.code === i18n.language)

    const [lang, setLang] = useState(startLan.lang)
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lng, label) => {
        // i18n.changeLanguage(lng)
        // setLang(label)
        // setIsOpen(!isOpen)
        const selected = languages.find((item) => item.code === i18n.language)
        const selectedIndex = languages.indexOf(selected)
        const numLan = languages.length

        const newLanguageIndex = (selectedIndex + 1) % numLan

        i18n.changeLanguage(languages[newLanguageIndex].code)
    }

    return(
        // <div className="relative inline-block text-left">
        //     <div>
        //         <p onClick={toggleDropdown} className="inline-flex justify-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:underline select-none cursor-pointer" >
        //             {lang}
        //         </p>
        //     </div>
        //     {isOpen && (
        //     <div
        //         className="origin-top-right absolute left-0 mt-2 rounded-sm shadow-md bg-[#D9D8D7] ring-1 ring-black ring-opacity-5"
        //     >
        //         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    
        //             {languages.map((lng) => {
        //                 return <p 
        //                     className="block px-4 py-2 text-sm text-gray-700 hover:underline uppercase" 
        //                     role="menuitem"
        //                     key={lng.code}
        //                     onClick={() => changeLanguage(lng.code, lng.lang)}
        //                 >
        //                     {lng.lang}
        //                 </p>
        //             })}
        //         </div>
        //     </div>
        //     )}
        // </div>
        <div 
            onClick={() => changeLanguage()}
            className="cursor-pointer select-none"
        >
            <p className="uppercase">
                {i18n.language}
            </p>
        </div>

    )
}

export default LanguageSelector