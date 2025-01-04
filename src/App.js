import React from "react";
import Hero from "./components/Hero"; // Adjust the path if necessary
import MiddleSection from "./components/middle";
import Connection from "./components/connection";
import DesktopComponent from "./components/com";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>

      <Hero />
      <MiddleSection/>
      <Connection/>
      <DesktopComponent/>
      <Footer/>
      
    
    </div>
  );
};

export default App;
