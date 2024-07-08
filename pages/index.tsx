import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import Layout from 'components/layout/Layout';
import { Button } from 'components/shared/Button';
import { Project, Technology } from 'types';
import { courses, education, experiences, projects, technologies, voluntaries } from 'data/info';
import ExperienceCard from 'components/home/ExperienceCard';
import TechnologyCard from 'components/home/TechnologyCard';
import EducationCard from 'components/home/EducationCard';
import VoluntaryCard from 'components/home/VoluntaryCard';
import Link from 'next/link';
import ProjectCard from 'components/project/ProjectCard';
import BlurredBox from 'components/shared/BlurredBox';
import { useScrollReveal } from 'hooks/useScrollReveal';
import profileImage from '@/public/assets/image/memoji.webp';
import { contactInfo } from '../data/app-data';
import ContactItem from '../components/home/ContactItem';
import PatternBackground from 'components/shared/PatternBackground';
import Rings from '@/svgs/Rings';
import QRX from '@qr-x/react';

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout>
      <LandingSection />
      <div className="mx-2">
        {/* <BriefSection /> */}
        <ProjectSection />
        <ExperienceSection />
        <TechnologySection />
        <EducationSection />
        <VoluntarySection />
        <ContactSection />
        <CreditSection />
      </div>
    </Layout>
  );
};
/*
const AnimatingBlocks = () => (
  <>
    <BlurredBox
      size={{ width: '4rem', height: '3rem' }}
      color={'#1b84ff'}
      range={10}
      position={{ x: 0, y: 70 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#1ef6bd'}
      range={300}
      position={{ x: 80, y: 22 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '3rem' }}
      color={'#1b84ff'}
      position={{ x: 55, y: 120 }}
    />
    <BlurredBox
      size={{ width: '5rem', height: '5rem' }}
      color={'#4655ff'}
      position={{ x: 70, y: 350 }}
    />
    <BlurredBox
      size={{ width: '3.5rem', height: '3rem' }}
      color={'#13ffbf'}
      position={{ x: 30, y: 230 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#1ef6bd'}
      position={{ x: 90, y: 480 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#1078ec'}
      position={{ x: 20, y: 470 }}
    />
    <BlurredBox
      size={{ width: '3rem', height: '3rem' }}
      color={'#1168e8'}
      position={{ x: 80, y: 590 }}
    />
    <BlurredBox
      size={{ width: '4rem', height: '4rem' }}
      color={'#14d7a4'}
      position={{ x: 0, y: 600 }}
    />
  </>
);
*/
const LandingSection = () => (
  <PatternBackground>
    <section className="relative mx-auto mt-14 flex flex-col flex-wrap items-center justify-center gap-6 md:mt-20 lg:flex-nowrap">
      {/* <AnimatingBlocks /> */}
      <div className="relative mt-12">
        <Rings className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Image
          src={profileImage}
          width={100}
          height={100}
          loading={'eager'}
          priority={true}
          alt="profile image in 3d avatar style"
        />
      </div>
      <div className="mx-2 flex max-w-2xl flex-col items-center text-center">
        <h1 className="my-3 bg-gradient-to-br from-white to-zinc-400/90 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
          Hi, I’m Zeyar Paing.
        </h1>
        <p
          className="font-light leading-6 md:text-lg"
          style={{
            maxInlineSize: '80ch',
            /** @ts-ignore */
            textWrap: 'balance',
          }}
        >
          An experienced Software Engineer with a strong focus on frontend engineering transforming
          Vision into Seamless User Experience
        </p>
        <div className="mt-5 flex items-center gap-2">
          <Button variant={'link'} href="#contact">
            Contact me
          </Button>

          <Button href="https://go.zeyar.dev/resume" target="_blank" rel="noreferrer">
            Resume
          </Button>
        </div>
      </div>
    </section>
  </PatternBackground>
);

const BriefSection = () => (
  <section className="mb-20 mt-16">
    <h2 className="section-header mb-2">Brief about my career</h2>
    <div>
      <p className="career-section text-gray-100">
        I was a UI/UX designer before I dived into web development. I really loves designing UI and
        making it live. I&apos;m delivering responsive, efficient & elegant interfaces with
        considerations of <b>Performance</b>, <b>Accessibility</b>,<b>User Experience</b>.
      </p>
    </div>
  </section>
);
const ProjectSection = () => {
  const { ref } = useScrollReveal();
  return (
    <section ref={ref} className="my-20">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="section-header">Featured Projects</h2>
        <Button href="/projects" variant="link">
          See all projects
        </Button>
      </div>
      <div className="project-container grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const { ref } = useScrollReveal();
  return (
    <section ref={ref} className="my-12 mb-20">
      <h2 className="section-header mb-5">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard experience={exp} key={idx} />
        ))}
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const { ref } = useScrollReveal();
  let group: { specialized: Technology[]; others: Technology[] } = {
    specialized: [],
    others: [],
  };
  group = technologies.reduce((p, v) => {
    if (v.specialized) {
      p.specialized.push(v);
    } else {
      p.others.push(v);
    }
    return p;
  }, group);

  return (
    <section ref={ref} className="my-12 mb-20">
      <h2 className="section-header mb-2">Technologies</h2>
      <p className="mb-4 text-sm font-semibold uppercase text-gray-400">Specialized in</p>
      <div className="flex flex-wrap gap-4">
        {group.specialized.map((tech, idx) => (
          <TechnologyCard key={idx} technology={tech} />
        ))}
      </div>
      <p className="mb-4 mt-6 text-sm font-semibold uppercase text-gray-400">Familiar with</p>
      <div className="flex flex-wrap gap-4">
        {group.others.map((tech, idx) => (
          <TechnologyCard key={idx} technology={tech} />
        ))}
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section className="my-12 mb-20" id="education">
      <h2 className="section-header mb-5">Education</h2>
      <div className="flex flex-col gap-8">
        {education.map((edu, idx) => (
          <EducationCard education={edu} key={idx} />
        ))}
      </div>
      <p id="certifications" className="mb-4 mt-6 text-sm font-semibold uppercase text-zinc-400">
        Certificate Courses
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {courses.map((certificate, idx) => (
          <Link
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-end gap-y-5 rounded-3xl border border-zinc-700/60 bg-zinc-900/40 bg-opacity-80 px-5 py-4 hover:border-zinc-600 hover:bg-zinc-900/70"
            key={idx}
          >
            <Image src="/assets/logos/coursera.svg" width={40} height={40} alt="coursera logo" />
            <h4 className="text-xs font-bold">{certificate.name}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

const VoluntarySection = () => (
  <section className="my-12 mb-20">
    <h2 className="section-header mb-5">Voluntary Activities</h2>
    <div className="flex flex-wrap gap-8">
      {voluntaries.map((vol, idx) => (
        <VoluntaryCard voluntary={vol} key={idx} />
      ))}
    </div>
  </section>
);

const ContactSection = () => {
  /* const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [submitStatus, setSubmitStatus] = useState('idle')
    /*async function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setSubmitStatus('loading');
      fetch('/api/dynamo', {
        body: JSON.stringify({ message: message, email: email }),
        method: 'PUT',
      })
        .then((res) => (res.status != 200 ? Promise.reject(res) : res))
        .then((res) => res.json())
        .then((res) => {
          console.log('message res : ', res);
          setSubmitStatus('ok');
        })
        .catch((err) => {
          console.warn('message err : ', err);
          setSubmitStatus('err');
        })
        .finally(() => {
          setTimeout(() => {
            setSubmitStatus('idle');
          }, 1000);
        });
    }*/

  return (
    <section id="contact" className="my-24 flex flex-wrap gap-x-8 gap-y-6">
      <div className="w-full max-w-lg">
        <h2 className="section-header mb-3">Contact</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2">
          {contactInfo.map((info, idx) => (
            <li key={idx} className="flex items-center gap-x-4">
              <ContactItem link={info.link} icon={info.icon} display={info.name} />
            </li>
          ))}
        </ul>
      </div>

      {/*<div className="w-full sm:max-w-md sm:w-auto">
        <h2 className="section-header mb-3">Drop a line</h2>
        <form onSubmit={handleSendMessage}>
          <label className="text-gray-400 font-semibold text-sm">
            Message
          </label>
          <textarea
            required={true}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[10rem] resize-y px-5 py-4 rounded-xl mt-1 text-sm"
            placeholder="Hi there! "
          />
          <label className="text-gray-400 font-semibold text-sm block mb-1 mt-1.5">
            Email
          </label>
          <input
            required={true}
            type="email"
            placeholder="yourname@company.com"
            className="px-4 py-3 rounded-xl w-full sm:w-auto text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="block mt-4 sm:m-0 sm:pl-3 sm:inline-block relative">
            <Button
              type="primary"
              className="w-full sm:w-auto"
              status={submitStatus}
            >
              Send
            </Button>
          </span>
        </form>
      </div>*/}
    </section>
  );
};

const CreditSection = () => {
  return (
    <section className="mb-16 mt-32 flex justify-center">
      <div className="mt-2 flex flex-col items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6 shadow-2xl shadow-black/80 md:flex-row md:items-center">
        <Image
          alt="logo monospace version"
          src="/logo-mono.svg"
          width={10}
          height={10}
          className="h-10 w-10"
        />
        <p className="text-gray-300">
          This awesome logo is designed by a talented designer,{' '}
          <br className="sm:block md:hidden" />
          <Link
            target="_blank"
            href="https://www.behance.net/kaungsithu6/projects"
            className="font-semibold text-cyan-400 hover:underline"
          >
            Kaung Sithu
          </Link>
          <small className="text-sm text-gray-400"> [Profile on Behance]</small>
        </p>
      </div>
    </section>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
export default Home;
