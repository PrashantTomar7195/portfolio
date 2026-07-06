import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [enter, setEnter] = useState(false);

  if(!enter){
    return <LoadingScreen onEnter={() => setEnter(true)} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;