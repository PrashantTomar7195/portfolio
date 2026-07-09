import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div
        className="logo"
        onClick={() => scrollToSection("hero")}
      >
        Prashant<span>Tomar</span>
      </div>

      <ul className="nav-links">

        <li>
          <a
            className={active === "hero" ? "active" : ""}
            onClick={() => scrollToSection("hero")}
          >
            Home
          </a>
        </li>

        <li>
          <a
            className={active === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            className={active === "skills" ? "active" : ""}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            className={active === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            className={active === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </li>

      </ul>

      <button
        className="hire-btn"
        onClick={() => scrollToSection("contact")}
      >
        Hire Me
      </button>
    </nav>
  );
}

export default Navbar;