import python from './assets/tech/python.svg'
import django from './assets/tech/django.svg'
import fastapi from './assets/tech/fastapi.svg'
import react from './assets/tech/react.svg'
import javascript from './assets/tech/javascript.svg'
import postgresql from './assets/tech/postgresql.svg'
import mongodb from './assets/tech/mongodb.svg'
import redis from './assets/tech/redis.png'
import langchain from './assets/tech/langchain.svg'
import gemini from './assets/tech/gemini.svg'
import pytorch from './assets/tech/pytorch.svg'
import scikitLearn from './assets/tech/scikit-learn.svg'
import docker from './assets/tech/docker.svg'
import github from './assets/tech/github.svg'
import go from './assets/tech/go.svg'
import rust from './assets/tech/rust.svg'

// Every technology icon used on the page, keyed for the tech groups and project cards.
export const tech = {
  python: { name: 'Python', src: python },
  django: { name: 'Django', src: django, dark: 'lift' },
  fastapi: { name: 'FastAPI', src: fastapi },
  react: { name: 'React', src: react },
  javascript: { name: 'JavaScript', src: javascript },
  postgresql: { name: 'PostgreSQL', src: postgresql },
  mongodb: { name: 'MongoDB', src: mongodb },
  redis: { name: 'Redis', src: redis },
  langchain: { name: 'LangChain', src: langchain },
  langgraph: { name: 'LangGraph', src: langchain },
  gemini: { name: 'Gemini API', src: gemini },
  pytorch: { name: 'PyTorch', src: pytorch },
  sklearn: { name: 'scikit-learn', src: scikitLearn },
  docker: { name: 'Docker', src: docker },
  github: { name: 'GitHub', src: github, dark: 'invert' },
  go: { name: 'Go', src: go },
  rust: { name: 'Rust', src: rust, dark: 'invert' },
}

export const LINKS = {
  github: 'https://github.com/AdityaMohite47',
  linkedin: 'https://www.linkedin.com/in/aditya--mohite/',
  email: 'adityamohite.dev@gmail.com',
}
