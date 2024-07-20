import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inspiration from "./pages/Inspiration";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SiteNavbar from "./components/SiteNavbar";
import SiteFooter from "./components/SiteFooter";
import Confirm from "./pages/Confirm";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <div className="App overflow-x-hidden bg-[#D9D8D7]">
      <BrowserRouter>
        <SiteNavbar />
        <div className="min-h-screen flex flex-col justify-between ">
          <div className="mt-36 md:mt-24 px-3 md:px-10">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
          <SiteFooter/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
