import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoLight from "../assets/ardugal-logo-light.jpg";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECTS", link: "/projects" },
    { name: "SERVICE", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 shadow-md w-full z-50">
      <div className="md:flex items-center justify-between bg-white md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <a href="/">
            <img src={logoLight} width="80px" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <GiHamburgerMenu />}
        </button>

        <ul
          className={`pb-12 absolute md:static bg-white  z-[-1] left-0 w-full  pl-9 md:flex md:items-center md:pb-0 md:z-auto md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link, idx) => (
            <li
              key={idx}
              className="group md:ml-8 font-poppins font-medium md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 active:text-blue-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
