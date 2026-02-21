import Link from 'next/link';

interface LanguageCardProps {
  language: string;
  code: string;
  description: string;
}

const LanguageCard = ({ language, code, description }: LanguageCardProps) => {
  return (
    <div className="card-elevated group h-full flex flex-col p-5 md:p-6">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-accent-light text-accent text-xs font-semibold rounded uppercase tracking-wider">
            {code}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-medium text-foreground">{language}</h3>
      </div>
      <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">{description}</p>
      <Link
        href={`/languages/${language.toLowerCase()}`}
        className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
      >
        View Courses
        <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default LanguageCard;
