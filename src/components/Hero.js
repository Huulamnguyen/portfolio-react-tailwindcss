import React from 'react';
import HeroImage from '../img/me-hero-image.jpg';
import {CheckCircleIcon} from '@heroicons/react/solid'
import {Link} from 'react-router-dom';

function Hero (){
    return (
        <div className="grid lg:grid-cols-2 lg:m-5 2xl:grid-cols-4">
            <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-5 lg:py-24 lg:max-w-full xl:mx-auto 2xl:col-span-2">
                <div className="xl:max-w-xl">
                <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={HeroImage} alt="Woman work on the beach" />
                <h1 className="mt-6 text-2xl font-bold font-primary text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-6xl">
                    Hi Everyone,
                    <br className="inline" />
                    <span className="text-[#FF725E]">I'm Liam Nguyen</span>
                </h1>
                <div className="font-primary mt-2 text-gray-600 sm:mt-4 sm:text-xl xl:text-3xl">
                    <ul>
                        <li> <CheckCircleIcon className="w-7 h-7 m-1 inline text-[#FF725E]"/>I'm a full-stack software engineer </li>
                        <li> <CheckCircleIcon className="w-7 h-7 m-1 inline text-[#FF725E]"/>Located in Long Island, New York. </li>
                        <li> <CheckCircleIcon className="w-7 h-7 m-1 inline text-[#FF725E]"/>Tech Blog, Traveling, and Photography</li>
                    </ul>
                    <br></br>
                    The technologies that I use:
                    <ul>
                        <li><CheckCircleIcon className="w-7 h-7 m-1 inline text-[#FF725E]"/>HTML/CSS, JavaScript, React/Redux</li>
                        <li><CheckCircleIcon className="w-7 h-7 m-1 inline text-[#FF725E]"/>Ruby, Rails, Python, Flask, PostgresQL</li>
                    </ul>
                </div>
                <div className="mt-4 space-x-1 sm:mt-6">
                    <Link className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition" to="/blogs">Read Blogs</Link>
                    <Link className="btn btn-secondary" to="/about">About</Link>
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
