import { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Rezerv',
    slug: 'rezerv',
    logo: '/assets/logos/rezeve.svg',
    type: 'Website and web app',
    description:
      'Website for Rezeve, a company that provides a platform for booking and royalty management for fitness',
    liveUrl: 'https://rezeve.com',
    color: '#5DFC70',
    media: '/assets/image/projects/rezeve-mockup.webp',
  },
  {
    name: 'MaNaw Store',
    slug: 'manaw-store',
    logo: '/assets/logos/manawstore.svg',
    type: 'Web and mobile app',
    description: 'All in one POS, Accounting, Invoices, Inventory software for both web and mobile',
    liveUrl: 'https://merchant.manawstore.com/',
    color: '#f1ca3b',
    media: '/assets/image/projects/manaw-mockup.webp',
  },
  {
    name: 'Monage',
    slug: 'monage',
    logo: '/assets/logos/monage.svg',
    type: 'Mobile-first Expense/Income Tracker',
    description:
      'Simple expense/income tracker app with collaborative features. This app can make the fund usage between friends, families and teams more transparent',
    liveUrl: 'https://monage.zeyar.dev',
    color: '#5f6eff',
    media: '/assets/image/projects/monage-mockup.webp',
  },
  {
    name: 'Spring University Myanmar',
    logo: '/assets/logos/sum.svg',
    slug: 'spring-university-myanmar',
    type: 'University Website + Admin Panel ',
    description:
      'A multilingual, Server Side Rendered website. The major data includes Schools, Courses, Careers and Articles, all of them can be manipulated from a Customized Admin Panel ',
    liveUrl: 'https://sum-five.vercel.app',
    color: '#fa6261',
    media: '/assets/image/projects/sum-mockup.webp',
  },
];
