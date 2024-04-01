import { Button } from "flowbite-react"
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Projectslayout = () => {
    return (
        <article className="comic lg:p-24 w-full h-full left-0 top-0 absolute">
        {/* Capstone */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-x-10 hover:scale-100 rounded-lg border-2 border-white">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://github.com/Simp4Hitagi/Capstone-Mangako" target="_blank">Ecommerce</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
            </div>
        </div>
        {/* Calculator */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://github.com/Simp4Hitagi/My_Calculator"  target="_blank">Calculator</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
        </div>
        </div>
        {/* Vue Porfolio */}
        <div className="panel transition ease-in-out duration-300 hover:scale-x-110 hover:-translate-y-10 rounded-lg border-2 border-white">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://github.com/Simp4Hitagi/vue-portfolio"  target="_blank">Portfolio 2.0</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
        </div>
        </div>
        {/* Python Projects */}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://github.com/Simp4Hitagi/Python-Projects"  target="_blank">Projects</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
        </div>
        </div>
        {/* WordPress Portfolio*/}
        <div className="panel transition ease-in-out duration-300 hover:-translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://dev-deno-portfolio.pantheonsite.io/"  target="_blank">Portfolio 3.0</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
        </div>           
        </div>
        {/* TripTronik*/}
        <div className="panel transition ease-in-out duration-300 hover:scale-x-90 hover:scale-y-90 rounded-lg border-2 border-white">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://dev-triptronik.pantheonsite.io/"  target="_blank">WordPress</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
        </div>
        </div>
        {/* Rest API */}
        <div className="panel transition ease-in-out duration-300 hover:translate-y-10 hover:scale-100 rounded-lg border-2 border-white">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://databalk-test-2.vercel.app/"  target="_blank">Rest API</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
        </div>
        </div>
        {/* News API */}
        <div className="panel transition ease-in-out duration-300 hover:translate-x-10 hover:scale-100 rounded-lg border-2 border-white">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:backdrop-brightness-200 h-full pt-48">
            <Button className="border-2 border-white bg-black mx-auto" color="white">
            <a href="https://github.com/Simp4Hitagi/BNRY-Test"  target="_blank">News API</a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
        </div>          
        </div>
        </article>
    )
}

export default Projectslayout