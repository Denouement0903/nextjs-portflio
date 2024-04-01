import React from "react";

import Image from "next/image";
import deno from "../assets/About/deno.png"
import rugby from "../assets/About/rugby.png"
import rugby2 from "../assets/About/rugby2.png"
import art from "../assets/About/art.webp"
import art2 from "../assets/About/art2.webp"


const AboutLayout = () => {
    return (
        <section className="container grid grid-cols-2 h-screen">
            <div className="pl-16 transition ease-in-out duration-1000 hover:-translate-x-10 hover:scale-100">
                <div className="about-text pt-24 bg-black border-l-2 border-white">
                    <h2 className="text-left text-white text-5xl font-extrabold pl-8 pt-4">Who am I?</h2>
                    <h3 className="text-left text-white text-2xl font-extrabold pt-6 px-8 pb-0">Deno Rautenbach</h3>
                    <p className="text-white text-base pt-6 pl-8 pr-24 text-justify">
                        I am an aspiring Web Developer with a keen interest in building projects to solve a need. What might that need be?
                        I specialize in Full Stack Development. This includes Front-End as well as Backend.
                        In my free time you&apos;ll find me sketching, gyming, playing rugby or in front of a computer screen. Be it a Language, Programming language, Mathematics, Philosophy, Mythology or even new Sports. My favorite pass time is learning something new!
                    </p>
                    <br />
                </div>
                <div className="about-image">
                    <Image
                        className="ml-0 border-t-2 border-r-2 border-white object-cover"
                        src={deno}
                        alt="deno"
                    />
                </div>
            </div>
            <div className="images m-10 pt-0">
                <div className="grid grid-cols-2">
                    <Image
                        className="w-full rounded-lg ml-4 mb-24 z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-1000 hover:backdrop-brightness-50"
                        src={art}
                        alt="art"
                    />
                    <Image 
                        className="w-full h-5/6 mt-4 lg:mt-5 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-1000 hover:backdrop-brightness-50"
                        src={art2}
                        alt="art2"
                    />                    
                </div>
                <div className="grid grid-cols-2">
                    <Image
                        className="w-full rounded-lg lg:mt-[-50px] ml-4 mb-24 z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-1000 hover:backdrop-brightness-50"
                        src={rugby}
                        alt="rugby"
                    />
                    <Image 
                        className="mt-4 w-full lg:mt-[-30px] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-1000 hover:backdrop-brightness-50"
                        src={rugby2}
                        alt="rugby2"
                    />                    
                </div>
            </div>
        </section>
    )
}

export default AboutLayout
