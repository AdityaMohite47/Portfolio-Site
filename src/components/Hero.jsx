import { useLayoutEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import GitHubStats from './GitHubStats'
import profileImg from '../assets/profile.png'
import qilinLogoDark from '../assets/qilinlab-logo-dark.svg'
import qilinLogoLight from '../assets/qilinlab-logo-light.svg'

function Hero() {
  const nameRef = useRef(null)

  useLayoutEffect(() => {
    if (nameRef.current) {
      nameRef.current.style.setProperty('--name-width', `${nameRef.current.scrollWidth}px`)
    }
  }, [])

  return (
    <section id="hero">

      <div className="hero-text">
        <div className="hero-intro">
          <p className="hero-greeting">$ whoami</p>
          <h1>
            <span ref={nameRef} className="typing-name">Aditya Mohite</span>
            <span className="cursor-blink" aria-hidden="true">_</span>
          </h1>
        </div>

        <div className="hero-handles">
          <a href="https://github.com/AdityaMohite47" target="_blank">
            <FaGithub size={18} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aditya--mohite/" target="_blank">
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <p className="hero-role">Junior <span className="highlight">Full-Stack</span> Developer</p>

        <a
          href="https://qilinlab.com/"
          target="_blank"
          rel="noreferrer"
          className="status-badge"
        >
          <span className="status-dot" />
          Currently building @
          <picture>
            <source srcSet={qilinLogoDark} media="(prefers-color-scheme: dark)" />
            <img src={qilinLogoLight} alt="Qilin Lab" className="company-logo" />
          </picture>
        </a>

        <GitHubStats />

        <a href="/Portfolio-Site/Aditya_Mohite.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="profile" />
      </div>

    </section>
  )
}

export default Hero
