import { HashLink as Link } from "react-router-hash-link";
import logo from '../assets/LOGO.svg'
import { useState } from "react";

import LanguageSelector from "./LanguageSelector";

const SiteNavbar = ({ t }) => {
    const[collapsed, setCollapsed]=useState(true);

    const { home, gallery, whoWeAre, cta } = t("navBar")

    return(
        <div>
            <div className="fixed flex flex-col items-center md:hidden md:!visible space-y-5 z-50 py-5 w-full bg-[#D9D8D7]">
                <div className="nav-logo">
                    <Link smooth className="" to="/#">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                {
                    collapsed
                    ?
                    <div className="uppercase underline cursor-pointer" onClick={()=>setCollapsed(false)}>open menu</div>
                    :
                    <div className="flex flex-col gap-10 items-center">
                        <div className="space-y-10 uppercase items-center flex flex-col" id="navbarSupportedContent1" data-twe-collapse-item>
                            <Link smooth onClick={()=>setCollapsed(true)} className="uppercase" to="/#"><p>{ home }</p></Link>
                            <Link smooth onClick={()=>setCollapsed(true)}  className="uppercase" to="/gallery"><p>{ gallery }</p></Link>
                            <Link smooth onClick={()=>setCollapsed(true)} className="uppercase" to="/#who"><p>{ whoWeAre }</p></Link>
                            <LanguageSelector lan={"IT"} />
                            {/* <p>IT</p> */}
                            <Link smooth onClick={()=>setCollapsed(true)}  to="/#form">
                                <div className="font-semibold px-3 py-1 border border-black rounded-sm cursor-pointer">{ cta }</div>
                            </Link>
                        </div>
                        <div className="uppercase underline cursor-pointer" onClick={()=>setCollapsed(true)}>x close</div>
                    </div>
                }
            </div>

            <div className="hidden !visible md:fixed md:flex justify-between px-3 md:px-10 py-3 md:py-5 z-50 w-full bg-[#D9D8D7]">
                    <div className="nav-logo">
                        <Link smooth className="" to="/#">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="gap-10 uppercase items-center flex" id="navbarSupportedContent1" data-twe-collapse-item>
                        <Link smooth className="select-none" to="/#"><p>{ home }</p></Link>
                        <Link smooth  className="select-none" to="/gallery"><p>{ gallery }</p></Link>
                        <Link smooth className="select-none" to="/#who"><p>{ whoWeAre }</p></Link>
                        <LanguageSelector lan={"IT"} />

                        <Link smooth  to="/#form">
                            <div className="font-semibold px-3 py-1 border border-black rounded-sm cursor-pointer select-none">{ cta }</div>
                        </Link>
                    </div> 
            </div>
        </div>
    )
}

export default SiteNavbar