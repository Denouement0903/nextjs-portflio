"use client";
import Image from "next/image";
import umayr from "../assets/About/umayr.JPG"
import joel from "../assets/About/joel.jpg"
import React from "react";


const TestimonialsLayout = ()=> {
    return (
        <div className="container grid lg:grid-cols-3 pl-60 h-screen pt-12">
            {/* Joel */}
            <div className="card card-side">
                <figure>
                <Image
                        className="ml-0 object-cover rounded-xl"
                        src={joel}
                        alt="joel"
                        width={200}
                        height={200}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Joel Mukanya</h2>
                    <h3>- CEO | JT Devs</h3>
                    <p> I will be very delighted to see him get hired as a developer.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                    </div>
                </div>
            </div>
            {/* Innocent */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>Description</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Testimonial</button>
                    </div>
                </div>
            </div>
            {/* Kim-Lee */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>Description</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Testimonial</button>
                    </div>
                </div>
            </div>
            {/* Robbert */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>Description</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Testimonial</button>
                    </div>
                </div>
            </div>
            {/* Niek */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>Description</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Testimonial</button>
                    </div>
                </div>
            </div>
            {/* Umayr */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                <Image
                        className="ml-0 object-cover rounded-xl"
                        src={umayr}
                        alt="umayr"
                        width={200}
                        height={200}
                    />
                </figure>
                <div className="card-body">
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