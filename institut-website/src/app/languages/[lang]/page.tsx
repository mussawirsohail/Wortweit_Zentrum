'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LevelCard from '@/components/ui/LevelCard';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';
import { languagesData, Language } from '@/data/languages';
import Link from 'next/link';

export default function LanguageDetailPage() {
  const params = useParams();
  const lang = params.lang as string;

  const language: Language | undefined = languagesData.find(l => l.id === lang);

  if (!language) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center py-20">
              <h1 className="heading-md mb-4">Language Not Found</h1>
              <p className="text-body mb-8">
                The requested language is not available in our program.
              </p>
              <Link href="/languages" className="btn-primary">
                Browse All Languages
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-sm bg-surface border-b border-border-subtle">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <h1 className="heading-lg">{language.name}</h1>
                <span className="px-3 py-1 bg-accent-light text-accent text-sm font-semibold rounded uppercase tracking-wider">
                  {language.code}
                </span>
              </div>
              <p className="text-body text-lg">
                {language.description}
              </p>
            </div>
          </div>
        </section>

        {/* Course Levels */}
        <section className="section">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="heading-sm mb-3">Choose Your Level</h2>
                <p className="text-body max-w-2xl mx-auto">
                  From beginner to advanced, we have a perfect course for your skill level.
                </p>
              </div>
              
              {/* Level Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {language.levels.map((level, index) => (
                  <div key={level.id} className="relative">
                    {/* Level Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent text-surface rounded-full flex items-center justify-center text-sm font-medium z-10">
                      {index + 1}
                    </div>
                    <LevelCard
                      levelName={level.name}
                      description={level.description}
                      duration={level.duration}
                      fees={level.fees}
                      registration={level.registration}
                      discount={level.discount}
                      languageId={language.id}
                      levelId={level.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section bg-accent-light/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="heading-sm mb-8 text-center">Why Learn {language.name}?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: 'Career Opportunities',
                    description: `Proficiency in ${language.name} opens doors to international business and career advancement.`
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Cultural Connection',
                    description: `Connect deeply with ${language.name}-speaking communities and their rich cultural heritage.`
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Travel Benefits',
                    description: `Enhance your travel experiences in ${language.name}-speaking countries with confidence.`
                  },
                ].map((item, index) => (
                  <div key={index} className="card text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-light text-accent mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="card bg-surface text-center">
              <h2 className="heading-sm mb-4">Ready to Start Learning?</h2>
              <p className="text-body mb-6 max-w-xl mx-auto">
                Enroll in our {language.name} program today and begin your journey to fluency.
              </p>
              <Link href="/enroll" className="btn-primary">
                Enroll Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
