import "./Skills.css";

import {
  FaJava,
  FaReact,
  FaGithub,
  FaDatabase,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <FaJava />,
      desc: "Writing efficient and scalable applications using modern programming languages.",
      skills: ["Java", "JavaScript", "SQL"],
    },

    {
      title: "Frontend Development",
      icon: <FaReact />,
      desc: "Creating responsive and interactive user interfaces with modern web technologies.",
      skills: ["React", "HTML5", "CSS3"],
    },

    {
      title: "Backend Development",
      icon: <FaNodeJs />,
      desc: "Developing REST APIs and scalable backend services using Java & Node.js.",
      skills: ["Spring Boot", "REST APIs", "Node.js"],
    },

    {
      title: "Database",
      icon: <FaDatabase />,
      desc: "Managing relational databases and writing optimized SQL queries.",
      skills: ["MySQL"],
    },

    {
      title: "Tools & Platforms",
      icon: <FaGithub />,
      desc: "Using modern development tools for coding, testing and version control.",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },

    {
      title: "Core Computer Science",
      icon: <FaCode />,
      desc: "Strong foundation in computer science fundamentals and problem solving.",
      skills: ["DSA", "OOP", "DBMS", "Operating System"],
    },
  ];

  return (
    <section className="skills" id="skills">

      <h2>Technical Skills</h2>

      <p className="skills-subtitle">
        Technologies and tools I use to build scalable, responsive and
        high-quality software applications.
      </p>

      <div className="skills-grid">

        {categories.map((item, index) => (

          <div className="skill-box" key={index}>

            <div className="skill-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <div className="skill-tags">

              {item.skills.map((skill, i) => (

                <span key={i}>
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;