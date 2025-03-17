import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import logo from '../../../assets/communion.png';
import useAuth from '../../../Hooks/useAuth';
import avatarImg from '../../../assets/user.png';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [userData, setUserData] = useState(null);

    // Fetch user data from API when user is logged in
    useEffect(() => {
        if (user) {
            const fetchUserData = async () => {
                try {
                    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
                        params: { search: user.email }
                    });
                    setUserData(data[0]); // Assuming the first match is the correct user
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };
            fetchUserData();
        }
    }, [user]);

    // Handle Logout
    const handleLogout = () => {
        logOut();
        Swal.fire({
            title: 'Success!',
            text: 'You have logged out successfully.',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            position: 'center'
        });
    };

    return (
        <div className='bg-white sticky top-0 z-50 text-black w-full backdrop-blur opacity-80 md:py-1'>
            <div className="navbar max-w-screen-xl mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/' className='text-base font-semibold hover:text-blue-700'>Home</NavLink></li>
                            <li>
                                <details>
                                    <summary className='text-base font-semibold hover:text-blue-700'>Events</summary>
                                    <ul className="p-2">
                                        <li><NavLink to='/upcoming-events' className='text-sm font-semibold hover:text-blue-700'>Upcoming Events</NavLink></li>
                                        <li><NavLink to='/create-event' className='text-sm font-semibold hover:text-blue-700'>Create Event</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li><NavLink to='/about' className='text-base font-semibold hover:text-blue-700'>About</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/"><img src={logo} alt="logo" className='md:w-48' /></NavLink>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className='text-base font-semibold hover:text-blue-700'>Home</NavLink></li>
                        <li>
                            <details>
                                <summary className='text-base font-semibold hover:text-blue-700'>Events</summary>
                                <ul className="p-2">
                                    <li><NavLink to='/upcoming-events' className='text-sm font-semibold hover:text-blue-700'>Upcoming Events</NavLink></li>
                                    <li><NavLink to='/create-event' className='text-sm font-semibold hover:text-blue-700'>Create Event</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to='/about' className='text-base font-semibold hover:text-blue-700'>About</NavLink></li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center space-x-4">
                            {/* User Profile Image */}
                            <img 
                                alt={user.displayName || "User"} 
                                src={userData?.image || user.photoURL || avatarImg} 
                                className="w-10 h-10 rounded-full border border-gray-300" 
                            />
                            {/* Logout Button */}
                            <button onClick={handleLogout} className="btn bg-red-600 text-white rounded-full hover:bg-red-700 px-4">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <NavLink to='/sign-in' className="btn rounded-full bg-black text-white mr-2 hover:bg-blue-700 md:px-6">
                                Sign in
                            </NavLink>
                            <NavLink to='/sign-up' className="btn rounded-full bg-black text-white hover:bg-blue-700 md:px-6">
                                Sign up
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
