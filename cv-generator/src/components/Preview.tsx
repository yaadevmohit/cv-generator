import { useState } from "react"
import Header from "./Header"
import Section from "./Section"
import "./styles/preview.css"
import defaultData from "../assets/formData"

const Preview = () => {

    const [data, setData] = useState(defaultData)
    return(
        <>
            <div className="preview-container humainst-normal">
                <Header />
                <Section title="Objective"/>
                <Section title="Skills"/>
                <Section title="Work Experience"/>
                <Section title="Projects"/>
                <Section title="Education"/>
                <Section title="Certifications"/>
            </div>
        </>
    )
}
export default Preview