import React from 'react'
//import Navbar from '../components/Navbar'
import Nav from '../components/Nav';
import Hero from '../components/Hero'
import { carousselData } from '../components/Hero/carousselData';


import Services from '../components/Services';
import About from '../components/About';
//import Try from '../components/Try';
import Contact from '../components/Contact';
import CompanyInfo from '../components/CompanyInfo';
import Projects from '../components/Projects';
import Success from '../components/Success';
import Support from '../components/Support';


const Home = () => {

  return (
    <>
      <Nav />

      <Hero data={carousselData} />
      <div className="sm:space-y-20 space-y-16">
        <div></div>
        <About />
        <CompanyInfo />
        <About />
        <Projects />
        <Support />
        <Services />
      </div>
      <Success />
      {/* <Try /> */}
      {/* <Projects/> */}
      <Contact />
    </>
  );
}

export default Home