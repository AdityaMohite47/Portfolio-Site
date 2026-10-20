import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { LogStages, NotesApp, RepoFiles, RobotFlow } from './fragments'
import researchCard from '../assets/repos/research-assistant-chatbot-langgraph.webp'

const GH = 'https://github.com/AdityaMohite47/'
const img = (src, alt) => <img src={src} alt={alt} loading="lazy" />

const categories = ['Machine learning', 'AI and LLMs', 'Full-stack', 'Learning']

const work = [
  {
    title: 'KeepNotes',
    category: 'Full-stack',
    when: 'Mar – Apr 2026',
    desc: 'A Google Keep–style notes app: Django REST Framework and PostgreSQL behind JWT auth, and a React client that pins, searches, and quietly refreshes an expired token.',
    visual: <NotesApp />,
    href: `${GH}KeepNotes-BE`,
  },
  {
    title: 'Log classification',
    category: 'Machine learning',
    when: 'Jan – Apr 2026',
    desc: 'Sorts server logs in three passes: regex first, then sentence embeddings and logistic regression, then an LLM for the few left over.',
    visual: <LogStages />,
    href: `${GH}Log-Classification-System`,
  },
  {
    title: 'PyTorch and deep learning',
    category: 'Machine learning',
    when: 'Oct 2024 – Jan 2025',
    desc: 'From tensors to training loops: the PyTorch workflow, then neural-network classifiers on make_circles and make_moons that reach 98–99% test accuracy. Computer vision is next.',
    visual: (
      <RepoFiles
        repo="PyTorch-And-DeepLearning"
        files={[
          ['Intro_to_Pytorch_And_Tensor+TensorOperations.ipynb', 'ipynb'],
          ['Machine_Learning_Workflow.ipynb', 'ipynb'],
          ['Deep-Learning-Classification.ipynb', 'ipynb'],
          ['Practice-Notebook-1.ipynb', 'ipynb'],
          ['Practice-Notebook-2.ipynb', 'ipynb'],
          ['Computer-Vision.ipynb', 'ipynb'],
          ['helper_functions.py', 'py'],
        ]}
        more={2}
      />
    ),
    href: `${GH}PyTorch-And-DeepLearning`,
  },
  {
    title: 'Machine learning with Udemy',
    category: 'Machine learning',
    when: 'Sep – Dec 2024',
    desc: '23 notebooks from the Python for ML & Data Science masterclass: regression, KNN, SVMs, trees, boosting and clustering, with projects on sonar signals, wine fraud and Telco customer churn.',
    visual: (
      <RepoFiles
        repo="Machine_Learning_with_Udemy"
        files={[
          ['Linear-Regression-Project.ipynb', 'ipynb'],
          ['Logistic-Regression-Project.ipynb', 'ipynb'],
          ['KNN-Project.ipynb', 'ipynb'],
          ['Support-Vector-Machine-Project.ipynb', 'ipynb'],
          ['Random-Forest.ipynb', 'ipynb'],
          ['Gradient-Boost.ipynb', 'ipynb'],
          ['Tree-Based-Methods-Capestone.ipynb', 'ipynb'],
        ]}
        more={16}
      />
    ),
    href: `${GH}Machine_Learning_with_Udemy`,
  },
  {
    title: 'Machine learning practice',
    category: 'Machine learning',
    when: 'Aug – Oct 2024',
    desc: 'Four end-to-end projects on Kaggle datasets: breast cancer diagnosis, fake banknote detection, heart-disease risk on the Framingham data, and insurance cost prediction.',
    visual: (
      <RepoFiles
        repo="Machine-Learning-Practice"
        files={[
          ['Breast-Cancer-Diagnosis.ipynb', 'ipynb'],
          ['Fake_Bill_Classification.ipynb', 'ipynb'],
          ['Heart_Risk_Prediction.ipynb', 'ipynb'],
          ['Insurance_Cost_Prediction.ipynb', 'ipynb'],
          ['svm_margin_plot.py', 'py'],
        ]}
      />
    ),
    href: `${GH}Machine-Learning-Practice`,
  },
  {
    title: 'Algo-Rythm Robot',
    category: 'AI and LLMs',
    when: 'Dec 2025',
    desc: 'A voice assistant for our college tech fest: Whisper, a LangGraph router, Phi-3 running locally, and text-to-speech.',
    visual: <RobotFlow />,
    href: `${GH}Algo-Rythm-Robot`,
  },
  {
    title: 'Research Assistant',
    category: 'AI and LLMs',
    when: 'Jul 2025',
    desc: 'Five LangGraph agents that search Wikipedia, draft an answer, critique it and present it, behind a Flask chat page.',
    visual: img(researchCard, 'GitHub card for Research-Assistant-Chatbot-LangGraph'),
    href: `${GH}Research-Assistant-Chatbot-LangGraph`,
  },
  {
    title: 'Go practice',
    category: 'Learning',
    when: 'Aug – Sep 2026',
    desc: 'Learning Go one concept per folder: variables, functions, structs, interfaces, type assertions, and a small package of my own.',
    visual: (
      <RepoFiles
        repo="Go"
        files={[
          ['hello-world/', 'dir'],
          ['variables/', 'dir'],
          ['conditions-and-functions/', 'dir'],
          ['structs/', 'dir'],
          ['interfaces/', 'dir'],
          ['type-assertions/', 'dir'],
          ['greeter/txt-utils/', 'dir'],
        ]}
      />
    ),
    href: `${GH}Go`,
  },
  {
    title: 'Rust practice',
    category: 'Learning',
    when: 'Oct 2026',
    desc: 'Starting Rust with Cargo: variables, functions, control flow, the classic guessing game, and a calculator.',
    visual: (
      <RepoFiles
        repo="Rust"
        files={[
          ['hello_cargo/', 'dir'],
          ['variables/', 'dir'],
          ['functions/', 'dir'],
          ['control_flow/', 'dir'],
          ['guessing_game/', 'dir'],
          ['calculator/', 'dir'],
        ]}
      />
    ),
    href: `${GH}Rust`,
  },
  {
    title: 'Python projects',
    category: 'Learning',
    when: 'Aug 2024',
    desc: 'Early Python projects, built from tutorials and then changed my own way: an aim trainer, a command-line weather utility, tic-tac-toe, and a command prompt in Tkinter.',
    visual: (
      <RepoFiles
        repo="Python-Projects"
        files={[
          ['Aim Trainer/', 'dir'],
          ['CLU/', 'dir'],
          ['Tic Tac Toe/', 'dir'],
          ['Windows Command Prompt Using Tkinter/', 'dir'],
        ]}
      />
    ),
    href: `${GH}Python-Projects`,
  },
]

function MoreWork() {
  const trackRef = useRef(null)
  const [filter, setFilter] = useState('All')
  const [edges, setEdges] = useState({ start: true, end: false })
  const shown = filter === 'All' ? work : work.filter((w) => w.category === filter)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      setEdges({
        start: track.scrollLeft <= 4,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
      })
    }
    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: 0 })
    setEdges({ start: true, end: track.scrollWidth <= track.clientWidth + 4 })
  }, [filter])

  function step(dir) {
    const track = trackRef.current
    const card = track?.querySelector('.work-card')
    if (!card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section id="more-work" className="section light">
      <div className="container">
        <header className="section-head" data-reveal>
          <h2>More work</h2>
          <p>More from my GitHub: machine learning notebooks, AI experiments, a full-stack app, and the languages I’m learning.</p>
        </header>

        <div className="filters" role="group" aria-label="Filter projects" data-reveal style={{ '--d': '80ms' }}>
          {['All', ...categories].map((c) => {
            const count = c === 'All' ? work.length : work.filter((w) => w.category === c).length
            return (
              <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {c} <span>{count}</span>
              </button>
            )
          })}
        </div>

        <div className="carousel">
          <button type="button" className="carousel-arrow" onClick={() => step(-1)} disabled={edges.start} aria-label="Previous projects">
            <FaChevronLeft aria-hidden="true" />
          </button>
          <ul className="carousel-track" ref={trackRef} tabIndex={0} aria-label={`${filter === 'All' ? 'All' : filter} projects`}>
            {shown.map((w, i) => (
              <li key={`${filter}-${w.title}`} className="work-card" data-reveal style={{ '--d': `${Math.min(i, 3) * 80}ms` }}>
                <div className="work-visual">{w.visual}</div>
                <span className="work-meta">{w.category}, {w.when}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <a className="btn btn-green btn-small" href={w.href} target="_blank" rel="noreferrer">
                  Know more <FaChevronRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="carousel-arrow" onClick={() => step(1)} disabled={edges.end} aria-label="Next projects">
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default MoreWork
