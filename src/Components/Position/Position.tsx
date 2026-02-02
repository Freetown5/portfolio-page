import React from "react";

interface employmentEntry {
    company: string,
    position: string,
    dates: string,
    description: string
}

const employmentData = [
    {
        company: "RVO Health",
        position: "Senior Software Engineer (UI)",
        dates: "October 2023 - November 2025",
        description: "A company built around helping users find information regarding their health. Their product portfolio includes companies like Healthline and products like Real appeal (used to help with weight loss) and Quit for Life (used to help users quit smoking)."
    },
    {
        company: "Rally Health/Optum Digital",
        position: "Sr. Software Engineer (UI)",
        dates: "August 2021 - October 2023",
        description: "Rally health was a digital health and wellness company that was aquired by Optum Digital through UnitedHealth Group. Optum Digital, United Health Groups tech organization refers to the suite of digital tools, platforms and technology enabled services offered by Optum to simplify health care and increase patient engagement and streamline administrative tasks."
    },
    {
        company: "Inspire (ClinicaHealth)",
        position: "Front End Developer",
        dates: "December 2018 - July 2021",
        description: "Inspire is company that partners with health ailment focused organizations to provide online communication platforms and use it to inform research."
    },
    {
        company: "Capital One",
        position: "Software Engineer",
        dates: "February 2018 - November 2018",
        description: "A major (top 10) bank holding company known for it's extensive credit card operations, consumer banking, and commercial lending services."
    },
    {
        company: "The Washington Post",
        position: "Developer",
        dates: "October 2016 - February 2018",
        description: "A major daily newspaper knon for it's in-depth coverage of national politics and federal government affairs."
    },
    {
        company: "Speak Agent",
        position: "Web Developer",
        dates: "August 2015 - October 2016",
        description: "An educational tech (EdTech) company that produces popular digital, research-based supplemental programs for grades K-8 that improve academic language, literacy and concept mastery in math and science."
    }
];

// const Position: React.FC<employmentEntry> = () => {
const Position: React.FC<{}> = () => {
    return (
        <>
            { Object.entries(employmentData).map(([key, value]) => (
                <div key={key} className="my-8">
                    <h3 className="text-2xl">{ value.company }</h3>
                    <ul>
                        <li><span className="text-[#860D59] font-bold text-lg">Position:</span> { value.position }</li>
                        <li><span className="text-[#860D59] font-bold text-lg">Dates of Employment:</span> { value.dates }</li>
                        <li><span className="text-[#860D59] font-bold text-lg">Company Description:</span> { value.description }</li>
                    </ul>
                </div> 
            ))}

            {/* <label htmlFor="rvoProjects">Products worked on:</label>
            <select name="rvoProjects" id="rvoProjects">
                <option value="q4l-landing">Quit for Life landing page</option>
                <option value="lvf-landing">Live Vape Free landing page</option>
                <option value="ccct">Coaching Client Configurations UI tool</option>
                <option value="q4l-app">Quit for Life</option>
                <option value="real-appeal-app">Real Appeal</option>
            </select>

            <h3>Skills used:</h3>
            <ul>
                <li>React.js</li>
                <li>Angular</li>
                <li>Next.js</li>
                <li>Netilfy</li>
                <li>RxJs</li>
                <li>NgRx</li>
                <li>Netlify</li>
                <li>Contentful</li>
            </ul> */}
        </>
    )
}

export default Position;