export const profile = {
  name: 'Sandeepa Ravindi',
  firstName: 'Sandeepa',
  role: 'Full-Stack Developer & Software Engineering Undergraduate',
  location: 'Sri Lanka',
  email: 'sandeeparavindi1022@gmail.com',
  phone: '+94 76 152 7756',
  github: 'https://github.com/sandeeparavindi',
  linkedin: 'https://www.linkedin.com/in/sandeeparavindi',
  resume: '/Sandeepa-Ravindi-CV.pdf',
  image: '/images/sandeepa-cutout.png',
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const capabilities = [
  {
    no: '01', title: 'Full-Stack Web Development', kicker: 'Frontend + Backend',
    summary: 'Building intuitive web experiences and the dependable systems behind them.',
    bullets: ['Responsive interfaces with React, TypeScript and Tailwind CSS', 'REST APIs with Node.js, Express and ASP.NET Core', 'Maintainable application structure and database integrations'],
  },
  {
    no: '02', title: 'Mobile Application Development', kicker: 'Currently exploring',
    summary: 'Developing cross-platform mobile interfaces as part of a collaborative SmartCity project.',
    bullets: ['Flutter and Dart mobile development', 'Connecting mobile screens to FastAPI services', 'Practical teamwork and integration workflows'],
  },
  {
    no: '03', title: 'Backend & API Engineering', kicker: 'Reliable by design',
    summary: 'Secure, structured application services that make complex workflows feel simple.',
    bullets: ['Java, Spring Boot and ASP.NET Core APIs', 'Authentication and role-based authorization with JWT', 'MySQL, JPA/Hibernate, Prisma ORM and Alembic'],
  },
  {
    no: '04', title: 'AI-Powered Solutions', kicker: 'Useful intelligence',
    summary: 'Integrating intelligent features into practical applications, without losing sight of usability.',
    bullets: ['Google Gemini AI integration', 'Thoughtful AI-assisted application workflows', 'User-focused design and clear interactions'],
  },
];

export const skillGroups = [
  {
    label: 'Frontend & Mobile', no: '01',
    skills: ['React', 'React Native', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit', 'HTML & CSS'],
  },
  {
    label: 'Backend & APIs', no: '02',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'C#', 'ASP.NET Core', 'Python', 'FastAPI', 'PHP', 'REST APIs', 'JWT'],
  },
  {
    label: 'Databases & Tools', no: '03',
    skills: ['MySQL', 'Prisma ORM', 'Hibernate / JPA', 'Alembic', 'Maven', 'Git', 'GitHub', 'Swagger', 'Figma'],
  },
];

export const projects = [
  {
    id: 'recruitment', number: '01',
    title: 'AI-Powered Recruitment & Talent Management Platform',
    label: 'FULL STACK / AI INTEGRATION', year: 'Featured project',
    intro: 'A recruitment platform designed to bring candidates, applications and intelligent hiring workflows together.',
    story: 'An end-to-end recruitment system with dedicated workflows, secure access and useful AI-assisted features to support candidate management.',
    tags: ['React 18.3', 'TypeScript', '.NET 8 / ASP.NET Core', 'C#', 'Gemini AI', 'MySQL'],
    fullStack: 'React 18.3 · TypeScript · Tailwind CSS 4 · .NET 8 · ASP.NET Core · C# · MySQL · JWT · Swagger · Google Gemini',
    highlights: [
      'Built responsive React 18.3 and TypeScript interfaces, styled with Tailwind CSS 4, for candidate and recruitment workflows.',
      'Developed RESTful APIs using .NET 8, C# and ASP.NET Core, documenting endpoints with Swagger.',
      'Designed a relational MySQL database for jobs, applicants and application records.',
      'Integrated Google Gemini AI into recruitment features and applied JWT-based, role-based access control to secure user workflows.',
    ],
    kind: 'recruitment',
    repositoryUrl: '', demoUrl: '',
  },
  {
    id: 'crop', number: '02',
    title: 'Crop Monitoring System',
    label: 'BACKEND / AGRITECH', year: 'Featured project',
    intro: 'A structured crop and field management system powered by a secure Spring Boot backend.',
    story: 'A farm operations solution focused on reliable field information, crop records, image handling and secure access to essential data.',
    tags: ['Java 17', 'Spring Boot 3.3.5', 'MySQL', 'Spring Security', 'JWT', 'JPA'],
    fullStack: 'Java 17 · Spring Boot 3.3.5 · MySQL · Spring Security · JWT · Hibernate/JPA · Maven',
    highlights: [
      'Built RESTful backend APIs with Spring Boot using a clear layered architecture.',
      'Implemented create, read, update and delete operations for crops and fields, with image handling and filtering.',
      'Added JWT authentication, role-based access control and BCrypt password protection.',
      'Integrated MySQL using Hibernate/JPA, ModelMapper, DTO validation and Controller/Service/Repository/Entity layers.',
    ],
    kind: 'crop',
    repositoryUrl: '', demoUrl: '',
  },
  {
    id: 'rental', number: '03',
    title: 'Car Rental Management System',
    label: 'FULL STACK / BOOKING', year: 'Featured project',
    intro: 'A modern car rental experience connecting vehicle browsing, customers and booking operations.',
    story: 'A separated frontend and backend application that supports car rental management, customer workflows and bookings with a consistent data layer.',
    tags: ['React 18.3', 'TypeScript', 'Node.js 22', 'Express.js', 'Prisma 6.3.1', 'MySQL'],
    fullStack: 'React 18.3 · TypeScript 5.7.3 · Redux Toolkit · Tailwind CSS · Node.js 22 · Express.js 4.21.2 · Prisma 6.3.1 · MySQL · Axios · REST API',
    highlights: [
      'Developed a responsive frontend with React, TypeScript, Tailwind CSS and Redux Toolkit.',
      'Created RESTful APIs using Node.js 22 and Express.js 4.21.2 for authentication, vehicle, customer and booking operations.',
      'Designed and integrated the MySQL database with Prisma ORM 6.3.1.',
      'Integrated frontend and backend through REST APIs and Axios.',
    ],
    kind: 'rental',
    repositoryUrl: '', demoUrl: '',
  },
];

export const education = [
  {
    institution: 'NSBM Green University',
    qualification: 'BSc (Hons) in Software Engineering',
    period: 'Feb 2025 — Present',
    status: 'Undergraduate',
    description: 'Currently pursuing an undergraduate degree in software engineering.',
  },
  {
    institution: 'Institute of Software Engineering (IJSE)',
    qualification: 'Higher National Diploma in Software Engineering',
    period: 'Feb 2023 — Jan 2025',
    status: 'Completed',
    description: 'Completed hands-on study in software engineering, application development and databases.',
  },
];
