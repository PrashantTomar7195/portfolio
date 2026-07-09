import "./Footer.css";

import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-socials">

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
          <FaLinkedinIn />
        </a>

        <a
          href="https://leetcode.com/u/Prashanttomar7195"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>

      </div>

      <button className="top-btn" onClick={scrollTop}>
        <FaArrowUp />
      </button>

      <p>
        © 2026 Prashant Tomar. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;