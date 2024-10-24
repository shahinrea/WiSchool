import React from 'react';
import leftarrow from './leftarrow.png';
import picture1 from './picture1.png';
import picture2 from './picture2.png';
import rightarrow from './rightarrow.png';
import logo from './studentlogo.png';

const BannerSec7 = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="flex justify-center py-20">
        <h1 className="font-bold text-4xl font-opensans">Review </h1>
      </div>

      <div className="flex justify-between gap-16">
        <div className="w-4/12 px-10">
          <img src={logo} alt="" />
          <div className="flex gap-14 mt-12">
            <img src={leftarrow} alt="" />
            <img src={rightarrow} alt="" />
          </div>
        </div>
        <div className="w-4/12">
          <div className="flex gap-4">
            <div className="">
              <img src={picture1} alt="" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold">Mohh Jumah</p>
              <p className="font-bold text-[#3BD27B]">Senior Developer</p>
            </div>
          </div>
          <div className="text-left mt-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ac blandit nam massa massa elementum mollis lectus.
              Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis
              imperdiet venenatis{' '}
            </p>
          </div>
        </div>
        <div className="w-4/12">
          <div className="flex gap-4">
            <div className="">
              <img src={picture2} alt="" className="w-[70px] h-[70px]" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold">John Mark</p>
              <p className="font-bold text-[#3BD27B]">Data Analyst</p>
            </div>
          </div>
          <div className="text-left mt-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ac blandit nam massa massa elementum mollis lectus.
              Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis
              imperdiet venenatis{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSec7;
