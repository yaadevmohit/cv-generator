import { useState } from "react";
import "./styles/header.css"

interface HeaderProps {
    aboutData: {
        name: string;
        city: string;
        email: string;
        github: string;
        linkedin: string;
        phone: string;
    };
}

const Header = ({aboutData}: HeaderProps) => {
    const {name, city, email, linkedin, github, phone} = aboutData;
     
    const [isEditable, setIsEditable] = useState(false);

    const handleClick = (e) => {
        if(e.target.textContent === "edit") {
            setIsEditable(true)
            e.target.textContent = "submit"
        }
        else {
            setIsEditable(false);
            e.target.textContent = "edit"
        }
    }

    return(
        <>
            <section className={`header ${isEditable && "editable"}`}>
                <button className="edit" onClick={handleClick}>edit</button>
                {isEditable ? <input type="text" value={name}/> : <h1>{name}</h1>}
                <ul className="about-info">
                    {isEditable ? <input type="text" value={city}/> : <li className="about-info-item">{city}</li>}
                    {isEditable ? <input type="text" value={email}/> : <li className="about-info-item">{email}</li>}
                    {isEditable ? <input type="text" value={phone}/> : <li className="about-info-item">{phone}</li>}
                    {isEditable ? <input type="text" value={linkedin}/> : <li className="about-info-item">{linkedin}</li>}
                    {isEditable ? <input type="text" value={github}/> : <li className="about-info-item">{github}</li>}
                </ul>
            </section>
        </>
    )
}

export default Header