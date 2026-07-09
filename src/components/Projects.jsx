import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive developer portfolio built with React and Vite showcasing my skills, projects, resume and contact form.",

      tech: ["React", "Vite", "JavaScript", "CSS"],

      features: [
        "Responsive Design",
        "Smooth Animations",
        "Resume Download",
        "Working Contact Form",
      ],

      github: "https://github.com/PrashantTomar7195/portfolio",

      live: "https://portfolio-mauve-two-p5d4vptx82.vercel.app",

      featured: true,
    },

    {
      title: "AI Resume Analyzer",

      description:
        "AI-powered Resume Analyzer that reviews resumes and provides ATS-friendly suggestions using Azure AI.",

      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Azure AI"],

      features: [
        "Resume Upload",
        "AI Suggestions",
        "ATS Analysis",
        "PDF Support",
      ],

      github: "https://github.com/PrashantTomar7195",

      live: "#",

      featured: false,
    },

    {
      title: "Smart Krishi",

      description:
        "Smart agriculture platform helping farmers with crop recommendations and modern farming solutions.",

      tech: ["React", "Spring Boot", "MySQL"],

      features: [
        "Crop Recommendation",
        "Weather Integration",
        "Farmer Dashboard",
        "In Progress",
      ],

      github: "YOUR_SMART_KRISHI_GITHUB",

      live: "#",

      featured: false,
    },
  ];

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Featured Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >
            {project.featured && (
              <div className="featured">⭐ Featured</div>
            )}

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <ul className="features">
              {project.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <div className="project-buttons">
              {project.live !== "#" ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              ) : (
                <span className="disabled-btn">
                  Coming Soon
                </span>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;