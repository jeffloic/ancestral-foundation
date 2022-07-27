import React, { useState } from 'react'

function Navbar() {
    
    const [burger, setBurger] = useState(false)

    const handleToggle = () => {
        setBurger(!burger)
      }
    return (
    <div>

        <section className="py-8 px-4 lg:px-10 bg-black">
            <nav className="relative flex justify-between items-center">
                <a className="text-2xl text-yellow-500 font-bold" href="index.html">Not2Busy</a>
                <div className="lg:hidden">
                    <button className="p-2 burger" onClick={handleToggle}>
                    <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
                        <rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect>
                    </svg>
                    </button>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <ul className="flex items-center text-white space-x-10">
                    <li><a className="text-white font-bold text-lg" href="index.html">Home</a></li>
                    <li><a className="text-white font-bold text-lg" href="about.html">Area Of Interest </a></li>
                    <li><a className="text-white font-bold text-lg" href="features.html">About</a></li>
                    <li><a className="text-white font-bold text-lg" href="portfolio.html">Our Work</a></li>
                    <li><a className="text-white font-bold text-lg" href="blog.html">Blog</a></li>
                    <li><a className="text-white font-bold text-lg" href="faq.html">Contact</a></li>
                    </ul>
                </div>
                <div className="hidden lg:block"><a className="inline-block px-12 py-4 text-black bg-yellow-500 font-bold hover:bg-yellow-600 rounded-full" href="#">Donate</a></div>
                </nav>
                <div className="hidden navbar-menu relative z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80">
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-white overflow-y-auto">
                    <div className="flex items-center mb-16 pr-6"><a className="ml-10 text-2xl text-gray-800 font-bold" href="index.html"><img className="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto"/></a></div>
                    <div>
                        <ul>
                        <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="index.html">Home</a></li>
                        <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="about.html">About Us</a></li>
                        <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="features.html">Features</a></li>
                        <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="portfolio.html">Our Work</a></li>
                        <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="blog.html">Blog</a></li>
                        <li className="mb-1 px-10"><a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="faq.html">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="mt-auto px-10"></div>
                    <div className="pt-6"><a className="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#">Sign in</a><a className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign up</a></div>
                    <p className="mt-6 mb-4 text-lg text-center"><span>2022 © Not2Busy. All rights reserved.</span></p>
                    </nav>
                </div>
                </div>
            </section>

    </div>
  )
}

export default Navbar