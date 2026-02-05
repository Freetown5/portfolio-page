import React from "react";
import { employmentEntry, employmentData as exportedData } from "./Position-data";

// const Position: React.FC<employmentEntry> = () => {
const Position: React.FC<{}> = () => {
    return (
        <>
            { Object.entries(exportedData).map(([key, value]) => (
                <div key={key} className="flex my-8">
                    <div className="w-4/5">
                        <h3 className="text-2xl">{ value.company }</h3>
                        <ul>
                            <li><span className="text-[#860D59] font-bold text-lg">Position:</span> { value.position }</li>
                            <li><span className="text-[#860D59] font-bold text-lg">Dates of Employment:</span> { value.dates }</li>
                            <li><span className="text-[#860D59] font-bold text-lg">Company Description:</span> { value.description }</li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                        <img width="125px" height="125px" src={value.logoUrl} alt="testing" />
                    </div>
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