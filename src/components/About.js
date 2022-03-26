import React from 'react';
import AboutHeader from "../img/about-header.png";
import Avatar from '../img/avatar.jpg';
import educationImg from "../img/icons8-education-64.png"
import experienceImg from "../img/icons8-experience-64.png"

function About(){
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto flex flex-col font-primary">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="resume" className="object-cover object-center h-full w-full" src={AboutHeader} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <img alt="Huu Lam Nguyen Avatar" className="rounded-lg" src={Avatar} />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font m-auto text-gray-900 text-lg">Huu Lam Nguyen</h2>
                                <div className="w-12 h-1 bg-[#FF725E] rounded mt-2 mb-4"></div>
                                <p className="text-base">
                                I'm a software Engineer. 
                                Being a software engineer to me is being a problem solver. 
                                Email: liamnguyen.swe@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg py-8 mx-auto">
                                Becoming a software engineer to me, a problem solver. A person who is willing to learn and keep learning since technology is an industry 
                                that keeps changing infinitely over time. We're all living in a time where technology involves in every life aspects. Therefore, building or being 
                                a part of a meaningful application that helps our community become better and better is one of my main objectives in this career.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex flex-col font-primary">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 mt-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <img alt="Huu Lam Nguyen Avatar" className="rounded-lg" src={educationImg} />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg uppercase">Education</h2>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <div className="mx-auto py-4">
                                <p className="leading-relaxed text-2xl py-1 mx-auto">
                                    Adelphi University, Garden City New York
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Master of Science in Business Analysis
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Graduated: December 2020. GPA: 3.59/4
                                </p>
                            </div>
                            <div className="mx-auto py-4">
                                <p className="leading-relaxed text-2xl py-1 mx-auto">
                                    Flatiron School, New York
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Computer Software Engineering Program
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Graduated: April, 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto flex flex-col font-primary">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 mt-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <img alt="Huu Lam Nguyen Avatar" className="rounded-lg" src={experienceImg} />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg uppercase">experience</h2>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <div className="mx-auto py-4">
                                <p className="leading-relaxed text-2xl py-1 mx-auto">
                                    Flatiron Software Engineering LIVE program
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Position: Software Engineer in training
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Date: December 2021 - April 2022
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                Building an e-commerce and inventory system Front-end application using React, API Back end by Sinatra and Ruby on Rails. 
                                Storing information in databases using SQL and Object Relational Mappers.
                                </p>
                            </div>
                            <div className="mx-auto py-4">
                                <p className="leading-relaxed text-2xl py-1 mx-auto">
                                    Forward Insight LLC 
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Technical Support & Data Analyst - Remote 
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Date: January 2021 - April 2022
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                Product/software testing evaluation for the Forward Insight Platform (Mobile and Desktop). 
                                Identify software bugs and maintain a resolution list. Make recommendations for product improvement, web platform, and data strategies. 
                                Working closely with founder and product leader to ensure the quality of work. 
                                </p>
                            </div>
                            <div className="mx-auto py-4">
                                <p className="leading-relaxed text-2xl py-1 mx-auto">
                                    Adelphi University 
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Data Analyst (The Office of International Services) 
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                    Date: February 2020 – December 2020
                                </p>
                                <p className="leading-relaxed text-lg py-1 mx-auto">
                                Maintain specific student information data to ensure clean and accurate data, 
                                necessary for appropriate research and statistical reporting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About;