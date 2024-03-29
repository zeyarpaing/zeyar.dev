import { NextPage } from 'next';
import Layout from 'components/layout/Layout';
import React from 'react';
import { projects } from 'data/info';
import ProjectCardWithMedia from 'components/project/ProjectCardWithMedia';
import PatternBackground from 'components/shared/PatternBackground';

const Projects: NextPage = () => {
  return (
    <Layout title="Projects | Zeyar Paing">
      <PatternBackground>
        <h1 className="text-white font-black text-center mt-12 mb-2 md:mt-24 md:mb-10 text-3xl md:text-5xl">
          Projects
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-8 py-4">
          {projects.map((project, idx) => (
            <ProjectCardWithMedia key={idx} project={project} />
          ))}
        </ul>
      </PatternBackground>
    </Layout>
  );
};

export default Projects;
