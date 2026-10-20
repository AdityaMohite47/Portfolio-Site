import { FaChevronRight } from 'react-icons/fa'
import { CanteenLive, ShortlyTerminal, ShotGallery } from './fragments'
import canteenChat from '../assets/projects/canteen-chat.webp'
import canteenOrders from '../assets/projects/canteen-orders.webp'
import canteenMenu from '../assets/projects/canteen-menu.webp'
import canteenArchitecture from '../assets/projects/canteen-architecture.webp'
import ecopayAnalysis from '../assets/projects/ecopay-analysis.webp'
import ecopayPickup from '../assets/projects/ecopay-pickup.webp'

const projects = [
  {
    tag: 'LangGraph + FastAPI',
    color: 'orange',
    title: 'Campus Canteen',
    when: 'Sep – Nov 2025',
    desc: 'Order lunch by chatting. A LangGraph workflow works out what you want, answers menu questions and books the order into MongoDB, and canteen staff see pending orders on a React dashboard. Open “Try it” to order a dish yourself.',
    stack: 'Python, FastAPI, LangGraph, MongoDB, Docker, React',
    visual: (
      <ShotGallery
        label="Campus Canteen"
        ratio="4 / 3"
        shots={[
          { label: 'Chat', src: canteenChat, alt: 'Campus Canteen chat: the bot lists the menu, then books 1 Veg Roll and gives token number 999', frame: 'localhost:8501', bg: '#0e1117' },
          { label: 'Orders', src: canteenOrders, alt: 'Canteen Admin orders page showing pending order #999 for one Veg Roll', frame: 'localhost:8080', bg: '#f9fafb' },
          { label: 'Menu', src: canteenMenu, alt: 'Canteen Admin menu management with items, prices and edit and delete actions', frame: 'localhost:8080/menu', bg: '#f9fafb' },
          { label: 'Architecture', src: canteenArchitecture, alt: 'Architecture diagram: WhatsApp messages go to a LangGraph and Gemini system, orders are stored in MongoDB, vendors use a dashboard', frame: 'excalidraw.com', bg: '#ffffff' },
          { label: 'Try it', live: <CanteenLive />, frame: 'Replay of the booking flow', bg: '#0e1117' },
        ]}
      />
    ),
    primary: ['View the code', 'https://github.com/AdityaMohite47/CampusCanteen-BE'],
    extra: [
      ['Dashboard code', 'https://github.com/AdityaMohite47/CampusCanteen-Dashboard'],
      ['Demo video', 'https://www.youtube.com/watch?v=900mPHrd1K8'],
    ],
  },
  {
    tag: 'Django + Gemini API',
    color: 'blue',
    title: 'EcoPay',
    when: 'Jul – Aug 2024, Gemini API Developer Competition',
    desc: 'A recycling app for the Gemini API Developer Competition, built in collaboration with a senior developer. I wrote the Django backend: REST endpoints that take a photo, ask Gemini which items are recyclable, and return a clean list the app turns into a scheduled pickup.',
    stack: 'Python, Django, REST APIs, Gemini API',
    visual: (
      <ShotGallery
        label="EcoPay"
        ratio="16 / 9"
        shots={[
          { label: 'Gemini analysis', src: ecopayAnalysis, alt: 'EcoPay app listing recyclable objects (metal, plastic, paper) and non-recyclable electronics found in a photo', bg: '#ebebe1', fit: 'cover' },
          { label: 'Pickup scheduled', src: ecopayPickup, alt: 'EcoPay app confirming a pickup scheduled today with the recyclable and non-recyclable items listed', bg: '#ebebe1', fit: 'cover' },
        ]}
      />
    ),
    primary: ['View the code', 'https://github.com/the-ecopay/ecopay-be'],
    extra: [['Demo video', 'https://www.youtube.com/watch?v=JPifD5EUVow']],
  },
  {
    tag: 'Go',
    color: 'teal',
    title: 'short.ly',
    when: '2026, in progress',
    desc: 'A URL shortener, and my way into Go. Standard-library routing with net/http, PostgreSQL through pgx, base62 short codes, and a 301 for every code it knows.',
    stack: 'Go, net/http, PostgreSQL, pgx',
    visual: <ShotGallery label="short.ly" shots={[{ label: 'Terminal', live: <ShortlyTerminal />, frame: 'zsh: short.ly', bg: '#101010' }]} />,
    primary: ['View the code', 'https://github.com/AdityaMohite47/short.ly'],
    extra: [],
  },
]

function Projects() {
  return (
    <section id="projects" className="section light">
      <div className="container">
        <header className="section-head" data-reveal>
          <h2>Projects</h2>
          <p>Things I’ve built in college and since. Most of them are backends with something talking to them.</p>
        </header>

        <div className="cases">
          {projects.map((p, i) => (
            <article key={p.title} className={`case${i % 2 ? ' case--flip' : ''}`}>
              <div className="case-text" data-reveal={i % 2 ? 'right' : 'left'}>
                <span className={`tag tag--${p.color}`}>{p.tag}</span>
                <h3>{p.title}</h3>
                <p className="case-when">{p.when}</p>
                <p className="case-desc">{p.desc}</p>
                <p className="case-stack">{p.stack}</p>
                <div className="case-actions">
                  <a className={`btn btn-${p.color}`} href={p.primary[1]} target="_blank" rel="noreferrer">
                    {p.primary[0]} <FaChevronRight aria-hidden="true" />
                  </a>
                  {p.extra.map(([label, href]) => (
                    <a key={href} className="mono-link" href={href} target="_blank" rel="noreferrer">{label}</a>
                  ))}
                </div>
              </div>
              <div className="case-visual" data-reveal={i % 2 ? 'left' : 'right'} style={{ '--d': '120ms' }}>
                {p.visual}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
