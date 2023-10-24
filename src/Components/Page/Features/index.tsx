import React from "react";
import { SmartIcon } from "../../Icon/SmartIcon";
import DCAIcon from "../../Icon/DCAIcon";
import PariIcon from "../../Icon/PariIcon";
import CryptoIcon from "../../Icon/CryptoIcon";
import MultipleIcon from "../../Icon/MultipleIcon";
import Arbi from "../../Icon/ArbitrageIcon";

export const Features = () => {
  return (
    <section className="max-w-[1920px] p-8 mt-20">
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
        <div className="flex">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-10">
            <div className="w-auto ">
              <h2 className="hanover text-[32px] font-bold leading-[48px] ">
                Smart Trading
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Adding and updating orders (Take Profit, Stop Loss, and Trailing
                Stops) in a flexible manner for smart trading. May run as many
                cryptocurrency trading accounts at once.
              </p>

              <div className="poppins text-lg font-semibold text-primary-100 mt-10">
                Learn more
              </div>
            </div>
            <div className="mt-10 mx-auto">
              <DCAIcon/>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#F2F4FB] xl:rounded-tr-3xl ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-11 ">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] ">
                Pairs Trading
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Easily switch from Classic Trading to Spread Trading by
                adjusting the strategy type in the terminal after choosing the
                exchange.
              </p>

              <div className="poppins text-lg font-semibold text-primary-100 mt-10">
                Learn more
              </div>
            </div>
            <div className="mt-10 mx-auto">
              <PariIcon/>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#F2F4FB] ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-10">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] ">
                DCA bot
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                By employing DCA strategy, you can reduce market volatility,
                enhance the price at which you enter the overall position and
                simplifies the process.
              </p>

              <div className="text-lg font-semibold text-primary-100 mt-4">
                Learn more
              </div>
            </div>
            <div className="mt-10 mx-auto">
              <SmartIcon />
            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-10">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] ">
                Crypto Portfolio Tracker
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Tool for tracking bitcoin portfolios that is simple, secure, and
                exact. Link your exchange APIs to monitor your balances
                automatically.
              </p>

              <div className="text-lg font-semibold text-primary-100 mt-4">
                Learn more
              </div>
            </div>
            <div className="mt-10 mx-auto">
              <CryptoIcon/>
            </div>
          </div>
        </div>

        <div className="flex-1   xl:rounded-br-3xl ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-10">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] ">
                Multiple Account Management
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                Using multiple APIs simultaneously in one transaction helps
                crypto accounts exchange easily, either manually or
                automatically with bots.
              </p>

              <div className="text-lg font-semibold text-primary-100 mt-4">
                Learn more
              </div>
            </div>
            <div className="mt-10 mx-auto">
              <MultipleIcon/>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#F2F4FB]  xl:rounded-br-3xl ">
          <div className="flex flex-col md:flex-row item-center xl:text-start text-center gap-5 p-11">
            <div className="w-auto">
              <h2 className="hanover text-[32px] font-bold leading-[48px] ">
                Arbitrage Trading
              </h2>
              <p className="poppins text-lg font-medium leading-[28px] text-[#8E8F98] ">
                With our advanced and user-friendly Arbitrage terminal. You will
                be able to easily discover arbitrage opportunities and make
                trades that instantly outperform the market.
              </p>

              <div className="text-lg font-semibold text-primary-100 mt-4">
                Learn more
              </div>
            </div>
            <div className="mt-10 mx-auto">
              <Arbi/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
