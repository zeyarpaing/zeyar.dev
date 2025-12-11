import { Project } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Project.module.css';
import { FC } from 'react';

const ProjectCard: FC<{
  project: Project;
  showDots?: boolean;
  vertical?: boolean;
}> = (props) => {
  const { project, showDots, vertical } = props;
  return (
    <div
      style={{ color: project.color }}
      className={(showDots ? styles.projectCard : '') + ' group'}
      // href={project.slug}
      // rel="noopener noreferrer"
      // target="_blank"
    >
      <div className="relative z-[1] h-full rounded-2xl bg-zinc-800 bg-opacity-40 px-7 py-6 backdrop-blur-md transition-colors group-hover:bg-zinc-700 group-hover:bg-opacity-50">
        <div className={`flex flex-wrap gap-4 ${vertical ? 'flex-col items-center' : ''}`}>
          <Image
            src={project.logo}
            width={50}
            height={50}
            className="rounded-md"
            alt={project.name}
          />
          <div className={vertical ? 'text-center' : ''}>
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-sm text-gray-400">{project.type}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
