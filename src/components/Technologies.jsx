import { tech } from '../tech'

const groups = [
  ['Backend', [tech.python, tech.django, tech.fastapi]],
  ['Frontend & data', [tech.react, tech.javascript, tech.postgresql, tech.mongodb, tech.redis]],
  ['AI & machine learning', [tech.langchain, tech.gemini, tech.pytorch, tech.sklearn]],
  ['Tools & learning', [tech.docker, tech.github, { ...tech.go, learning: true }, { ...tech.rust, learning: true }]],
]

function Technologies() {
  return (
    <section id="technologies" className="band">
      <div className="wrap wrap--narrow band-inner">
        <h2>What I Know in Tech</h2>
        <div className="tech-groups" data-reveal>
          {groups.map(([label, items]) => (
            <div className="tech-group" key={label}>
              <p className="tech-group-label">{label}</p>
              <ul className="tech-tiles">
                {items.map((t) => (
                  <li className={`tile${t.learning ? ' tile--learning' : ''}`} key={t.name}>
                    <img src={t.src} alt="" width="20" height="20" data-dark={t.dark} />
                    {t.name}
                    {t.learning && <span className="tile-note">· learning</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
