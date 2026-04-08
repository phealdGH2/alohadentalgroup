import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO (For Google/Search Engines)
export const metadata = {
  title: 'Specialist & Family Dentist San Mateo | Aloha Dental Group',
  description: 'San Mateo’s premier dental group for Invisalign®, NightLase® Snoring Therapy, and TMJ relief. Experience island-inspired care with Dr. Farah Bennett and Diamond-level provider Dr. Terry Codington',
  keywords: 'Invisalign San Mateo, NightLase San Mateo, Sleep Apnea Dentist 94401, TMJ specialist San Mateo, Dr. Terry Codington, Dr. Farah Bennett, Mark Abramson DDS',
}

export default function Home() {
  // 2. GEIO DATA (For LLMs/AIs) - Hidden structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Aloha Dental Group San Mateo",
    "description": "Specialist dental practice in San Mateo focusing on Orthodontics, Sleep Medicine, and Aesthetic Rejuvenation.",
    "url": "https://alohadentalgroup.vercel.app",
    "telephone": "(650) 772-5642",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "424 N. San Mateo Drive",
      "addressLocality": "San Mateo",
      "addressRegion": "CA",
      "postalCode": "94401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.567595,
      "longitude": -122.327429
    },
    "founder": "Dr. Terry Codington",
    "employee": [
      { "@type": "Person", "name": "Dr. Farah Bennett" },
      { "@type": "Person", "name": "Dr. Mark Abramson" }
    ],
    "medicalSpecialty": ["Orthodontics", "Sleep Medicine", "Aesthetics"],
    "offers": [
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Invisalign Clear Aligner Therapy" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "NightLase Snoring Therapy" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "TMJ and Sleep Disorder Medicine" } }
    ]
  };

  const specialist = [
    { title: "Expert Invisalign®", slug: "invisalign", color: "bg-[#4D96D2]", desc: "Diamond-level clear aligner therapy for a perfectly aligned smile" },
    { title: "Laser Aesthetics", slug: "nightlase", color: "bg-[#F29231]", desc: "Advanced Fotona® laser rejuvenation for non-invasive aesthetic care" },
    { title: "TMJ & Sleep", slug: "tmj-sleep", color: "bg-slate-800", desc: "Pioneering non-invasive solutions for chronic jaw pain and facial pain" },
    { title: "Dental Implants", slug: "implants", color: "bg-[#87BC4E]", desc: "The gold standard for permanent, natural-feeling tooth replacement" }
  ];

  const wellness = [
    { title: 'Cleanings & Hygiene', color: 'text-[#4D96D2]', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Teeth Whitening', color: 'text-[#F29231]', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { title: 'Crowns & Fillings', color: 'text-slate-400', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Emergency Care', color: 'text-red-500', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { title: 'Veneers & Smiles', color: 'text-[#87BC4E]', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  return (
    <div className="bg-white">
      {/* GEIO Hidden Script Block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Hawaii Beach" 
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="hero-heading mb-3">A Legacy of Smiles</h1>
          <p className="hero-subtext">World-class technology and island-inspired care in San Mateo</p>
        </div>
      </section>

      {/* 2. DOCTORS SECTION */}
      <section id="doctors" className="py-16 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-slate-300 font-bold uppercase tracking-[0.5em] text-[10px] mb-16">Our Expert Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { name: "Dr. Farah Bennett", slug: "farahbennett", img: "/bennett.jpeg", title: "Advanced Aesthetics & Laser" },
              { name: "Dr. Terry Codington", slug: "terrycodington", img: "/codington.webp", title: "Invisalign® Clinical Expert" },
              { name: "Dr. Mark Abramson", slug: "markabramson", img: "/abramson.webp", title: "TMJ & Sleep Medicine Specialist" }
            ].map((doc) => (
              <Link key={doc.slug} href={`/doctors/${doc.slug}`} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition duration-500 border border-slate-100 flex flex-col text-left group">
                <div className="overflow-hidden aspect-[4/5]">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{doc.name}</h3>
                  <p className="text-sky-600 font-bold text-[10px] uppercase tracking-widest mb-6">{doc.title}</p>
                  <span className="text-[#F29231] font-bold text-[11px] uppercase tracking-widest hover:underline decoration-2 underline-offset-8">Full Biography &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-16 pb-4 px-6 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-slate-300 font-bold uppercase tracking-[0.5em] text-[10px] mb-10 text-nowrap">Clinical Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 text-left">
            {specialist.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={`${s.color} p-8 rounded-3xl text-white shadow-sm hover:shadow-xl transition-all h-full`}>
                <h4 className="font-bold text-xl mb-3 uppercase tracking-tight">{s.title}</h4>
                <p className="text-white font-medium text-[12px] opacity-90">{s.desc}</p>
              </Link>
            ))}
          </div>

          <h3 className="text-slate-300 font-bold uppercase tracking-[0.5em] text-[10px] mb-10 text-nowrap">Everyday Wellness</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {wellness.map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center group hover:border-slate-300 transition-all duration-300">
                <div className={`${s.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon}></path></svg></div>
                <h5 className="font-bold text-[9px] uppercase tracking-wider text-slate-700 leading-tight">{s.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter leading-tight uppercase text-slate-900">
                  Aloha spirit<br />San Mateo heart
                </h2>
                
                <div className="space-y-12">
                    <div>
                        <span className="block text-[#F29231] font-bold text-[10px] uppercase tracking-[0.4em] mb-3">Text Us Anytime</span>
                        <a href="sms:+16502001927" className="text-3xl md:text-4xl font-bold text-slate-900 border-b-2 border-orange-100 hover:border-[#F29231] transition inline-block">(650) 200-1927</a>
                    </div>
                    <div>
                        <span className="block text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-3">Questions? Give us a call</span>
                        <a href="tel:6507725642" className="text-2xl md:text-3xl text-slate-700 font-medium hover:text-sky-600 transition inline-block">(650) 772-5642</a>
                    </div>
                    <div>
                        <span className="block text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-3">Our Location</span>
                        <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed">424 N. San Mateo Drive<br />San Mateo, CA 94401</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 w-full h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.4682447470634!2d-122.3274291!3d37.567595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f991f860579e5%3A0x7d6560938f7e777e!2sAloha%20Dental%20Group!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
            </div>
        </div>
      </section>
    </div>
  );
}