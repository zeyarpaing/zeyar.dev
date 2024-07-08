import { projects } from '@/data/projects';
import Layout from 'components/layout/Layout';
import { GetStaticProps, NextPage } from 'next';
import { ValueOf } from 'next/dist/shared/lib/constants';

const ProjectDetail: NextPage<{ project: ValueOf<typeof projects> }> = ({ project }) => {
  return (
    <Layout
    //   image={project.image}
    //   keywords={project.tags?.join(',')}
    //   title={project.name}
    //   description={project.description}
    >
      <h1>{JSON.stringify(project)}</h1>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = projects.map((proj) => ({
    params: { project: proj.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.project) {
    return {
      notFound: true,
    };
  }
  const project = projects.find((proj) => proj.slug === params.project);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
    // revalidate: 60,
  };
};

export default ProjectDetail;
