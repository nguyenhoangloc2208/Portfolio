import { Link } from 'react-scroll'
import profile_img from '../assets/image/profile_img.png'

const Hero = () => {
  return (
    <div id="home" className="flex w-full items-center flex-col gap-9">
      <img src={profile_img} className="rounded-full w-60 h-60 object-cover" alt="profile" />
      <h1 className="text-center text-6xl font-semibold w-[60%]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          I'm Nguyen Hoang Loc,
        </span>{' '}
        frontend developer based in VietNam.
      </h1>
      <p className="w-[50%] text-center text-lg">
        I'm a frontend developer from Ho Chi Minh City, Vietnam, with 1 month of experience, seeking
        an internship in ReactJS, Vue.js, or similar frontend roles.
      </p>
      <div className="flex items-center gap-6 mb-10">
        <div className="px-5 py-4 text-btnText rounded-[50px] cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-all duration-300 hover:scale-105">
          <Link to="connect" smooth={true} duration={500}>
            Connect With Me
          </Link>
        </div>
        <div className="px-5 py-4 rounded-[50px] border cursor-pointer bg-secondary transition-all duration-300 hover:scale-105">
          <Link to="connect" smooth={true} duration={500}>
            My resume
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
