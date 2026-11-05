import qilinLogo from '../assets/qilinlab-logo-dark.svg'
import qilinLogoLight from '../assets/qilinlab-logo-light.svg'
import { ArrowIcon } from './icons'

const job = {
  company: 'Qilin Lab',
  url: 'https://qilinlab.com/',
  logo: qilinLogo,
  logoOnDark: qilinLogoLight,
  role: 'Junior Software Developer',
  type: 'Full time',
  period: 'May 2026 – Present',
  location: 'Bengaluru, Karnataka · On-site',
  work: [
    'Developing full-stack features for the company’s Enterprise Asset Management (EAM) platform.',
    'Building REST APIs with Django and Django REST Framework, and the React screens that use them.',
  ],
}

function Experience() {
  return (
    <section id="about" className="band">
      <div className="wrap wrap--narrow band-inner">
        <header className="band-head" data-reveal>
          <h2>Where I work now</h2>
        </header>

        <article className="card job" data-reveal>
          <div className="job-side">
            <a href={job.url} target="_blank" rel="noreferrer" className="job-logo">
              <picture>
                <source srcSet={job.logoOnDark} media="(prefers-color-scheme: dark)" />
                <img src={job.logo} alt={job.company} width="180" height="31" />
              </picture>
            </a>
            <p className="mono job-period">{job.period}</p>
            <p className="mono job-location">{job.location}</p>
          </div>
          <div className="job-main">
            <h3>{job.role}</h3>
            <p className="job-company">
              {job.company} · {job.type}
            </p>
            <ul className="job-work">
              {job.work.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a className="link job-link" href={job.url} target="_blank" rel="noreferrer">
              Visit {job.company} <ArrowIcon />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience
