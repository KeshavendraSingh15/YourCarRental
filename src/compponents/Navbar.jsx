import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className={`flex items-center justify-between gap-6 px-6 md:px-16 lg:px-24 xl:px-32 py-4 
            text-gray-600 border-b border-borderColor relative transition-all
            ${location.pathname === "/" && "bg-light"}
            `}
        >

            {/* Left — Logo */}
            <Link to='/'>
                <img src={assets.logo} alt='logo' className='h-8' />
            </Link>

            {/* Middle — Search Bar */}
            <div className="hidden sm:flex flex-1 justify-center">
                <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-4 pr-10 
                                   focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                    />
                    <img
                        src={assets.search_icon}
                        alt="Search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 cursor-pointer"
                    />
                </div>
            </div>

            {/* Right — Menu Links + Buttons */}
            <div className="hidden sm:flex items-center gap-6">

                {/* Menu Links */}
                {menuLinks.map((link, index) => (
                    <Link key={index} to={link.path} className="hover:text-black">
                        {link.name}
                    </Link>
                ))}

                {/* Dashboard Button */}
                <button
                    className="px-5 py-2 rounded-full bg-gray-900 text-white font-semibold 
                               hover:bg-black transition-all shadow-sm"
                >
                    Dashboard
                </button>

                {/* Login Button */}
                <button
                    className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 font-semibold 
                               hover:bg-gray-100 transition-all"
                >
                    Login
                </button>
            </div>

            {/* Mobile menu button */}
            <img
                src={assets.menu_icon}
                alt="menu"
                className="w-7 h-7 cursor-pointer sm:hidden"
                onClick={() => setOpen(!open)}
            />

            {/* Mobile menu */}
            <div
                className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6 
                transition-transform duration-300 z-50
                ${open ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <img
                    src={assets.close_icon}
                    alt="close"
                    className="w-6 h-6 mb-6 cursor-pointer"
                    onClick={() => setOpen(false)}
                />

                {/* Navigation Links */}
                {menuLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className="block py-2 text-lg hover:text-black"
                        onClick={() => setOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Mobile Search */}
                <div className="mt-6 relative">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-4 pr-10"
                    />
                    <img
                        src={assets.search_icon}
                        alt="Search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 cursor-pointer"
                    />
                </div>

                {/* Mobile Dashboard + Login Buttons */}
                <div className="mt-6 flex flex-col gap-3">

                    <button onClick={() => navigate('/owner')}
                        className="w-full bg-gray-900 text-white text-center font-semibold py-2 rounded-full shadow-sm hover:bg-black transition"
                    >
                        Dashboard
                    </button>

                    <button onClick={() => setShowLogin(true)}
                        className="w-full border border-gray-300 text-gray-700 text-center font-semibold py-2 rounded-full hover:bg-gray-100 transition"
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* FINAL MOBILE FLOATING MENU BUTTON (UPDATED) */}
            <button
                aria-label="Menu"
                onClick={() => setOpen(!open)}
                className="
                    sm:hidden
                    flex items-center justify-center
                    w-10 h-10
                    rounded-full
                    border border-gray-300
                    bg-white
                    shadow-sm
                    hover:bg-gray-100
                    active:scale-95
                    transition-all duration-200
                    fixed bottom-5 right-5
                    z-50
                "
            >
                <img
                    src={open ? assets.close_icon : assets.menu_icon}
                    alt="menu"
                    className="w-5 h-5 opacity-80"
                />
            </button>

        </div>
    )
}

export default Navbar;
