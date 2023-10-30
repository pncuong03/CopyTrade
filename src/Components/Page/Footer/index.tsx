import React from "react";
import Youtube from "../../Icon/Youtube";
import Tiktok from "../../Icon/Tiktok";
import Discord from "../../Icon/Discost";
import Facebook from "../../Icon/Facebook";
import Twitter from "../../Icon/Tweter";

const Footer = () => {
  return (
    <div className="container max-w-[1600px] mx-auto p-10">
      <div className="h-auto  mt-9 flex flex-col items-center justify-between md:flex-row md:items-start gap-10">
        <div className="flex flex-col gap-3 md:items-start items-center">
          <div className="text-[30px] font-bold text-neutral-400 hanover">COPYTRADING</div>
          <div className="max-w-[544px] text-center md:text-start font-medium poppins">
          The only trading tool you will need.
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
        <div className="flex justify-center xl:flex-row xl:items-start gap-5 xl:gap-20 text-black text-[20px] poppins">
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/2">
            <p className="text-[#72728F] text-[14px] font-bold">Buy crypto</p>
           
          </div>
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-3/4 text-neutral-400 text-[16px] font-medium poppins">
            <p className="text-[#72728F] text-[14px] font-bold">Features</p>
            <p>Smart Trading</p>
            <p>Pair Trading</p>
            <p>DCA Bot</p>
            <p>Crypto Portfolio Tracker</p>
            <p>Multiple Account Management</p>
            <p>Arbitrage Trading</p>
          </div>
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/4">
            <p className="text-[#72728F] text-[14px] font-bold">Blog</p>
            
          </div>
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/4">
            <p className="text-[#72728F] text-[14px] font-bold">Contact</p>
          
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
