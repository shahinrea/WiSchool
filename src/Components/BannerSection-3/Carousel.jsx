import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto Slider-Container py-10 justify-center items-center px-14 md:px-0">
      <div className="flex justify-between py-16">
        <h1 className="font-bold text-4xl font-opensans">
          Choose favourite course from top cartegories
        </h1>
        <p className="text-gray-400 text-2xl font-poppins">See all</p>
      </div>
      <Slider {...settings}>
        <div className="relative flex flex-col md:flex-row group group-hover: cursor-pointer">
          <img src={card1} alt="" className="m-0 absolute z-0" />
          <div className="absolute bg-black/30 z-1"></div>
          <div className="px-2 -bottom-[540px] absolute z-30 text-white group-hover:top-20">
            <h1 className="text-3xl text-white font-bold py-2 px-4">
              Marketing
            </h1>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.Accusantium ea temporibus, ipsa cum similique quos fuga
              quaerat distinctio accusamus ipsum nobis
            </p>
          </div>
        </div>
        <div className="relative flex group group-hover: cursor-pointer">
          <img src={card2} alt="" className="m-0 absolute z-0" />
          <div className="absolute bg-black/30 z-1"></div>
          <div className="px-2 -bottom-[540px] absolute z-30 text-white group-hover:top-20">
            <h1 className="text-3xl text-white font-bold py-2 px-4">
              Desigining
            </h1>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.Accusantium ea temporibus, ipsa cum similique quos fuga
              quaerat distinctio accusamus ipsum nobis
            </p>
          </div>
        </div>
        <div className="relative flex group group-hover: cursor-pointer">
          <img src={card3} alt="" className="m-0 absolute z-0" />
          <div className="absolute bg-black/30 z-1"></div>
          <div className="px-2 -bottom-[540px] absolute z-30 text-white group-hover:top-20 duration-1000">
            <h1 className="text-3xl text-white font-bold py-2 px-4">
              Programming
            </h1>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.Accusantium ea temporibus, ipsa cum similique quos fuga
              quaerat distinctio accusamus ipsum nobis
            </p>
          </div>
        </div>
        <div className="relative flex group group-hover: cursor-pointer">
          <img src={card4} alt="" className="m-0 z-0" />
          <div className="absolute bg-black/30 z-1"></div>
          <div className="px-2 -bottom-[540px] absolute z-30 text-white group-hover:top-20 duration-1000">
            <h1 className="text-3xl text-white font-bold py-2 px-4">
              shahining
            </h1>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.Accusantium ea temporibus, ipsa cum similique quos fuga
              quaerat distinctio accusamus ipsum nobis
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
