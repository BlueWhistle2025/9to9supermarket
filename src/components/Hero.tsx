"use client";

import React from 'react';
import Slider from "react-slick";
import Slide from "./Slide";


const Hero = () => {

    const settings = {
        dots: true,
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay: true,
        pauseOnHover: false
    };

    const slideData = [
        {
            id: 0,
            img: "/banner-4.jpg",
            title: "Trending Grocery",
            mainTitle: "GROCERY SALE"

        },
        {
            id: 1,
            img: "/banner-5.jpg",
            title: "Trending Stationary",
            mainTitle: "Stationary SALE"

        },
        {
            id: 2,
            img: "/banner-6.jpg",
            title: "Trending Fruits",
            mainTitle: "FRUITS SALE"

        },
    ]

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide 
                    key = {item.id}
                    img = {item.img}
                    title = {item.title}
                    mainTitle = {item.mainTitle}
                />
            )
            )}
        </Slider>
      </div>
    </div>
  )
}

export default Hero;
