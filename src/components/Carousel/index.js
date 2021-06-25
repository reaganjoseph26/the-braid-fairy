import React from 'react';
import {useState} from 'react';
import logo from '../../assets/images/logo.jpg';
import test1 from '../../assets/images/test1.jpg';
import test2 from '../../assets/images/test2.jpg';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [logo, test1, test2];

function Carousel() {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),

  }
  return (
    <div className="carousel">
     <Slider {... settings}>
        {images.map((img, idx) => (
          <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt="logo" />
          </div>
        ))}
     </Slider>
    </div>
  );
}

export default Carousel;