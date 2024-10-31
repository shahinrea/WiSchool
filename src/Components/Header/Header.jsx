import React from 'react';
import search from '../Header/assets/search.png';
import wilogo from '../Header/assets/wilogo.png';
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <img src={wilogo} alt="" />
      <div className="flex gap-16 text-gray-400 font-opensans">
        <a
          href=""
          className="group relative  p-3 overflow-hidden text-gray/60 font-semibold text-base  active"
        >
          <ul className="absolute  duration-500 text-black group-hover:translate-y-0  translate-y-10">
            Home
          </ul>
          <ul className="relative  duration-500  group-hover:-translate-y-10  -translate-y-0">
            Home
          </ul>
        </a>
        <a
          href=""
          className="group relative  p-3 overflow-hidden text-gray/60 font-semibold text-base  active"
        >
          <ul className="absolute  duration-500 text-black group-hover:translate-y-0  translate-y-10">
            Course
          </ul>
          <ul className="relative  duration-500  group-hover:-translate-y-10  -translate-y-0">
            Course
          </ul>
        </a>
        <a
          href=""
          className="group relative  p-3 overflow-hidden text-gray/60 font-semibold text-base  active"
        >
          <ul className="absolute  duration-500 text-black group-hover:translate-y-0  translate-y-10">
            Instuctors
          </ul>
          <ul className="relative  duration-500  group-hover:-translate-y-10  -translate-y-0">
            Instuctors
          </ul>
        </a>
        <a
          href=""
          className="group relative  p-3 overflow-hidden text-gray/60 font-semibold text-base  active"
        >
          <ul className="absolute  duration-500 text-black group-hover:translate-y-0  translate-y-10">
            Schedules
          </ul>
          <ul className="relative  duration-500  group-hover:-translate-y-10  -translate-y-0">
            Schedules
          </ul>
        </a>
        <a
          href=""
          className="group relative  p-3 overflow-hidden text-gray/60 font-semibold text-base  active"
        >
          <ul className="absolute  duration-500 text-black group-hover:translate-y-0  translate-y-10">
            Contacts Us
          </ul>
          <ul className="relative  duration-500  group-hover:-translate-y-10  -translate-y-0">
            Contacts Us
          </ul>
        </a>
      </div>
      <div className="flex items-center gap-4 font-opensans">
        <img src={search} alt="" />
        <p className="text-[#09B451] font-bold">Login</p>
        <button className=" bg-[#09B451] rounded-md py-2 px-4 text-white hover:bg-white hover:text-[#09B451] hover:border-2 border-[#09B451] cursor-pointer">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
