import React from "react";
import Youtube from "../../Icon/Youtube";
import Tiktok from "../../Icon/Tiktok";
import Discord from "../../Icon/Discost";
import Facebook from "../../Icon/Facebook";
import Twitter from "../../Icon/Tweter";

const Footer = () => {
  return (
    <div className="container mx-auto p-10  lato">
      <div className="h-auto  mt-9 flex flex-col items-center justify-between md:flex-row md:items-start gap-8">
        <div className="flex flex-col gap-3 md:items-start items-center">
          <div className="text-[30px] font-bold">LOGO</div>
          <div className="max-w-[544px] text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur. Proin facilisi sed nulla
            aliquam id nisl. Integer sollicitudin ipsum nisi tortor nulla in
            fringilla lectus.{" "}
          </div>
          <div className="flex gap-6 pt-3">
            <Youtube />
            <Tiktok />
            <Discord />
            <Facebook />
            <Twitter />
            <ins />
          </div>
        </div>
        <div className="flex items-center justify-center xl:flex-row xl:items-start gap-5 xl:gap-14 text-black text-[20px]">
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/3">
            <p className="text-[#72728F] text-[16px]">Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/3">
            <p className="text-[#72728F] text-[16px]">Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/3">
            <p className="text-[#72728F] text-[16px]">Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="max-w-full mt-5 border-t border-black"></div>
      <div className="h-auto  mt-9 flex flex-col  items-center justify-between md:flex-row md:items-start gap-5">
        <div className="max-w-[326px]">
          © GamingPlace 2023 copyrights - All Rights Reserved
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <div className="w-[60px] h-[60px]">
            <img src="Daco_5097076 1.png" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="image 72.png" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="76.svg" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="pci-dss-compliant-logo-vector.svg" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="Group 6394.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
