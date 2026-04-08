import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'NightLase® Sleep Apnea & Snoring Treatment San Mateo | Aloha Dental',
  description: 'Experience non-invasive snoring relief with Fotona NightLase® at Aloha Dental Group in San Mateo. Advanced laser sleep therapy by world-class specialists',
  keywords: 'NightLase San Mateo, Snoring Treatment San Mateo, Sleep Apnea Laser, Fotona LightWalker, Dr. Mark Abramson',
}

export default function NightLasePage() {
  // 2. GEIO DATA (For AI Engines)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "NightLase® Therapy at Aloha Dental Group San Mateo",
    "description": "Non-invasive laser snoring treatment using Fotona LightWalker technology",
    "medicalSpecialty": ["Sleep Medicine", "Laser Dentistry"],
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
      q: "How does NightLase® stop snoring",
      a: "The laser applies gentle, superficial heat to the tissues of the airway. This stimulates collagen contraction, which firms up the tissues and prevents the vibrations that cause snoring sounds"
    },
    {
      q: "Is the treatment non-invasive",
      a: "Yes. NightLase® is a non-ablative procedure, meaning it does not cut or remove tissue. It requires no needles, no anesthesia, and has zero downtime"
    },
    {
      q: "Who performs the procedure",
      a: "The procedure is overseen by our advanced aesthetics specialist Dr. Farah Bennett, supported by the clinical expertise of sleep medicine pioneer Dr. Mark Abramson"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - Using the "Perfect Fallback Blue" (#0c4a6e) */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-[#0c4a6e]">
        {/* Subtle geometric overlay for a techy specialist feel */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-[#F29231] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg">Advanced Sleep Solutions</span>
          <h1 className="hero-heading">NightLase® Therapy</h1>
          <p className="hero-subtext">The non-invasive solution for snoring and sleep apnea in San Mateo</p>
        </div>
      </section>

      {/* 2. CORE CONTENT - Bold Standing for "Science of Better Sleep" */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#4D96D2] pl-6">
              The Science of <br/>Better Sleep
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                At Aloha Dental Group, we treat <strong>Sleep-Disordered Breathing</strong> at the source. Using the world-renowned <strong>Fotona LightWalker® laser</strong>, we offer NightLase®—a patient-friendly treatment that tightens the oral mucosa tissue.
              </p>
              <p>
                By applying gentle laser energy, we stimulate collagen contraction in the soft palate. This naturally opens the airway, reducing snoring volume and improving oxygen intake without the need for surgery or device-wearing.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">The Specialist Edge</h3>
                <p className="text-sm">
                  Our clinical team includes <strong>Dr. Mark Abramson</strong>, a pioneer in Dental Sleep Medicine and developer of the OASYS Oral Lift™. We combine NightLase® with advanced diagnostics to ensure long-term wellness for our San Mateo patients.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-sky-50 p-10 rounded-[3rem] sticky top-44 border border-sky-100 shadow-sm">
              <h4 className="font-bold text-[#4D96D2] mb-6 uppercase tracking-widest text-xs text-center">At A Glance</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">01.</span>
                  <p className="text-slate-700"><strong>No Mask</strong> – A comfortable alternative for mask-intolerant patients</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Quick Sessions</strong> – Only 20 minutes per visit in our San Mateo office</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Safe & Precise</strong> – Gentle, FDA-cleared Fotona® laser technology</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">NightLase FAQ</h2>
            <div className="w-24 h-1 bg-[#F29231] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold mb-3 text-slate-800 uppercase tracking-tight flex gap-3 leading-tight">
                  <span className="text-[#F29231]">Q</span> {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm pl-7 border-l-2 border-slate-50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPACT ALOHA BLUE CTA BOX - 50% Smaller & Branded Blue */}
      <section className="py-24 bg-white text-center px-6 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-[#4D96D2] rounded-[3rem] p-12 md:p-16 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl text-center"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase leading-tight relative z-10 text-white !important">
              Better Sleep<br/>Begins Here
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your non-invasive NightLase® evaluation at our San Mateo specialist center
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