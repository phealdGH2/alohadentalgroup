import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'TMJ & Sleep Apnea Therapy San Mateo | Aloha Dental Group',
  description: 'Custom oral appliance therapy for Sleep Apnea and TMJ relief in San Mateo. Discover non-invasive CPAP alternatives with Dr. Farah Bennett',
  keywords: 'Sleep Apnea San Mateo, TMJ Treatment San Mateo, CPAP Alternative, Oral Appliance Therapy, Jaw Pain Relief, Dr. Farah Bennett',
}

export default function TMJSleepPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "TMJ and Sleep Apnea Therapy at Aloha Dental Group",
    "description": "Specialized treatment for temporomandibular joint disorders and obstructive sleep apnea using custom oral appliances",
    "medicalSpecialty": ["Sleep Medicine", "Neuromuscular Dentistry"],
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
      q: "What is Oral Appliance Therapy (OAT)",
      a: "OAT involves a custom-fitted dental device worn only during sleep. It supports the jaw in a forward position to help maintain an open airway, serving as a highly effective and comfortable alternative to CPAP machines"
    },
    {
      q: "How does the jaw relate to sleep apnea",
      a: "Often, the tongue and soft tissues collapse into the airway because the jaw is positioned too far back. By treating the alignment of the TMJ (jaw joint), we can often resolve both chronic pain and breathing obstructions simultaneously"
    },
    {
      q: "Is this treatment covered by medical insurance",
      a: "Yes, because Sleep Apnea is a medical condition, Oral Appliance Therapy is frequently covered by medical insurance rather than just dental insurance. Our team will help you maximize your benefits"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Pacific Slate Gradient (Unique Color) */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569]">
        {/* Subtle Geometric Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-[#F29231] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg text-white">Airway & Neuromuscular Health</span>
          <h1 className="hero-heading">TMJ & Sleep Medicine</h1>
          <p className="hero-subtext">Advanced non-invasive solutions for jaw pain and restful sleep</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#4D96D2] pl-6">
              Breathe Better <br/>Live Pain Free
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                At Aloha Dental Group, we look beyond your teeth to the foundational health of your airway and jaw joints. <strong>Obstructive Sleep Apnea (OSA)</strong> and <strong>TMJ disorders</strong> are often two sides of the same coin—stemming from improper jaw alignment and restricted breathing.
              </p>
              <p>
                Dr. Farah Bennett utilizes advanced diagnostic protocols to identify the root cause of your symptoms. Whether you are suffering from morning headaches and jaw clicking or are struggling to tolerate a CPAP machine, our custom <strong>Oral Appliance Therapy</strong> offers a silent, comfortable, and portable solution.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">The Foundation of Excellence</h3>
                <p className="text-sm">
                  Our practice utilizes therapeutic protocols pioneered by <strong>Dr. Mark Abramson</strong>, a world-renowned leader in craniofacial pain and the inventor of the OASYS Oral Lift™. Dr. Bennett continues this legacy, combining these proven methods with modern digital design for superior patient results.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-sky-50 p-10 rounded-[3rem] sticky top-44 border border-sky-100 shadow-sm">
              <h4 className="font-bold text-[#4D96D2] mb-6 uppercase tracking-widest text-xs text-center">Treatment Focus</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">01.</span>
                  <p className="text-slate-700"><strong>CPAP Alternative</strong> – Custom appliances for better compliance and comfort</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Pain Resolution</strong> – Targeting the source of TMJ, neck pain, and headaches</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Digital Precision</strong> – No messy impressions; 100% digital airway mapping</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Sleep & TMJ FAQ</h2>
            <div className="w-24 h-1 bg-[#F29231] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-hover hover:shadow-md">
                <h4 className="text-lg font-bold mb-3 text-slate-800 uppercase tracking-tight flex gap-3 leading-tight">
                  <span className="text-[#F29231]">Q</span> {faq.q}
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
              Breathe Deep<br/>Wake Refreshed
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your TMJ or Sleep evaluation at our San Mateo specialist center
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