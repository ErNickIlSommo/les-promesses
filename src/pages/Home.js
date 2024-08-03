import React from "react";
import { useState, useEffect } from "react";

import video from '../images/LES_PROMESSES.mp4'
import videoMobile from '../images/videoMobile.mp4'

import no_collections_1 from '../images/no_collections/1.png'
import no_collections_2 from '../images/no_collections/2.jpg'
import no_collections_3 from '../images/no_collections/3.jpg'
import celine from '../images/celine.jpeg'

import conosciamoci from '../images/conosciamoci/1.jpg'
import conosciamociMobile from '../images/conosciamoci/2.jpg'

import provaLaTela from '../images/prova_la_tela/2.jpg'

import abito1 from '../images/indossa_il_tuo_abito/1.jpg'
import abito2 from '../images/indossa_il_tuo_abito/2.jpg'
import abito3 from '../images/indossa_il_tuo_abito/3.jpg'

import contatto1 from '../images/contatto/form1.png'
import contatto2 from '../images/contatto/form2.png'
import { Link } from "react-router-dom";

const Home = ({ t }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        // console.log(isChecked)
    };
    
    const epigramma = t("epigramma")
    const noCollection = t("noCollection")
    const firstStep = t("firstStep")
    const secondStep = t("secondStep")
    const thirdStep = t("thirdStep")
    const presentation = t("presentation")
    const contactForm = t("contactForm")

    return(
        <div id="video-lp" className="Home flex flex-col gap-10 md:gap-36">
            {/* EPIGRAMMA */}
            <div className="flex flex-col justify-center items-center font-light mt-5">
                    <p className="text-2xl md:text-4xl my-3 uppercase">{epigramma}</p>
                <div className="md:w-full h-[64vh] md:h-[70vh]">
                    <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                        <source src={isMobile ? videoMobile : video} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* NO-COLLECTIONS */}
            <div className="relative font-light">
                <div className=" w-full h-[800px] absolute z-20 flex justify-center items-center">
                    <div className=" w-full md:w-3/5 md:bg-[#D9D8D7] text-center text-white md:text-black p-6 py-10">
                        {/* <p className="text-7xl">NO COLLEZIONI,</p> */}
                        <p className="text-4xl md:text-7xl uppercase">{ noCollection.title }</p>
                        <p className="text-4xl md:text-7xl pb-2 font-medium uppercase">{ noCollection.title2 }</p>
                        <p className="text-base px-10 md:px-20 lg:px-24">{ noCollection.description }</p>
                    </div>
                </div>
                <div className="w-full h-4/5 flex flex-col md:flex-row justify-between align-middle ">
                    <div className="h-[800px] hidden md:block md:w-[30%]"><img className="h-full w-full object-cover" src={no_collections_1} alt="" /></div>
                    <div className="h-[800px] hidden md:block md:w-[30%]"><img className="h-full w-full object-cover" src={no_collections_2} alt="" /></div>
                    <div className="bg-black h-[800px] w-full md:w-[30%]"><img className="h-full w-full object-cover opacity-50 md:opacity-100" src={no_collections_3} alt="" /></div>
                </div>
            </div>

            {/* CONOSCIAMOCI */}
            <div className="w-full flex flex-col lg:flex-row font-light">
                <div className="w-full lg:w-1/2 text-left pb-10 pe-6">
                    <p className="text-4xl md:text-7xl uppercase">{firstStep.title}</p>
                    <p className="text-4xl md:text-7xl pb-2 font-medium uppercase">{firstStep.title2}</p>
                    <p className="text-base pb-10 pe-6">{ firstStep.description }</p>
                    
                    <div className="w-3/4 lg:w-1/2">
                        <div className="mb-10">
                            <p className="font-semibold underline">{firstStep.faqs.faq1.question}</p>
                            <p className="mb-2.5 italic">{firstStep.faqs.faq1.answer}</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">{firstStep.faqs.faq2.question}</p>
                            <p className="mb-2.5 italic">{firstStep.faqs.faq2.answer}</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">{firstStep.faqs.faq3.question}</p>
                            <p className="mb-2.5 italic">{firstStep.faqs.faq3.answer}</p>
                        </div>
                        <div className="mb-2">
                            <p className="font-semibold underline">{firstStep.faqs.faq4.question}</p>
                            <p className="mb-2.5 italic">{firstStep.faqs.faq4.answer}</p>
                        </div>

                    </div>
                </div>

                <div className="hidden h-full lg:w-1/2 lg:flex items-center"><img src={conosciamoci} /></div>
                <div className="lg:hidden w-full flex items-center"><img src={conosciamociMobile} /></div>
            </div>

            {/* PROVA LA TELA */}
            <div className="w-full flex flex-col lg:flex-row font-light">
                <div className="hidden h-full lg:w-1/2 lg:flex items-center"><img src={provaLaTela} /></div>
                {/* <div className="lg:hidden w-full flex items-center"><img src={conosciamociMobile} /></div> */}

                <div className="w-full lg:w-1/2 text-left pb-10 ps-6">
                    <p className="text-4xl md:text-7xl uppercase">{secondStep.title}</p>
                    <p className="text-4xl md:text-7xl pb-2 font-medium uppercase">{secondStep.title2}</p>
                    <p className="text-base pb-10 pe-6">{secondStep.description}</p>
                    <div className="w-3/4">
                        <div className="mb-10">
                            <p className="font-semibold underline">{secondStep.faqs.faq1.question}</p>
                            <p className="mb-2.5 italic">{secondStep.faqs.faq1.answer}</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">{secondStep.faqs.faq2.question}</p>
                            <p className="mb-2.5 italic">{secondStep.faqs.faq2.answer}</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">{secondStep.faqs.faq3.question}</p>
                            <p className="mb-2.5 italic">{secondStep.faqs.faq3.answer}</p>
                        </div>
                        <div className="mb-2">
                            <p className="font-semibold underline">{secondStep.faqs.faq4.question}</p>
                            <p className="mb-2.5 italic">{secondStep.faqs.faq4.answer}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* INDOSSA IL TUO ABITO */}
            <div className="font-light">
                <p className="text-3xl md:text-7xl text-end mb-5 md:mb-10 uppercase">{thirdStep.title}</p>
                <div className="flex flex-col-reverse md:flex-row gap-10">
                    <div className="w-full md:w-1/4">
                        <div className="mb-10">
                            <p className="font-semibold underline">{thirdStep.faqs.faq1.question}</p>
                            <p className="mb-2.5 italic">{thirdStep.faqs.faq1.answer}</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">{thirdStep.faqs.faq2.question}</p>
                            <p className="mb-2.5 italic">{thirdStep.faqs.faq2.answer}</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">{thirdStep.faqs.faq3.question}</p>
                            <p className="mb-2.5 italic">{thirdStep.faqs.faq3.answer}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4"><img src={abito1} className="h-full object-cover"/></div>
                    <div className="w-full hidden md:block md:w-1/4"><img src={abito2} className="h-full object-cover"/></div>
                    <div className="w-full hidden md:block md:w-1/4"><img src={abito3} className="h-full object-cover"/></div>
                </div>
            </div>

            {/* CHI SIAMO */}
            <div id="who" className="w-full flex flex-col lg:flex-row font-light -mt-36 pt-36 md:-mt-32 md:pt-32">
                <div className="w-full lg:w-1/3 text-left pb-10 pe-6">
                    <p className="text-4xl md:text-6xl uppercase text-end">{presentation.title}</p>
                    {/* <p className="text-4xl md:text-7xl pb-2 font-medium text-end uppercase">io sono celine.</p> */}
                </div>
                <div className="h-full lg:w-1/3">
                    <img src={celine}/>
                </div>
                <div className="w-full h-full flex align-bottom lg:w-1/3 pb-10 ps-6">
                    <p className="text-base mt-32 pb-10 pe-6">
                    {presentation.description.line1}
                    <br/>{presentation.description.line2}
                    <br/><br/>{presentation.description.line3}
                    <br/><br/> {presentation.description.line4}
                    </p>
                </div> 
            </div>

            {/* FORM */}
            <div  data-type="subscription" id="form" className="w-full flex flex-col lg:flex-row font-light -mt-36 pt-36 md:-mt-32 md:pt-32">
                <div className="hidden h-full lg:w-1/3 lg:flex items-center"><img src={contatto1}/></div>
                <div className="w-full h-full lg:w-1/3 items-center">
                    <p className="text-4xl md:text-7xl uppercase text-center">{contactForm.title}</p>
                    <p className="text-4xl md:text-7xl pb-2 font-medium text-center uppercase">{contactForm.title2}</p>
                    <form id="sib-form" method="POST" action="https://217ddafd.sibforms.com/serve/MUIFANAFS4E_YRtmxKHBueYSx7KUIq2JAok0uboMRi7WQArR-KAtFEpzbulcUs0It_RLIC8QYjkF0RtXoHmrKkv7mZdBFqrMYe8UgpZ72AH2nQAxCpUvBffwS0e_dgabBgaaBbP4NxL868kX10p8DX99YYJfVWyXYv7idd8KNnmFe3Vt1et56SrMj3T9X7IaHH-Q0chvHS7S20Td" className="w-full p-8 space-y-4">
                        <div>
                            <label className="sr-only">Name</label>
                            <input
                            type="name"
                            id="NOME" 
                            name="NOME"
                            className="w-full bg-transparent rounded-sm border border-[#8E969B] p-4 pe-12 text-sm"
                            placeholder={contactForm.formName}
                            />
                        </div>
                        <div>
                            <label className="sr-only">Email</label>
                            <input
                            type="email"
                            id="EMAIL" 
                            name="EMAIL"
                            className="w-full bg-transparent rounded-sm border border-[#8E969B] p-4 pe-12 text-sm"
                            placeholder={contactForm.formEmail}
                            />
                        </div>
                        <div>
                            <label className="sr-only">Lingua</label>
                            <select
                                type=""
                                id="LINGUA" 
                                name="LINGUA"
                                className="w-full appearance-none bg-transparent rounded-sm border border-[#8E969B] p-4 text-sm"
                                placeholder="(Inglese, francese, italiano)" 

                            >
                                <option value="1">Italiano</option>
                                <option value="2">Francese</option>
                                <option value="3">Inglese</option>
                            </select>
                        </div>
                        <div>
                            <label className="sr-only">Messaggio</label>
                            <textarea 
                                rows="4"
                                id="MESSAGGIO" 
                                name="MESSAGGIO"
                                className="w-full bg-transparent rounded-sm border border-[#8E969B] p-4 pe-12 text-sm"
                                placeholder={contactForm.formMessage}
                            />
                            <div className="flex items-center mb-2  z-50">
                                {/* <p>Ciao mamma sono in tv</p> */}
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    value=""
                                    checked={isChecked}
                                    onChange={handleCheckboxChange} 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />

                                <label htmlFor="default-checkbox" className="ms-2 text-sm">
                                    {contactForm.privacy.line1}
                                    <Link className="font-medium" to="/privacy">
                                    {contactForm.privacy.line2}
                                    </Link>
                                </label>
                            </div>
                            <p className="w-full text-gray-800 font-light text-sm mt-1">{contactForm.disclamer}</p>
                        </div>
                        <button form="sib-form" type="submit" disabled={!isChecked} className="w-full font-bold px-5 py-3 border-2 border-[#A39B98] rounded-sm text-center text-[#000000] uppercase cursor-pointer disabled:opacity-50 disabled:">{contactForm.cta}</button>
                    </form>
                </div>
                <div className="hidden h-full lg:w-1/3 lg:flex items-center"><img src={contatto2}/></div>
            </div>
        </div>
    )
}

export default Home
