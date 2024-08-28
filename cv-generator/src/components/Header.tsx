import { useState } from "react";
import "./styles/header.css"

interface HeaderProps {
    name: string;
    aboutData: {city: string, email: string, githubUrl: string, linkedinUrl: string, phone: string};
    handleInputFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({name, aboutData, handleInputFn}: HeaderProps) => {
     
    const [isEditable, setIsEditable] = useState(false);

    const handleClick = () => {
        setIsEditable(prevstate => !prevstate)
    }

    return( 
        <>
            <section className={`header ${isEditable && "editable"}`}>
                <button className="edit" onClick={handleClick}>{isEditable ? "Done" : "Edit"}</button>
                {isEditable ? <input type="text" name="name" value={name} onChange={handleInputFn}/> : <h1>{name}</h1>}
                <ul className="about-info">
                    {isEditable ? <input type="text" value={aboutData.city} name="city" onChange={handleInputFn}/> : <li>{aboutData.city}</li>}
                    {isEditable ? <input type="text" value={aboutData.email} name="email" onChange={handleInputFn}/> : <li>{aboutData.email}</li>}
                    {isEditable ? <input type="text" value={aboutData.githubUrl} name="githubUrl" onChange={handleInputFn} placeholder="Enter github url"/> : <li><a href={aboutData.githubUrl} target="_blank">Github</a></li>}
                    {isEditable ? <input type="text" value={aboutData.linkedinUrl} name="linkedinUrl" onChange={handleInputFn} placeholder="enter linkedin url"/> : <li><a href={aboutData.linkedinUrl} target="_blank">LinkedIn</a></li>}
                    {isEditable ? <input type="text" value={aboutData.phone} name="phone" onChange={handleInputFn}/> : <li>{aboutData.phone}</li>}
                </ul>
            </section>
        </>
    )
}

export default Header