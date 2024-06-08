import React from 'react'
import engImg from '../assets/civil-3.jpg'
const BestPractices = () => {
  return (
    <div className="">
      <div className=" md:px-10 px-7 sm:max-w-[1024px] mx-auto">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
          <div className="sm:mt-8 sm:space-y-20 space-y-8 ">
            <div>
              <div className="font-semibold text-xl text-red-800">
                Compliance
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                tempore.
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl text-blue-800">
                Build a house
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                tempore.
              </div>
            </div>
          </div>

          <div className="rounded-full overflow-hidden">
            <img src={engImg} alt="" w={100} h={100} />
          </div>
          <div className="sm:mt-8 sm:space-y-20 space-y-8">
            <div>
              <div className="font-semibold text-xl text-blue-800">
                Build a house
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                tempore.
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl text-red-800">
                Build a house
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                tempore.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestPractices