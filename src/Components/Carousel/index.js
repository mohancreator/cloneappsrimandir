import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="images" src={i1} alt="i1"/>
        </div>
        <div>
          <img className="images"  src={i2} alt="i1"/>
        </div>
        <div>
          <img className="images"  src={i3} alt="i1"/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
