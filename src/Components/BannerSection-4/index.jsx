import React from 'react';
import course1 from './assets/course1.png';
import course2 from './assets/course2.png';
import course3 from './assets/course3.png';
import course4 from './assets/course4.png';
import course5 from './assets/course5.png';
import course6 from './assets/course6.png';

const BannerSec4 = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between py-16">
        <h1 className="font-bold text-4xl font-opensans">
          Most Popular courses
        </h1>
        <p className="text-gray-400 text-2xl font-poppins"> v Short by</p>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between">
        <img src={course1} alt="" className="" />
        <img src={course2} alt="" className="" />
        <img src={course3} alt="" className="" />
      </div>
      <div className="max-w-7xl mx-auto flex justify-between">
        <img src={course4} alt="" className="" />
        <img src={course5} alt="" className="" />
        <img src={course6} alt="" className="" />
      </div>
    </div>
  );
};

export default BannerSec4;
