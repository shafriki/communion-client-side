import React from 'react';
import leftImg from '../../../assets/cone.avif';
import rightImg from '../../../assets/ctwo.avif';
import { PiStarFourFill } from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Conversation = () => {
    return (
        <div className='mt-20 max-w-screen-xl mx-auto px-4'>
            {/* main content */}
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 items-center'>
                
                {/* left side */}
                <div className='md:col-span-7 text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Join the Conversation</h1>
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-500 mb-6'><PiStarFourFill className='inline-block'/> Build Connections</h1>
                    <img src={leftImg} alt='Left' className='mt-4 w-full rounded-lg' data-aos='fade-up' data-aos-duration='1000' />
                </div>

                {/* right side */}
                <div className='md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left'>
                    <p className='text-lg mb-4'>Discover a vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.</p>
                    <button className='btn bg-gradient-to-r from-blue-900 to-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition'>Join Conversations</button>
                    <img src={rightImg} alt='Right' className='mt-4 w-full h-auto md:h-[30rem] rounded-lg' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' />
                </div>
            </div>

            {/* Stats Section */}
            <div className='flex flex-col md:flex-row items-center mt-10 justify-between text-center md:text-left'>
                <div className='mb-6 md:mb-0'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Where Connections Thrive <br className='hidden md:block'/> and Ideas Flourish <span className='text-blue-700'>✦ 2x</span></h1>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-auto'>
                    <div className='bg-amber-50 rounded-xl flex items-center gap-3 p-4'>
                        <p className='text-4xl'>⦿</p>
                        <p className='text-lg'>Happy <br />Community</p>
                    </div>
                    <div className='bg-amber-50 rounded-xl flex items-center gap-3 p-4'>
                        <p className='text-4xl'>⦿</p>
                        <p className='text-lg'>210% Boost <br />in Engagement</p>
                    </div>
                    <div className='bg-amber-50 rounded-xl flex items-center gap-3 p-4'>
                        <p className='text-4xl'>⦿</p>
                        <p className='text-lg'>172+ Ranked <br />Communities</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conversation;
