import React, { Component } from "react";
import Slider from "react-slick";
import slider_photo from '../images/slider_photo.png';
import slider_photos from '../images/slider_photos.png';



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider_wrapper">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div className="slider_element">
            <img src={ slider_photo } alt={"slider_photo"} />
          </div>
          <div className="slider_element">
            <img src={ slider_photos } alt={"slider_photos"} />
          </div>
        </Slider>
      </div>
    );
  }
}