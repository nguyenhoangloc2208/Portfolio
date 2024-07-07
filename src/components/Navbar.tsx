import { Link } from 'react-scroll'
import config from '../utils/config'

const Navbar = () => {
  return (
    <nav className="absolute top-0 right-0 left-0 bg-primary flex justify-between items-center mx-36 my-5 font-medium">
      <div className="text-2xl">Beru Portfolio</div>
      <ol className="flex items-center gap-14">
        {config.navLinks &&
          config.navLinks.map(({ url, name }, i) => (
            <li className="cursor-pointer hover:scale-105 duration-300 transition-all" key={i}>
              <Link to={url} smooth={true} duration={500}>
                {name}
              </Link>
            </li>
          ))}
      </ol>
      <div className="px-5 py-3 text-btnText rounded-[50px] cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-all duration-300 hover:scale-105">
        <Link to="connect" smooth={true} duration={500}>
          Connect With Me
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
