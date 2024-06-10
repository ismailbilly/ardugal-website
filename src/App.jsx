import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const App = () => {
  return (
    <>
      {" "}
      <nav>
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
