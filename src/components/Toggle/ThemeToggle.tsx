import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ThemeToggleButton: React.FC = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    return null
  }

  const { theme, setTheme } = themeContext

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={toggleTheme} className="p-2 bg-blue-500 text-white rounded">
      Toggle Theme
    </button>
  )
}

export default ThemeToggleButton
