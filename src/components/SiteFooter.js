// import { Link } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link";

import logo from '../assets/LOGO.svg'
import { useState } from "react";

const SiteFooter = () => {
    return(
        <div className="h-min-[500px] w-full flex flex-col md:flex-row justify-between px-3 md:px-10 py-10 md:py-20 gap-10">  
                <div className="hidden md:block md:w-1/3 lg:w-1/6">
                    <Link smooth className="" to="/#">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3">Navigazione</p>
                    <div className="flex flex-col gap-0 uppercase text-sm">
                        <Link smooth className="" to="/#">HOME</Link>
                        <Link smooth  className="" to="/inspiration">GALLERIA</Link>
                        <Link smooth className="" to="/#who">CHI SIAMO</Link>
                        {/* <p>IT</p> */}
                        <Link smooth  to="/#form">contattaci</Link>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3">Contatti</p>
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
                    <p className="font-semibold mb-3">Social</p>
                    <div className="flex flex-col gap-0 text-sm">
                        <a href="https://www.instagram.com/weddingdress_les_promesses/" target="_blank">Instagram</a>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3">Crediti</p>
                    <div className="flex flex-col gap-0 text-sm">
                        <p>Foto di Sara Bazzeghini</p>
                        <p>Foto e video di Matteo Mangano</p>
                        <p>Sito realizzato da Nicola Gianuzzi e <a href="https://www.raffaelecrocco.com/">Raffaele Crocco</a></p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3">Informazioni</p>
                    <div className="flex flex-col gap-0 text-sm">
                        <p>P. IVA 04165690241</p>
                        <Link smooth to="/privacy">Informativa sulla Privacy</Link>
                    </div>
                </div>  
        </div>
    )
}

export default SiteFooter