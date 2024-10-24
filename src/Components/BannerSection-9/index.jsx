import React from 'react';
import lady1 from './assets/lady1.png';
import lady2 from './assets/lady2.png';

const BannerSec9 = () => {
  return (
    <div
      className="max-w-7xl h-[532px] mx-auto relative bg-cover bg-center font-poppins mt-64"
      style={{ backgroundImage: `url(${lady2})` }}
    >
      <div className="flex flex-row w-full border-2 border-black">
        {/* First Div */}
        <div className="w-6/12 absolute -top-[10%] left-5 flex items-center justify-center">
          <img src={lady1} alt="" className="h-[517px] w-[513px]" />
        </div>

        {/* Second Div */}
        <div className="w-6/12 absolute top-0 right-10 flex flex-col p-20">
          <p className="text-left font-bold font-opensans text-4xl text-white">
            You don’t have to see the whole staircase just take the first step
          </p>
          <p className="text-left text-white py-8">
            Amet in a suspendisse convallis eget, Amet in a suspendisse
            convallis egetAmet in a{' '}
          </p>
          <div className="flex gap-4">
            <button className="bg-[#3BD27B] py-3 px-6 rounded-md">
              Get Staredt
            </button>
            <button className="border-2 border-[#3BD27B] bg-white py-3 px-6 rounded-md text-[#3BD27B]">
              Place a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSec9;
