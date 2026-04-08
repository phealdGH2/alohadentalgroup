import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Laser Aesthetics & Light Therapy San Mateo | Aloha Dental Group',
  description: 'Discover the power of non-invasive Fotona Light Therapy in San Mateo. Professional facial rejuvenation, LipLase, and SmoothEye treatments by Dr. Farah Bennett',
  keywords: 'Laser Aesthetics San Mateo, Light Therapy Facial, Fotona LipLase, SmoothEye San Mateo, non-surgical facelift, Dr. Farah Bennett',
}

export default function LaserAestheticsPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Laser Aesthetics and Light Therapy at Aloha Dental Group San Mateo",
    "description": "Non-invasive aesthetic light therapy treatments including natural lip plumping and eye rejuvenation using Fotona technology",
    "medicalSpecialty": ["Aesthetic Medicine", "Cosmetic Dentistry"],
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
    }
  };

  const treatments = [
    {
      name: "LipLase™",
      desc: "Natural lip plumping through light-induced collagen stimulation—no needles or fillers required"
    },
    {
      name: "SmoothEye™",
      desc: "Reduction of fine lines and wrinkles around the eyes using gentle, non-ablative light therapy"
    },
    {
      name: "TightSculpting®",
      desc: "Non-invasive skin tightening and contouring for a firmer, more youthful facial appearance"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. LIGHT THERAPY HERO - Luminous Seafoam with Dark Text */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#ccfbf1] to-[#99f6e4]">
        {/* Very subtle light-refracting texture */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/glass-passages.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-[#F29231] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Natural Rejuvenation</span>
          {/* Switched to text-slate-900 (Dark) for legibility on light background */}
          <h1 className="hero-heading !text-slate-900 !drop-shadow-none">Light Therapy</h1>
          <p className="hero-subtext !text-slate-600 !drop-shadow-none">Advanced laser aesthetics for a natural, youthful glow in San Mateo</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#99f6e4] pl-6">
              The Power <br/>of Pure Light
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                At Aloha Dental Group, we believe in enhancing your natural beauty using the body's own healing mechanisms. Our <strong>Aesthetic Light Therapy</strong> treatments utilize the world-class <strong>Fotona LightWalker®</strong> system to stimulate collagen production deep within the skin.
              </p>
              <p>
                Unlike traditional "lasers" that can be harsh or invasive, our light therapy is non-ablative. This means we treat the tissue from the inside out, triggering a natural tightening and plumping effect with zero needles, zero chemicals, and zero downtime.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {treatments.map((t) => (
                  <div key={t.name} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-[#4D96D2] uppercase text-sm mb-2">{t.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-[#f0fdfa] p-10 rounded-[3rem] sticky top-44 border border-[#ccfbf1] shadow-sm">
              <h4 className="font-bold text-[#0d9488] mb-8 uppercase tracking-widest text-xs text-center">Why Light Therapy?</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#0d9488] font-bold">01.</span>
                  <p className="text-slate-700"><strong>Collagen Boost</strong> – Stimulates your body to naturally firm and plump your skin</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#0d9488] font-bold">02.</span>
                  <p className="text-slate-700"><strong>No Downtime</strong> – A "lunch hour" procedure; return to work immediately in San Mateo</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#0d9488] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Needle-Free</strong> – The perfect alternative to fillers and synthetic injectables</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-slate-900 mb-6 uppercase tracking-tighter">The Patient Experience</h2>
            <div className="w-24 h-1 bg-[#F29231] mx-auto rounded-full mb-12"></div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              During a session, you will feel a gentle, controlled warming sensation. Dr. Farah Bennett precisely targets specific areas to rejuvenate skin texture and volume. Most treatments are completed in 20 to 30 minutes, allowing you to resume your day with a refreshed, natural look.
            </p>
        </div>
      </section>

      {/* 4. COMPACT ALOHA BLUE CTA BOX */}
      <section className="py-24 bg-white text-center px-6 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-[#4D96D2] rounded-[3rem] p-12 md:p-16 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl text-center"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase leading-tight relative z-10 text-white !important">
              Reveal Your<br/>Natural Glow
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your Light Therapy consultation with Dr. Farah Bennett at our San Mateo office
            </p>
            <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener noreferrer"
               className="bg-[#F29231] text-white px-12 py-5 rounded-full font-bold text-base md:text-lg tracking-widest hover:bg-[#e08220] transition shadow-lg relative z-10 transform hover:scale-105 duration-300 uppercase">
              Book Appointment Now
            </a>
        </div>
      </section>
    </div>
  );
}