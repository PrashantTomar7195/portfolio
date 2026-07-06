import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "SQL", level: 85 },
    { name: "MySQL", level: 85 },
    { name: "Git & GitHub", level: 80 },
    { name: "DSA", level: 80 },
  ];

  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-top">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;