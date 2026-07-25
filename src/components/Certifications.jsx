import { useEffect, useRef, useState } from 'react'
import { FaExpandAlt, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import claudeCode101 from '../assets/certifications/claude-code-101.png'
import claudeCodeInAction from '../assets/certifications/claude-code-in-action.png'
import pythonMlMasterclass from '../assets/certifications/python-ml-masterclass.png'

const certifications = [
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    url: 'https://verify.skilljar.com/c/vebapw8y2goy',
    image: claudeCode101,
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    url: 'https://verify.skilljar.com/c/89ewuejptmwf',
    image: claudeCodeInAction,
  },
  {
    title: 'Python for ML & Data Science Masterclass',
    issuer: 'Udemy',
    date: 'Dec 2024',
    url: 'https://www.udemy.com/certificate/UC-183ee389-8974-410f-b34d-f1d0d59f0f7e/',
    image: pythonMlMasterclass,
  },
]

function CertModal({ cert, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    closeBtnRef.current?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div
        className="cert-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${cert.title} certificate preview`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="cert-modal-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          <FaTimes />
        </button>

        <img src={cert.image} alt={`${cert.title} certificate`} className="cert-modal-img" />

        <div className="cert-modal-info">
          <p className="cert-title">{cert.title}</p>
          <p className="cert-meta">{cert.issuer} · {cert.date}</p>
          {cert.url && (
            <a href={cert.url} target="_blank" rel="noreferrer" className="cert-modal-verify">
              Verify credential <FaExternalLinkAlt size={11} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Certifications() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section id="certifications">
      <h2><span>#</span> certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <button
            key={cert.title}
            type="button"
            className="cert-card"
            onClick={() => setActiveCert(cert)}
          >
            <div className="cert-thumb">
              <img src={cert.image} alt="" />
              <span className="cert-thumb-overlay">
                <FaExpandAlt size={14} /> View certificate
              </span>
            </div>
            <div className="cert-body">
              <p className="cert-title">{cert.title}</p>
              <p className="cert-meta">{cert.issuer} · {cert.date}</p>
            </div>
          </button>
        ))}
      </div>

      {activeCert && <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />}
    </section>
  )
}

export default Certifications
