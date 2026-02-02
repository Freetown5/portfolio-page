import React from "react";
import "./RedesignA.css";
import Position from "../Position/Position";

function RedesignA() {
    return (
        <>
            <div className="flex text-white">
                <div className="flex flex-col w-1/2 text-center h-screen p-8 bg-[#A11A68] justify-center">
                    <h1 className="leading-6 text-[#C8831C]">&lt;&#47;&gt;
                        <span className="first-name-font text-white">Isa</span>
                    </h1>
                    <h1 className="leading-6 last-name-font text-[#109AAC]">Conteh</h1>
                    <p className="mt-4 text-xl">(Prononuced: Eye-sah, not eee-sah)</p>
                    <div className="text-xl">
                        <p className="my-4"><a href="">Github handle: Freetown5</a></p>
                        <p className="my-4"><a href="">LinkedIn Profile</a></p>
                        <p className="my-4">Hi. (hand emoji here?). I'm a Software Engineer who specializes in UI Developement. I have primarily spent the last 10 years bridging the gap between product and/or design priorities and engineering or general implementation and have worked on many different types of products. Including but not limited to: general web applications, static pages, hybrid mobile applications, accelerated mobile pages, progressive web apps etc. I've also dabbled in backend development (especially python and node), using it to build web hooks and api's.</p>
                    </div>
                </div>
                <div className="w-1/2 p-8 h-screen bg-[#109AAC]">
                    <p className="text-5xl text-[#F4A21D]">Experience</p>
                    <Position />
                </div>
            </div>
        </>
    )
}

export default RedesignA;