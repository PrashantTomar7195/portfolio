import "./About.css";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaProjectDiagram,
  FaCode,
  FaStar,
  FaTrophy,
  FaRunning,
  FaLanguage,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaUserGraduate />,
      title: "Education",
      value: "B.Tech CSE",
    },
    {
      icon: <FaLaptopCode />,
      title: "Experience",
      value: "Java Full Stack Developer",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Projects",
      value: "3+ Major Projects",
    },
    {
      icon: <FaCode />,
      title: "Tech Stack",
      value: "Java • React • Spring Boot",
    },
  ];

  const strengths = [
    "Leadership",
    "Hard Working",
    "Quick Learning",
    "Problem Solving",
    "Team Player",
  ];

  const achievements = [
    "200+ LeetCode Problems Solved",
    "Java Full Stack Projects",
    "Open Source Learner",
  ];

  const hobbies = [
    "Coding",
    "Learning New Technologies",
    "Playing Cricket",
    "Farming",
  ];

  const languages = [
    "Hindi",
    "English",
  ];

  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-content">
        <div>
          <p>
            I'm <span>Prashant Tomar</span>, a passionate Java Full Stack
            Developer currently pursuing <strong>B.Tech in Computer Science</strong>.
            I enjoy building scalable web applications using React,
            Spring Boot and MySQL.

            <br /><br />

            I continuously improve my knowledge in
            <strong> Data Structures & Algorithms</strong>,
            Core Computer Science subjects and Backend Development.

            <br /><br />

            My goal is to become a Software Engineer who builds
            high-quality products and solves real-world problems.
          </p>
        </div>

        <div className="about-grid">
          {cards.map((card, index) => (
            <div className="about-card" key={index}>
              <div className="about-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <span>{card.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Information */}

      <div className="extra-grid">

        <div className="extra-card">
          <h3>
            <FaStar /> Personal Strengths
          </h3>

          <div className="chip-container">
            {strengths.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="extra-card">
          <h3>
            <FaTrophy /> Achievements
          </h3>

          <ul>
            {achievements.map((item, index) => (
              <li key={index}>✓ {item}</li>
            ))}
          </ul>
        </div>

        <div className="extra-card">
          <h3>
            <FaRunning /> Hobbies
          </h3>

          <div className="chip-container">
            {hobbies.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="extra-card">
          <h3>
            <FaLanguage /> Languages
          </h3>

          <div className="chip-container">
            {languages.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;