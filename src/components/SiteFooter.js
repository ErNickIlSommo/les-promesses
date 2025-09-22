// import { Link } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link";

import logo from "../assets/LOGO.svg";
import { useState } from "react";

import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.png";
import pinterest from "../assets/pinterest.png";
import tiktok from "../assets/tiktok.svg";

const SiteFooter = ({ t }) => {
  const { home, gallery, whoWeAre, cta } = t("navBar");

  const { navigation, contacts, social, credits, information } = t("footer");

  return (
    <div className="h-min-[500px] w-full flex flex-col md:flex-row justify-between px-3 md:px-10 py-10 md:py-20 gap-10">
      <div className="hidden md:block md:w-1/3 lg:w-1/6">
        <Link smooth className="" to="/#">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3">{navigation.title}</p>
        <div className="flex flex-col gap-0 uppercase text-sm">
          <Link smooth className="" to="/#">
            {home}
          </Link>
          <Link smooth className="" to="/gallery">
            {gallery}
          </Link>
          <Link smooth className="" to="/#who">
            {whoWeAre}
          </Link>
          {/* <p>IT</p> */}
          <Link smooth to="/#form">
            {cta}
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3">{contacts.title}</p>
        <div className="flex flex-col gap-0 text-sm">
          <a href="mailto:info@lespromesses.com">info@lespromesses.com</a>
          <a href="mailto:celine@lespromesses.com">celine@lespromesses.com</a>
          <a href="mailto:michele@lespromesses.com">michele@lespromesses.com</a>
          {/* <a href="mailto:michele@lespromesses.com">michele@lespromesses.com</a>
                        <a href="mailto:celine@lespromesses.com">celine@lespromesses.com</a> */}
          {/* <a className="" href="tel:+39000111222">+39 000111222</a> */}
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3">{social.title}</p>
        <div className="flex flex-row gap-2 text-sm">
          <a
            href="https://www.instagram.com/weddingdress_les_promesses/"
            target="_blank"
          >
            <img src={instagram} alt="instagram" className="h-6 w-6" />
          </a>
          <a
            href="https://it.pinterest.com/weddingdress_les_promesses/"
            target="_blank"
          >
            <img src={pinterest} alt="pinterest" className="h-6 w-6" />
          </a>
          
          {/* <a href="https://www.tiktok.com/@les_promesses" target="_blank"> */}
          {/*   <img src={tiktok} alt="tiktok" className="h-6 w-6" /> */}
          {/* </a> */}

        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3">{credits.title}</p>
        <div className="flex flex-col gap-0 text-sm">
          <p>{credits.line1}</p>
          <p>{credits.line2}</p>
          <p>
            {credits.line3}{" "}
            <a href="https://www.raffaelecrocco.com/">{credits.line3b}</a>
          </p>
          <p>{credits.line4}</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3">{information.title}</p>
        <div className="flex flex-col gap-0 text-sm">
          <p>{information.line1}</p>
          <Link smooth to="/privacy">
            {information.line2}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
