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
    <div className="">
      <div className="h-[30rem] mt-[30rem] lg:mt-80 my-12 lg:mb-0 grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-12 w-[85%] mx-auto pb-24">
      <div className="h-auto border border-[#5e6576] pt-12 pl-7 pr-2 rounded-3xl pb-11">
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

      <div className="h-auto border border-[#5e6576] pt-12 pl-7 pr-2 rounded-3xl pb-11">
        <div className="bg-services-icon-bg-yellow bg-no-repeat w-full h-24 text-center">
          <div className="h-24 flex items-center w-20 justify-center">
            <FaSolarPanel className="text-white text-[2.2rem] text-center block" />
          </div>
        </div>
        <h4 className="mt-4 font-medium text-xl">Corporate site</h4>
        <p className="text-[#5e6576] mt-5">
          Nam eu erat tellused vivamus vitae sem in tortor pharetra vehicula orn
        </p>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Vivaus dignissim sit amet nisi</span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Aliqam a tristique nibh in pretium
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Nunc commodo magna quis blah</span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Lacus fermentum tincidunt</span>
        </div>
      </div>

      <div className="h-auto border border-[#5e6576] pt-12 pl-7 pr-2  rounded-3xl pb-11">
        <div className="bg-services-icon-bg-red bg-no-repeat w-full h-24 text-center">
          <div className="h-24 flex items-center w-20 justify-center">
            <BsFillGiftFill className="text-white text-[2.2rem] text-center block" />
          </div>
        </div>
        <h4 className="mt-4 font-medium text-xl">Online shop</h4>
        <p className="text-[#5e6576] mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat.
        </p>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Sed laoreet blandit mollis ne</span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Mauris non luctus est quisquerm
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">
            Mattis dapibus quisque tristique
          </span>
        </div>
        <div className="flex items-center mt-3">
          <BiCheck className="text-2xl font-extrabold" />
          <span className="text-[#5e6576]">Cursus lacus interdum sollicdn</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
