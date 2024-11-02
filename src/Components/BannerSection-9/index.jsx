import React from 'react';
import lady1 from './assets/lady1.png';
import lady2 from './assets/ladyboy.png';

const BannerSec9 = () => {
  return (
    <section>
      <div
        className="h-[532px] mx-auto relative bg-cover font-poppins mt-64 ml-10 md:ml-0"
        style={{ backgroundImage: `url(${lady2})` }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/34a8/f964/fc50fd9c8f624a3c900afa5ab881a3ba?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O~RWEqAol8rsszFVzUjiPg6hrG3VKX~zYVbv5EDltX~CwtpV9YvhYF96nKAbl90rY~SFAz8bzsw259VRxfyUcV20r08F~Y9G8Bs40YUUmAxxbqPmjldPhGVPel69JqbYXaUyDzOn9kynCFY~aPKCW3j6p-kJ~xq~rkwMwXXPqY~gIfLrNeLYRwuj~UJW-LtfofYyRo9FW1trFT7jbzRYjJ-H2IH6yN1n6sUT4koU7v1EaTRfZfCu~XD-iz4ytbJMKp2XEBLxg-gPtDrHGpj3StF3z~4mBKsIkxU~SG9w3CMibD12sjfriqSHtOYlY3tIKkHRCHmF8j~PwR~d7MjQeg__"
          alt=""
          className="w-full mx-auto h-full absolute opacity-30 duration-500"
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative">
          {/* First Div */}
          <div className="w-6/12 flex items-center justify-center -translate-y-10 md:block">
            <img src={lady1} alt="" className="h-[517px] w-[513px] hidden md:block" />
          </div>

          {/* Second Div */}
          <div className="w-full md:w-6/12  flex flex-col p-20">
            <p className="text-left font-bold font-opensans text-xl md:text-4xl text-white">
              You don’t have to see the whole staircase just take the first step
            </p>
            <p className="text-left text-white py-8">
              Amet in a suspendisse convallis eget, Amet in a suspendisse
              convallis egetAmet in a{' '}
            </p>
            <div className="hidden md:flex gap-4">
              <button className="bg-[#3BD27B] md:py-3 px-6 rounded-md">
                Get Started
              </button>
              <button className="border-2 border-[#3BD27B] bg-white py-3 px-6 rounded-md text-[#3BD27B]">
                Place a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSec9;
