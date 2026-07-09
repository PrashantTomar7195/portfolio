import "./Education.css";
import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaUniversity />,
      title: "B.Tech Computer Science & Engineering",
      institute: "GLA University, Mathura",
      year: "2023 - Present",
      points: [
        "Focused on Java Full Stack Development",
        "Strong foundation in DSA & Core CS",
        "Building real-world software projects",
      ],
    },

    {
      icon: <FaSchool />,
      title: "Higher Secondary (Class XII)",
      institute: "C.B. Gupta Saraswati Vidyapeeth, Aligarh",
      year: "2023",
      points: [
        "Science Stream",
        "Mathematics & Computer Fundamentals",
        "Strong academic foundation",
      ],
    },

    {
      icon: <FaGraduationCap />,
      title: "Secondary (Class X)",
      institute: "C.B. Gupta Saraswati Vidyapeeth, Aligarh",
      year: "2021",
      points: [
        "Built analytical thinking skills",
        "Active participation in school activities",
        "Developed problem-solving mindset",
      ],
    },
  ];

  return (
    <section className="education" id="education">

      <h2>Education</h2>

      <div className="education-grid">

        {education.map((item, index) => (

          <div className="education-card" key={index}>

            <div className="edu-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <h4>{item.institute}</h4>

            <span>{item.year}</span>

            <ul>
              {item.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Education;