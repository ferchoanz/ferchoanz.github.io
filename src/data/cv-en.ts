export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export const personalInfo = {
  name: 'Fernando Pacheco',
  title: 'Computer Engineer',
  about:
    'An experienced, self-taught, proactive developer who adapts quickly to current technologies and works well as a team player. Passionate about technology and video games, there is nothing better than good music.',
  phone: '+58 412 1803010',
  email: 'fercho0281@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernando-pacheco-873301167',
  github: 'https://github.com/ferchoanz',
}

export const experiences: Experience[] = [
  {
    title: 'Freelancer',
    company: 'Independent',
    period: 'Currently',
    description: ['Development of custom web solutions for various clients.'],
  },
  {
    title: 'Web Developer',
    company: 'Keep Typing CA',
    period: 'May 2024 - May 2025',
    description: [
      'Modification and creation of new features in a multipurpose chat system developed using Vue.js.',
      'Modification and creation of new features in the backend system using NestJS.',
      'MongoDB database administration.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company: 'Wingsoft',
    period: 'October 2022 - March 2024',
    description: [
      'Creation of custom APIs and environment configuration on Amazon Web Services.',
      'Modification and creation of new elements in the React web system.',
      'Adaptation of requirements of new affiliates for integration into the platform through Laravel.',
      'PostgreSQL database administration.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'Piola Digital',
    period: 'July 2022 - October 2022',
    description: [
      'Creation of custom APIs in Laravel 7+.',
      'Modification and creation of new elements in the Vue.js web system.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'Piola Digital',
    period: 'August 2020 - April 2022',
    description: [
      'Creation of custom APIs in Laravel 7+.',
      'Modification and creation of new elements in the Vue.js web system.',
    ],
  },
  {
    title: 'Part-time Fullstack Developer',
    company: 'Roraima Devs (Physis Investment)',
    period: 'May 2020 - June 2022',
    description: [
      'Creation of custom APIs in Node.js.',
      'Modification and creation of new elements in the Vue.js web system.',
    ],
  },
  {
    title: 'Fullstack Programmer',
    company: 'Mancar',
    period: 'September 2019 - March 2020',
    description: [
      'Backend design in Express.',
      'Creation of custom APIs.',
      'Frontend creation in Angular 8.',
    ],
  },
  {
    title: 'Backend Programmer',
    company: 'Mobitech',
    period: 'February 2019 - July 2019',
    description: [
      'Database design.',
      'Creation of custom APIs.',
      'Protection of requests and handling of exceptions.',
      'Interaction of calculations of distance between terrestrial coordinates obtained in mobile applications through Google Maps.',
      'Implementation of frequent Paypal payments.',
    ],
  },
  {
    title: 'Backend Programmer',
    company: 'Mobitech',
    period: 'June 2018 - December 2018',
    description: [
      'Database design.',
      'Creation of custom APIs.',
      'Protection of requests and handling of exceptions.',
    ],
  },
  {
    title: 'Software Analyst',
    company: 'Toposoft Innovaciones Tecnológicas C.A.',
    period: 'November 2017 - March 2018',
    description: ['Design of a website for Public Accountants.'],
  },
  {
    title: 'Fullstack Developer',
    company: 'Softandnet',
    period: 'September 2017 - November 2017',
    description: [
      'Custom page design.',
      'Payment gateway for a bank.',
      'Design of a restaurant page.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'Remote PC Solutions',
    period: 'March 2014 - August 2016',
    description: [
      'Custom web application design.',
      'Hybrid app design for Android and iOS.',
      'Creation of custom APIs.',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Computer Engineer',
    institution: 'Universidad de Oriente Venezuela',
    period: '2011 - 2017',
  },
  {
    degree: 'Medium Computer Technician',
    institution: 'Escuela Técnica Comercial Robinsoniana Dr Felipe Guevara Rojas',
    period: '2003 - 2009',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['Vue.js', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Sass', 'Bootstrap', 'Ionic'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'NestJS', 'Laravel', 'PHP', 'Python', 'Express', 'CodeIgniter'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'DevOps / Cloud',
    skills: ['Amazon Web Services', 'Docker', 'Linux', 'cPanel', 'SSH', 'Git'],
  },
  {
    name: 'Tools / Methodologies',
    skills: ['GitHub', 'GitLab', 'Bitbucket', 'Docusaurus', 'Scrum'],
  },
]

export const softSkills = [
  'Communication Skills',
  'Planning and Organization',
  'Assertiveness',
  'Active Listening',
]

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Intermediate (B1)' },
]

const cvData = {
  personalInfo,
  experiences,
  education,
  skillCategories,
  softSkills,
  languages,
}

export default cvData
