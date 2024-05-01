import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeaderSection = () => {
    return (
        <nav className="border-b-8 border-black dark:bg-black sticky top-0 z-50 h-15 flex flex-wrap items-center justify-between mx-auto ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-8">
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-500 md:dark:bg-black dark:border-black">
                <li>
                <a href="/" className="block py-2 px-3 text-white bg-neutral-700 rounded md:bg-transparent md:text-neutral md:p-0 hover:text-neutral-700" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#projects" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-neutral-400 md:p-0 dark:text-white md:dark:hover:text-neutral-500 focus:outline-none focus:ring focus:ring-neutral-300">Projects</a>
                </li>
                <li>
                <a href="#skills" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-neutral-400 md:p-0 dark:text-white md:dark:hover:text-neutral-500 focus:outline-none focus:ring focus:ring-neutral-300">Skills</a>
                </li>
                <li>
                <a href="#about" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-neutral-400 md:p-0 dark:text-white md:dark:hover:text-neutral-500 focus:outline-none focus:ring focus:ring-neutral-300">About</a>
                </li>
                <li>
                <a href="#testimonials" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-neutral-400 md:p-0 dark:text-white md:dark:hover:text-neutral-500 focus:outline-none focus:ring focus:ring-neutral-300">Testimonials</a>
                </li>
                <li>
                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-neutral-400 md:p-0 dark:text-white md:dark:hover:text-neutral-500 focus:outline-none focus:ring focus:ring-neutral-300">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default HeaderSection;
