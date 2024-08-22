import { useState } from "react";
import "./styles/header.css"

interface HeaderProps {
    name: string;
    aboutData: {key: number, fieldName: string, value: string}[];
    handleInputFn: (a: object) => void;
}

const Header = ({name, aboutData, handleInputFn}: HeaderProps) => {
     
    const [isEditable, setIsEditable] = useState(false);

    const handleClick = () => {
        setIsEditable(prevstate => !prevstate)
    }

    const aboutInfoItems = aboutData.map(item => {
        if(isEditable) {
            return(<input type="text" key={item.key} name={item.fieldName} value={item.value}/>)
        }
        else {
            return(<span className="about-info-item" key={item.key} >{item.value}</span>)
        }
    })
    return( 
        <>
            <section className={`header ${isEditable && "editable"}`}>
                <button className="edit" onClick={handleClick}>{isEditable ? "Submit" : "Edit"}</button>
                {isEditable ? <input type="text" name="name" value={name} onChange={handleInputFn}/> : <h1>{name}</h1>}
                <div className="about-info">
                    {aboutInfoItems}
                </div>
            </section>
        </>
    )
}

export default Header