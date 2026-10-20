import { FaChevronRight } from 'react-icons/fa'
import qilinLogo from '../assets/qilinlab-logo-light.svg'

const jobs = [
  {
    company: 'Qilin Lab',
    url: 'https://qilinlab.com/',
    logo: qilinLogo,
    role: 'Junior Developer',
    type: 'Full-time',
    period: 'May 2026 – Present',
    location: 'Bengaluru, Karnataka, On-site',
    current: true,
    work: [
      'Developing full-stack features for the company’s Enterprise Asset Management (EAM) platform.',
      'Building REST APIs with Django and Django REST Framework, and the React screens that use them.',
    ],
    stack: ['Python', 'Django', 'Django REST Framework', 'React', 'JavaScript'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section muted">
      <div className="container">
        <header className="section-head" data-reveal>
          <h2>Experience</h2>
          <p>Where I work now.</p>
        </header>

        <ol className="jobs">
          {jobs.map((job) => (
            <li key={job.company} className="job" data-reveal style={{ '--d': '100ms' }}>
              <div className="job-side">
                <a href={job.url} target="_blank" rel="noreferrer" className="job-logo">
                  <img src={job.logo} alt={job.company} width="180" height="31" />
                </a>
                <p className="job-period">{job.period}</p>
                <p className="job-location">{job.location}</p>
              </div>
              <div className="job-main">
                <div className="job-title-row">
                  <h3>{job.role}</h3>
                  {job.current && <span className="tag tag--green">Current</span>}
                </div>
                <p className="job-company">
                  {job.company}, {job.type}
                </p>
                <ul className="job-work">
                  {job.work.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <ul className="job-stack" aria-label="Technologies">
                  {job.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a className="mono-link job-link" href={job.url} target="_blank" rel="noreferrer">
                  Visit {job.company} <FaChevronRight aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
