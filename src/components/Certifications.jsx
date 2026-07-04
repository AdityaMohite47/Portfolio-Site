import { FaCertificate } from 'react-icons/fa'

const certifications = [
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    url: 'https://verify.skilljar.com/c/vebapw8y2goy',
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    url: 'https://verify.skilljar.com/c/89ewuejptmwf',
  },
  {
    title: 'Python for ML & Data Science Masterclass',
    issuer: 'Udemy',
    date: 'Dec 2024',
    url: 'https://www.udemy.com/certificate/UC-183ee389-8974-410f-b34d-f1d0d59f0f7e/',
  },
]

function Certifications() {
  return (
    <section id="certifications">
      <h2><span>#</span> certifications</h2>

      <div className="certifications-row">
        {certifications.map((cert) => {
          const Tag = cert.url ? 'a' : 'div'
          const linkProps = cert.url ? { href: cert.url, target: '_blank', rel: 'noreferrer' } : {}

          return (
            <Tag key={cert.title} className="cert-chip" {...linkProps}>
              <FaCertificate size={14} />
              <div>
                <p className="cert-title">{cert.title}</p>
                <p className="cert-meta">{cert.issuer} · {cert.date}</p>
              </div>
            </Tag>
          )
        })}
      </div>
    </section>
  )
}

export default Certifications
