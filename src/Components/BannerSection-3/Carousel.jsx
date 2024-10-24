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
    <div className="max-w-7xl mx-auto Slider-Container py-10 justify-center items-center">
        <div className='flex justify-between py-16'>
        <h1 className='font-bold text-4xl font-opensans'>Choose favourite course from top cartegories</h1>
        <p className='text-gray-400 text-2xl font-poppins'>See all</p>
        </div>
      <Slider {...settings}>
        <div className="relative flex">
          <img src={card1} alt="" className="m-0" />
        </div>
        <div className="relative flex">
          <img src={card2} alt="" className="m-0" />
        </div>
        <div className="relative flex">
          <img src={card3} alt="" className="m-0" />
        </div>
        <div className="relative flex">
          <img src={card4} alt="" className="m-0" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
