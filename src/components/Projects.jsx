import { FaGithub, FaYoutube } from 'react-icons/fa'

const projects = [
  {
    title: 'Campus Canteen System',
    description:
      'Backend-driven campus canteen platform with chat-based ordering via LangGraph + Gemini API, MongoDB storage, and a vendor dashboard — Dockerized for consistent local dev.',
    tags: ['Python', 'LangGraph', 'Gemini API', 'MongoDB', 'Docker', 'FastAPI'],
    github: 'https://github.com/AdityaMohite47/CampusCanteen-BE',
    demo: 'https://www.youtube.com/watch?v=900mPHrd1K8',
  },
  {
    title: 'EcoPay — Django Backend with Gemini API',
    description:
      'Django backend integrating Gemini LLM APIs for AI-powered responses in a recycling-focused app — built collaboratively for the Gemini API Contest 2024.',
    tags: ['Python', 'Django', 'REST APIs', 'Gemini API'],
    github: 'https://github.com/the-ecopay/ecopay-be',
    demo: 'https://www.youtube.com/watch?v=JPifD5EUVow&t=1s',
  },
  {
    title: 'ML with Scikit-learn',
    description:
      'Supervised ML models on real-world datasets — preprocessing, feature engineering, training, and evaluation documented in Jupyter notebooks.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/AdityaMohite47/Machine-Learning-Practice',
  },
]

function Projects() {
  return (
    <section id="projects">
      <h2><span>#</span> projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                <FaGithub size={16} />
                Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} demo video`}>
                  <FaYoutube size={16} />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
