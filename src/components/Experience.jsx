import qilinLogoDark from '../assets/qilinlab-logo-dark.svg'
import qilinLogoLight from '../assets/qilinlab-logo-light.svg'

const experience = [
  {
    role: 'Junior Developer',
    company: 'Qilin Lab',
    companyUrl: 'https://qilinlab.com/',
    logoDark: qilinLogoDark,
    logoLight: qilinLogoLight,
    period: 'May 2026 — Present',
    location: 'Bengaluru, India · On-site',
    highlights: [
      'Develop and deploy full-stack features for the EAM platform using Django & REST Framework and ReactJS.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience">
      <h2><span>#</span> experience</h2>

      <div className="timeline">
        {experience.map((item) => (
          <div key={`${item.company}-${item.role}`} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-date">{item.period}</p>
              <h3>
                {item.role} ·{' '}
                <a href={item.companyUrl} target="_blank" rel="noreferrer" className="company-link">
                  <picture>
                    <source srcSet={item.logoDark} media="(prefers-color-scheme: dark)" />
                    <img src={item.logoLight} alt={item.company} className="company-logo" />
                  </picture>
                </a>
              </h3>
              <p className="timeline-location">{item.location}</p>
              <ul className="timeline-description">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
