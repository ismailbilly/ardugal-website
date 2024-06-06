import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
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
    <div>
      <Home />
    </div>
  );
}

export default App;
