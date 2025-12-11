import { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'OpenPay Payment Element',
    slug: 'openpay-payment-element',
    logo: '/assets/logos/npm.svg',
    type: 'NPM Package / SDK',
    description:
      'Developed the embedded payment element library and hosted checkout page, serving as the main entry point for OpenPay transactions.',
    liveUrl: 'https://getopenpay.com',
    color: '#78ffa2',
    tags: ['React.js', 'Next.js', 'SDK Development', 'Payment Library Client'],
  },
  {
    name: 'Rezerv Platform',
    slug: 'rezerv',
    logo: '/assets/logos/rezeve.svg',
    type: 'SaaS Platform',
    description:
      'A SaaS for service-based businesses. Contributed features like Scheduler, Theme Customization, Reports, and Automated marketing.',
    liveUrl: 'https://rezerv.co',
    color: '#5DFC70',
    media: '/assets/image/projects/rezeve-mockup.webp',
    tags: ['React.js', 'MUI', 'Next.js', 'TanStack Query', 'Typescript', 'Yup', 'React Hook Form'],
  },
  {
    name: 'Figify',
    slug: 'figify',
    logo: '/assets/icons/github.svg',
    type: 'Figma Plugin Template',
    description:
      'A minimal Figma plugin starter template using Preact, TailwindCSS, and Vite for type-safe and faster plugin development.',
    liveUrl: 'https://github.com/zeyarpaing/figify',
    color: '#8ca8ff',
    tags: ['Preact', 'Vite', 'Figma API', 'Open Source'],
  },
  // {
  //   name: 'Burmese Content',
  //   slug: 'burmese-content',
  //   logo: '/assets/icons/github.svg',
  //   type: 'Figma Plugin',
  //   description:
  //     'A figma plugin for filling sample content for Burmese UI/UX designers. This helps saved a lot of time for designers who have to fill their interfaces with sample data. The plugin allows filling data with 1 click saving time for searching and copy-pasting data.',
  //   liveUrl: 'https://dub.sh/burmese-content',
  //   color: '#42B883',
  //   tags: ['Preact', 'Vite', 'Figma API', 'Open Source'],
  // },
  {
    name: 'QR-X',
    slug: 'qr-x',
    logo: '/assets/logos/npm.svg',
    type: 'Open Source Library',
    description:
      'An open-source QR generator library for React, Vue, Svelte, and Solid. Core contributor focused on SVG path generation and API design.',
    liveUrl: 'https://qr-x.devtrice.dev',
    color: '#ff7d7c',
    tags: [
      'Next.js',
      'Turborepo',
      'ES Build',
      'Developer Experience',
      'NPM',
      'Solid.js',
      'Svelte',
      'Open Source',
    ],
  },
];
