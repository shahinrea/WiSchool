import React from 'react';
import search from '../Header/assets/search.png';
import wilogo from '../Header/assets/wilogo.png';
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <img src={wilogo} alt="" />
      <div className="flex gap-16 text-gray-400 font-opensans">
        <ul>Home</ul>
        <ul>Course</ul>
        <ul>Instuctors</ul>
        <ul>Schedules</ul>
        <ul>Contacts Us</ul>
      </div>
      <div className="flex items-center gap-4 font-opensans">
        <img src={search} alt="" />
        <p className="text-[#09B451] font-bold">Login</p>
        <button className=" bg-[#09B451] rounded-md py-2 px-4 text-white">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
