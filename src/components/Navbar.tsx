import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='sticky top-0 left-0 right-0 bg-black text-white'>
      <ul className="flex w-full justify-between">
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>Project</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
