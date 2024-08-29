import "./styles/section.css"


interface SectionProps {
    componentName: string;
}

const Section = ( {componentName}: SectionProps) => {

    return(
        <>
            <section>
                <div className="section-container">
                    <h2>{componentName}</h2>
                    <hr />
                </div>
            </section>
        </>
    )
}
export default Section