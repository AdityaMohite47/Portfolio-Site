import portrait from '../assets/profile-portrait.webp'
import { LINKS, tech } from '../tech'
import { LinkedInIcon } from './icons'

function Hero() {
  return (
    <section id="top" className="intro">
      <div className="wrap wrap--wide intro-inner">
        <div className="intro-text">
          <h1 className="intro-title in" style={{ animationDelay: '0ms' }}>
            Hello <span aria-hidden="true">👋</span> I am <span className="intro-name">Aditya</span>.
          </h1>

          <p className="intro-lead in" style={{ animationDelay: '90ms' }}>
            I am a Software Developer who has an interest in Backend stuff and in understanding what works
            behind the scenes.
          </p>

          <p className="intro-now in" style={{ animationDelay: '170ms' }}>
            Currently exploring more of the tech world has to offer...
          </p>

          <div className="intro-actions in" style={{ animationDelay: '250ms' }}>
            <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">
              <img src={tech.github.src} alt="" width="18" height="18" data-dark={tech.github.dark} /> GitHub
            </a>
            <a className="btn btn-ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        <div className="portrait in" style={{ animationDelay: '120ms' }}>
          <img
            src={portrait}
            alt="Illustrated portrait of Aditya in glasses, making a peace sign"
            width="600"
            height="600"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
