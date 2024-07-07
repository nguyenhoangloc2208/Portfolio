import About from './components/About'
import Project from './components/Project'
import Navbar from './components/Navbar'
import ThemeProvider from './context/ThemeContext'
import { getInitialTheme } from './utils/theme'
import { useEffect, useState } from 'react'
import Hero from './components/Hero'

function App() {
  const [priTheme, setPriTheme] = useState<'dark' | 'light'>(getInitialTheme())

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setPriTheme(initialTheme)
  }, [])

  return (
    <ThemeProvider initialTheme={priTheme}>
      <div className="relative scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Project />
      </div>
    </ThemeProvider>
  )
}

export default App
