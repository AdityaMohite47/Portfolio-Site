import { FaGithub, FaLinkedin } from 'react-icons/fa'
import GitHubStats from './GitHubStats'

function Hero() {
  return (
    <section id="hero">

      <div className="hero-text">
        <h1>Aditya Mohite</h1>

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

        <p className="hero-role">Entry Level Software Developer</p>

        <GitHubStats />

        <a href="/Aditya_Mohite.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>

      <div className="hero-image">
        <img src="/profile.png" alt="profile" />
      </div>

    </section>
  )
}

export default Hero
