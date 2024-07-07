import profile_img from '../assets/image/profile_img.png'

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Python',
    'React',
    'Vue',
    'Django',
    'Node.js',
    'Tailwind CSS'
  ]

  const achievements = [
    { number: '1+', description: 'MONTHS OF EXPERIENCE' },
    { number: '10+', description: 'PROJECTS COMPLETED' },
    { number: '6', description: 'HAPPY CLIENTS' }
  ]

  return (
    <div id="about" className="flex flex-col items-center justify-center gap-20 my-20 mx-44 pt-5">
      <div>
        <h1 className="mx-8 text-6xl font-semibold">About me</h1>
      </div>
      <div className="flex gap-12">
        <div>
          <img src={profile_img} alt="Profile Image" className="w-[600px] rounded-[30px]" />
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-lg font-medium">
            <p>
              Hello! My name is Nguyen Hoang Loc, and I am currently a graduating student at Ho Chi
              Minh City University of Transport. My interest in web development started in 2021 when
              I decided to try creating a coffee selling website and that taught me a lot about HTML
              & CSS!
            </p>
            <p>
              I am looking for an internship or fresher position as a Front-End Developer. I have a
              solid foundation in web development and am eager to apply my skills in a professional
              setting while continuing to learn and grow.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-2.5 overflow-hidden list-none">
            {skills &&
              skills.map((skill, i) => (
                <li
                  className="relative mb-2 pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green-600 before:text-sm before:leading-3 before:transform before:translate-y-1/2"
                  key={i}
                >
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              {achievement.number}
            </h1>
            <p className="text-lg font-medium">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
