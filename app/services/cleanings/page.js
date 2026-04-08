import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Preventative Dental Exams & Cleanings San Mateo | Aloha Dental',
  description: 'Experience relationship-first dental wellness in San Mateo. Dr. Farah Bennett provides gentle, comprehensive cleanings and exams for individuals and families',
  keywords: 'Dental Cleaning San Mateo, Family Dentist 94401, Preventative Dentistry, Teeth Cleaning, Dr. Farah Bennett, Gentle Dentist San Mateo',
}

export default function CleaningsPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Foundational Wellness: Exams and Cleanings at Aloha Dental Group",
    "description": "Comprehensive preventative dental care focusing on long-term oral health and relationship-based patient care.",
    "medicalSpecialty": "Preventative Dentistry",
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
      q: "How often should my family have dental cleanings",
      a: "For most patients, we recommend a professional cleaning and exam every six months. This allows us to catch potential issues early and maintain the integrity of your natural smile"
    },
    {
      q: "What makes an exam at Aloha Dental different",
      a: "Beyond the clinical check, Dr. Bennett focuses on building a relationship with you. We use high-definition digital imaging to show you what we see, making you a partner in your own oral health journey"
    },
    {
      q: "Are these visits suitable for children",
      a: "Absolutely. We love seeing families. Our goal is to help children gain confidence at the dentist from an early age, ensuring they grow up with a positive association with oral healthcare"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Vibrant Lagoon Green Gradient */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#87BC4E]">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg opacity-90">Family Wellness & Prevention</span>
          <h1 className="hero-heading">Foundational Care</h1>
          <p className="hero-subtext">Relationship-first dentistry to preserve your natural smile for life</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#87BC4E] pl-6">
              Wellness Built <br/>on Trust
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                The secret to a lifetime of healthy smiles isn't complex surgery—it's consistent, high-quality prevention. At Aloha Dental Group, we’ve reimagined the "standard" checkup as a foundational wellness ritual.
              </p>
              <p>
                <strong>Dr. Farah Bennett</strong> believes that clinical excellence starts with a conversation. By focusing on relationship-building and open communication, she helps her patients gain the confidence to take charge of their oral health. Our goal is for you to leave our San Mateo office not just with clean teeth, but with a renewed sense of well-being.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Enjoy Your Visit</h3>
                <p className="text-sm">
                  Can a dentist visit be enjoyable? We think so. By combining a gentle touch with a relaxing, island-inspired environment, we eliminate the "clinical" stress of traditional dental offices. Whether it's your first visit in years or a routine checkup, you are always welcomed with the Aloha spirit.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-emerald-50 p-10 rounded-[3rem] sticky top-44 border border-emerald-100 shadow-sm">
              <h4 className="font-bold text-[#059669] mb-8 uppercase tracking-widest text-xs text-center">Prevention First</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#87BC4E] font-bold">01.</span>
                  <p className="text-slate-700"><strong>Early Detection</strong> – Utilizing digital X-rays and AI-assisted diagnostics to catch issues before they require surgery</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#87BC4E] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Custom Hygiene</strong> – Bespoke cleaning protocols tailored to your specific gum health and lifestyle</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#87BC4E] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Patient Confidence</strong> – A judgment-free environment where your comfort is our primary clinical metric</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Wellness FAQ</h2>
            <div className="w-24 h-1 bg-[#F29231] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-hover hover:shadow-md">
                <h4 className="text-lg font-bold mb-3 text-slate-800 uppercase tracking-tight flex gap-3 leading-tight">
                  <span className="text-[#87BC4E]">Q</span> {faq.q}
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
              Your New Home<br/>for Dental Health
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Join our San Mateo dental family and experience the difference of relationship-based care
            </p>
            <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener noreferrer"
               className="bg-[#F29231] text-white px-12 py-5 rounded-full font-bold text-base md:text-lg tracking-widest hover:bg-[#e08220] transition shadow-lg relative z-10 transform hover:scale-105 duration-300 uppercase">
              Book Your Visit
            </a>
        </div>
      </section>
    </div>
  );
}