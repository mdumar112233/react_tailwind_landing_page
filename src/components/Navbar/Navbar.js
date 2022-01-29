import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [menuToggle, setMenuToggle] = useState(false);
  console.log(menuToggle);

  const handleScroll = () => {
    const positionY = window.pageYOffset;
    setScrollPositionY(positionY);
  };

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
          ? "flex  justify-between mr-24 fixed w-[100%] shadow-md h-14 mt-0 bg-white "
          : "flex justify-between  mt-4 w-full shadow-md md:shadow-inherit md:mt-7 fixed h-10 md:h-0"
      }
    >
      <div
        className={
          scrollPositionY > 13
            ? "ml-5 sm:ml-14 md:ml-16 lg:ml-24 mt-3 md:mt-3 lg:mt-3"
            : "ml-5 sm:ml-14 md:ml-16 lg:ml-24  -mt-1 md:mt-3 lg:mt-3"
        }
      >
        <img
          className="h-5 sm:h-6 md:h-8 sm:mt-1 mt-2 md:mt-0 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div
        className={
          scrollPositionY > 13
            ? "mr-5 sm:mr-14 md:mr-16 lg:mr-24 mt-3 sm:mt-3  md:mt-7 lg:mt-[1.85rem]"
            : "mr-5 sm:mr-14 md:mr-16 lg:mr-24 -mt-1 md:mt-6 lg:mt-6"
        }
      >
        <div
          className="block md:hidden"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          <AiOutlineMenu className="text-2xl" />
        </div>
        <div
        // className="hidden md:block"
        >
          <ul
            className={
              menuToggle
                ? "md:flex md:space-x-7 md:-space-y-1 space-y-4 text-[#5e6576] transition-all text-sm flex-none md:items-center bg-white absolute md:static w-full h-[27rem] md:h-0  left-0 mt-2 pl-4 md:mt-0 pt-5 md:pt-0"
                : "md:flex md:space-x-7 md:-space-y-1 space-y-4 text-[#5e6576] text-sm flex-none md:items-center bg-white h-[27rem] md:h-0  absolute md:static w-full  top-10 left-[50.9rem] pl-4 transition-all"
            }
          >
            <li className="hover:text-[#6168ff] cursor-pointer text-[#6168ff]  -mt-1">
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
            <button className="bg-[#6168ff] text-white px-5 py-[4px] -mt-[6px] rounded-2xl border border-[#6168ff] hover:bg-transparent hover:text-[#6168ff] hover:transition-all ml-0 md:ml-5 text-base">
              Get quote
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
