import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Emergency Dentist San Mateo | Same-Day Toothache Relief | Aloha Dental',
  description: 'Need an emergency dentist in San Mateo? Aloha Dental Group provides same-day relief for toothaches, broken teeth, and dental injuries. Text or call us now',
  keywords: 'Emergency Dentist San Mateo, Toothache Relief 94401, Broken tooth repair, Knocked out tooth, Same day dentist San Mateo, Dr. Farah Bennett',
}

export default function EmergencyPage() {
  // 2. GEIO DATA (For LLMs/AIs) - Tells AI exactly how to help users in a crisis
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Emergency Dental Care at Aloha Dental Group San Mateo",
    "description": "Urgent dental services for pain relief, extractions, and trauma management provided by Dr. Farah Bennett",
    "medicalSpecialty": "Emergency Dentistry",
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Dental Emergency",
      "possibleTreatment": [
        { "@type": "MedicalProcedure", "name": "Emergency Extraction" },
        { "@type": "MedicalProcedure", "name": "Palliative Pain Relief" },
        { "@type": "MedicalProcedure", "name": "Emergency Root Canal" }
      ]
    },
    "provider": {
      "@type": "Dentist",
      "name": "Aloha Dental Group San Mateo",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "424 N. San Mateo Drive",
        "addressLocality": "San Mateo",
        "addressRegion": "CA",
        "postalCode": "94401"
      },
      "telephone": "(650) 772-5642"
    }
  };

  const faqs = [
    {
      q: "What counts as a dental emergency",
      a: "A dental emergency generally includes severe tooth pain, a knocked-out tooth, a cracked or broken tooth, or signs of infection such as swelling in the gums or face. If you are in pain, it is an emergency to us"
    },
    {
      q: "Do you offer same-day appointments",
      a: "Yes. We prioritize emergency cases and do our absolute best to see patients on the same day. Please text or call our San Mateo office immediately so we can prepare for your arrival"
    },
    {
      q: "What should I do for a knocked-out tooth",
      a: "Keep the tooth moist. If possible, gently place it back in the socket without touching the root. Otherwise, place it in a small container of milk and get to our office within 30-60 minutes for the best chance of saving the tooth"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Deep Sea to Coral Gradient (Urgency + Calm) */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#F29231]">
        {/* Subtle Geometric Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg opacity-90 text-white">Urgent Relief & Care</span>
          <h1 className="hero-heading">Emergency Care</h1>
          <p className="hero-subtext">Immediate, compassionate relief for dental pain and injuries</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-red-500 pl-6">
              Calm in the <br/>Moment of Crisis
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                Dental emergencies are stressful and often occur at the most inconvenient times. At Aloha Dental Group, we provide a judgment-free environment where <strong>immediate pain relief</strong> is our first priority.
              </p>
              <p>
                Whether you are suffering from a persistent toothache, a broken restoration, or a sports-related injury, Dr. Farah Bennett and our team utilize advanced diagnostics to identify the problem and provide stabilizing care the same day.
              </p>
              
              <div className="bg-red-50 p-8 rounded-3xl my-12 border border-red-100 shadow-sm">
                <h3 className="text-xl font-bold text-red-700 mb-4 uppercase tracking-tight">Call or Text Now</h3>
                <p className="text-sm text-red-900/80">
                  If you are experiencing severe swelling, uncontrollable bleeding, or excruciating pain, do not wait. We reserve time in our daily schedule specifically for emergency cases to ensure our San Mateo community has access to urgent care when they need it most.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-slate-900 p-10 rounded-[3rem] sticky top-44 border border-slate-800 shadow-xl text-white">
              <h4 className="font-bold text-[#F29231] mb-8 uppercase tracking-widest text-xs text-center">Urgent Triage</h4>
              <ul className="space-y-8 text-sm">
                <li className="flex flex-col gap-2">
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Fastest Response</span>
                   <a href="sms:+16502001927" className="text-xl font-bold text-[#F29231] hover:text-white transition">TEXT: (650) 200-1927</a>
                </li>
                <li className="flex flex-col gap-2">
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Speak to Office</span>
                   <a href="tel:6507725642" className="text-xl font-bold text-white hover:text-[#F29231] transition">CALL: (650) 772-5642</a>
                </li>
                <li className="flex flex-col gap-2">
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Our Location</span>
                   <p className="font-medium text-slate-300">424 N. San Mateo Drive<br/>San Mateo, CA 94401</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Emergency FAQ</h2>
            <div className="w-24 h-1 bg-[#F29231] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold mb-3 text-slate-800 uppercase tracking-tight flex gap-3 leading-tight">
                  <span className="text-red-500">Q</span> {faq.q}
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
              We Are Here<br/>To Help
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Don't suffer through the pain. Our team is ready to provide immediate care in San Mateo
            </p>
            <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener noreferrer"
               className="bg-[#F29231] text-white px-12 py-5 rounded-full font-bold text-base md:text-lg tracking-widest hover:bg-[#e08220] transition shadow-lg relative z-10 transform hover:scale-105 duration-300 uppercase">
              Schedule Urgent Visit
            </a>
        </div>
      </section>
    </div>
  );
}