import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Dr. Mark Abramson | TMJ & Sleep Medicine Specialist San Mateo',
  description: 'Meet Dr. Mark Abramson, developer of the FDA-approved OASYS Oral Lift™ and specialist in TMJ and sleep disorder therapy at Aloha Dental Group in San Mateo.',
  keywords: 'Dr. Mark Abramson, TMJ Specialist San Mateo, Sleep Apnea Dentist 94401, OASYS Oral Lift, Craniofacial Pain Specialist San Mateo',
}

export default function MarkAbramsonPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Mark Abramson",
    "description": "World-renowned specialist in TMJ therapy, Craniofacial Pain, and Dental Sleep Medicine. Inventor of the OASYS Oral Lift™.",
    "medicalSpecialty": ["Sleep Medicine", "TMJ Therapy", "Craniofacial Pain"],
    "provider": {
      "@type": "Dentist",
      "name": "Aloha Dental Group San Mateo"
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Column: Image & Credentials */}
          <div className="md:w-2/5">
            <div className="sticky top-44">
              <img 
                src="/abramson.webp" 
                alt="Dr. Mark Abramson" 
                className="w-full rounded-[2.5rem] shadow-2xl border border-slate-100" 
              />
              <div className="mt-8 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 text-center">Specialist Credentials</h4>
                <ul className="space-y-5 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4D96D2] rounded-full mt-1.5 shrink-0"></span>
                    Diplomate: American Academy of Dental Sleep Medicine
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4D96D2] rounded-full mt-1.5 shrink-0"></span>
                    Diplomate: American Academy of Craniofacial Pain
                  </li>
                  <li className="flex items-start gap-3 text-slate-900 font-bold">
                    <span className="w-2 h-2 bg-[#F29231] rounded-full mt-1.5 shrink-0"></span>
                    Inventor of the OASYS Oral Lift™
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="md:w-3/5 text-left">
            <span className="text-sky-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Specialist Consultant</span>
            {/* FONT SIZE REDUCED to match Dr. Bennett's page */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 uppercase leading-tight">
              Dr. Mark Abramson
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>
                Dr. Mark Abramson is a world-renowned specialist in the fields of <strong>TMJ therapy, Craniofacial Pain, and Dental Sleep Medicine</strong>. His presence at Aloha Dental Group provides our clinical team with direct access to decades of pioneering research and diagnostic expertise.
              </p>
              
              {/* INNOVATION BOX - WHITE TEXT RESTORED */}
              <div className="bg-[#0f172a] p-10 rounded-[2.5rem] my-12 shadow-2xl relative overflow-hidden border border-white/5">
                <h4 className="text-[#87BC4E] font-bold uppercase text-[11px] tracking-[0.3em] mb-4 relative z-10">Clinical Innovation</h4>
                <p className="text-lg text-white opacity-100 leading-relaxed relative z-10 font-medium">
                  Dr. Abramson is the developer of the <strong>OASYS Oral Lift™</strong>, the first dental device to gain FDA approval for treating both snoring and sleep apnea by specifically addressing the nasal airway.
                </p>
              </div>

              <p>
                As a Diplomate of the American Board of Dental Sleep Medicine and the American Academy of Craniofacial Pain, Dr. Abramson has spent his career developing non-invasive, therapeutic solutions for complex pain and sleep-disordered breathing.
              </p>
              
              <p>
                At Aloha Dental Group, Dr. Abramson serves in a <strong>specialist support role</strong>, ensuring that our patients benefit from the most advanced diagnostic protocols and therapeutic technologies available in modern dental medicine today.
              </p>
            </div>

            <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener noreferrer"
               className="mt-12 bg-[#F29231] text-white px-12 py-5 rounded-full font-bold text-base md:text-xl tracking-widest hover:bg-[#e08220] transition shadow-xl inline-block uppercase active:scale-95">
              Book Appointment Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}