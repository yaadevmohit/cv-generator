import { lazy, Suspense } from "react";
import "./styles/section.css"


interface SectionProps {
    componentName: string;
}

const Section = ( {componentName}: SectionProps) => {

    const LazyComponent = lazy(() =>
        import(`./${componentName}`)
          .then(module => ({ default: module.default }))
          .catch(error => {
            console.error("Error loading component:", error);
            return { default: () => <div>Error loading component or it doesn't exit</div> };
          })
      );
    return(
        <>
            <section>
                <div className="section-container">
                    <h2>{componentName}</h2>
                    <hr />
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyComponent />
                    </Suspense>
                </div>
            </section>
        </>
    )
}
export default Section