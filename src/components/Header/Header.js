import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import headerImage from '../../images/header-illustration.svg';

const Header = () => {
    return (
        <div className='pt-24 h-[30rem] grid lg:grid-cols-2 grid-cols-1'>

            <div className='mt-10 lg:mt-36 lg:pl-24 text-center lg:text-left'>
                <div className='flex justify-center lg:hidden'>
                <p className='text-[#ff5574] text-sm bg-[#ffe7eb] padding py-1 px-4 pl-6 rounded-2xl font-medium w-60'>Welcome to zinc web agency</p>
                </div>
                <p className='text-[#ff5574] text-sm bg-[#ffe7eb] padding py-1 px-4 pl-6 rounded-2xl font-medium w-60 hidden lg:block'>Welcome to zinc web agency</p>

                <h1 className='mt-2 text-[2.75rem] text-[#222222] font-bold leading-tight w-[90%] mx-auto lg:mx-0 lg:w-3/4'>Zinc creates stylish  and efficient sites</h1>

                <p className='text-[#5e6576] mt-4 text-lg w-11/12 mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, neque ut ultrices sollicitudin</p>

                <div className='lg:flex mt-8 items-center'>
                    <button className='bg-[#ff5574] text-white text-sm   lg:px-8 ml-5 mr-5 sm:ml-0 sm:mr-0 py-4 w-[87%] lg:w-auto  rounded-full'>Offered services</button>
                    <div className='ml-5 flex items-center justify-center mt-4 lg:mt-0'>
                        <FaPaperPlane /> <span className='underline ml-2 cursor-pointer'>Get quote</span>
                    </div>
                </div>   
            </div>
            <div className='mt-10 lg:-mt-10'>
                <img className='lg:h-[40rem] xl:h-[48rem] mx-auto w-[90%] sm:w-[80%] lg:mx-0 lg:w-auto' src={headerImage} alt="" />
            </div>
        </div>
    );
};

export default Header;