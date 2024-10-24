import React from 'react';
import frame1 from '../BannerSection-2/assets/frame1.png';
import frame2 from '../BannerSection-2/assets/frame2.png';
import frame3 from '../BannerSection-2/assets/frame3.png';
import frame4 from '../BannerSection-2/assets/frame4.png';
import frame5 from '../BannerSection-2/assets/frame5.png';

function BannerSec2() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row justify-between mt-10">
      <div className="flex items-center p-2 bg-[#DDFFFF] py-2 px-4 gap-4">
        <img src={frame1} alt="" />
        <p>Problem Solving</p>
      </div>
      <div className="flex items-center p-2 bg-[#DDFFFF] py-2 px-4 gap-4">
        <img src={frame2} alt="" />
        <p>Problem Solving</p>
      </div>
      <div className="flex items-center p-2 bg-[#DDFFFF] py-2 px-4 gap-4">
        <img src={frame3} alt="" />
        <p>Problem Solving</p>
      </div>
      <div className="flex items-center p-2 bg-[#DDFFFF] py-2 px-4 gap-4">
        <img src={frame4} alt="" />
        <p>Problem Solving</p>
      </div>
      <div className="flex items-center p-2 bg-[#DDFFFF] py-2 px-4 gap-4">
        <img src={frame5} alt="" />
        <p>Problem Solving</p>
      </div>
    </div>
  );
}

export default BannerSec2;
