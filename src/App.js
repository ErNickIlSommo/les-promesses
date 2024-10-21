import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Gallery from "./pages/Gallery";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Cookie from "./pages/Cookie";

import SiteNavbar from "./components/SiteNavbar";
import SiteSideBar from "./components/SiteSideBar";
import ScrollToHash from "./components/ScrollToHash";

import SiteFooter from "./components/SiteFooter";
import Confirm from "./pages/Confirm";
import Privacy from "./pages/Privacy";
import { useEffect } from "react";

function App() {
  const { t } = useTranslation();

  // const { i18n } = useTranslation()

  // useEffect(() => {
  //   // console.log("navigator.language: ", navigator.language)
  //   // console.log("navigator.userLanguage: ", navigator.userLanguage)
  //   const userLanguage = navigator.language || navigator.userLanguage
  //   if (userLanguage.startsWith('fr')) {
  //     i18n.changeLanguage('fr');
  //   } else if (userLanguage.startsWith('it')) {
  //     i18n.changeLanguage('it');
  //   } else {
  //     i18n.changeLanguage('en');
  //   }
  // }, [])

  return (
    <div className="App overflow-x-hidden bg-[#D9D8D7]">
      <BrowserRouter>
        {/* <ScrollToHash /> */}
        <SiteNavbar t={t} />
        {/* <SiteSideBar /> */}
        <div className="min-h-screen flex flex-col justify-between ">
          <div className="mt-36 md:mt-24 px-3 md:px-10">
            <Routes>
              <Route index element={<Home t={t} />} />
              {/* <Route path="/inspiration" element={<Inspiration />} /> */}
              <Route path="/gallery" element={<Gallery t={t} />} />
              <Route path="/confirm" element={<Confirm t={t} />} />
              <Route path="/privacy" element={<Privacy t={t} />} />
              <Route path="/cookie" element={<Cookie t={t} />} />
              <Route path="*" element={<NoPage t={t} />} />
            </Routes>
          </div>
          <SiteFooter t={t} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
