import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { Transition } from "@headlessui/react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h3 className = "nav-head">LiamDev</h3>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/" className="nav-item">Home</Link>
                                    <Link to="/blogs" className="nav-item">Blogs</Link>
                                    <Link to="/projects" className="nav-item">Projects</Link>
                                    <Link to="/about" className="nav-item">About</Link>
                                    <Link to="/contact" className="nav-item">Contact</Link>
                                </div>  
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inset-x-0 top-0 z-50 bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="text-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/" className="nav-item block ">Home</Link>
                                <Link to="/blogs" className="nav-item block">Blogs</Link>
                                <Link to="/projects" className="nav-item block">Projects</Link>
                                <Link to="/about" className="nav-item block">About</Link>
                                <Link to="/contact" className="nav-item block">Contact</Link>
                            </div>
                        </div>
                    )}
                    </Transition>
            </nav>
        </div>
    )
}
export default NavBar;