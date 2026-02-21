interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "German Student",
    city: "Karachi",
    content: "Maine zero se German seekhna shuru kiya tha aur sirf 6 mahine mein B1 exam pass kar liya. Teachers bohat supportive hain aur curriculum bohat acha hai."
  },
  {
    id: 2,
    name: "Fatima Ali",
    role: "English Student",
    city: "Lahore",
    content: "English course ne meri speaking skills bohat improve ki hain. Ab main confidently baat kar sakti hoon aur meri job ke liye bhi help mili hai."
  },
  {
    id: 3,
    name: "Hassan Raza",
    role: "Japanese Student",
    city: "Islamabad",
    content: "Japanese seekhna mera dream tha. Yahan ke teachers bohat experienced hain aur cultural insights ke sath language seekhne ka maza hi kuch aur hai."
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-accent-light/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="heading-md mt-3 mb-4">Student Stories</h2>
          <p className="text-body max-w-2xl mx-auto">
            Hear from our community of successful language learners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-elevated h-full flex flex-col p-5 md:p-6">
              {/* Student Name - Top */}
              <div className="mb-4 pb-4 border-b border-border-subtle">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted">{testimonial.city}</p>
                  </div>
                </div>
                <p className="text-xs text-accent font-medium">{testimonial.role}</p>
              </div>

              {/* Review Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-1 mb-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <span className="text-xs text-muted">Review</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
