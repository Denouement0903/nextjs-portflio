import React from "react";
import { Button } from "flowbite-react"
import { HiArrowNarrowRight } from "react-icons/hi";

const HomeLayout = () => {
    return (
        <div className="home-page sticky top-0">
            <div className="text-overlay backdrop-brightness-50">
                <h1 className="lg:text-8xl sm:text-3xl text-center font-medium mt-60">Hi, I'm Deno Rautenbach</h1>
                {/* <h2 className="lg:text-xl absolute right-96 top-96">~ Deno Rautenbach</h2> */}
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pt-16">
                    <Button className="border-2 border-white bg-black mx-auto" color="white">
                    <a href="https://drive.google.com/file/d/1n83D2cESFx-vWTbqv9AiRL_VVO85fibv/view?usp=sharing" target="_blank">Download My Resume</a>
                    <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                </div>
            </div>
        </div>
    );
  };
  
  export default HomeLayout;
  