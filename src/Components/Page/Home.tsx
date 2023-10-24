import React from "react";
import Trustpilot from "../Icon/Trustpilot";

const Home = () => {
  return (
    <section className="">
      <div className="relative">
        <div className="bg-homeBg flex flex-col bg-no-repeat bg-center w-full h-[600px] mt-9 relative rounded-3xl p-10">
          <div className="flex flex-col max-w-[790px] gap-5 p-8">
            <div className="hanover text-4xl text-white max-w-[700px] font-bold">
              Automate any crypto strategy
            </div>
            <div className="poppins text-[#8E8F98] max-w-[709px] text-[18px]">
              Develop a fully automated crypto trading bot, copy trade the
              greatest crypto traders with a proven track record or trade
              yourself using the user-friendly advance terminal.
            </div>
            <div className="pt-2">
              <button className="bg-blue-500 w-[200px] h-[50px] rounded-3xl poppins text-white">
                Get started
              </button>
            </div>
          </div>
          <div className="lg:absolute bottom-0 rounded-3xl lg:max-w-[558px] flex justify-between items-center p-8  max-w-none w-full h-[90px] bg-[#141532]">
            <Trustpilot />
            <div className="max-w-[173px] text-white poppins font-bold text-right">Excellent 4.8 out of 5.0 TrustPilot</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
