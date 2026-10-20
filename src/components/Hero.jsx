import { FaDownload } from 'react-icons/fa'
import { SiDjango, SiDocker, SiFastapi, SiGo, SiLangchain, SiPostgresql, SiPython, SiReact } from 'react-icons/si'
import portrait from '../assets/profile-portrait.webp'

const tech = [
  ['Python', SiPython],
  ['Django', SiDjango],
  ['FastAPI', SiFastapi],
  ['React', SiReact],
  ['PostgreSQL', SiPostgresql],
  ['Docker', SiDocker],
  ['LangChain', SiLangchain],
  ['Go', SiGo],
]

function Hero() {
  return (
    <section id="home" className="hero dark">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1 data-reveal style={{ '--d': '0ms' }}>Aditya Mohite</h1>
          <p className="hero-role" data-reveal style={{ '--d': '80ms' }}>Software Developer</p>
          <p className="hero-intro" data-reveal style={{ '--d': '140ms' }}>
            I build Django and FastAPI backends, the React screens on top of them, and the occasional
            LangGraph-powered bot. Currently learning Go.
          </p>
          <a
            className="btn btn-green btn-flat"
            href={`${import.meta.env.BASE_URL}Aditya_Mohite.pdf`}
            download="Aditya_Mohite_Resume.pdf"
            data-reveal
            style={{ '--d': '220ms' }}
          >
            <FaDownload aria-hidden="true" /> Download Resume
          </a>
        </div>
        <div className="hero-photo" data-reveal="zoom" style={{ '--d': '100ms' }}>
          <img src={portrait} alt="Illustrated portrait of Aditya in glasses, making a peace sign" width="600" height="600" />
        </div>
      </div>

      <div className="container">
        <p className="worked-with" data-reveal style={{ '--d': '300ms' }}>Tech I work with</p>
        <ul className="tech-row">
          {tech.map(([name, icon], i) => {
            const Icon = icon
            return (
              <li key={name} data-reveal style={{ '--d': `${340 + i * 45}ms` }}>
                <Icon aria-hidden="true" />
                <span>{name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Hero
