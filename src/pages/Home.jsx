import React from 'react'
//import Navbar from '../components/Navbar'
import Nav from '../components/Nav';
import Hero from '../components/Hero'
import { carousselData } from '../components/Hero/carousselData';
import OurComppany from '../components/OurComppany';
import Contact from '../components/Contact';

const Home = () => {

  return (
    <>
      <Nav />

      <Hero data={carousselData} />
      <div className=' space-y-10'>
        <OurComppany />
        <Contact/>
      </div>
    </>
  );
}

export default Home