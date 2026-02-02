import React from "react";
import "./RedesignA.css";
import Position from "../Position/Position";

function RedesignA() {
    return (
        <>
            <div className="flex text-white h-screen">
                <div className="
                    flex 
                    flex-col 
                    w-1/2 
                    text-center 
                    p-8 
                    bg-[#A11A68]
                    justify-center
                ">
                    <h1 className="leading-6 text-[#F4A21D]">&lt;&#47;&gt;
                        <span className="first-name-font text-white">Isa</span>
                    </h1>
                    <h1 className="leading-6 last-name-font text-[#109AAC]">Conteh</h1>
                    <p className="mt-4 text-xl">(Prononuced: <span className="underline">Eye</span>-sah, not <span className="underline">eee</span>-sah)</p>
                    <div className="text-xl">
                        <p className="my-4"><a href="https://github.com/Freetown5/portfolio-page">Github handle: Freetown5</a></p>
                        <p className="my-4"><a href="https://www.linkedin.com/in/isatu-conteh-490b0316/">LinkedIn Profile</a></p>
                        <p className="my-4">Hi. &#128075;. I'm a Software Engineer who specializes in UI Developement. I have primarily spent the last 10 years bridging the gap between product and/or design priorities and engineering or general implementation and have worked on many different types of products. Including but not limited to: general web applications, static pages, hybrid mobile applications, accelerated mobile pages, progressive web apps etc. I've also dabbled in backend development (especially python and node), using it to build web hooks and api's.</p>
                    </div>
                </div>
                <div className="w-1/2 p-8 bg-[#109AAC] overflow-scroll">
                    <p className="text-5xl text-[#F4A21D]">Experience</p>
                    <Position />
                </div>
            </div>
        </>
    )
}

export default RedesignA;