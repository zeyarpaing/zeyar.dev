import type { Certifications, Education, Experience, Technology, Voluntary } from 'types';

export const experiences: Experience[] = [
  {
    companyName: 'Seak',
    year: 0.4,
    websiteLink: 'https://seak.ai/',
    position: 'Full Stack Engineer',
    description: `Built and maintained Seak's Supplier Mobile App from scratch using React Native and React ecosystem. Worked directly with the CEO, supplier team and UI/UX to define features and incorporate user feedback
 from beta test users. Developed Django server app to serve REST APIs for the mobile app and Cron jobs for notifications and 
automatic product publishing`,
  },
  {
    companyName: 'Rezerv',
    year: 2,
    websiteLink: 'https://rezerv.co/',
    position: 'Lead Frontend Developer',
    description:
      'Building user interfaces of Rezeve SaaS platform using Next.Js, React and other related technologies. I am also responsible for the maintenance of the existing codebase.',
  },
  {
    companyName: 'Bilions',
    position: 'Frontend Developer',
    description:
      "Implemented user-friendly web applications designed by UI/UX designer. I've developed a good way of communication with UI/UX designer which benefits in theming & asset sharing for the app.  I’ve improved in organizing the components for better DevX and readability, refactoring, state management and better network requests",
    year: 0.9,
    websiteLink: 'https://www.bilions.org/',
  },
  {
    companyName: "Partner Associates Int'l Co.,Ltd.",
    position: 'Junior Application Developer',
    description:
      'Joined as an Internship Student responsible not only for coding web UIs but also for designing UI/UX for mobile and web applications.' +
      " After almost a year, I've been promoted to Junior Application Developer. I've designed many elegant and usable UI and developed web interfaces with the best performance and design. I've gained a lot of experience about layouts, network request and refactoring techniques",
    year: 1.4,
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
    name: 'University of Computer Studies, Yangon',
    description:
      "Started as a bachelor student in 2019. Specialized in Knowledge Engineering Major of Computer Science Category. During the periods of learning, I've learned the fundamentals of Computer Sciences such as Data Structures & Algorithms, Programming Foundations, Basic Database Systems and Web Development Foundations ",
  },
  {
    name: 'Turing Programming Training Center',
    description:
      "Joined a course taught by Ko Thet Khine, Javascript & React Course. I've learned how to use JavaScript in an efficient and pragmatic way. After completing this course, I started developing React apps and involved in Js coding challenges",
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
