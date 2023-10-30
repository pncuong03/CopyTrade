import React from "react";

export const Buy = () => {
  return (
    <section className=" container max-w-[1816px] mx-auto text-center py-[60px] px-4  relative z-[1] flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start mt-20">
      <div className="xl:w-1/2 h-auto rounded-[40px] bg-bgvisa bg-cover bg-no-repeat px-4  sm:p-14 py-10">
        <div className="flex flex-col text-center gap-8 ">
          <div className="flex justify-center">
            <img src="./visa.svg" alt="" className="w-60 " />
          </div>

          <div className="flex flex-col xl:flex-row gap-8 items-center">
            <div className="flex bg-white rounded-[40px] sm:w-[375px] w-[345px] h-14 items-center justify-between p-6">
              <p className="poppins text-lg font-normal leading-[28px] text-[#141532]">
                EUR
              </p>
              <p className="poppins text-lg font-medium  text-black-100">120</p>
            </div>

            <div className="flex bg-white rounded-[40px] sm:w-[375px] w-[345px] h-14 items-center justify-between p-6">
              <p className="poppins text-lg font-normal leading-[28px] text-[#141532]">
                EUR
              </p>
              <p className="poppins text-lg font-medium  text-black-100">120</p>
            </div>
          </div>

          <div className="w-auto bg-white rounded-[40px]  h-14  p-6 py-4  poppins text-start text-lg font-medium leading-[28px] text-[#8E8F98]">
            Bitcoin (BTC) address
          </div>

          <p className="poppins text-lg font-medium text-start -mt-3 text-[#F1F1F1]">
            BTC address must be your and under your full control.
          </p>

          <div className="w-auto  py-4 text-center poppins text-base font-bold  text-white ">
            <button className="bg-[#456BF1] w-full h-[50px] rounded-[40px]">
              Continue
            </button>
          </div>
        </div>
      </div>

      <div className=" flex  flex-col gap-5 font-bold xl:text-end text-center py-32 xl:py-44">
        <h2 className="hanover text-[40px] leading-[64px] ">
          Buy crypto instantly
        </h2>
        <p className="poppins  font-medium leading-[28px] text-[#8E8F98]">
          Buy crypto with a credit/debit card or global banking transfer (SEPA
          and SWIFT).
        </p>
      </div>
    </section>
  );
};
