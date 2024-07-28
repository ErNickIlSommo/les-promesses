import React from "react";
import { Link } from "react-router-dom";

const Privacy = ({ t }) => {
    const {
        title,
        welcome,
        section1,
        section2,
        section3,
        section4,
        section5,
        section6,
        section7,
        section8,
        section9,
        section10,
        section11,
        section12,
        section13,
    } = t("privacy")
    return(
        <div className="font-light">
            <p className="text-4xl md:text-6xl mb-5 font-medium uppercase"> 
                {title}
            </p>
            <p>
                {welcome} 
                <Link to="/" className="underline"> www.lespromesses.com</Link> 
            </p>

            <div>
                <p className="font-semibold mt-4">
                    {section1.line1}
                </p>
                <p className="">
                    <span className="font-semibold">Celine Beatrice Petit </span>
                    {section1.line2}
                </p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section2.line1}</p>
                <p>
                    {section2.line2}
                    <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
                </p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section3.line1}</p>
                <p>{section3.line2}</p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section4.line1}</p>
                <p>{section4.line2}</p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >{section4.line3}</li>
                    <li className="list-disc" >{section4.line4}</li>
                    <li className="list-disc" >{section4.line5}</li>
                    <li className="list-disc" >{section4.line6}</li>
                </ul>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section5.line1}</p>
                <p>{section5.line2}</p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >{section5.line3}</li>
                    <li className="list-disc" >{section5.line4}</li>
                    <li className="list-disc" >{section5.line5}</li>
                </ul>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section6.line1}</p>
                <p>{section6.line2}</p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >{section6.line3}</li>
                    <li className="list-disc" >{section6.line4}</li>
                    <li className="list-disc" >{section6.line5}</li>
                </ul>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section7.line1}</p>
                <p>{section7.line2}</p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section8.line1}</p>
                <p>{section8.line2}</p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >{section8.line3}</li>
                    <li className="list-disc" >{section8.line4}</li>
                    <li className="list-disc" >{section8.line5}</li>
                </ul>
                {section8.line6} 
                <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
                .
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section9.line1}</p>
                <p>{section9.line2}</p>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium uppercase">{section10.line1}</p>
                <p>{section10.line2}</p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">{section11.line1}</p>
                <p>{section11.line2}</p>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">{section12.line1}</p>
                <p>{section12.line2}</p>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">{section13.line1}</p>
                <p>
                    {section13.line2}
                    <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a> 
                </p>
            </div>
        </div>
    )
}

export default Privacy