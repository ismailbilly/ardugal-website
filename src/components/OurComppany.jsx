import React from 'react'
import streetlight from "../assets/carousel/street-light.jpg"
const OurComppany = () => {
  return (
    <div className="md:px-10 px-7">
      <div>
        <h2 className='text-[64px] leading-[83px] font-poppins mb-4 sm:mb-8 '>One company, 
       <br /> infinite possibilities
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 divide-y divide-blue-500 ">
        <div></div>
        <div className="pt-4">
          <div>Build a house</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            tempore.
          </div>
        </div>
        <div className="pt-4">
          <div>Build a house</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            tempore.
          </div>
        </div>
        <div className="pt-4">
          <div>Build a house</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            tempore.
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="border-2">
          <h2 className="text-primary text-3xl font-montserrat">
            {" "}
            At Ardugal, we are dedicated to transforming ideas into reality
            through innovative engineering solutions.{" "}
            <span className='text-secondary'>
              With a rich history of excellence and a forward-thinking approach
            </span>
            , we serve a diverse range of industries including aerospace,
            automotive, civil, electrical, and mechanical engineering.
          </h2>
          <p>
            Our team of highly skilled engineers, designers, and project
            managers are committed to delivering top-notch services that meet
            the highest standards of quality and safety. We pride ourselves on
            our ability to tackle complex challenges with creative and effective
            solutions, ensuring our clients' projects are completed on time and
            within budget.
          </p>
        </div>
        <div className="justify-self-center">
          <img src={streetlight} alt="" width={300} height={200} />
        </div>
      </div> */}
    </div>
  );
}

export default OurComppany