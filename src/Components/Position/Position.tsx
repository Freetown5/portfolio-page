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
        position: "Senior Software Engineer",
        dates: "October 2023 - November 2025",
        description: "A company built around helping users find information regarding their health. Their product portfolio includes companies like Healthline and products like Real appeal (used to help with weight loss) and Quit for Life (used to help users quit smoking)."
    },
    {
        company: "Rally Health/Optum Digital",
        position: "Sr. Software Engineer (UI)",
        dates: "August 2021 - October 2023",
        description: ""
    },
    {
        company: "Inspire (ClinicaHealth)",
        position: "Front End Developer",
        dates: "December 2018 - July 2021",
        description: ""
    },
    {
        company: "Capital One",
        position: "Software Engineer",
        dates: "February 2018 - November 2018",
        description: ""
    },
    {
        company: "The Washington Post",
        position: "Developer",
        dates: "October 2016 - February 2018",
        description: ""
    },
    {
        company: "Speak Agent",
        position: "Web Developer",
        dates: "August 2015 - October 2016",
        description: ""
    }
];

const Position: React.FC<employmentEntry> = () => {
    return (
        <>
            { Object.entries(employmentData).map(([key, value]) => (
                <div key={key} className="my-8">
                    <h3>{ value.company }</h3>
                    <ul>
                        <li>Position: { value.position }</li>
                        <li>Dates of Employment: { value.dates }</li>
                        <li>Company Description: { value.description }</li>
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