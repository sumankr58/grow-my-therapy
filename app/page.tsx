import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[var(--color-light)] text-[var(--color-dark)]">
      
      {/* 1. NAVBAR SECTION */}
      <header className="py-5 px-8 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-[var(--color-primary)]">
          Dr. Maya Reynolds
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="#" className="hover:text-[var(--color-secondary)] transition">Home</Link>
          <Link href="#about" className="hover:text-[var(--color-secondary)] transition">About</Link>
          <Link href="#services" className="hover:text-[var(--color-secondary)] transition">Services</Link>
        </nav>

        {/* Call to Action Button */}
        <Link href="#contact" className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-md hover:bg-[var(--color-secondary)] transition hidden md:block">
       Book Session
      </Link>
      </header>

      {/* 2. HERO SECTION */}
      <section className="bg-[var(--color-accent)]/20 py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[var(--color-primary)]">
              Compassionate Therapy for a Balanced Life
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Specializing in anxiety, depression, and trauma. Find a safe, non-judgmental space to heal and grow with evidence-based counseling tailored to your unique journey.
            </p>
           <div className="flex gap-4 pt-4">
           <Link href="#services" className="bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-md hover:bg-[var(--color-secondary)] transition shadow-md font-medium inline-block text-center">
           Get Started
          </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-[450px] relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Therapy space" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Areas of Focus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional, culturally sensitive therapy services designed to support your mental and emotional well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-light)] p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">Anxiety & Depression</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn practical coping strategies, understand your emotional triggers, and rebuild a sense of hope and energy in your daily life.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-light)] p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">Trauma & PTSD</h3>
              <p className="text-gray-600 leading-relaxed">
                Using trauma-informed care and EMDR to gently process past experiences, allowing you to move forward feeling safe and grounded.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-light)] p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">Couples Counseling</h3>
              <p className="text-gray-600 leading-relaxed">
                Improve communication, rebuild trust, and deepen your emotional connection with your partner in a neutral, supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-24 px-8 bg-[var(--color-accent)]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 w-full h-[500px] relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1000&auto=format&fit=crop" 
              alt="Dr. Maya Reynolds" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[var(--color-primary)]">Meet Dr. Maya Reynolds</h2>
            <h4 className="text-xl font-medium text-[var(--color-secondary)]">Licensed Clinical Psychologist</h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              Hi, I'm Dr. Maya. I believe that therapy is a collaborative process. For over a decade, I have been dedicated to helping individuals and couples navigate life's toughest transitions. 
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              My approach integrates Cognitive Behavioral Therapy (CBT) with mindfulness techniques, ensuring we not only address immediate symptoms but also build long-term emotional resilience. You don't have to walk this path alone.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-[var(--color-secondary)]">✓</span> Ph.D. in Clinical Psychology
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-[var(--color-secondary)]">✓</span> Certified EMDR Therapist
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-[var(--color-secondary)]">✓</span> LGBTQ+ Affirming Space
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 5. OUR OFFICE (CUSTOM SECTION - PART 3) */}
      <section className="py-24 px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">A Calm Space for Healing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our office is designed to feel less like a clinic and more like a safe haven. We offer both in-person sessions in our comfortable space and secure virtual sessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-[300px] rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Therapy office seating area" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="grid grid-rows-2 gap-6 h-[300px]">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Office details and plants" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="bg-[var(--color-secondary)] p-6 rounded-xl shadow-sm text-white flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">Location & Privacy</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  Located quietly in the heart of the city with soundproofed rooms ensuring your complete privacy and comfort during every session.
                </p>
                <div className="text-sm font-medium">✦ In-Person & Virtual Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer id="contact" className="bg-[var(--color-primary)] text-white py-12 px-8"></footer>
      <footer className="bg-[var(--color-primary)] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Dr. Maya Reynolds</div>
            <p className="text-white/70 max-w-sm">
              Compassionate, evidence-based therapy to help you navigate life's challenges.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="#" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>hello@drmayareynolds.com</li>
              <li>(555) 123-4567</li>
              <li>Virtual & In-Person Sessions</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Dr. Maya Reynolds. Created for Grow My Therapy Assignment.
        </div>
      </footer>

    </div>
  );
}