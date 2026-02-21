'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';
import Link from 'next/link';

const faqs = [
  {
    question: "What languages do you offer courses in?",
    answer: "We offer courses in English, German, Japanese, Korean, Turkish, and Sindhi. Each language has multiple levels from beginner to advanced."
  },
  {
    question: "How long are the courses?",
    answer: "Course durations vary by level and language. Beginner courses typically last 2-3 months, intermediate courses 3-5 months, and advanced courses 4-6 months. Specific durations are listed on each course page."
  },
  {
    question: "Are classes offered online or in-person?",
    answer: "We offer flexible learning options including online classes, in-person classes at our facilities, and hybrid options that combine both. You can choose the format that best fits your schedule and preferences."
  },
  {
    question: "What are the class sizes?",
    answer: "We maintain small class sizes with a maximum of 8 students per class to ensure personalized attention and optimal learning outcomes."
  },
  {
    question: "Can I switch between online and in-person classes?",
    answer: "Yes, students enrolled in our hybrid program can switch between online and in-person classes based on their needs and availability. Please notify your instructor in advance."
  },
  {
    question: "Do you offer certificates upon completion?",
    answer: "Yes, we provide certificates of completion for all our language courses. These certificates are recognized by many institutions and employers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, bank transfers, and PayPal. Payment plans are available for longer courses. Detailed information is provided during enrollment."
  },
  {
    question: "Can I get a refund if I can't continue the course?",
    answer: "We offer a full refund if you withdraw within the first week of the course. After that, partial refunds may be available depending on circumstances. Please see our refund policy for details."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-sm bg-surface border-b border-border-subtle">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">Support</span>
              <h1 className="heading-lg mt-3 mb-4">Frequently Asked Questions</h1>
              <p className="text-body text-lg">
                Find answers to common questions about our language courses
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="card overflow-hidden p-0"
                  >
                    <button
                      className="w-full flex justify-between items-center p-5 text-left hover:bg-accent-light/30 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-sm font-medium text-foreground pr-4">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 text-muted-light flex-shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openIndex === index && (
                      <div className="px-5 pb-5">
                        <div className="pt-2 border-t border-border-subtle">
                          <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 card bg-accent-light border-none">
                <div className="text-center">
                  <h2 className="heading-sm mb-3">Still have questions?</h2>
                  <p className="text-body mb-6">
                    Our team is ready to assist you with any additional inquiries you may have.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
