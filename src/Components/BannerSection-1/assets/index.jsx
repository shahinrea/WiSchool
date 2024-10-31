import React from 'react';
import image from './banner-1.png';
import frame from './frame.png';

const BannerSec1 = () => {
  return (
    <div className="max-w-7xl h-[605px] bg-gradient-to-r from-[#ecf2ef] mx-auto flex flex-row justify-between p-10 items-center mt-6">
      <div className="flex flex-col items-start w-6/12">
        <h1 className="font-poppins text-6xl font-semibold text-left">
          Quality <span className="text-[#09B451]">Education</span> <br />
          By Any Means <br /> Necessary.
        </h1>
        <button className=" bg-[#09B451] rounded-md py-2 px-4 text-white hover:bg-white hover:text-[#09B451] hover:border-2 border-[#09B451] cursor-pointer mt-14">
          Get Start
        </button>
      </div>

      <div className="flex w-6/12 overflow-hidden ">
        <img
          src={image}
          alt=""
          className="hover:scale-125 hover:translate-y-14 hover:-translate-x-10 ease-in-out duration-1000 ml-10 relative h-[500px] w-[750px] block"
        />
      </div>
      <img src={frame} alt="" className=" flex h-[605px] -m-8 rounded-r-3xl" />
    </div>
  );
};

export default BannerSec1;
