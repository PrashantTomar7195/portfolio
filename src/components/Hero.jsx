import { useState, useEffect } from "react";
import "./Hero.css";
import hero from "../assets/hero.png";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const titles = [
    "Java Full Stack Developer",
    "React Developer",
    "Spring Boot Developer",
    "Software Engineer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="hello"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          👋 Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Prashant <span>Tomar</span>
        </motion.h1>

        <motion.h2
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={titles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {titles[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h2>

        <motion.h3
          className="sub-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Continuously Improving in DSA & Core Computer Science
        </motion.h3>

        <motion.p
          className="desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Building scalable web applications using React, Spring Boot and
          MySQL while continuously strengthening problem-solving skills and
          core computer science fundamentals.
        </motion.p>

        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a href="/resume.pdf" download className="resume">
            <FaDownload /> Download Resume
          </a>

          <button
            className="hero-contact"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Contact Me
          </button>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://github.com/PrashantTomar7195"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prashant-tomar-5832122a6/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Prashanttomar7195"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img src={hero} alt="Prashant Tomar" />
      </motion.div>
    </section>
  );
}

export default Hero;