import { useState } from "react"
import Header from "./Header"
import Section from "./Section"
import "./styles/preview.css"
import defaultData from "../assets/formData"

const Preview = () => {

    const [data, setData] = useState(defaultData);
    console.log(data.about)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setData((prevData) => {
            if(name == "name") {
                return({
                ...prevData,
                [name]: value,
                })
            }
            else {
                return({
                    ...prevData,
                    about: {
                        ...prevData.about,
                        [name]: value,
                    },
                })
            }
        })
    }
    return(
        <>
            <div className="preview-container humainst-normal">
                <Header name={data.name} aboutData={data.about} handleInputFn={handleChange}/>
                <Header name={data.name} aboutData={data.about} handleInputFn={handleChange}/>
            </div>
        </>
    )
}
export default Preview