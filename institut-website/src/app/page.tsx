'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Testimonials from '@/components/sections/Testimonials';
import LanguageCard from '@/components/ui/LanguageCard';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';
import { languagesData } from '@/data/languages';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />

        {/* Languages Overview Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Programs</span>
              <h2 className="heading-md mt-3 mb-4">Available Languages</h2>
              <p className="text-body max-w-2xl mx-auto">
                Explore our comprehensive language programs designed for all proficiency levels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {languagesData.map((language) => (
                <LanguageCard
                  key={language.id}
                  language={language.name}
                  code={language.code}
                  description={language.description}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/languages" className="btn-secondary">
                View All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section bg-surface border-y border-border-subtle">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-medium text-accent uppercase tracking-wider">About Us</span>
                <h2 className="heading-md mt-3 mb-6">A New Approach to Language Learning</h2>
                <p className="text-body mb-6">
                  At Wortweit Zentrum, we believe that language learning opens doors to new cultures, opportunities, and perspectives.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'Expert Instructors', desc: 'Certified native speakers with years of teaching experience.' },
                    { title: 'Flexible Learning', desc: 'Online, physical, or hybrid classes that fit your schedule.' },
                    { title: 'Proven Results', desc: 'Thousands of successful students achieved their language goals.' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-accent-light rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🌍</div>
                      <p className="text-muted">Connecting cultures through language</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Benefits</span>
              <h2 className="heading-md mt-3 mb-4">Why Choose Wortweit Zentrum</h2>
              <p className="text-body max-w-2xl mx-auto">
                We offer a unique learning experience that combines traditional teaching methods with modern technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: 'Personalized Learning Plans',
                  description: 'Customized curricula tailored to your learning style and goals.'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Small Class Sizes',
                  description: 'Maximum 8 students per class to ensure individual attention.'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Flexible Scheduling',
                  description: 'Morning, evening, and weekend classes to accommodate busy schedules.'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: 'Progress Tracking',
                  description: 'Regular assessments and progress reports to monitor your improvement.'
                },
              ].map((item, index) => (
                <div key={index} className="card flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Contact CTA Section */}
        <section className="section bg-surface border-y border-border-subtle">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-md mb-4">Ready to Start Your Language Journey?</h2>
              <p className="text-body mb-8">
                Join our community of language learners today and take the first step toward fluency.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/enroll" className="btn-primary">
                  Enroll Now
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
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
