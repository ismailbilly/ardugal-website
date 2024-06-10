import React, { useEffect } from "react";
//import Navbar from '../components/Navbar'
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { carousselData } from "../components/Hero/carousselData";

import Services from "../components/Services";
import About from "../components/About";
//import Try from '../components/Try';
import Contact from "../components/Footer";
import CompanyInfo from "../components/CompanyInfo";
import Projects from "../components/Projects";
import Success from "../components/Success";
import Support from "../components/Support";
import BestPractices from "../components/BestPractices";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <Nav /> */}

      <Hero data={carousselData} />
      <div className="sm:space-y-20 space-y-16">
        <div></div>
        <About />
        <CompanyInfo />

        <BestPractices />
        <Projects />
        <Support />
        <Services />
      </div>
      <Success />
    </>
  );
};

export default Home;
