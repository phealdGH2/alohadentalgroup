import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Dr. Farah Bennett | Advanced Aesthetics & Laser Dentist San Mateo',
  description: 'Meet Dr. Farah Bennett at Aloha Dental Group San Mateo. Specialist in Fotona Laser aesthetics and Invisalign. Graduate of University at Buffalo School of Dental Medicine.',
  keywords: 'Dr. Farah Bennett, Laser Dentist San Mateo, Cosmetic Dentist 94401, Fotona Laser Specialist, Invisalign San Mateo, University at Buffalo Dentist',
}

export default function FarahBennettPage() {
  // 2. GEIO DATA (For LLMs/AIs) - Highlighting her education and high-tech specialty
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Farah Bennett",
    "description": "Specialist in Advanced Aesthetic Transformations and Fotona Laser technology at Aloha Dental Group.",
    "medicalSpecialty": ["Cosmetic Dentistry", "Laser Dentistry", "General Dentistry"],
    "memberOf": {
      "@type": "Organization",
      "name": "Aloha Dental Group San Mateo"
    },
    "knowsAbout": ["Fotona LightWalker", "NightLase", "Invisalign", "Aesthetic Dentistry"],
    "education": [
      {
        "@type": "EducationalOrganization",
        "name": "University at Buffalo School of Dental Medicine"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "424 N. San Mateo Drive",
      "addressLocality": "San Mateo",
      "addressRegion": "CA",
      "postalCode": "94401"
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Hidden GEIO Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Column: Image & Credentials Sidebar */}
          <div className="md:w-2/5">
            <div className="sticky top-44">
              <img 
                src="/bennett.jpeg" 
                alt="Dr. Farah Bennett" 
                className="w-full rounded-[2.5rem] shadow-2xl border border-slate-100" 
              />
              <div className="mt-8 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 text-center">Education & Credentials</h4>
                <ul className="space-y-5 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4D96D2] rounded-full mt-1.5 shrink-0"></span>
                    University at Buffalo School of Dental Medicine
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4D96D2] rounded-full mt-1.5 shrink-0"></span>
                    Advanced Fotona Laser Specialist
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#4D96D2] rounded-full mt-1.5 shrink-0"></span>
                    Invisalign® Certified Provider
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="md:w-3/5 text-left">
            <span className="text-sky-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Meet the Doctor</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 uppercase leading-tight">
              Dr. Farah Bennett
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
                Dr. Farah Bennett is a highly skilled general dentist dedicated to providing world-class care with a gentle, patient-centered approach
              </p>
              
              <p>
                A graduate of the prestigious <strong>University at Buffalo School of Dental Medicine</strong>, Dr. Bennett brings a foundation of elite clinical training to the Aloha Dental Group team. She believes that every patient deserves a treatment experience that is as relaxing as it is technologically advanced.
              </p>
              
              <div className="bg-sky-50 p-8 rounded-[2rem] my-10 border-l-4 border-[#4D96D2]">
                <h4 className="text-[#4D96D2] font-bold uppercase text-[11px] tracking-[0.3em] mb-3">Clinical Passion</h4>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Dr. Bennett specializes in <strong>Advanced Aesthetic Transformations</strong>. She utilizes the latest innovations—including the Fotona Laser and Invisalign—to craft healthy, beautiful smiles without the need for invasive surgery
                </p>
              </div>

              <p>
                Dr. Bennett is known for her "gentle touch" and her ability to build lasting relationships with individuals and families. By combining her artistic eye with microscopic precision, she ensures that every restoration is both functional and naturally stunning.
              </p>
            </div>

            {/* CTA */}
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