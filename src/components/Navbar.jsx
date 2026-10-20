import { useState } from 'react'
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa'

const links = [
  ['#home', 'Home'],
  ['#experience', 'Experience'],
  ['#projects', 'Projects'],
  ['#certificates', 'Certificates'],
  ['#more-work', 'More work'],
  ['#contact', 'Get in touch'],
]

const socials = [
  ['https://www.linkedin.com/in/aditya--mohite/', 'LinkedIn', FaLinkedinIn],
  ['https://github.com/AdityaMohite47', 'GitHub', FaGithub],
  ['mailto:adityamohite.dev@gmail.com', 'Email', FaEnvelope],
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          <span>Menu</span>
        </button>
        <ul id="nav-links" className="nav-links">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <ul className="nav-socials">
          {socials.map(([href, label, icon]) => {
            const Icon = icon
            return (
              <li key={label}>
                <a href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <Icon aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
