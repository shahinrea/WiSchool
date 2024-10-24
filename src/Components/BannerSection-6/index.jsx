import React from 'react';
import frame from './assets/frame.png';
import icon1 from './assets/icon1.png';

const BannerSec6 = () => {
  return (
    <div className="max-w-7xl mx-auto font-opensans">
      <div className="flex py-16">
        <h1 className="font-bold text-4xl ">
          We Bring The Good Education To Life
        </h1>
      </div>

      <div className="flex">
        <img src={frame} alt="" className="" />
        <div className="flex flex-col">
          <div className="flex mb-6">
            <h1 className="text-5xl font-bold text-left">
              Let Your Education Do <br /> The Walking
            </h1>
          </div>

          <div className="py-4">
            <div className="flex flex-row items-center py-4 gap-6 text-2xl">
              <img src={icon1} alt="" />
              <p>Free E-book, Videos and kits</p>
            </div>
            <div className="flex flex-row items-center py-4 gap-6 text-2xl">
              <img src={icon1} alt="" />
              <p>Learn at your own pace</p>
            </div>
            <div className="flex flex-row items-center py-4 gap-6 text-2xl">
              <img src={icon1} alt="" />
              <p>Collaborate with different learners around the globe</p>
            </div>
            <div className="flex flex-row items-center py-4 gap-6 text-2xl">
              <img src={icon1} alt="" />
              <p>Top instructors around the globe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSec6;
