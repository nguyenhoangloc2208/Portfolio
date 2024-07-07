interface SocialMediaLink {
  name: string
  url: string
}

interface NavLink {
  name: string
  url: string
}

interface Colors {
  green: string
  navy: string
  darkNavy: string
}

interface Config {
  email: string
  socialMedia: SocialMediaLink[]
  navLinks: NavLink[]
  colors: Colors
}

const config: Config = {
  email: 'nguyenhoangloc2208@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nguyenhoangloc2208'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nhl_2208/'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/locphonevnn1'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nguyenhoangloc2208'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/nii.228/'
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about'
    },
    {
      name: 'Experience',
      url: '/#jobs'
    },
    {
      name: 'Work',
      url: '/#projects'
    },
    {
      name: 'Contact',
      url: '/#contact'
    }
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b'
  }
}

export default config
