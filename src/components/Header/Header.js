import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import headerImage from '../../images/header-illustration.svg';

const Header = () => {
    return (
        <div className='pt-24 h-[30rem] grid grid-cols-2 grid-flow-row lg:grid-rows-1'>
            <div className='mt-36 pl-24'>
                <p className='text-[#ff5574] text-sm bg-[#ffe7eb] padding py-1 px-4 pl-6 rounded-2xl font-medium w-60'>Welcome to zinc web agency</p>

                <h1 className='mt-2 text-[2.75rem] text-[#222222] font-bold leading-tight'>Zinc creates stylish <br /> and efficient sites</h1>

                <p className='text-[#5e6576] mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, neque ut ultrices sollicitudin</p>

                <div className='flex mt-8 items-center '>
                    <button className='bg-[#ff5574] text-white text-sm px-8 py-4 rounded-full'>Offered services</button>
                    <div className='ml-5 flex items-center'>
                        <FaPaperPlane /> <span className='underline ml-2 cursor-pointer'>Get quote</span>
                    </div>
                </div>   
            </div>
            <div className='-mt-20'>
                <img className='lg:h-[40rem] xl:h-[48rem] min-w-48' src={headerImage} alt="" />
            </div>
        </div>
    );
};

export default Header;