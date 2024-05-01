"use client";
import Image from "next/image";
import umayr from "../assets/Testimonials/umayr.png"
import joel from "../assets/Testimonials/joel.jpg"
import kim from "../assets/Testimonials/kim.jpeg"
import konke from "../assets/Testimonials/konke.jpeg"
import john from "../assets/Testimonials/john.png"
import luntu from "../assets/Testimonials/luntu.png"
import React from "react";


const TestimonialsLayout = ()=> {
    return (
        <div className="testimonials container grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pl-4 md:pl-8 lg:pl-60">
            {/* Joel */}
            <div className="card card-side mx-20">
                <figure>
                    <Image
                        className="ml-0 object-cover rounded-xl"
                        src={joel}
                        alt="joel"
                        width={200}
                        height={200}
                    />
                </figure>
                <div className="card-body bg-black lg:w-full w-5/6">
                    <h2 className="card-title">Joel Mukanya</h2>
                    <h3>- CEO | JT Devs</h3>
                    <p> I will be very delighted to see him get hired as a developer.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"></button>
                    </div>
                </div>
            </div>
            {/* Innocent */}
            <div className="card card-side bg-base-100 shadow-xl mx-20">
                <figure>
                <Image
                        className="ml-0 object-cover rounded-xl"
                        src={konke}
                        alt="konke"
                        width={200}
                        height={200}
                    />
                </figure>
                <div className="card-body bg-black lg:w-full w-5/6">
                    <h2 className="card-title">Konke Malindi</h2>
                    <h3>- Frontend Engineer</h3>
                    <p>Deno is like a sponge, constantly absorbing knowledge.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                    </div>
                </div>
            </div>
            {/* Kim-Lee */}
            <div className="card card-side bg-base-100 shadow-xl mx-20">
                <figure>  
                    <Image
                        className="ml-0 object-cover rounded-xl"
                        src={kim}
                        alt="kim-lee"
                        width={200}
                        height={200}
                    /></figure>
                <div className="card-body bg-black lg:w-full w-5/6">
                    <h2 className="card-title">Kim-Lee Scott</h2>
                    <h3>- HR Personel | DataBalk</h3>
                    <p>Deno is an incredibly hard worker and a great communicator which makes him a pleasure to work with. </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                    </div>
                </div>
            </div>
            {/* Robbert */}
            <div className="card card-side bg-base-100 shadow-xl mx-20">
                <figure>
                <Image
                        className="ml-0 object-cover rounded-xl"
                        src={john}
                        alt="john"
                        width={200}
                        height={200}
                    />
                </figure>
                <div className="card-body bg-black lg:w-full w-5/6">
                    <h2 className="card-title">John-Bruce Noad</h2>
                    <h3>- QA Tester | Boldr</h3>
                    <p>Deno is a self-confident and determined individual. Once he sets his mind to something, it is near impossible to shift his course.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                    </div>
                </div>
            </div>
            {/* Niek */}
            <div className="card card-side bg-base-100 shadow-xl mx-20">
                <figure>
                <Image
                        className="ml-0 object-cover rounded-xl"
                        src={luntu}
                        alt="luntu"
                        width={200}
                        height={200}
                    />
                </figure>
                <div className="card-body bg-black lg:w-full w-5/6">
                    <h2 className="card-title">Luntu Sogeyana</h2>
                    <h3>- Frontend Engineer | DataBalk</h3>
                    <p>Deno is a reliable person who is not turn down a fellow coder's cry for help when they need it</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                    </div>
                </div>
            </div>
            {/* Umayr */}
            <div className="card card-side bg-base-100 shadow-xl mx-20 mb-28">
                <figure>
                <Image
                        className="ml-0 object-cover rounded-xl"
                        src={umayr}
                        alt="umayr"
                        width={200}
                        height={200}
                    />
                </figure>
                <div className="card-body bg-black lg:w-full w-5/6">
                    <h2 className="card-title">Umayr Nordien</h2>
                    <h3>- Software Development Intern | VOSS</h3>
                    <p>I know I can depend on Deno to collaborate with on both large scale projects and smaller casual ones</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Testimonial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsLayout