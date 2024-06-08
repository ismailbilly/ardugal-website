import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <div className="bg-primary text-white pb-8">
      <div className="max-w-[1024px] py-[80px] mx-auto flex flex-col items-center">
        <h2 className="py-8 text-3xl font-semibold">Get In Touch</h2>
        <ul className="flex flex-col gap-8 sm:flex-row sm:gap-12 text-sm justify-center items-center">
          <li>
            <span>
              <IoIosCall className="mr-[2px] inline text-secondary" />
            </span>
            <span className=" opacity-90">+234-809-000-0000</span>
          </li>
          <li>
            <span>
              <FaEnvelope className=" inline mr-[2px] text-secondary" />
            </span>
            <span className=" opacity-90">info@ardugalengineering.com</span>
          </li>
          <li>
            <span>
              <MdLocationOn className=" inline mr-[2px] text-secondary" />
            </span>
            <span className=" opacity-90">
              123 Somewhere Road, Gombe state, Nigeria
            </span>
          </li>
        </ul>
      </div>
      <hr className="h-2 w-full opacity-80" />
      <p className=" text-center pt-2">
        <span className="opacity-80 text-xs">Powered by:</span>{" "}
        <span className=" font-medium">DIGITRIX.</span>
      </p>
    </div>
  );
}

export default Contact