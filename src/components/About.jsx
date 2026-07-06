import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-card">

          <h3>Who Am I?</h3>

          <p>
            I'm Prashant Tomar, a passionate Java Full Stack Developer.
            I enjoy building scalable web applications using Java,
            Spring Boot, React and MySQL.
          </p>

        </div>

        <div className="about-card">

          <h3>Education</h3>

          <p>
            B.Tech Computer Science Engineering
            <br />
            GLA University
          </p>

        </div>

        <div className="about-card">

          <h3>Career Goal</h3>

          <p>
            Seeking an SDE / Java Full Stack Developer role where
            I can solve real-world problems and build impactful software.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;