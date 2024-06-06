import { useState }  from 'react'
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logoLight from "../assets/ardugal-logo-light.jpg";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className="relative px-10 md:px-20 flex justify-between items-center bg-[#F0F0F0]">
      <div>
        https://www.wix.com/?utm_source=affiliate&utm_medium=paid_referral&utm_campaign=af_https://colorlib.com&experiment_id=cake_164632535^21
        <a href="/">
          <img src={logoLight} width="60px" />
        </a>
      </div>
      <ul className=" hidden sm:flex md:gap-10 gap-4 font-poppins font-medium uppercase flex-wrap">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* responsive menu */}
      <button
        className="sm:hidden transition-all ease-in duration-500"
        onClick={handleClick}
      >
        {showMenu ? <FaTimes className="" /> : <GiHamburgerMenu />}
      </button>
      {showMenu && (
        <ul className="absolute -top-[100%] font-poppins font-medium uppercase ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar