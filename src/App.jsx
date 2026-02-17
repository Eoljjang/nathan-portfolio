import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <About id="home" setActiveSection={setActiveSection} />
        <Experience id="work" />
        <Projects id="projects" setActiveSection={setActiveSection} />
        <Contact id="contact" setActiveSection={setActiveSection} />
      </main>
    </div>
  )
}

export default App
