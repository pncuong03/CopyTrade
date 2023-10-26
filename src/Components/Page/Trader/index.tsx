import React from "react";
import Traders from "../../Icon/Traders";
import Bots from "../../Icon/Bots";
import Volume from "../../Icon/Volume";

export const Trader = () => {
    return (
        // <section className="w-full bg-[#456BF1] container mx-auto py-[60px]  transition-all md:px-12 overflow-hidden bg-no-repeat bg-cover  mt-20">
        //     <div className=" h-auto  p-10 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
        //         <div className="w-1/3 flex justify-center">
        //             <Traders />
        //         </div>
        //         <div className="w-1/3 flex justify-center">
        //             <Bots />
        //         </div>
        //         <div className="w-1/3 flex justify-center">
        //             <Volume />
        //         </div>
        //     </div>
        // </section>

        <section className="w-full mt-40 bg-[#456BF1]  py-[60px]  transition-all md:px-12 overflow-hidden bg-no-repeat bg-cover ">
       <div className=" h-auto max-w-[1920px] mx-auto p-10 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
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
    </section>
    )
}