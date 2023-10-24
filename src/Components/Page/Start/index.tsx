import React from "react";

const Start = () => {
  return (
    <section className="mt-20">
      <div className="bg-getBg bg-no-repeat w-[100%]  h-[388px] flex flex-col  text-center justify-center gap-5 p-5">
        <div className="hanover text-3xl text-white">
          Start 7-day trial on a PRO plan
        </div>
        <div className="poppins text-[#8E8F98] ">
          A lifetime Free plan is available.
        </div>

        <div className="pt-8">
          <button className="bg-blue-500 w-[200px] h-[40px] rounded-3xl poppins text-white">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Start;
