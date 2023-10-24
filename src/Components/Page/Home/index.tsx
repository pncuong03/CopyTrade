import React from "react";
import Trustpilot from "../../Icon/Trustpilot";

const Home = () => {
  return (
    <section className="px-10 flex flex-col justify-center items-center">
      <div
        className="2xl:bg-homeBg bg-home_1Bg flex flex-col bg-no-repeat 2xl:bg-left-bottom
          w-full max-w-[1816px] h-[600px] mt-9 relative rounded-3xl p-5 font-bold"
      >
        <div className="flex flex-col max-w-[790px] gap-3 p-8">
          <div className="hanover text-4xl text-white max-w-[700px] font-bold">
            Automate any crypto strategy
          </div>
          <div className="poppins text-[#8E8F98] max-w-[709px] text-[18px]">
            Develop a fully automated crypto trading bot, copy trade the
            greatest crypto traders with a proven track record or trade yourself
            using the user-friendly advance terminal.
          </div>
          <div className="pt-2">
            <button className="bg-blue-500 w-[200px] h-[50px] rounded-3xl poppins text-white">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-5 p-4 mt-5 w-full h-auto bg-[#141532] 2xl:hidden">
        <Trustpilot />
        <div className="lg:text-[20px] text-white poppins font-bold">
          Excellent 4.8 out of 5.0 TrustPilot
        </div>
      </div>
    </section>
  );
};

export default Home;
