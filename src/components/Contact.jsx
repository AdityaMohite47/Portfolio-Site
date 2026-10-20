const EMAIL = 'adityamohite.dev@gmail.com'
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent('Hello Aditya')}`

function Contact() {
  return (
    <section id="contact" className="section dark">
      <div className="container contact">
        <h2 data-reveal>Get in touch</h2>
        <p className="contact-lede" data-reveal style={{ '--d': '90ms' }}>Hiring, building something, or want to reach out?</p>
        <a className="contact-email" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer" data-reveal style={{ '--d': '180ms' }}>
          Email at {EMAIL}
        </a>
      </div>
    </section>
  )
}

export default Contact
