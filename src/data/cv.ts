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
  title: 'Ingeniero en Computación',
  about:
    'Desarrollador experimentado, autodidacta, proactivo, con rápida adaptación a las tecnologías actuales y un gran trabajo en equipo. Apasionado por la tecnología y los videojuegos, no hay nada mejor que la buena música.',
  phone: '+58 412 1803010',
  email: 'fercho0281@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernando-pacheco-873301167',
  github: 'https://github.com/ferchoanz',
}

export const experiences: Experience[] = [
  {
    title: 'Freelancer',
    company: 'Independiente',
    period: 'Actualmente',
    description: ['Desarrollo de soluciones web a medida para diversos clientes.'],
  },
  {
    title: 'Desarrollador Web',
    company: 'Keep Typing CA',
    period: 'Mayo 2024 - Mayo 2025',
    description: [
      'Modificación y creación de nuevas funcionalidades en sistema de chat multipropósito desarrollado en Vue.js.',
      'Modificación y creación de nuevas funcionalidades de sistema Backend en NestJS.',
      'Administración de base de datos MongoDB.',
    ],
  },
  {
    title: 'Desarrollador de Software Sénior',
    company: 'Wingsoft',
    period: 'Octubre 2022 - Marzo 2024',
    description: [
      'Creación de APIs y configuración de entorno en Amazon Web Services.',
      'Modificación y creación de nuevos elementos en sistema web React.',
      'Adaptación de requerimientos de nuevos afiliados para integración en la plataforma mediante Laravel.',
      'Administrador de base de datos PostgreSQL.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'Piola Digital',
    period: 'Julio 2022 - Octubre 2022',
    description: [
      'Creación de APIs a medida Laravel 7+.',
      'Modificación y creación de nuevos elementos en sistema Web Vue.js.',
    ],
  },
  {
    title: 'Programador Fullstack',
    company: 'Piola Digital',
    period: 'Agosto 2020 - Marzo 2022',
    description: [
      'Creación de APIs a medida Laravel 7+.',
      'Modificación y creación de nuevos elementos en sistema Web Vue.js.',
    ],
  },
  {
    title: 'Fullstack Developer part-time',
    company: 'Roraima Devs (Physis Investment)',
    period: 'Mayo 2020 - Junio 2022',
    description: [
      'Creación de APIs a medida Node.js.',
      'Modificación y creación de nuevos elementos en sistema Web Vue.js.',
    ],
  },
  {
    title: 'Programador FullStack',
    company: 'Mancar',
    period: 'Septiembre 2019 - Marzo 2020',
    description: [
      'Diseño de Backend en Express.',
      'Creación de APIs a medida.',
      'Creación de Frontend en Angular 8.',
    ],
  },
  {
    title: 'Programador Backend',
    company: 'Mobitech',
    period: 'Febrero 2019 - Julio 2019',
    description: [
      'Diseño de base de datos.',
      'Creación de APIs a medida.',
      'Protección de solicitudes y manejo de excepciones.',
      'Interacción de cálculos de distancia entre coordenadas terrestres obtenidas en aplicaciones móviles mediante el mapa de Google.',
      'Implementación de pagos frecuentes de Paypal.',
    ],
  },
  {
    title: 'Programador Backend',
    company: 'Mobitech',
    period: 'Junio 2018 - Diciembre 2018',
    description: [
      'Diseño de base de datos.',
      'Creación de APIs a medida.',
      'Protección de solicitudes y manejo de excepciones.',
    ],
  },
  {
    title: 'Analista de software',
    company: 'Toposoft Innovaciones Tecnológicas C.A',
    period: 'Noviembre 2017 - Marzo 2018',
    description: ['Diseño de un sitio web para los Contadores Públicos.'],
  },
  {
    title: 'Fullstack Developer',
    company: 'Softandnet',
    period: 'Septiembre 2017 - Noviembre 2017',
    description: [
      'Diseño de páginas a la medida.',
      'Pasarela de pagos para un banco.',
      'Diseño de una página de un restaurante.',
    ],
  },
  {
    title: 'Desarrollador Fullstack',
    company: 'Remote Pc Solutions',
    period: 'Marzo 2014 - Agosto 2016',
    description: [
      'Diseño de aplicaciones web a la medida.',
      'Diseño de APP híbridas para Android y iOS.',
      'Creación de APIs a medida.',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Ingeniero en Computación',
    institution: 'Universidad de Oriente Venezuela',
    period: '2011 - 2017',
  },
  {
    degree: 'Técnico Medio en Informática',
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
    name: 'Bases de datos',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'DevOps / Cloud',
    skills: ['Amazon Web Services', 'Docker', 'Linux', 'cPanel', 'SSH', 'Git'],
  },
  {
    name: 'Herramientas / Metodologías',
    skills: ['GitHub', 'GitLab', 'Bitbucket', 'Docusaurus', 'Scrum'],
  },
]

export const softSkills = [
  'Habilidades Comunicativas',
  'Planificación y organización',
  'Asertividad',
  'Escucha Activa',
]

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio (B1)' },
]
