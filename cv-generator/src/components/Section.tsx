import "./styles/section.css"

const Section = ( {title}) => {
    return(
        <>
            <section>
                <div className="section-container">
                    <h2>{title}</h2>
                    <hr />
                </div>
            </section>
        </>
    )
}
export default Section