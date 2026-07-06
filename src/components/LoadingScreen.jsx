import hero from "../assets/hero.png";
import { useEffect, useState } from "react";

import "./LoadingScreen.css";

function LoadingScreen({ onEnter }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen">
        <img src={hero} alt="Prashant Tomar" className="hero-image" />

      <h1 className="logo">
        PRASHANT TOMAR
      </h1>

      <p className="tagline">
        Java Full Stack Developer • React • Spring Boot • DSA
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h3 className="percentage">{progress}%</h3>

      <button
  className="enter-btn"
  onClick={onEnter}
  style={{
    opacity: progress === 100 ? 1 : 0,
    pointerEvents: progress === 100 ? "auto" : "none",
    transition: "0.5s",
  }}
>
  Enter Portfolio →
</button>

    </div>
  );
}

export default LoadingScreen;