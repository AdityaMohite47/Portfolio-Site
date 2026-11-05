import canteenShot from '../assets/projects/canteen.webp'
import ecopayShot from '../assets/projects/ecopay.webp'
import { tech } from '../tech'
import { CodeIcon, PlayIcon } from './icons'

const GH = 'https://github.com/AdityaMohite47/'

const projects = [
  {
    title: 'short.ly',
    when: '2026 · in progress',
    desc: 'A URL shortener, and my way into Go. Standard-library routing with net/http, PostgreSQL through pgx, a Redis cache for lookups, base62 short codes, and a 301 for every code it knows.',
    media: { terminal: true },
    built: [tech.go, tech.postgresql, tech.redis, tech.docker],
    links: [['Source Code', `${GH}short_ly`, 'code']],
  },
  {
    title: 'Campus Canteen',
    when: 'Sep – Nov 2025',
    desc: 'Order lunch by chatting. A LangGraph workflow works out what you want, answers menu questions and books the order into MongoDB; staff see pending orders on a React dashboard.',
    media: { image: canteenShot, bg: '#0e1117', top: true, alt: 'Campus Canteen chat: the bot lists the menu, then books 1 Veg Roll and gives token number 999' },
    built: [tech.python, tech.fastapi, tech.langgraph, tech.gemini, tech.mongodb, tech.docker, tech.react],
    videoOwnRow: true,
    links: [
      ['Source Code', `${GH}CampusCanteen-BE`, 'code', 'Backend'],
      ['Source Code', `${GH}CampusCanteen-Dashboard`, 'code', 'Dashboard'],
      ['Demo video', 'https://www.youtube.com/watch?v=900mPHrd1K8', 'video'],
    ],
  },
  {
    title: 'EcoPay',
    when: 'Jul – Aug 2024',
    desc: 'A recycling app for the Gemini API Developer Competition, built with a senior developer. I wrote the Django backend: endpoints that take a photo, ask Gemini what’s recyclable, and return a list the app turns into a scheduled pickup.',
    media: { image: ecopayShot, bg: '#ebebe1', alt: 'EcoPay app listing recyclable objects (metal, plastic, paper) and non-recyclable electronics found in a photo' },
    built: [tech.python, tech.django, tech.gemini],
    links: [
      ['Source Code', 'https://github.com/the-ecopay/ecopay-be', 'code'],
      ['Demo video', 'https://www.youtube.com/watch?v=JPifD5EUVow', 'video'],
    ],
  },
]

function Terminal() {
  return (
    <pre className="mono terminal" aria-hidden="true">
      <span className="t-ok">$</span> curl -X POST localhost:8080/shorten \{'\n'}
      {'    '}-d {"'"}{'{"url": "https://adityamohite.in"}'}{"'"}{'\n'}
      <span className="t-ok">HTTP/1.1 201 Created</span>{'\n'}
      {'{'}<span className="t-key">"short_url"</span>: "aZ3kL9q"{'}'}{'\n'}
      {'\n'}
      <span className="t-ok">$</span> curl -I localhost:8080/aZ3kL9q{'\n'}
      <span className="t-ok">HTTP/1.1 301 Moved Permanently</span>{'\n'}
      Location: https://adityamohite.in
    </pre>
  )
}

function Projects() {
  return (
    <section id="work" className="band band--white">
      <div className="wrap wrap--wide band-inner band-inner--roomy">
        <header className="band-head" data-reveal>
          <h2>Projects I’ve built</h2>
        </header>

        <div className="project-list">
          {projects.map((p, i) => (
            <article className={`card project${i % 2 ? ' project--flip' : ''}`} key={p.title} data-reveal>
              {p.media.terminal ? (
                <div className="project-media project-media--terminal">
                  <Terminal />
                </div>
              ) : (
                <div className="project-media" style={{ background: p.media.bg }}>
                  <img
                    src={p.media.image}
                    alt={p.media.alt}
                    loading="lazy"
                    style={p.media.top ? { objectPosition: 'top' } : undefined}
                  />
                </div>
              )}

              <div className="project-body">
                <div className="project-head">
                  <h3>{p.title}</h3>
                  <p className="mono project-when">{p.when}</p>
                </div>
                <p className="project-desc">{p.desc}</p>
                <ul className="stack" aria-label="Built with">
                  {p.built.map((t) => (
                    <li className="chip" key={t.name}>
                      <img src={t.src} alt="" width="18" height="18" data-dark={t.dark} />
                      {t.name}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  {(p.videoOwnRow ? [p.links.filter((l) => l[2] === 'code'), p.links.filter((l) => l[2] !== 'code')] : [p.links]).map(
                    (row) => (
                      <div className="project-links-row" key={row[0][1]}>
                        {row.map(([label, href, kind, note]) => (
                          <a
                            className={`btn ${kind === 'code' ? 'btn-white' : 'btn-ghost'}`}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            key={href}
                          >
                            {kind === 'video' ? <PlayIcon /> : <CodeIcon />}
                            {label}
                            {note && <span className="btn-note">{note}</span>}
                          </a>
                        ))}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
