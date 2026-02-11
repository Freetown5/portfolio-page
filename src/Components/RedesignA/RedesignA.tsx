import React from "react";
import "./RedesignA.css";
import Position from "../Position/Position";

function RedesignA() {
    return (
        <>
            <div className="flex flex-col md:flex-row text-white h-screen">
                <div className="
                    flex 
                    flex-col 
                    text-center
                    pt-4 
                    md:p-8 
                    md:w-1/2 
                    bg-[#A11A68]
                    justify-center
                ">
                    <section className="text-[#F4A21D]">
                        <span className="text-6xl md:text-8xl">&lt;&#47;&gt;</span>
                        <span className="first-name-font text-white text-6xl md:text-8xl leading-2 md:leading-6">Isa</span>
                    </section>
                    <div className="leading-2 md:leading-6 last-name-font text-[#109AAC]">
                        <span className="text-6xl md:text-8xl">Conteh</span>
                    </div>
                    <p className="my-2 text-xl">(Prononuced: <span className="underline">Eye</span>-sah, not <span className="underline">eee</span>-sah)</p>
                    <div className="text-xl md:leading-none">
                        <p className="my-2 md:my-4"><a href="https://github.com/Freetown5/portfolio-page">Github handle: Freetown5</a></p>
                        <p className="my-2 md:my-4"><a href="https://www.linkedin.com/in/isatu-conteh-490b0316/">LinkedIn Profile</a></p>
                        <p className="my-2 md:my-4 hidden md:inline">Hi. &#128075;. I'm a Software Engineer who specializes in UI Developement. I have primarily spent the last 10 years bridging the gap between product and/or design priorities and engineering or general implementation and have worked on many different types of products. Including but not limited to: general web applications, static pages, hybrid mobile applications, accelerated mobile pages, progressive web apps etc. I've also dabbled in backend development (especially python and node), using it to build web hooks and api's.</p>
                        {/* Create modal/popup with intro and attach later */}
                        {/* <button className="mb-4 md:hidden bg-[#109AAC] text-black p-2 font-bold rounded-xl">Quick Intro</button> */}
                    </div>
                </div>
                <div className="md:w-1/2 p-8 bg-[#109AAC] overflow-scroll">
                    <p className="text-4xl md:text-5xl text-[#F4A21D]">Experience</p>
                    <Position />
                </div>
            </div>
        </>
    )
}

export default RedesignA;