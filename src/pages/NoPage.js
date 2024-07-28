import React from "react";

const NoPage = ({ t }) => {
    
    const { line1 } = t("pageNotFound")
    
    return(
        <>
        <p>{line1}</p>
        </>
    )
}

export default NoPage