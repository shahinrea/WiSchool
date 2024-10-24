import React from 'react';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';

const BannerSec5 = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between py-16">
        <h1 className="font-bold text-4xl font-opensans">
          Learn a new skill in two hours
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between">
        <img src={card1} alt="" className="" />
        <img src={card2} alt="" className="" />
        <img src={card3} alt="" className="" />
      </div>
    </div>
  );
};

export default BannerSec5;
