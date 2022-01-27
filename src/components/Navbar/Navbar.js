import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [scrollPositionX, setScrollPositionX] = useState(0);
  // console.log(scrollPositionY);
  // console.log(window.pageXOffset);

  const newValue = window.scrollX;
  console.log(newValue);

  const handleScroll = () => {
    const positionY = window.pageYOffset;
    setScrollPositionY(positionY);
  };

  // const handleScrollTwo = () => {
  //   window.scrollBy(100, 100)
  //   setScrollPositionX(window.pageXOffset);
  // };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div
      className={
        scrollPositionY > 13
          ? "flex  justify-between mr-24 fixed w-[100%] shadow-md h-10 mt-4"
          : "flex justify-between  mt-4 w-full shadow-md md:shadow-inherit md:mt-7 fixed h-10 md:h-0"
      }
    >
      <div className={scrollPositionY > 13 ? "ml-24 -mt-1" : 'ml-24 -mt-1 md:mt-1'}>
        <img className="h-8 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className={scrollPositionY > 13 ? "mr-24" : 'mr-24'}>
        <div className="hidden md:block">
        <ul className="flex space-x-7 text-[#5e6576] transition-all text-sm">
          <li className="hover:text-[#6168ff] cursor-pointer text-[#6168ff]">
            <a href="">Home</a>
          </li>
          <li className="hover:text-[#6168ff] cursor-pointer">
            <a href="">Services</a>
          </li>
          <li className="hover:text-[#6168ff] cursor-pointer">
            <a href="">Projects</a>
          </li>
          <li className="hover:text-[#6168ff] cursor-pointer">
            <a href="">Pricing</a>
          </li>
          <button className="bg-[#6168ff] text-white px-5 py-[4px] -mt-[6px] rounded-2xl border border-[#6168ff] hover:bg-transparent hover:text-[#6168ff] hover:transition-all ml-5 text-base">
            Get quote
          </button>
        </ul>
        </div>
        <div className="block md:hidden">
          <AiOutlineMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
