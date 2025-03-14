import React from 'react';
import TopImg from '../../../assets/top-img-left.png'
import ImgOneL from '../../../assets/left-image-one.png'
import ImgTwoL from '../../../assets/left-img-two.png'
import ImgThreeL from '../../../assets/left-img-three.png'
import ImgOneR from '../../../assets/oneR.jpg'
import ImgTwoR from '../../../assets/twoR.jpg'
import ImgThreeR from '../../../assets/threeR.jpg'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            {/* main title */}
            <div className='flex flex-col items-center mt-5'>
                <h1 className='text-3xl w-2/4 md:text-6xl text-center font-bold mb-2'>Connect Communities</h1>
                <p className='text-sm w-3/4 md:text-lg text-center text-gray-600'>Bridging gaps between faiths with tech and a dash of fun!</p>
            </div>

            {/* banner */}
            <div className='flex items-center md:items-start mt-12'>
                {/* left side */}
                <div className='flex items-center md:items-start flex-col'>
                    <div className='flex flex-col items-start md:mb-3'>
                        <img src={TopImg} alt="top-image" />
                        <div className='flex items-center gap-2'>
                            <p className='text-2xl md:text-5xl font-bold'>Unite, Innovate,</p>
                            <img src={ImgOneL} alt="imageOne" className='w-2/7 md:w-2/10'/>
                        </div>
                    </div>

                    <div className='flex flex-col items-center md:items-start md:mb-3'>
                        <div className='flex items-center gap-2'>
                        <img src={ImgTwoL} alt="imageTwo" className='w-1/4 md:w-1/7'/>
                        <p className='text-2xl md:text-5xl font-bold'>Connect, Inspires</p>                      
                        </div>
                    </div>

                    <div className='flex flex-col items-center md:items-start'>
                        <div className='flex items-center gap-2'>
                            <p className='text-2xl md:text-5xl font-bold'>Together</p>
                            <img src={ImgThreeL} alt="imageThree" className='w-3/5 md:full'/>
                        </div>
                    </div>

                    <div>
                    <p className='text-justify mx-5 md:mx-0 text-xs md:text-base md:w-2/6 mt-3'>Join us to be part of a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before!</p>
                    </div>

                    <NavLink to='/upcoming-events'>
                    <button className='btn mb-52 md:mb-0 rounded-full mt-5 bg-gray-600 text-white px-10 hover:bg-gray-500'>Explore Events<FaArrowRight />
                    </button>
                    </NavLink>

                </div>
                

                {/* right side images */}
                <div className='flex items-center'>
                <img src={ImgOneR} alt="" className="w-20 md:w-44 absolute md:top-[20rem] md:right-[40rem] right-[16rem] top-[41rem] h-30 md:h-80 rounded-full object-cover" />
                <img src={ImgTwoR} alt="" className="w-20 md:w-44 absolute md:top-[17rem] md:right-[26rem] right-[9rem] top-[40rem] h-30 md:h-80 rounded-full object-cover" />
                <img src={ImgThreeR} alt="" className="w-20 md:w-44 absolute md:top-[14rem] md:right-[12rem] h-30 md:h-80 right-[2rem] top-[39rem] rounded-full object-cover" />

                </div>
            </div>
        </div>
    );
};

export default Hero;