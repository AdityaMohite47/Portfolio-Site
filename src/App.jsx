import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import MoreWork from './components/MoreWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './useReveal'

function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Certifications />
        <MoreWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
