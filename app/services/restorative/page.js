import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Restorative Dentistry & Tooth-Colored Fillings San Mateo | Aloha Dental',
  description: 'Restore your teeth with mercury-free, natural-looking fillings and bonding in San Mateo. Dr. Farah Bennett focuses on conservative dentistry to preserve your natural smile.',
  keywords: 'Tooth Colored Fillings San Mateo, Dental Bonding 94401, Restorative Dentist, Mercury-free fillings, Dr. Farah Bennett, Conservative Dentistry',
}

export default function RestorativePage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Restorative Dentistry and Composite Fillings at Aloha Dental Group",
    "description": "Artistic and conservative restorative dental treatments including tooth-colored composite fillings and bonding.",
    "medicalSpecialty": "Restorative Dentistry",
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

  const faqs = [
    {
      q: "What are tooth-colored fillings made of",
      a: "We use high-quality composite resin—a durable mixture of plastic and glass particles. Unlike old silver (amalgam) fillings, these materials bond directly to the tooth, requiring less drilling and providing a completely natural look"
    },
    {
      q: "How long does a dental filling last",
      a: "With proper hygiene and regular checkups at our San Mateo office, composite fillings typically last 7 to 10 years or longer. They are designed to withstand the daily pressures of biting and chewing while protecting the tooth from further decay"
    },
    {
      q: "Is the procedure comfortable",
      a: "Dr. Bennett is known for her gentle touch and relationship-first approach. We ensure the area is completely numb before beginning and offer a relaxing environment to help you feel at ease throughout the restoration process"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Deep Cerulean to Teal Gradient */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0369a1] via-[#0891b2] to-[#4D96D2]">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg opacity-80">Conservative Restoration</span>
          <h1 className="hero-heading">Restorative Care</h1>
          <p className="hero-subtext">Seamless repairs that preserve the strength and beauty of your natural teeth</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#0891b2] pl-6">
              Strength Through <br/>Preservation
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                At Aloha Dental Group, our philosophy is simple: <strong>save as much of your natural tooth as possible</strong>. Restorative dentistry shouldn't just be about fixing a hole; it's about returning your tooth to its original strength and aesthetic using the most advanced materials available.
              </p>
              <p>
                Dr. Farah Bennett specializes in <strong>biomimetic dentistry</strong>—an approach that mimics the natural properties of your teeth. By using tooth-colored composite resins, we can "bond" the restoration to your tooth structure. This reinforces the tooth, preventing future cracks and fractures that are common with old-fashioned metal fillings.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Mercury-Free & Biocompatible</h3>
                <p className="text-sm">
                  We are proud to be a mercury-free practice. Our composite restorations are BPA-free and color-matched to your unique enamel shade. The result is a restoration that is invisible to the eye and safe for your long-term wellness.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-cyan-50 p-10 rounded-[3rem] sticky top-44 border border-cyan-100 shadow-sm">
              <h4 className="font-bold text-[#0891b2] mb-6 uppercase tracking-widest text-xs text-center">The Restorative Edge</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">01.</span>
                  <p className="text-slate-700"><strong>Natural Aesthetics</strong> – Precision color-matching ensures your fillings are indistinguishable from your natural teeth</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Less Drilling</strong> – Composite bonding requires less removal of healthy tooth structure than metal fillings</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Durable Bonding</strong> – The material chemically bonds to the tooth, adding structural integrity and preventing leaks</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Restorative FAQ</h2>
            <div className="w-24 h-1 bg-[#F29231] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-hover hover:shadow-md">
                <h4 className="text-lg font-bold mb-3 text-slate-800 uppercase tracking-tight flex gap-3 leading-tight">
                  <span className="text-[#0891b2]">Q</span> {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm pl-7 border-l-2 border-slate-50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPACT ALOHA BLUE CTA BOX */}
      <section className="py-24 bg-white text-center px-6 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-[#4D96D2] rounded-[3rem] p-12 md:p-16 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl text-center"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase leading-tight relative z-10 text-white !important">
              Restore Your<br/>Confidence
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule an evaluation with Dr. Farah Bennett to discuss your restorative options in San Mateo
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