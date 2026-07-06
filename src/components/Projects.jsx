import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "AI Resume Analyzer",
      desc: "AI-powered resume analyzer using Azure AI and Node.js.",
      tech: "HTML • CSS • JavaScript • Node • Azure",
      github: "https://github.com/PrashantTomar7195",
    },
    {
      title: "AI Chatbot",
      desc: "Chatbot using Azure OpenAI API.",
      tech: "JavaScript • Node • Azure",
      github: "https://github.com/PrashantTomar7195",
    },
    {
      title: "Portfolio Website",
      desc: "Modern React portfolio with animations.",
      tech: "React • CSS",
      github: "https://github.com/PrashantTomar7195",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <span>{p.tech}</span>

            <a href={p.github} target="_blank">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;