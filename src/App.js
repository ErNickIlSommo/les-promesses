import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inspiration from "./pages/Inspiration";
import Gallery from "./pages/Gallery";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SiteNavbar from "./components/SiteNavbar";
import SiteFooter from "./components/SiteFooter";
import Confirm from "./pages/Confirm";
import Privacy from "./pages/Privacy";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation()

  return (
    <div className="App overflow-x-hidden bg-[#D9D8D7]">
      <BrowserRouter>
        <SiteNavbar t={t} />
        <div className="min-h-screen flex flex-col justify-between ">
          <div className="mt-36 md:mt-24 px-3 md:px-10">
            <Routes>
              <Route index element={<Home t={t} />} />
              {/* <Route path="/inspiration" element={<Inspiration />} /> */}
              <Route path="/gallery" element={<Gallery t={t} />} />
              <Route path="/confirm" element={<Confirm t={t} />} />
              <Route path="/privacy" element={<Privacy t={t}/>} />
              <Route path="*" element={<NoPage t={t} />} />
            </Routes>
          </div>
          <SiteFooter t={t}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
