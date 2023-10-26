import React from "react";

const Start = () => {
  return (
    //w-full bg-[#e2f093] flex justify-center items-center transition-all md:px-12 overflow-hidden
    //container w-full mx-auto text-center py-[60px] px-4 relative z-[1] bg-getBg
    <section className="w-full bg-getBg flex justify-center items-center py-[60px]  transition-all md:px-12 overflow-hidden bg-no-repeat bg-cover  mt-20">
    <div className="flex flex-col justify-center items-center gap-8  " >
        <h2 className="hanover text-[40px] font-bold leading-[64px] text-neutral-100 text-center">Start 7-day trial on a PRO plan</h2>
     
            <p className="poppins text-lg font-medium  text-neutral-100 max-w-[1033px] text-center">A lifetime Free plan is available.</p>
      

        <div>
            <button className="bg-primary-100 w-[200px] h-[50px] rounded-3xl poppins text-neutral-100 text-base font-semibold">
                Get Started
            </button>
        </div>

    </div>
</section>
  );
};

export default Start;
