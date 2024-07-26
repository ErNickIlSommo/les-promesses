import React from "react";

import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    
    return(
        <div 
            ref={ref} 
            style={{ minHeight: '200px' }}
            className="w-full h-screen md:w-1/3 p-2"
        >
            {inView ? <img src={src} alt={alt} /> : 
                <div className="bg-slate-200 w-full h-full content-[' '] animate-pulse rounded-xs"></div>
            }
        </div>
    )
}

export default LazyImage