import React from "react";
import { employmentData as exportedData } from "./Position-data";

// const Position: React.FC<employmentEntry> = () => {
const Position: React.FC<{}> = () => {
    return (
        <>
            { Object.entries(exportedData).map(([key, value]) => (
                <div key={key}>
                    <section className="flex my-8">
                        <div className="w-4/5">
                            <h3 className="text-2xl">{ value.company }</h3>
                            <ul>
                                <li className="text-lg">
                                    <span className="text-[#860D59] font-bold">Position: </span>
                                    { value.position }
                                </li>
                                <li className="text-lg">
                                    <span className="text-[#860D59] font-bold">Dates of Employment: </span>
                                    { value.dates }
                                </li>
                                <li className="text-lg">
                                    <span className="text-[#860D59] font-bold">Company Description: </span>
                                    { value.description }
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5">
                            <img width="125px" height="125px" src={value.logoUrl} alt="testing" />
                        </div>
                    </section>
                    <section className="flex">
                        <div className="w-1/3">
                            <label className="text-lg underline">Projects:</label>
                            <select name="projects" id="projects" className="
                                ml-4 
                                w-48 
                                bg-white 
                                text-black 
                                rounded-md
                                p-2
                            ">
                                <option value="item1">Item1</option>
                                <option value="item2">Item2</option>
                                <option value="item3">Item3</option>
                                <option value="item4">Item4</option>
                            </select>
                        </div>
                        <div className="w-2/3">
                            <ul className="text-lg">
                                <li>
                                    <span className="text-[#F4A21D]">Product Type:</span> Lorem ipsum dolor
                                </li>
                                <li>
                                    <span className="text-[#F4A21D]">Audience:</span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                </li>
                                <li>
                                    <span className="text-[#F4A21D]">Description:</span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <span className="text-[#F4A21D]">Tools Used:</span> consectetur adipiscing elit, sed do
                                </li>
                                <li>
                                    <span className="text-[#F4A21D]">Interesting Fact:</span> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </li>
                            </ul>
                        </div>
                    </section>
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