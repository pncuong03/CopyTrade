import React from "react";
import NextIcon from "../../Icon/NextIcon";

export const Features = () => {
  return (
    <section className="container max-w-[1850px] mx-auto text-center py-[60px] px-4 relative z-[1] mt-20">
      <div className="flex flex-col items-center text-center gap-4 ">
        <h2 className="hanover text-[40px] font-bold leading-[64px]">
          Features
        </h2>
        <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] xl:w-[1078px]">
          With a large selection of cryptocurrency trading tools for automatic
          trading on the biggest cryptocurrency exchanges , WunderTrading is a
          reliable cloud-based platform.
        </p>
      </div>

      <div className="xl:grid items-center grid-cols-2 border rounded-3xl mt-10 ">
        <div className="flex ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-11">
            <div className="w-auto ">
              <h2 className="hanover text-[32px] font-bold leading-[48px] py-2">
                Smart Trading
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Adding and updating orders (Take Profit, Stop Loss, and Trailing
                Stops) in a flexible manner for smart trading. May run as many
                cryptocurrency trading accounts at once.
              </p>

              <div className="flex mt-9 gap-3 items-center justify-center xl:justify-start">
                <p className="text-lg font-semibold text-primary-100">Learn more</p>
                <NextIcon />
              </div>
            </div>
            <div className="mt-10 mx-auto w-[50%]">
              <img src="/Smart.png" alt="" />
            </div>
          </div>
        </div>
       
        <div className="flex bg-[#F2F4FB] xl:rounded-tr-3xl">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-11 ">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] py-2">
                Pairs Trading
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Easily switch from Classic Trading to Spread Trading by
                adjusting the strategy type in the terminal after choosing the
                exchange.
              </p>

              <div className="flex mt-9 gap-3 items-center justify-center xl:justify-start">
                <p className="text-lg font-semibold text-primary-100">Learn more</p>
                <NextIcon />
              </div>
            </div>
            <div className="mt-10 mx-auto w-[50%]">
            <img src="/Pairs.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex xl:bg-[#F2F4FB] ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-11">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] py-2">
                DCA bot
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                By employing DCA strategy, you can reduce market volatility,
                enhance the price at which you enter the overall position and
                simplifies the process.
              </p>

              <div className="flex mt-9 gap-3 items-center justify-center xl:justify-start">
                <p className="text-lg font-semibold text-primary-100">Learn more</p>
                <NextIcon />
              </div>
            </div>
            <div className="mt-10 mx-auto w-[50%]">
            <img src="/DCA.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex xl:bg-white bg-[#F2F4FB]">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-11">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] py-2">
                Crypto Portfolio Tracker
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Tool for tracking bitcoin portfolios that is simple, secure, and
                exact. Link your exchange APIs to monitor your balances
                automatically.
              </p>

              <div className="flex mt-9 gap-3 items-center justify-center xl:justify-start">
                <p className="text-lg font-semibold text-primary-100">Learn more</p>
                <NextIcon />
              </div>
            </div>
            <div className="mt-10 mx-auto w-[50%]">
            <img src="/Crypto-1.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex   xl:rounded-br-3xl ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-11">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] py-2">
                Multiple Account Management
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Using multiple APIs simultaneously in one transaction helps
                crypto accounts exchange easily, either manually or
                automatically with bots.
              </p>

              <div className="flex mt-9 gap-3 items-center justify-center xl:justify-start">
                <p className="text-lg font-semibold text-primary-100">Learn more</p>
                <NextIcon />
              </div>
            </div>
            <div className="mt-10 mx-auto w-[50%]">
            <img src="/Multiple.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex bg-[#F2F4FB]  xl:rounded-br-3xl ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-20">
            <div className="w-auto ">
              <h2 className="hanover text-[32px] font-bold leading-[48px] py-2">
                Arbitrage Trading
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                With our advanced and user-friendly Arbitrage terminal. You will
                be able to easily discover arbitrage opportunities and make
                trades that instantly outperform the market.
              </p>

              <div className="flex mt-9 gap-3 items-center justify-center xl:justify-start">
                <p className="text-lg font-semibold text-primary-100">Learn more</p>
                <NextIcon />
              </div>
            </div>
            <div className="mt-10 mx-auto w-[50%]">
            <img src="/Arbitrage.png" alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
