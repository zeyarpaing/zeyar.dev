import { projects } from '@/data/projects';
import Layout from 'components/layout/Layout';
import ProjectCardWithMedia from 'components/project/ProjectCardWithMedia';
import { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <Layout title="Projects | Zeyar Paing">
      <h1 className="mb-2 mt-12 text-center text-3xl font-black text-white md:mb-10 md:mt-24 md:text-5xl">
        Projects
      </h1>
      <ul className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCardWithMedia key={idx} project={project} />
        ))}
      </ul>
    </Layout>
  );
};

export default Projects;
