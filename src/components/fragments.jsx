import { useEffect, useRef, useState } from 'react'

// The real bot's menu, as shown in the demo video.
const menu = [
  ['Veg Roll', 25],
  ['Vada Pav', 15],
  ['Samosa', 18],
  ['Chicken Fried Rice', 140],
  ['Paneer Puff', 30],
  ['Kachori', 25],
  ['Noodles', 35],
]

// Replays the real bot's booking reply word for word; only the dish and token change.
export function CanteenLive() {
  const [messages, setMessages] = useState([
    { from: 'user', text: 'list the menu' },
    { from: 'bot', menu: true },
  ])
  const [busy, setBusy] = useState(false)
  const [orders, setOrders] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    if (list) list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' })
  }, [messages])

  function order(item) {
    if (busy) return
    setBusy(true)
    setMessages((m) => [...m, { from: 'user', text: `1 ${item.toLowerCase()} please` }, { from: 'bot', typing: true }])
    setTimeout(() => {
      const token = 1000 + orders
      setOrders((n) => n + 1)
      setMessages((m) => [...m.slice(0, -1), { from: 'bot', booked: item, token }])
      setBusy(false)
    }, 900)
  }

  return (
    <div className="ui-chat" data-ui>
      <header>
        <strong>CampusCanteen</strong>
        <span>Pre-order meals by chatting with the assistant below.</span>
      </header>
      <ol className="chat-log" ref={listRef} aria-live="polite" aria-label="Conversation">
        {messages.map((m, i) => (
          <li key={i} className={`msg ${m.from}`}>
            <span className="avatar" aria-hidden="true" />
            {m.text && <p>{m.text}</p>}
            {m.menu && (
              <div>
                <p>Absolutely! Here’s what’s cooking today for you:</p>
                <div className="menu">
                  {menu.map(([item, price]) => (
                    <span key={item} className="menu-row"><span>{item}</span><span>₹{price}</span></span>
                  ))}
                </div>
              </div>
            )}
            {m.typing && <p className="typing">typing…</p>}
            {m.booked && (
              <p>
                Perfect! <em>1 {m.booked}</em> has been pre-booked for you. Please visit the canteen to pay &amp; collect.
                Token Number for Your Order is : <strong className="token">{m.token}</strong>
              </p>
            )}
          </li>
        ))}
      </ol>
      <div className="chips" role="group" aria-label="Order a dish">
        {menu.map(([item, price]) => (
          <button key={item} type="button" onClick={() => order(item)} disabled={busy}>
            {item} <span>₹{price}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const notes = [
  ['Sprint', 'Asset form: validate dates on the server too'],
  ['Read', 'Django signals vs. overriding save()'],
  ['short.ly', 'Click counts per code?'],
  ['Groceries', 'Milk, bread, coffee'],
  ['Ideas', 'Dark mode for KeepNotes'],
  ['Books', 'Designing Data-Intensive Applications'],
]

export function NotesApp() {
  return (
    <div className="ui-notes" data-ui aria-hidden="true">
      <div className="bar">
        <strong>KeepNotes</strong>
        <span className="search">Search notes</span>
      </div>
      <span className="label">Pinned</span>
      <div className="notes">
        {notes.map(([title, body]) => (
          <div className="note" key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ShortlyTerminal() {
  return (
    <pre className="ui-term" data-ui aria-hidden="true"><code>
      <span className="prompt">$ </span>curl -X POST localhost:8080/shorten \{'\n'}
      {'    '}-d '{'{'}"url": "https://adityamohite.in"{'}'}'{'\n'}
      <span className="ok">HTTP/1.1 201 Created</span>{'\n'}
      {'{'}<span className="key">"short_url"</span>: "aZ3kL9q"{'}'}{'\n\n'}
      <span className="prompt">$ </span>curl -I localhost:8080/aZ3kL9q{'\n'}
      <span className="ok">HTTP/1.1 301 Moved Permanently</span>{'\n'}
      Location: https://adityamohite.in
    </code></pre>
  )
}

export function LogStages() {
  return (
    <div className="ui-logs" data-ui aria-hidden="true">
      <div className="stage">
        <span className="stage-name">Regex rules catch the obvious ones</span>
        <code>User User123 logged in.</code>
        <span className="result">→ User Action</span>
      </div>
      <div className="stage">
        <span className="stage-name">50 or more left over</span>
        <code>MiniLM embeddings → logistic regression</code>
      </div>
      <div className="stage">
        <span className="stage-name">Only a few left over</span>
        <code>Llama 3.1 8B on Groq labels the rest</code>
      </div>
    </div>
  )
}

const robotSteps = [
  ['Mic', 'listens'],
  ['Whisper', 'speech to text'],
  ['LangGraph', 'routes the question'],
  ['Phi-3', 'answers locally'],
  ['pyttsx3', 'speaks'],
]

export function RobotFlow() {
  return (
    <div className="ui-flow" data-ui aria-hidden="true">
      {robotSteps.map(([name, what], i) => (
        <div className={`node${i === 2 ? ' route' : ''}`} key={name}>
          <strong>{name}</strong>
          <span>{what}</span>
        </div>
      ))}
    </div>
  )
}

const fileKinds = {
  ipynb: 'Jupyter notebook',
  py: 'Python',
  go: 'Go',
  rs: 'Rust',
  html: 'HTML',
  css: 'CSS',
  js: 'JavaScript',
  dir: 'Folder',
  file: 'File',
}

// A repository's real file list, drawn like a file browser.
export function RepoFiles({ repo, files, more }) {
  return (
    <div className="ui-files" data-ui aria-hidden="true">
      <div className="files-head">
        <span className="files-owner">AdityaMohite47 /</span> <strong>{repo}</strong>
      </div>
      <ul>
        {files.map(([name, kind]) => (
          <li key={name}>
            <span className={`file-dot file-dot--${kind}`} title={fileKinds[kind]} />
            <span className="file-name">{name}</span>
          </li>
        ))}
        {more > 0 && <li className="files-more">and {more} more</li>}
      </ul>
    </div>
  )
}

// A project's screenshots with tabs to switch between them; a tab can also hold a live component.
export function ShotGallery({ shots, label, ratio = '16 / 10' }) {
  const [active, setActive] = useState(0)
  const shot = shots[active]

  return (
    <div className="gallery">
      <div className="gallery-stage" style={{ '--shot-bg': shot.bg ?? '#f0f0f0', aspectRatio: ratio }}>
        {shot.frame && (
          <div className="window-bar" aria-hidden="true">
            <span className="dots"><i /><i /><i /></span>
            <span className="window-url">{shot.frame}</span>
          </div>
        )}
        <div className="gallery-view" key={active}>
          {shot.live ?? <img src={shot.src} alt={shot.alt} loading="lazy" className={shot.fit === 'cover' ? 'is-cover' : ''} />}
        </div>
      </div>
      {shots.length > 1 && (
        <div className="gallery-tabs" role="tablist" aria-label={`${label} screenshots`}>
          {shots.map((s, i) => (
            <button
              key={s.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
