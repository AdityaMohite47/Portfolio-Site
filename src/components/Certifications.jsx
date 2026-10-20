import { useEffect, useRef, useState } from 'react'
import { FaAward, FaChevronRight, FaTimes } from 'react-icons/fa'
import claudeCode101 from '../assets/certifications/claude-code-101.webp'
import claudeCodeInAction from '../assets/certifications/claude-code-in-action.webp'
import pythonMlMasterclass from '../assets/certifications/python-ml-masterclass.webp'
import pullShark from '../assets/certifications/github-pull-shark.webp'

const certifications = [
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    note: 'Credential ID 89ewuejptmwf',
    url: 'https://verify.skilljar.com/c/89ewuejptmwf',
    linkLabel: 'Verify credential',
    image: claudeCodeInAction,
    alt: 'Anthropic certificate of completion for Claude Code in Action, awarded to Aditya Mohite',
  },
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    note: 'Credential ID vebapw8y2goy',
    url: 'https://verify.skilljar.com/c/vebapw8y2goy',
    linkLabel: 'Verify credential',
    image: claudeCode101,
    alt: 'Anthropic certificate of completion for Claude Code 101, awarded to Aditya Mohite',
  },
  {
    title: 'Python for Machine Learning & Data Science Masterclass',
    issuer: 'Udemy',
    date: 'Dec 2024',
    note: '44 hours, taught by Jose Portilla and Pierian Training',
    url: 'https://www.udemy.com/certificate/UC-183ee389-8974-410f-b34d-f1d0d59f0f7e/',
    linkLabel: 'Verify credential',
    image: pythonMlMasterclass,
    alt: 'Udemy certificate of completion for Python for Machine Learning & Data Science Masterclass, awarded to Aditya Mohite',
  },
  {
    title: 'Pull Shark',
    issuer: 'GitHub',
    date: 'Oct 2025',
    note: 'Achievement for pull requests merged into a repository',
    url: 'https://github.com/AdityaMohite47?tab=achievements&achievement=pull-shark',
    linkLabel: 'See it on GitHub',
    image: pullShark,
    alt: 'GitHub Pull Shark achievement badge',
    badge: true,
  },
]

function CertModal({ cert, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeBtnRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={cert.title} onClick={(e) => e.stopPropagation()}>
        <button ref={closeBtnRef} type="button" className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        <img src={cert.image} alt={cert.alt} className={cert.badge ? 'badge' : ''} />
        <div className="modal-info">
          <p><strong>{cert.title}</strong><br />{cert.issuer}, {cert.date}</p>
          <a className="btn btn-green" href={cert.url} target="_blank" rel="noreferrer">
            {cert.linkLabel} <FaChevronRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}

function Certifications() {
  const [openCert, setOpenCert] = useState(null)

  return (
    <section id="certificates" className="section dark">
      <div className="container">
        <header className="section-head" data-reveal>
          <h2>Certificates</h2>
          <p>Courses I’ve finished, and one achievement from GitHub. Select a certificate to see it full size.</p>
        </header>

        <ul className="cert-grid">
          {certifications.map((cert, i) => (
            <li key={cert.title} className="cert-card" data-reveal style={{ '--d': `${(i % 2) * 90 + Math.floor(i / 2) * 60}ms` }}>
              <FaAward className="cert-mark" aria-hidden="true" />
              <button type="button" className="cert-thumb" onClick={() => setOpenCert(cert)} aria-label={`View ${cert.title} full size`}>
                <img src={cert.image} alt="" loading="lazy" className={cert.badge ? 'badge' : ''} />
              </button>
              <h3>{cert.title}</h3>
              <p className="cert-note">{cert.note}</p>
              <div className="cert-foot">
                <span className="cert-issuer">{cert.issuer}, {cert.date}</span>
                <a className="mono-link" href={cert.url} target="_blank" rel="noreferrer">{cert.linkLabel}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {openCert && <CertModal cert={openCert} onClose={() => setOpenCert(null)} />}
    </section>
  )
}

export default Certifications
