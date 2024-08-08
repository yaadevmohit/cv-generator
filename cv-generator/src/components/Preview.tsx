import { useState } from "react"
import Header from "./Header"
import Section from "./Section"
import "./styles/preview.css"
const Preview = () => {

    const [data, setData] = useState({
        header: {
            name: "Mohit Yadav",
            email: "xyz@xyz.com",
            github: "github.com",
            linkedin: "linkedin.com",
            phone: "647-389-8460"
        },
        objective: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ipsam debitis, sint possimus quae pariatur laborum doloremque mollitia vitae minima, blanditiis reiciendis velit eos molestiae nemo, autem placeat sapiente. Ipsam?",
        skills: [
            {
                skillsGroupName: "",
                skillGroupData: []
            },
        ],
        workExp: [
            {
                companyName: "company name",
                jobTitle: "baller",
                location: "Toronto",
                startDate: "",
                endData: "",
                expPts: []
            }
        ],
        projects: [
            {
                projectName: "Library",
                websiteLink: "",
                repoLink: "",
                detailPts: []
            }
        ],
        education: [
            {
                instituitionName: "",
                major: "",
                location: "",
                graduationYear: "",
                learningPts: []
            }
        ],
        
    })
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