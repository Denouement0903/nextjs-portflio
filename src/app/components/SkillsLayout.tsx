'use client'
// import React from "react";
import React, { useState } from "react";
import Image from "next/image";
// import thorfinn from "../assets/thorfinn-removebg-preview.png"
import nextjs from "../assets/nextjs.png"
import nodejs from "../assets/nodejs.png"
import typescript from "../assets/typescript.png"
import reactjs from "../assets/reactjs.png"
import tailwindcss from "../assets/tailwindcss.png"
import python from "../assets/python.png"
import vuejs from "../assets/vuejs.png"
import mysql from "../assets/mysql.png"
import wordpress from "../assets/wordpress.png"
import github from "../assets/github.png"

const SkillsLayout = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="container relative grid lg:grid-cols-5 md:grid-cols-1 w-3/4 pb-60">
            {/* 1st Set of images */}
        <div
          className="group relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className={`transition ease-in-out duration-1000 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={reactjs}
            alt="1st image"
          />
          <Image
            className={`mx-auto absolute top-0 left-0 transition ease-in-out duration-1000 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            src={wordpress}
            alt="2nd image"
            width={400}
            height={400}
          />
        </div>
             {/* 2nd Set of images */}
        <div
          className="group relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className={`transition ease-in-out duration-1000 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={nextjs}
            alt="3rd image"
          />
          <Image
            className={`mx-auto absolute top-0 left-0 transition ease-in-out duration-1000 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            src={nodejs}
            alt="4th image"
            width={400}
            height={400}
          />
        </div>
            {/* 3rd Set of images */}
        <div
          className="group relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className={`transition ease-in-out duration-1000 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={typescript}
            alt="5th image"
          />
          <Image
            className={`mx-auto absolute top-0 left-0 transition ease-in-out duration-1000 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            src={vuejs}
            alt="6th image"
            width={400}
            height={400}
          />
        </div>
            {/* 4th Set of images */}
        <div
          className="group relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className={`transition ease-in-out duration-1000 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={tailwindcss}
            alt="7th image"
          />
          <Image
            className={`mx-auto absolute top-0 left-0 transition ease-in-out duration-1000 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            src={python}
            alt="8th image"
            width={400}
            height={400}
          />
        </div>
            {/* 5th Set of images */}
        <div
          className="group relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className={`transition ease-in-out duration-1000 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={mysql}
            alt="9th image"
          />
          <Image
            className={`mx-auto absolute top-0 left-0 transition ease-in-out duration-1000 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            src={github}
            alt="10th image"
            width={400}
            height={400}
          />
        </div>
    </div>
    );
}

export default SkillsLayout