import { Experience } from '../../types';
import React from 'react';
import Link from 'next/link';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div
      className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 md:p-8 ${
        experience.current ? 'border-primary/50 bg-primary/5' : ''
      }`}
    >
      {experience.current && (
        <span className="absolute right-4 top-4 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300"></span>
        </span>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-zinc-100">{experience.position}</h3>
          <div className="text-lg font-medium text-primary">
            <Link
              className="text-emerald-300 transition-colors hover:text-emerald-400 hover:underline"
              rel="noreferrer noopener"
              target="_blank"
              href={experience.websiteLink}
            >
              {experience.companyName}
            </Link>
          </div>
        </div>

        <div className="shrink-0 self-start rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-400 backdrop-blur-sm">
          {experience.start} - {experience.end}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
        {experience.description}
      </p>
    </div>
  );
};

export default ExperienceCard;
