'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';
import { languagesData, Language } from '@/data/languages';
import Link from 'next/link';

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-sm bg-surface border-b border-border-subtle">
          <div className="container">
            <div className="text-center">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Programs</span>
              <h1 className="heading-lg mt-3 mb-4">Our Language Programs</h1>
              <p className="text-body text-lg max-w-2xl mx-auto">
                Choose from our comprehensive language courses designed for all proficiency levels.
              </p>
            </div>
          </div>
        </section>

        {/* Languages Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languagesData.map((language: Language) => {
                // Calculate price range across all levels and modes
                const allPrices = language.levels.flatMap(l => [l.fees.online, l.fees.physical, l.fees.hybrid]);
                const minPrice = Math.min(...allPrices);
                const maxPrice = Math.max(...allPrices);
                const priceRange = minPrice === maxPrice ? `$${minPrice}` : `$${minPrice} - $${maxPrice}`;
                
                // Get online prices for display (most affordable option)
                const onlinePrices = language.levels.map(l => l.fees.online);
                const minOnlinePrice = Math.min(...onlinePrices);

                return (
                  <div key={language.id} className="card-elevated overflow-hidden flex flex-col h-full p-5 md:p-6">
                    {/* Language Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-accent-light text-accent text-xs font-semibold rounded uppercase tracking-wider">
                          {language.code}
                        </span>
                      </div>
                      <h2 className="text-lg md:text-xl font-medium text-foreground mb-1">{language.name}</h2>
                      <p className="text-xs text-muted">{language.levels.length} levels available</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                      {language.description}
                    </p>

                    {/* Levels Overview */}
                    <div className="mb-4">
                      <h3 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">Levels</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {language.levels.map((level) => (
                          <span
                            key={level.id}
                            className="px-2.5 py-1 bg-accent-light text-foreground text-xs rounded-md"
                          >
                            {level.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price Info */}
                    <div className="bg-accent-light/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-xs text-muted mb-0.5">Starting From</p>
                          <p className="text-xl md:text-2xl font-medium text-foreground">${minOnlinePrice}<span className="text-sm text-muted font-normal">/month</span></p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted mb-0.5">Registration</p>
                          <p className="text-sm font-medium text-foreground">${language.levels[0].registration}</p>
                        </div>
                      </div>
                      
                      {/* Fee breakdown hint */}
                      <div className="pt-3 border-t border-border-subtle">
                        <p className="text-xs text-muted mb-2">Monthly fees by mode:</p>
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-muted">
                            <span className="font-medium text-foreground">Online:</span> ${Math.min(...language.levels.map(l => l.fees.online))}+
                          </span>
                          <span className="hidden sm:inline text-muted">
                            <span className="font-medium text-foreground">Physical:</span> ${Math.min(...language.levels.map(l => l.fees.physical))}+
                          </span>
                          <span className="hidden sm:inline text-muted">
                            <span className="font-medium text-foreground">Hybrid:</span> ${Math.min(...language.levels.map(l => l.fees.hybrid))}+
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Learning Modes */}
                    <div className="flex items-center gap-2 mb-4 text-xs text-muted">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Online, Physical & Hybrid available</span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/languages/${language.id}`}
                      className="btn-primary w-full"
                    >
                      View All Levels
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-12 card bg-surface text-center">
              <h2 className="heading-sm mb-3">Not Sure Which Language to Choose?</h2>
              <p className="text-body mb-6 max-w-xl mx-auto">
                Our team can help you find the perfect language course based on your goals and interests.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
                <Link href="/enroll" className="btn-primary">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
