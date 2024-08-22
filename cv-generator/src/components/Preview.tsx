import { useState } from "react"
import Header from "./Header"
import Section from "./Section"
import "./styles/preview.css"
import defaultData from "../assets/formData"

const Preview = () => {

    const [data, setData] = useState(defaultData);
    console.log(data)

    const handleChange = (event: InputEvent) => {
        const {name, value} = event.target;
        setData((prevData) => {
            return({
                ...prevData,
                [name]: value,
            })
        })
        console.log(data.About[name])
    }
    return(
        <>
            <div className="preview-container humainst-normal">
                <Header name={data.name} aboutData={data.about} handleInputFn={handleChange}/>
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