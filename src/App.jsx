import { useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const [enter, setEnter] = useState(false);

  if (!enter) {
    return <LoadingScreen onEnter={() => setEnter(true)} />;
  }

  return (
    <>
  <AnimatedBackground />

  <Navbar />

  <Hero />

  <About />

  <Skills />

  <Projects />

  <Education />

  <Contact />

  <Footer />
</>
  );
}

export default App;