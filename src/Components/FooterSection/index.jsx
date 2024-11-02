import React from 'react';
import media1 from './assets/facebook.png';
import media3 from './assets/instragram.png';
import media4 from './assets/linkin.png';
import media2 from './assets/twiter.png';

function FooterSec() {
  return (
    <section className="max-w-full bg-black">
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto font-poppins text-left text-white flex flex-col md:flex-row p-28 justify-between">
          <div>
            <h1 className="font-bold text-2xl mb-10">WiSchool</h1>
            <ul>
              We are not here to sell you <br /> products, we sell value through{' '}
              <br /> our expertise.
            </ul>
            <ul className="flex gap-4 py-6">
              <img src={media1} alt="" />
              <img src={media2} alt="" />
              <img src={media3} alt="" />
              <img src={media4} alt="" />
            </ul>
          </div>
          <div>
            <ul>Home</ul>
            <ul>Services</ul>
            <ul>Training</ul>
            <ul>Resources</ul>
            <ul>About Us</ul>
          </div>
          <div>
            <ul>SME</ul>
            <ul>Solution</ul>
            <ul>Reviews</ul>
            <ul>Blog</ul>
          </div>
          <div>
            <ul>Contact Us</ul>
            <ul>Place a Call</ul>
            <ul>Email</ul>
            <ul>Wischool@gmail.com</ul>
          </div>
          <div>
            <ul>Job Opening</ul>
            <ul>News</ul>
            <ul>Research</ul>
          </div>
          <div>
            <ul> Uk Privacy Policy</ul>
            <ul>Terms of Use</ul>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-white font-bold text-2xl text-center">
            Subscribe to get latest updates
          </p>
          <div className="flex justify-center py-0 w-0 md:py-8 md:w-[545px] mx-auto mb-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="placeholder:text-[#3BD27B] p-0 w-0  md:p-4 md:w-full"
            />
            <button className="bg-[#3BD27B] px-10 py-2 text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSec;
