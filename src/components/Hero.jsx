import "./Hero.css";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <p className="hello">👋 Hello, I'm</p>

        <h1>
          Prashant <span>Tomar</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p className="desc">
          Passionate Java Full Stack Developer skilled in Java, Spring Boot,
          React, SQL and DSA. I enjoy building modern web applications and
          solving real-world problems.
        </p>

        <div className="buttons">

  <a href="/resume.pdf" download className="resume">
    Download Resume
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

</div>

      </div>

      <div className="hero-right">
        <img src={hero} alt="Prashant" />
      </div>

    </section>
  );
}

export default Hero;