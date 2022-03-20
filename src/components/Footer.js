import React from 'react';

function Footer(){
    return (
        <footer className="text-center bg-gray-800 text-white">
            <div className="container px-6 pt-6 m-auto">
                <div className="flex text-center justify-center">
                    <a href="https://twitter.com/liamdev5" target="_blank" rel="noreferrer" type="button" className="hover:-translate-y-0.5 transform transition m-auto lg:m-1">
                        <div className="icons8-twitter-circled"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/huulamnguyen/" target="_blank" rel="noreferrer" type="button" className="hover:-translate-y-0.5 transform transition m-auto lg:m-1">
                        <div className="icons8-linkedin-circled"></div>
                    </a>
                    <a href="https://github.com/Huulamnguyen" target="_blank" rel="noreferrer" type="button" className="hover:-translate-y-0.5 transform transition m-auto lg:m-1">
                        <div className="icons8-github"></div>
                    </a>
                    <a href="https://medium.com/@liamdev" target="_blank" rel="noreferrer" type="button" className="hover:-translate-y-0.5 transform transition m-auto lg:m-1">
                        <div className="icons8-medium-monogram"></div>
                    </a>
                </div>
            </div>
            <div className="font-primary text-center p-3">
                © 2022 Copyright:
                <a className="text-whitehite mx-2" href="https://www.linkedin.com/in/huulamnguyen/">Liam Nguyen</a>
            </div>
        </footer>
    )
}
export default Footer;

