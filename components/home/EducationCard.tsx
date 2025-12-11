import { Education } from '../../types';

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div
      className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 md:p-8 ${
        education.graduated
          ? 'border-emerald-500/20 bg-emerald-600/5 hover:border-emerald-500/30'
          : ''
      }`}
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-zinc-100">{education.degree}</h3>
            {education.graduated && <span className="text-xl">🎓</span>}
          </div>
          <div className="text-lg font-medium text-zinc-400">{education.school}</div>
        </div>
        <div className="shrink-0 self-start rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-500 backdrop-blur-sm">
          {education.start} - {education.end}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{education.description}</p>
    </div>
  );
};

export default EducationCard;
