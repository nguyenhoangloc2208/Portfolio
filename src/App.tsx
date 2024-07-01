import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='relative bg-[#ffffff] scroll-smooth'>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
    </div>
  )
}

export default App
