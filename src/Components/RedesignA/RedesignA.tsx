import React from "react";
import "./RedesignA.css";

function RedesignA() {
    return (
        <>
            <div className="flex p-10">
                <div className="w-1/2">
                    <h1>Isa Conteh</h1>
                    <p>(Prononuced: Eye-sah, not eee-sah)</p>
                    <p><a href="">Github handle: Freetown5</a></p>
                    <p><a href="">LinkedIn Profile</a></p>
                    <h2>Elevator pitch:</h2>
                    <p>Hi. (hand emoji here?). I'm a Software Engineer who specializes in UI Developement. I have primarily spent the last 10 years bridging the gap between product and/or design priorities and engineering or general implementation and have worked on many different types of products. Including but not limited to: general web applications, static pages, hybrid mobile applications, accelerated mobile pages, progressive web apps etc. I've also dabbled in backend development (especially python and node), using it to build web hooks and api's.</p>
                </div>
                <div className="w-1/2">
                    <h2>Experience</h2>
                    <h3>Last Position Details-</h3>
                    <ul>
                        <li>Position: Senior Software Engineer (UI)</li>
                        <li>Company Name: RVO Health</li>
                        <li>Dates of Employment: October 2023 - November 2025</li>
                        <li>Company Description: A company built around helping users find information regarding their health. Their product portfolio includes companies like Healthline and products like Real appeal (used to help with weight loss) and Quit for Life (used to help users quit smoking).</li>
                    </ul>

                    <label htmlFor="rvoProjects">Products worked on:</label>
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
                    </ul>

                </div>
            </div>
        </>
    )
}

export default RedesignA;