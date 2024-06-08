import React from 'react'
import streetlight from "../assets/carousel/street-light.jpg"
import Button from './Button';

const About = () => {
  return (
    <section className="md:px-10 px-7 sm:max-w-[1024px] sm:mx-auto w-full ">
      <div className="">
        <h2
          className="sm:text-[64px] text-[39px] leading-[47px] sm:leading-[83px] font-poppins mb4 sm:mb-8"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          One company,
          <br /> endless possibilities
        </h2>
      </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 divide-y-2 divide-black font-poppins ">
        <div></div>
        <div
          className="pt-4 sm:-ml-12"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          <div className="font-semibold text-xl mb-4">Build a house</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            tempore.
          </div>
        </div>
        <div
          className="pt-4 "
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          <div className="font-semibold text-xl mb-4">Build a house</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            tempore.
          </div>
        </div>
        <div
          className="pt-4"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          <div className="font-semibold text-xl mb-4">Build a house</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            tempore.
          </div>
        </div>
      </div>
      <div className="mt-12 ">
        <Button backgroundColor={"black"} fontType="poppins">
          Learn More
        </Button>
      </div>
    </section>
  );
}

export default About