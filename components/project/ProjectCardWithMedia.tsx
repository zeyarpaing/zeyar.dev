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
      className={'group'}
      href={`/projects/${project.slug}`}
      aria-label={`${project.name} ${project.type}`}
    >
      <div
        style={{
          backgroundImage: project.media ? `url(${project.media})` : undefined,
          backgroundColor: project.media ? undefined : project.color,
        }}
        className={`bg-primary-foreground relative z-[1] h-[364px] overflow-hidden rounded-2xl ${
          project.media ? 'bg-contain' : ''
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950/80`}></div>
        <div
          className={`absolute bottom-5 left-1/2 flex w-full max-w-[80%] -translate-x-1/2 scale-90 flex-wrap gap-4 rounded-2xl p-4 transition-transform group-hover:scale-100 ${
            vertical ? 'flex-col items-center' : ''
          } border border-gray-300 border-opacity-50 bg-darkblue bg-opacity-50 backdrop-blur-md`}
        >
          <Image src={project.logo} width={50} height={50} alt={project.name} />
          <article className={vertical ? 'text-center' : ''}>
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-sm text-gray-200">{project.type}</p>
          </article>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
