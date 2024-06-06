import React from 'react'
//import Navbar from '../components/Navbar'
import Nav from '../components/Nav';
import Hero from '../components/Hero'
import { carousselData } from '../components/Hero/carousselData';


import Services from '../components/Services';
import About from '../components/About';

const Home = () => {

  return (
    <>
      <Nav />

      <Hero data={carousselData} />
      <div className="sm:space-y-40 space-y-16">
        <div></div>
        <About/>
        <Services/>
        {/* <Projects/> */}
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default Home