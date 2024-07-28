
const Confirm = ({ t }) => {
    const confirmPage = t("confirmPage")
    return(
        <p className="text-4xl md:text-6xl text-end mb-10 font-light uppercase"> 
            <span className="font-medium">
                {confirmPage.line1}
            </span>
            {confirmPage.line2}
        </p>
    )
}

export default Confirm