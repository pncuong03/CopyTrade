import React from "react";
import Bots from "../../Icon/Bots";
import Volume from "../../Icon/Volume";
import Traders from "../../Icon/Traders";
import Binace from "../../Icon/Binace";
import Huobi from "../../Icon/Huobi";
import Gate from "../../Icon/Gate.";
import OKX from "../../Icon/OKX";
import MEXC from "../../Icon/MEXC";
import BingX from "../../Icon/BingX";
const Manage = () => {
  return (
    <section>
      <div className="h-auto bg-[#456BF1] mt-9 p-10 flex flex-col rounded-xl items-center justify-center gap-10 xl:flex-row xl:items-start">
        <div className="w-1/3 flex justify-center">
          <Traders />
        </div>
        <div className="w-1/3 flex justify-center">
          <Bots />
        </div>
        <div className="w-1/3 flex justify-center">
          <Volume />
        </div>
      </div>

      <div className="h-auto mt-[100px] p-10 flex flex-col gap-10 items-center justify-center xl:flex-row xl:items-start">
        <div className="w-1/2 flex flex-col gap-5 justify-center py-10">
          <p className="hanover text-3xl ">
            Manage all crypto exchange accounts from one place
          </p>
          <p className="poppins text-lg">
            Trade all accounts simultaneously (applies to any single exchange
            per trade)
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-10 xl:flex-row xl:items-start ">
          <div className="flex flex-col w-1/2 items-center justify-center gap-14">
            <Binace />
            <Huobi />
            <Gate />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center gap-16">
            <OKX />
            <MEXC />
            <BingX />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Manage;
