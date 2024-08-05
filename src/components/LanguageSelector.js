import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Imports

const languages = [
  { code: "it", lang: "Ita", language: "Italiano" },
  { code: "en", lang: "Eng", language: "English" },
  { code: "fr", lang: "Fra", language: "Français" },
];

const LanguageSelector = ({ lan }) => {
  const { i18n } = useTranslation();

  const startLan = languages.find((item) => item.code === i18n.language);

  const [lang, setLang] = useState(startLan?.lang);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng, label) => {
    i18n.changeLanguage(lng);
    setLang(label);
    setIsOpen(!isOpen);
    // const selected = languages.find((item) => item.code === i18n.language)
    // const selectedIndex = languages.indexOf(selected)
    // const numLan = languages.length

    // const newLanguageIndex = (selectedIndex + 1) % numLan

    // i18n.changeLanguage(languages[newLanguageIndex].code)
  };

  return (
    <div className="relative inline-block text-left" onClick={toggleDropdown}>
      <div className="">
        <p className="inline-flex justify-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 select-none cursor-pointer">
          {lang ? lang : ""}
        </p>
      </div>
      {isOpen && (
        <div className="w-24 origin-top-right absolute right-0 mt-2 p-3 rounded-sm border border-gray-600 bg-[#D9D8D7]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              {languages.map((lng) => {
                return (
                  <p
                    className="py-1 text-center text-xs text-gray-700 hover:font-semibold cursor-pointer uppercase"
                    role="menuitem"
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code, lng.lang)}
                  >
                    {lng.language}
                  </p>
                );
              })}
            </div>
            <span
              className="mt-2 text-xs text-center leading-none cursor-pointer uppercase underline whitespace-nowrap hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              X close
            </span>
          </div>
        </div>
      )}
    </div>
    // <div
    //     onClick={() => changeLanguage()}
    //     className="cursor-pointer select-none"
    // >
    //     <p className="uppercase">
    //         {i18n.language}
    //     </p>
    // </div>
  );
};

export default LanguageSelector;
