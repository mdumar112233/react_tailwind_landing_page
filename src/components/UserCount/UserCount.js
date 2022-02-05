import React from 'react';
import CountImage from '../../images/details-2.svg';
import { AiOutlinePlus } from 'react-icons/ai';


const UserCount = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:mt-28  mt-[5rem] mb-36 overflow-x-hidden'>
            <div className="flex flex-col justify-center lg:w-2/5 lg:pl-24 w-[85%] mx-auto">
                <h1 className='text-3xl'>Awesome websites</h1>
                <h3 className='text-3xl font-bold text-[#222222]'>built with tons of love</h3>

                <span className='mt-5 text-[#5e6576]'>Maecenas fringilla quam posuere, pellentesque est nec, gravida turpis. Integer vitae mollis felis. Integer id quam id tellus hendrerit laciniad binfer</span>

                {/* <span className='mt-6 text-[#5e6576]'>Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor velit, sed viverra dui rem dina</span> */}
                <div className='flex sm:flex-row flex-col items-center  mt-10'>
                    <div className=''>
                        <h1 className='text-5xl flex text-[#6168ff]'>1250 <AiOutlinePlus className='text-4xl mt-2' /></h1>
                        <p className='mt-2 text-sm text-[#6168ff]'>Happy Customers</p>
                    </div>
                    <div className='sm:ml-10 mt-10 sm:mt-0'>
                    <h1 className='text-5xl flex text-[#ff5574]'>1380 <AiOutlinePlus className='text-4xl mt-2' /></h1>
                        <p className='mt-2 text-sm text-[#ff5574]'>Issues Solved</p>
                    </div>
                </div>
                
            </div>
            <div className="xl:h-[35rem] xl:w-[55rem] xl:-mr-40 lg:w-auto flex justify-center lg:mt-0 sm:mt-10 mt-0">
                <img src={CountImage} alt="aboutImage" className='w-[85%] lg:w-auto h-[22rem] xl:ml-0 lg:ml-20 ml-0 lg:h-64 xl:h-[35rem]' />
            </div>
        </div>
    );
};

export default UserCount;