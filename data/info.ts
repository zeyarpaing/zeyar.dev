import type { Certifications, Education, Experience, Technology, Voluntary } from 'types';

export const experiences: Experience[] = [
  {
    companyName: 'OpenPay',
    websiteLink: 'https://getopenpay.com',
    position: 'Software Engineer',
    description:
      'Designed and maintained the embedded payment client library and hosted checkout page. Built integrations for Apple Pay, Google Pay, and Crypto, handling ~50% of payment volume. Developed processor-agnostic APIs, implemented PCI-compliant flows, and integrated analytics for observability.',
    start: 'Aug 2024',
    end: 'Present',
    current: true,
  },
  {
    companyName: 'Seak',
    websiteLink: 'https://seak.ai/',
    position: 'Fullstack Engineer',
    description:
      'Built the Supplier Mobile App from scratch using React Native and developed Django-based REST APIs. Collaborated with leadership and designers to refine user journeys. Optimized data models and API performance for low-connectivity areas and contributed to system design for scalability.',
    start: 'March 2024',
    end: 'August 2024',
  },
  {
    companyName: 'Codigo / Rezerv',
    websiteLink: 'https://rezerv.co/',
    position: 'Lead Front-End Developer',
    description:
      'Led a team of six Front-End developers, building interfaces for B2B/B2C portals and mobile apps. Collaborated with PMs on sprint planning and mentored developers via code reviews. Worked with backend/design teams to refine workflows and improved frontend performance and AWS deployment workflows.',
    start: 'Jun 2022',
    end: 'Feb 2024',
  },
  {
    companyName: 'Bilions',
    position: 'Front-End Developer (Part-time)',
    description:
      'Built user-facing screens for telemedicine, e-commerce, and POS products. Delivered responsive and performant UIs across mobile and web projects within tight timelines.',
    start: 'Oct 2021',
    end: 'Jun 2022',
    websiteLink: 'https://www.bilions.org/',
  },
  {
    companyName: 'Partner Associates',
    position: 'Junior Application Developer',
    description:
      'Designed and implemented UIs for enterprise tools, improving accessibility and usability. Built performant Front-End features and supported backend integration. Contributed to team learning through UI/UX and new technology adoption.',
    start: 'Jan 2021',
    end: 'Jun 2022',
    websiteLink: 'https://www.partnerassociates.com/',
  },
];

export const technologies: Technology[] = [
  {
    icon: '/assets/logos/ts.svg',
    name: 'TypeScript',
    specialized: true,
    color: '#007ACC',
  },
  {
    icon: '/assets/logos/next.svg',
    name: 'Next.js',
    specialized: true,
    color: '#f3f3f3',
  },
  {
    icon: '/assets/logos/react.svg',
    name: 'React.js',
    specialized: true,
    color: '#61DAFB',
  },
  {
    icon: '/assets/logos/tailwind.svg',
    name: 'Tailwind CSS',
    specialized: true,
    color: '#38BDF8',
  },
  {
    icon: '/assets/logos/vue.svg',
    name: 'Vue Js',
    specialized: true,
    color: '#42B883',
  },
  {
    icon: '/assets/logos/flutter.svg',
    name: 'Flutter',
    specialized: false,
    color: '#54C5F8',
  },
  {
    icon: '/assets/logos/firebase.svg',
    name: 'Firebase',
    specialized: false,
    color: '#FFCA28',
  },
  {
    icon: '/assets/logos/node.svg',
    name: 'Node.js',
    specialized: false,
    color: '#87cb82',
  },
  {
    icon: '/assets/logos/python.svg',
    name: 'Python',
    specialized: false,
    color: '#5A9FD4',
  },
];

export const education: Education[] = [
  {
    school: 'University of Greenwich',
    degree: 'B.Sc. Computing',
    start: 'Jun 2024',
    end: 'Jul 2025',
    description:
      'The program covers core subjects needed for modern software development lifecycles. Key areas include Requirement Management, Human Computer Interaction, Mobile Development and Enterprise Web Development.',
    graduated: true,
  },
  {
    school: 'NCC Education',
    degree: 'Diploma in Computing',
    start: 'Jan 2023',
    end: 'Jan 2024',
    description:
      'After taking an academic break during the covid-19 period, this program became the starting point for returning to a degree path. Studied Network Security, Information System Analysis, Database Administration, Web Development and Information Systems Analysis.',
  },
  {
    school: 'University of Computer Studies, Yangon',
    degree: 'B. C. Sc. Foundation',
    start: 'Nov 2018',
    end: 'March 2020',
    description:
      'My first university, where I studied foundations of computer science, hardware concepts and basic software development. After completing the third semester, I took a break and later moved toward a new academic direction.',
  },
];

export const courses: Certifications[] = [
  {
    name: 'Modern JavaScript: ES6 Basics',
    link: 'https://www.coursera.org/account/accomplishments/certificate/A8CM8YAH39SU',
  },
  {
    name: 'Javascript animation for websites, storytelling',
    link: 'https://www.coursera.org/account/accomplishments/certificate/UR8HJS5QK726',
  },
  {
    name: 'Mathematics for Machine Learning: Linear Algebra',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/33CUCEAA9Y7T',
  },
  {
    name: 'Visual Elements of User Interface Design',
    link: 'https://www.coursera.org/account/accomplishments/certificate/YZFPPEZCB9Y8',
  },
  {
    name: 'Object-Oriented Programming with Java',
    link: 'https://www.coursera.org/account/accomplishments/certificate/85XRFPPFFD32',
  },
  {
    name: 'Crash Course on Python',
    link: 'https://www.coursera.org/account/accomplishments/certificate/MNNU9LFPXYK7',
  },
];

export const voluntaries: Voluntary[] = [
  {
    place: 'Non-profit Organization',
    position: 'Public Relation Team Member',
    description: 'Responsible for social media awareness for the events and publications',
  },
  {
    place: 'ICPC National Contest',
    position: 'Volunteer',
    description: "A role for reporting technical errors of computers and contestants' scores",
  },
  {
    place: 'UCSY IT Camp 2019',
    position: 'Public Relation Volunteer',
    description:
      'Participated in inviting Speakers and making social media marketing for the event',
  },
  {
    place: 'University Events & Ceremonies',
    position: 'Volunteer',
    description:
      'Involved in running the events at university such as Thingyan Festival and Fresher Welcome',
  },
];
