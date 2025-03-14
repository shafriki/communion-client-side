import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoPeopleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { PiRadioactiveBold } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";

const JoinUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='mt-20 bg-neutral-900 py-16 text-white'>
            <h1 className='text-4xl text-center'>Why Communion Rocks!</h1>

            {/* cards */}
            <div className='max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-1 mx-5 md:mx-0 md:grid-cols-4 items-center mt-12 gap-10 justify-center '>
                {/* text content */}
                <div className='flex items-center md:items-start flex-col'>
                    <p className='w-5/6 text-center md:text-start'>Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.</p>
                    <button className='btn mt-3 btn-ghost border-none rounded-full px-5 hover:bg-gray-700 text-white'>Why Join Us? <FaArrowRight className='ml-2'/></button>
                </div>

                {/* card one contents */}
                <div className='flex items-start flex-col bg-neutral-700 px-5 py-10 rounded-2xl' data-aos="fade-up">
                <IoPeopleOutline className='text-6xl font-bold'/>
                <h3 className='text-xl my-2'>Unifying Communities</h3>
                <p className='lg w-2/3 mb-4'>Communion bridges diverse religious communities, becoming the social experiment</p>
                <button className='btn rounded-full btn-ghost hover:bg-neutral-500'>Learn More<FaArrowRight /></button>
                </div>

                {/* card two contents */}
                <div className='flex items-start flex-col bg-neutral-700 px-5 py-10 rounded-2xl' data-aos="fade-up">
                <PiRadioactiveBold className='text-6xl font-bold'/>
                <h3 className='text-xl my-2'>Innovative and Fun</h3>
                <p className='lg w-2/3 mb-4'>Experience faith in a fresh way through our interactive features, engaging events, and modern </p>
                <button className='btn rounded-full btn-ghost hover:bg-neutral-500'>Learn More<FaArrowRight /></button>
                </div>

                {/* card three contents */}
                <div className='flex items-start flex-col bg-neutral-700 px-5 py-10 rounded-2xl' data-aos="fade-up">
                <BsGraphUpArrow className='text-6xl font-bold'/>
                <h3 className='text-xl my-2'>Promoting Unity</h3>
                <p className='lg w-2/3 mb-4'>We foster understanding and harmony between different faith communities through.</p>
                <button className='btn rounded-full btn-ghost hover:bg-neutral-500'>Learn More<FaArrowRight /></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default JoinUs;
