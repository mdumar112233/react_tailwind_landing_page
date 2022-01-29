import React from "react";
import landingPageLogo from "../../images/services-icon-bg-blue.png";
import corporateSiteLogo from "../../images/services-icon-bg-yellow.png";
import onlineShopLogo from "../../images/services-icon-bg-red.png";
import { BiCheck } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { FaSolarPanel } from "react-icons/fa";
import { BsFillGiftFill } from "react-icons/bs";


const Services = () => {
  return (
    <div className="h-[40rem] mt-60 grid lg:grid-cols-3 mx-auto w-11/12">

      <div className="lg:w-80 lg:h-[70%] border border-[#5e6576] pt-12 pl-7 rounded-3xl">
        <div className="bg-services-icon-bg-blue bg-no-repeat w-full h-24 text-center">
          <div className="h-24 flex items-center w-20 justify-center">
            <CgFileDocument className="text-white text-[2.2rem] text-center block" />
          </div>
        </div>
        <h4 className="mt-4 font-medium text-xl">Landing page</h4>
        <p className="text-[#5e6576] mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat.
        </p>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Phasellus vitae metus in felis</span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Fusce pulvinar eu mi ac molestie
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Ut tincidunt vitae enim non vehi
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Curabitur consequat nisl eget</span>
        </div>
      </div>

      <div className="lg:w-80 lg:h-[70%] border border-[#5e6576] pt-12 pl-7 rounded-3xl">
        <div className="bg-services-icon-bg-yellow bg-no-repeat w-full h-24 text-center">
          <div className="h-24 flex items-center w-20 justify-center">
            <FaSolarPanel className="text-white text-[2.2rem] text-center block" />
          </div>
        </div>
        <h4 className="mt-4 font-medium text-xl">Landing page</h4>
        <p className="text-[#5e6576] mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat.
        </p>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Phasellus vitae metus in felis</span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Fusce pulvinar eu mi ac molestie
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Ut tincidunt vitae enim non vehi
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Curabitur consequat nisl eget</span>
        </div>
      </div>


      <div className="lg:w-80 lg:h-[70%] border border-[#5e6576] pt-12 pl-7 rounded-3xl">
        <div className="bg-services-icon-bg-red bg-no-repeat w-full h-24 text-center">
          <div className="h-24 flex items-center w-20 justify-center">
            <BsFillGiftFill className="text-white text-[2.2rem] text-center block" />
          </div>
        </div>
        <h4 className="mt-4 font-medium text-xl">Landing page</h4>
        <p className="text-[#5e6576] mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat.
        </p>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Phasellus vitae metus in felis</span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Fusce pulvinar eu mi ac molestie
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Ut tincidunt vitae enim non vehi
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Curabitur consequat nisl eget</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
