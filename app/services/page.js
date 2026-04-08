import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Specialist & Family Dental Services San Mateo | Aloha Dental Group',
  description: 'From Diamond-level Invisalign and NightLase laser therapy to foundational family wellness. Explore comprehensive dental excellence in San Mateo with Dr. Farah Bennett and our specialist team',
  keywords: 'San Mateo Dentist, Invisalign San Mateo, NightLase San Mateo, TMJ Treatment 94401, Dental Implants San Mateo, Family Dentistry California',
}

export default function ServicesHub() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Dental Services at Aloha Dental Group San Mateo",
    "description": "A comprehensive suite of dental services including Orthodontics, Sleep Medicine, Laser Aesthetics, and Foundational Wellness",
    "medicalSpecialty": ["Orthodontics", "Sleep Medicine", "Cosmetic Dentistry", "General Dentistry"],
    "provider": {
      "@type": "Dentist",
      "name": "Aloha Dental Group San Mateo",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "424 N. San Mateo Drive",
        "addressLocality": "San Mateo",
        "addressRegion": "CA",
        "postalCode": "94401"
      }
    },
    "hasPart": [
      { "@type": "MedicalSpecialty", "name": "Invisalign Clear Aligner Therapy" },
      { "@type": "MedicalSpecialty", "name": "Fotona NightLase Snoring Treatment" },
      { "@type": "MedicalSpecialty", "name": "TMJ and Sleep Disorder Medicine" },
      { "@type": "MedicalSpecialty", "name": "Dental Implant Restoration" }
    ]
  };

  const categories = [
    {
      title: "Family Wellness & Prevention",
      style: "light",
      intro: "Maintaining healthy smiles for patients of all ages through proactive, gentle care",
      services: [
        { name: "Exams & Cleanings", slug: "cleanings", desc: "Comprehensive examinations and proactive dental care", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "text-[#4D96D2]" },
        { name: "Fillings & Restorative", slug: "restorative", desc: "Artistic, tooth-colored resin to restore health and function", icon: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-slate-400" },
        { name: "Crowns & Bridges", slug: "crowns", desc: "Premium porcelain restorations to protect and complete your smile", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2", color: "text-slate-400" },
        { name: "Emergency Care", slug: "emergency", desc: "Immediate, compassionate relief for unexpected dental needs", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", color: "text-red-500" }
      ]
    },
    {
      title: "Specialized Clinical Excellence",
      style: "vibrant",
      intro: "Advanced therapeutic solutions powered by industry-leading technology",
      services: [
        { name: "Expert Invisalign®", slug: "invisalign", desc: "Diamond-level clear aligner therapy for a perfectly aligned smile", bg: "bg-[#4D96D2]" },
        { name: "NightLase® Therapy", slug: "nightlase", desc: "Non-invasive Fotona® laser treatment for snoring and sleep apnea", bg: "bg-[#F29231]" },
        { name: "TMJ & Sleep Medicine", slug: "tmj-sleep", desc: "Pioneering non-invasive solutions for chronic jaw and facial pain", bg: "bg-slate-800" },
        { name: "Dental Implants", slug: "implants", desc: "The gold standard for permanent, natural-feeling tooth replacement", bg: "bg-[#87BC4E]" }
      ]
    },
    {
      title: "Artistic Aesthetics",
      style: "vibrant",
      intro: "Precision cosmetic treatments to enhance the natural beauty of your smile",
      services: [
        { name: "Porcelain Veneers", slug: "veneers", desc: "Hand-crafted shells designed to perfect shape, shade, and alignment", bg: "bg-[#87BC4E]" },
        { name: "Teeth Whitening", slug: "whitening", desc: "Professional-grade brightness with in-office and take-home options", bg: "bg-[#F29231]" },
        { name: "Laser Aesthetics", slug: "laser-aesthetics", desc: "Advanced Fotona® laser rejuvenation for natural facial aesthetics", bg: "bg-[#4D96D2]" },
        { name: "Root Canal Therapy", slug: "root-canal", desc: "Gentle, microscopic care to save and preserve your natural teeth", bg: "bg-slate-800" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - Tighter Padding */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-70" 
          alt="Coastal background San Mateo" 
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="hero-heading mb-2">Our Services</h1>
          <p className="hero-subtext">
            Compassionate family care and world-class specialist expertise
          </p>
        </div>
      </section>

      {/* 2. SERVICES DIRECTORY - Tightened py-12/py-16 */}
      <div className="py-6 space-y-12">
        {categories.map((cat, index) => (
          <section key={cat.title} className={`py-12 md:py-16 border-b border-slate-100 ${cat.style === 'light' ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="mb-8 border-l-8 border-slate-900 pl-6 py-1">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase leading-none">
                  {cat.title}
                </h2>
                <p className="text-slate-500 mt-2 text-base md:text-lg font-medium">{cat.intro}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {cat.services.map((s) => (
                  <Link key={s.name} href={`/services/${s.slug || ''}`}
                    className={`group p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[240px]
                      ${cat.style === 'vibrant' ? `${s.bg} text-white border-transparent` : 'bg-white text-slate-900 border border-slate-100'}
                    `}>
                    
                    <div>
                      {s.icon && (
                        <div className={`${s.color} mb-4 flex justify-start group-hover:scale-110 transition-transform`}>
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={s.icon}></path>
                          </svg>
                        </div>
                      )}
                      
                      <h3 className={`text-lg md:text-xl font-bold uppercase tracking-tight mb-2 leading-tight
                        ${cat.style === 'vibrant' ? 'text-white' : 'text-slate-900'}
                      `}>
                        {s.name}
                      </h3>
                      
                      <p className={`text-[13px] leading-relaxed font-medium
                        ${cat.style === 'vibrant' ? 'text-white/90' : 'text-slate-500'}
                      `}>
                        {s.desc}
                      </p>
                    </div>

                    <div className={`mt-4 flex items-center gap-2 font-bold text-[9px] tracking-widest uppercase
                      ${cat.style === 'vibrant' ? 'text-white' : 'text-[#F29231]'}
                    `}>
                      Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. ALOHA BLUE CTA BOX */}
      <section className="py-16 md:py-20 bg-white text-center px-6 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-[#4D96D2] rounded-[3rem] p-10 md:p-14 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl text-center"></div>
            
            <h2 className="text-2xl md:text-5xl font-bold mb-4 tracking-tighter uppercase leading-tight relative z-10 text-white !important">
              Start Your Smile<br/>Transformation
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl font-medium relative z-10 text-center">
              Schedule your consultation with our specialist team today
            </p>
            <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener noreferrer"
               className="bg-[#F29231] text-white px-10 py-4 rounded-full font-bold text-sm md:text-base tracking-widest hover:bg-[#e08220] transition shadow-lg relative z-10 transform hover:scale-105 duration-300 uppercase">
              Book Online Now
            </a>
        </div>
      </section>
    </div>
  );
}