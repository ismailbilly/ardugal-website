import React from 'react'
import serviceImg1 from "../assets/woman.jpg";

const Try = () => {
  return (
    <div className="h-screen">
      <div className=" max-w-[1400px] mx-auto bg-stone-100  rounded-lg px-16">
        <div className="flex justify-between items-center h-[70vh] ">
          <div className="space-y-10">
            <h2 className="font-bold text-7xl text-amber-950">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-amber-950">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              itaque.
            </p>
            <button className="rounded-full py-2 px-6 bg-amber-950 text-white">
              Click Me
            </button>
          </div>
          <div className=" basis-1/2 flex justify-center">
            <img src={serviceImg1} alt="" className="h-[400px] rounded-lg" />
          </div>
        </div>
        <div className="-mt-28 text-center tracking-wide font-poppins text-[11rem] font-bold text-white opacity-50">
          FASHIONISTA
        </div>
      </div>
    </div>
  );
}

export default Try