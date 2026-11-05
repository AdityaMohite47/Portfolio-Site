import Hero from './components/Hero'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './useReveal'

function App() {
  useReveal()

  return (
    <>
      <main>
        <Hero />
        <Experience />
        <Technologies />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
