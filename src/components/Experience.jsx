import { experience } from '../data/experience'
import './Experience.css'

function Experience({ id }) {
  return (
    <section id={id} className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          A snapshot of the work I’ve delivered in professional roles (company-owned projects, no public links. Feel
          free to ask me about them!).
        </p>

        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.id} className="experience-card">
              <header className="experience-header">
                <div className="experience-heading">
                  <h3 className="experience-role">{item.role}</h3>
                  <div className="experience-company">
                    <span className="experience-company-name">{item.company}</span>
                    {item.location ? <span className="experience-location"> • {item.location}</span> : null}
                  </div>
                </div>
                <div className="experience-dates">
                  {item.start} – {item.end}
                </div>
              </header>

              {item.summary ? <p className="experience-summary">{item.summary}</p> : null}

              <div className="experience-work">
                {item.work?.map((workItem, idx) => (
                  <div key={idx} className="experience-work-item">
                    <div className="experience-work-title">{workItem.title}</div>
                    <div className="experience-work-description">{workItem.description}</div>
                    <div className="experience-tech">
                      {workItem.technologies?.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

