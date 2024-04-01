import HomeLayout from "./HomeLayout";
import Projectslayout from "./ProjectsLayout"
import SkillsLayout from "./SkillsLayout";
import AboutLayout from "./AboutLayout";
import TimelineLayout from "./TimeLine"
import ContactLayout from "./Contact"
import TestimonialsLayout from "./Testimonials"
import React from "react";

const SinglePageSetions = () => {
    return (
        <div className="container relative lg:grid lg:grid-rows-6 sm:grid sm:grid-cols-0 sm:grid-rows-6 ">
            {/* Home */}
                <HomeLayout />
            {/* Projects */}
            <div id="projects" className="relative items-center justify-center text-white">
                <div className="absolute backdrop-blur-md top-36 left-0 h-full w-full blur-md"/>
                <Projectslayout />
            </div>
            {/* Skills  */}
            {/* Include resume with timeline */}
            <div id="skills" className="sticky lg:top-0 h-full w-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-black-500 backdrop-blur-lg text-white pt-8">
             <TimelineLayout />
             <SkillsLayout />
            </div>
            {/* About */}
            <div id="about" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
            <AboutLayout />
            </div>
            {/* About */}
            <div id="testimonials" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
            <TestimonialsLayout />
            </div>
            <div id="contact" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-white backdrop-blur-lg text-black ">
            <ContactLayout />
            </div>
        </div>        
    )
};

export default SinglePageSetions;