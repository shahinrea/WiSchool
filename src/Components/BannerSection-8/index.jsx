import React from 'react';
import picture1 from './assets/picture1.png';
import picture2 from './assets/picture2.png';
import picture3 from './assets/picture3.png';

const BannerSec8 = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="flex justify-start py-20">
        <h1 className="font-bold text-4xl font-opensans">
          Meet our instructors{' '}
        </h1>
      </div>

      <div className="flex gap-11">
        <div className="flex flex-col justify-center w-4/12 border-1 border-gray-100 py-14 px-10 shadow-xl ">
          <div className="gap-4">
            <div className="flex justify-center">
              <img
                src={picture1}
                alt=""
                className="transition-all duration-500 animate-"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">John Mark</p>
              <p className="font-bold text-[#3BD27B]">Senior Developer</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-2xl">
              “Education will be for you what you want it to be”
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-4/12 border-1 border-gray-100 py-14 px-10 shadow-xl">
          <div className="gap-4">
            <div className="flex justify-center">
              <img src={picture2} alt="" className="" />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Lara Shrol</p>
              <p className="font-bold text-[#3BD27B]">Marketing Lead</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-2xl">
              “Knowledge has to be improved, challenged, and increased
              constantly, or it vanishes”
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-4/12 border-1 border-gray-100 py-14 px-10 shadow-xl">
          <div className="gap-4">
            <div className="flex justify-center">
              <img src={picture3} alt="" className="" />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Zeng Chin</p>
              <p className="font-bold text-[#3BD27B]">Data Anallist of Meta</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-2xl">
              “To know that we know what we know, and to know that we do not
              know what we do not know, that is true knowledge”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSec8;
