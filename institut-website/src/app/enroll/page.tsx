'use client';

import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EnrollmentFormWrapper from '@/components/forms/EnrollmentFormWrapper';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';
import Link from 'next/link';

export default function EnrollmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-sm bg-surface border-b border-border-subtle">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Enrollment</span>
              <h1 className="heading-lg mt-3 mb-4">Enroll in Language Course</h1>
              <p className="text-body text-lg">
                Take the first step towards mastering a new language
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="card mb-8">
                <div className="mb-8">
                  <h2 className="heading-sm mb-3">Course Enrollment Form</h2>
                  <p className="text-body">
                    Fill out the form below to enroll in your desired language course. Our team will contact you shortly to confirm your enrollment.
                  </p>
                </div>

                <Suspense fallback={<div className="text-center py-8 text-muted">Loading form...</div>}>
                  <EnrollmentFormWrapper />
                </Suspense>
              </div>

              {/* What Happens Next */}
              <div className="card bg-accent-light/30 border-none">
                <h3 className="text-base font-medium text-foreground mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    "We will review your enrollment request",
                    "Our team will contact you within 24 hours",
                    "You will receive course materials and schedule",
                    "Start your language learning journey!",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-muted">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back Link */}
              <div className="text-center mt-8">
                <Link href="/languages" className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Courses
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
