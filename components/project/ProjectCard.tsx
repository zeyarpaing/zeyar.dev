import { Project } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const ProjectCard: FC<{
  project: Project;
  vertical?: boolean;
}> = (props) => {
  const { project, vertical } = props;
  return (
    <Link
      style={{ color: project.color }}
      className={'group'}
      href={project.demoUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="relative z-[1] h-full rounded-2xl bg-zinc-800 bg-opacity-40 px-7 py-6 backdrop-blur-md transition-colors group-hover:bg-zinc-700 group-hover:bg-opacity-50">
        <div className={`flex flex-wrap gap-4 ${vertical ? 'flex-col items-center' : ''}`}>
          <Image src={project.logo} width={50} height={50} alt={project.name} />
          <div className={vertical ? 'text-center' : ''}>
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-sm text-gray-400">{project.type}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-300">{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
