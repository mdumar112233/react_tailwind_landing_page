import React from 'react';
import aboutImage from '../../images/details-1.svg';

const About = () => {
    return (
            <div className='grid  grid-cols-1 lg:grid-cols-2 w-[85%] mx-auto gap-10 lg:mt-28 e_sm:mt-[65rem] mt-[77rem] border-2 border-red-700'>
            <div className="">
                <img src={aboutImage} alt="aboutImage" className='lg:w-auto w-4/5 mx-auto' />
            </div>
            {/* <div className='flex justify-center border-2 border-purple-700 '> */}
            <div className="flex flex-col justify-center border-2 border-red-700 pl-24">
                <h1 className='text-3xl'>Perfect solution</h1>
                <h3 className='text-3xl font-bold text-[#222222]'>for your small business</h3>

                <span className='mt-5 text-[#5e6576]'>Maecenas fringilla quam posuere, pellentesque est nec, gravida turpis. Integer vitae mollis felis. Integer id quam id tellus hendrerit laciniad binfer</span>

                <span className='mt-6 text-[#5e6576]'>Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor velit, sed viverra dui rem dina</span>

                <button className='self-start bg-[#ff5574] px-8 py-2 rounded-full border border-[#ff5574] hover:bg-transparent hover:text-[#ff5574] text-white transition-all mt-5'>Modal</button>
            </div>
            {/* </div> */}
        </div>
    );
};

export default About;