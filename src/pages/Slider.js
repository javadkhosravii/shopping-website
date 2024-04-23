import React from "react";
import Slider from "react-slick";
import banner3 from "../images/banner-3.jpg";
import banner4 from "../images/banner-4.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseonhover: false,
  };
  return (
    <Slider className="container mx-auto m-4" {...settings}>
      <div>
        <img src={banner3} alt="" />
      </div>
      <div>
        <img src={banner4} alt="" />
      </div>
    </Slider>
  );
}
