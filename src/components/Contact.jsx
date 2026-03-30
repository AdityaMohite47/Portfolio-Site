import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact">

      <h2>Contact</h2>

      <div className="contact-links">

        <a href="mailto:adityamohite.dev@gmail.com">
          <FaEnvelope size={16} />
          Gmail
        </a>

        <a href="https://github.com/AdityaMohite47" target="_blank">
          <FaGithub size={16} />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/aditya--mohite/" target="_blank">
          <FaLinkedin size={16} />
          LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Contact
