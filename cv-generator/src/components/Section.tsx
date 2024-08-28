import "./styles/section.css"

interface SectionProps {
    title: string;
    Component: string;
}


const Section = ( {title, Component}: SectionProps) => {


    return(
        <>
            <section>
                <div className="section-container">
                    <h2>{title}</h2>
                    <hr />
                    <Component />
                </div>
            </section>
        </>
    )
}
export default Section