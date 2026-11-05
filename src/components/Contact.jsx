import portrait from '../assets/profile-portrait.webp'
import { LINKS, tech } from '../tech'
import { LinkedInIcon } from './icons'

const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${LINKS.email}&su=${encodeURIComponent('Hello Aditya')}`

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap wrap--narrow contact-inner">
        <img className="avatar avatar--sm" src={portrait} alt="" width="64" height="64" data-reveal />
        <h2 className="contact-title" data-reveal style={{ '--d': '60ms' }}>
          Thanks for scrolling this far. If you’re hiring, building something, or just want to say hi, my inbox
          is open.
        </h2>
        <a className="mail" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer" data-reveal style={{ '--d': '120ms' }}>
          {LINKS.email}
        </a>
        <ul className="contact-actions" data-reveal style={{ '--d': '180ms' }}>
          <li>
            <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">
              <img src={tech.github.src} alt="" width="18" height="18" data-dark={tech.github.dark} /> GitHub
            </a>
          </li>
          <li>
            <a className="btn btn-ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
