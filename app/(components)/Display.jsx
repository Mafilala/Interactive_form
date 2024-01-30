import Image from "next/image";
import { useState } from "react";

const Display = ({ cardHolderName, cardNumber, month, year, cvc }) => {
  const formatNumber = (number) => {
    const numberString = String(cardNumber);
    const paddedNumber = numberString.padEnd(16, "0");
    const formattedNumber = paddedNumber.match(/.{1,4}/g)?.join("   ");
    return formattedNumber || "";
  };

  const formatDate = () => {
    const date = month + "/" + year;
    return date;
  };

  return (
    <div className="relative bg-white text-blue-50 h-full flex-1">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/bg-main-desktop.png')` }}
      />
      <div className="absolute inset-y-3/4 w-full h-1/4 sm:h-full sm:inset-y-0 sm:left-2/3 sm:w-1/3 bg-white"></div>

      {/* front card */}
      <div
        className=" z-10 w-[240px] h-[140px] right-[30%] inset-y-[40%] absolute xl:w-[400px] xl:h-[220px] xl:inset-y-[150px] lg:inset-y-[130px] lg:w-[320px] lg:h-[180px] bg-cover bg-center rounded-lg p-4 flex flex-col justify-between md:w-[260px] md:h-[150px] md:inset-y-[150px] sm:w-[200px] sm:h-[120px] sm:inset-y-[160px]"
        style={{ backgroundImage: `url('/images/bg-card-front.png')` }}
      >
        <Image src="/images/card-logo.svg" alt="" width="50" height="30" />
        <div className="flex flex-col">
          <div className="text-sm flex justify-center xl:text-2xl lg:text-xl md:text-sm sm:text-[10px] lg:tracking-wide text-lg ">
            <p className="tracking-widest">{formatNumber(cardNumber)}</p>
          </div>

          <div className="flex justify-between mt-3 text-xs tracking-widest">
            <p className="uppercase">{cardHolderName}</p>
            <p>{formatDate()}</p>
          </div>
        </div>
      </div>

      {/* back card */}
      <div
        className="w-[240px] h-[140px] right-[20%] inset-y-[8%] xl:w-[400px] xl:h-[220px] xl:inset-y-[400px]  lg:w-[320px] lg:h-[180px] absolute lg:inset-y-[330px] md:w-[260px] md:h-[150px]  md:inset-y-[330px] sm:w-[200px] sm:h-[120px] sm:inset-y-[300px] bg-cover bg-center  rounded-lg flex flex-col justify-center items-end"
        style={{ backgroundImage: `url('/images/bg-card-back.png')` }}
      >
        <p className="pr-12">{cvc}</p>
      </div>
    </div>
  );
};

export default Display;
