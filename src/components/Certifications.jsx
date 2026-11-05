import claudeCode101 from '../assets/certifications/claude-code-101.webp'
import claudeCodeInAction from '../assets/certifications/claude-code-in-action.webp'
import pythonMlMasterclass from '../assets/certifications/python-ml-masterclass.webp'
import pullShark from '../assets/certifications/github-pull-shark.webp'

const certifications = [
  {
    title: 'Claude Code in Action',
    meta: 'Anthropic · Apr 2026',
    url: 'https://verify.skilljar.com/c/89ewuejptmwf',
    linkLabel: 'Verify',
    ariaLabel: 'Verify Claude Code in Action credential',
    image: claudeCodeInAction,
  },
  {
    title: 'Claude Code 101',
    meta: 'Anthropic · Apr 2026',
    url: 'https://verify.skilljar.com/c/vebapw8y2goy',
    linkLabel: 'Verify',
    ariaLabel: 'Verify Claude Code 101 credential',
    image: claudeCode101,
  },
  {
    title: 'Python for ML & Data Science',
    meta: 'Udemy · Dec 2024 · 44 hours',
    url: 'https://www.udemy.com/certificate/UC-183ee389-8974-410f-b34d-f1d0d59f0f7e/',
    linkLabel: 'Verify',
    ariaLabel: 'Verify Python for Machine Learning credential',
    image: pythonMlMasterclass,
  },
  {
    title: 'Pull Shark',
    meta: 'GitHub · Oct 2025',
    url: 'https://github.com/AdityaMohite47?tab=achievements&achievement=pull-shark',
    linkLabel: 'See it',
    ariaLabel: 'See the Pull Shark achievement on GitHub',
    image: pullShark,
    badge: true,
  },
]

function Certifications() {
  return (
    <section id="certificates" className="band band--white">
      <div className="wrap wrap--wide band-inner band-inner--loose">
        <header className="band-head" data-reveal>
          <h2>Certificates &amp; Achievements</h2>
        </header>

        <ul className="cert-grid">
          {certifications.map((cert, i) => (
            <li className="card cert" key={cert.title} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <a
                className={`cert-thumb${cert.badge ? ' cert-thumb--badge' : ''}`}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                aria-label={cert.ariaLabel}
              >
                <img src={cert.image} alt="" loading="lazy" />
              </a>
              <div className="cert-body">
                <h3>{cert.title}</h3>
                <p className="cert-meta">{cert.meta}</p>
                <a className="link cert-link" href={cert.url} target="_blank" rel="noreferrer">
                  {cert.linkLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
