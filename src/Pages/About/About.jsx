import React from 'react';
import logo from '../../assets/logo.png'
const About = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <img src={logo} alt="logo" className='w-20 md:w-40' />
            <p className='text-3xl md:text-5xl my-2 font-bold text-blue-700'>CommunionHUb</p>
            <p className='w-4/5 md:w-2/5 text-xs md:text-base text-center mb-10'>Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.</p>
        </div>
    );
};

export default About;