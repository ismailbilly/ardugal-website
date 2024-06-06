
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import HighlightedHeading from './carousselData'


const Hero = ({data}) => {
 const settings = {
   className: "",
   dots: true, 
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 2000,
   adaptiveHeight: true,
 };




  return (
    <div className="relative mt-[120px]  mb-10 overflow-hidden">
      <Slider {...settings}>
        {data.map((banner, index) => (
          <div key={index} className="relative ">
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
            <div
              className="absolute top-0 w-full h-full border-4 border-black bg-gray-900
              opacity-60"
            ></div>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 "
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={banner.aosDelay}
            >
              <div className=" text-gray-100 text-center px-4 py-2 rounded text-3xl sm:text-6xl font-montserrat font-semibold">
                <HighlightedHeading
                  text={banner.text.heading}
                  highlight={banner.text.highlight}
                />
              </div>
              <p className="text-gray-100 sm:text-3xl">
                {banner.text.subheading}
              </p>
              <button
                className="rounded-full
              py-3 px-6 bg-secondary text-white sm:text-xl mt-8"
              >
                {banner.text.callToAction}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
