import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-36 my-5 font-medium">
      <div className="text-2xl">Beru Portfolio</div>
      <ul className="flex items-center gap-14">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="px-5 py-3 text-btnText rounded-[50px] cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-all duration-300 hover:scale-105">
        <Link to="connect" smooth={true} duration={500}>
          Connect With Me
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
