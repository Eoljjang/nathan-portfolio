import './About.css'
import pfpImage from "../images/pfp.png"

function About({ id, setActiveSection }) {
  const name = 'Nathan Wong'
  const description =
    "I'm a passionate software developer with expertise in building modern web applications. I love creating clean, efficient code and solving complex problems. When I'm not coding, you can catch me on the volleyball court, or making new dishes in the kitchen!"
  const skills = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Electron', 'Node.js', 'Python', 'Git']

  return (
    <section id={id} className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-avatar">
            <img src={pfpImage} alt={`${name} profile`} />
          </div>

          <div className="about-text">
            <h1 className="about-title">
              Hi, I'm <span className="highlight">{name}</span>
            </h1>
            <h2 className="about-subtitle">Software Developer</h2>

            <p className="about-description">{description}</p>

            <div className="about-skills">
              <h3>Technologies I work with:</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-cta">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  setActiveSection('projects')
                }}
                className="btn btn-primary"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setActiveSection('contact')
                }}
                className="btn btn-secondary"
              >
                Get In Touch
              </a>
              <a href="./src/data/resume.pdf" download className="btn btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

