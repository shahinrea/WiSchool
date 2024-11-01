import React from 'react';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import leftarrow from './assets/leftarrow.png';
import rightarrow from './assets/rightarrow.png';

const BannerSec5 = () => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="flex justify-between py-16">
        <h1 className="font-bold text-4xl font-opensans">
          Learn a new skill in two hours
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <img
          src={card1}
          alt=""
          className="transition-all duration-500 hover:-translate-y-5"
        />
        <img
          src={card2}
          alt=""
          className="transition-all duration-500 hover:-translate-y-5"
        />
        <img
          src={card3}
          alt=""
          className="transition-all duration-500 hover:-translate-y-5"
        />
      </div>
      <img
        src={leftarrow}
        alt=""
        className="absolute left-0 top-1/2 z-30 bg-white rounded-full"
      />
      <img
        src={rightarrow}
        alt=""
        className="absolute right-0 top-1/2 z-30 bg-white rounded-full"
      />
    </div>
  );
};

export default BannerSec5;
