import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/communion.png'
const Navbar = () => {


    return (
        <div className='bg-white sticky top-0 z-50 text-black w-full backdrop-blur opacity-80 md:py-1'>
         <div className="navbar max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink to='/' className='text-base font-semibold hover:text-blue-700'>Home </NavLink></li>
                    <li>
                    <details>
                    <summary className='text-base font-semibold hover:text-blue-700'>Events</summary>
                    <ul className="p-2">
                        <li className='text-base font-semibold hover:text-blue-700'><NavLink to='/upcoming-events'>Upcoming Events</NavLink></li>
                        <li className='text-base font-semibold hover:text-blue-700'><NavLink to='/create-event'>Create Event</NavLink></li>
                    </ul>
                    </details>
                </li>
                    <li><NavLink to='/about' className='text-base font-semibold hover:text-blue-700'>About</NavLink></li>
                </ul>
                </div>
                <NavLink><img src={logo} alt="logo" className='md:w-48'/></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink to='/' className='text-base font-semibold hover:text-blue-700'>Home </NavLink></li>
                <li>
                    <details>
                    <summary className='text-base font-semibold hover:text-blue-700'>Events</summary>
                    <ul className="p-2">
                        <li className='text-sm font-semibold hover:text-blue-700'><NavLink to='/upcoming-events'>Upcoming Events</NavLink></li>
                        <li className='text-sm font-semibold hover:text-blue-700'><NavLink to='/create-event'>Create Event</NavLink></li>
                    </ul>
                    </details>
                </li>
                <li><NavLink to='/about' className='text-base font-semibold hover:text-blue-700'>About</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/sign-in' className="btn rounded-full bg-black text-white mr-2 hover:bg-blue-700 md:px-6">Sign in</NavLink>

                <NavLink to='/sign-up' className="btn rounded-full bg-black text-white hover:bg-blue-700 md:px-6">Sign up</NavLink>
            </div>
            </div>
        </div>
    );
};

export default Navbar;