import React from 'react';
import HeroImage from '../img/me-hero-image.jpg';

function Hero (){
    return (
        <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
            <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
                <div className="xl:max-w-xl">
                <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={HeroImage} alt="Woman work on the beach" />
                <h1 className="mt-6 text-2xl font-bold font-primary text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                    Hi Everyone,
                    <br className="inline" />
                    <span className="text-[#FF725E]">I'm Liam Nguyen</span>
                </h1>
                <p className="font-primary mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                    <ul>
                        <li>I'm a full-stack software engineer </li>
                        <li>Located in Long Island, New York. </li>
                        <li>Tech Blog, Traveling, and Photography</li>
                    </ul>
                    The technologies that I use:
                    <ul>
                        <li>HTML/CSS, JavaScript, React/Redux</li>
                        <li>Ruby, Rails, Python, Flask, PostgresQL</li>
                    </ul>
                </p>
                <div className="mt-4 space-x-1 sm:mt-6">
                    <a className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition" href="#">Read Blogs</a>
                    <a className="btn btn-secondary" href="#">About</a>
                </div>
                </div>
            </div>
            <div className="hidden relative lg:block 2xl:col-span-2">
                <img className="absolute inset-0 w-full h-full object-cover object-center" src={HeroImage} alt="Woman work on the beach" />
            </div>
    </div>
    )
}
export default Hero;