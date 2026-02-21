'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-sm bg-surface border-b border-border-subtle">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">About Us</span>
              <h1 className="heading-lg mt-3 mb-4">Wortweit Zentrum</h1>
              <p className="text-body text-lg">
                Empowering individuals through language education since 2010
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-sm mb-6">Our Story</h2>
                <p className="text-body mb-4">
                  Founded in 2010, Wortweit Zentrum began with a simple mission: to make language learning accessible, effective, and enjoyable for everyone. What started as a small tutoring service has grown into a premier language institute offering courses in multiple languages to thousands of students worldwide.
                </p>
                <p className="text-body">
                  Today, we continue to innovate our teaching methods while maintaining our commitment to personalized instruction and cultural immersion. Our diverse team of native-speaking instructors brings authentic language experiences to every classroom.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-accent-light rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🏫</div>
                      <p className="text-muted">Our Learning Community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-surface border-y border-border-subtle">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-md mb-4">Our Values</h2>
              <p className="text-body max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Excellence',
                  description: 'We maintain the highest standards in our curriculum and instruction.'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Community',
                  description: 'We foster a supportive learning environment for all students.'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'Innovation',
                  description: 'We continuously evolve our methods to enhance learning outcomes.'
                },
              ].map((item, index) => (
                <div key={index} className="card text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-light text-accent mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-md mb-4">Leadership Team</h2>
              <p className="text-body max-w-2xl mx-auto">
                Meet the experts behind our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  emoji: '👩‍🏫',
                  name: 'Dr. Sarah Johnson',
                  role: 'Director of Education',
                  bio: 'PhD in Linguistics with 15+ years of language education experience.'
                },
                {
                  emoji: '👨‍💼',
                  name: 'Michael Chen',
                  role: 'Operations Director',
                  bio: 'MBA with expertise in educational technology and operations.'
                },
                {
                  emoji: '👩‍🎓',
                  name: 'Fatima Ahmed',
                  role: 'Academic Coordinator',
                  bio: 'MA in Applied Linguistics and curriculum development specialist.'
                },
              ].map((member, index) => (
                <div key={index} className="card text-center">
                  <div className="w-20 h-20 rounded-full bg-accent-light mx-auto mb-4 flex items-center justify-center text-3xl">
                    {member.emoji}
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
