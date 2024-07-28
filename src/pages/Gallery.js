import React from "react";

import LazyImage from "../components/LazyImage";

const photos = [
    // '/gallery/1.webp',
    // '/gallery/2.webp',
    '/gallery/3.webp',
    '/gallery/4.webp',
    '/gallery/5.webp',
    '/gallery/6.webp',
    '/gallery/7.webp',
    '/gallery/8.webp',
    '/gallery/9.webp',
    '/gallery/10.webp',
    '/gallery/11.webp',
    '/gallery/12.webp',
    '/gallery/13.webp',
    '/gallery/14.webp',
    '/gallery/15.webp',
    // '/gallery/16.webp',
    // '/gallery/17.webp',
    // '/gallery/18.webp',
    // '/gallery/19.webp',
    // '/gallery/20.webp',
    // '/gallery/21.webp',
    '/gallery/22.webp',
    // '/gallery/23.webp',
    '/gallery/24.webp',
    '/gallery/25.webp',
    // '/gallery/26.webp',
    '/gallery/27.webp',
    '/gallery/28.webp',
    '/gallery/29.webp',
    // '/gallery/30.webp'
]

// <div className="flex flex-col md:flex-row gap-10">
//      <div className="w-full h-screen md:w-1/3">

const Gallery = ({ t }) => {
    const gallery = t("gallery")
    return(
        <div className="">
            <p className="text-4xl md:text-6xl text-end mb-2 font-light uppercase">{gallery.line1} <span className="font-medium">{gallery.line2}</span></p>
            <div className="bg-slate-200 w-full h-full content-[' '] animate-pulse rounded-xs"></div>
            <div className="flex flex-wrap">
                {photos.map((src, index) => {
                    return(
                        <LazyImage 
                            key={index} 
                            src={src}
                            alt={`Image ${index + 1}`}
                        />
                )})}
            </div>
        </div>
    )
} 

export default Gallery