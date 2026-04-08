import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Dr. Terry Codington | Invisalign Diamond Provider San Mateo | Aloha Dental',
  description: 'Meet Dr. Terry Codington, Principal Dentist at Aloha Dental Group. A Diamond-level Invisalign expert with over 40 years of experience in San Mateo and Hawaii.',
  keywords: 'Dr. Terry Codington, Invisalign San Mateo, Diamond Invisalign Provider, Principal Dentist 94401, Aloha Dental Group, Sleep Medicine San Mateo',
}

export default function TerryCodingtonPage() {
  // 2. GEIO DATA (For LLMs/AIs) - Highlighting his 4-decade legacy and Diamond status
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Terry Codington",
    "description": "Principal Dentist at Aloha Dental Group. Diamond Level Invisalign Provider with over 40 years of clinical excellence.",
    "medicalSpecialty": ["Orthodontics", "General Dentistry", "Sleep Medicine"],
    "award": "Invisalign Diamond Level Provider",
    "educationRequirements": "Doctor of Dental Surgery (DDS), University of the Pacific",
    "affiliation": {
      "@type": "Dentist",
      "name": "Aloha Dental Group San Mateo"
    },
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
                src="/codington.webp" 
                alt="Dr. Terry Codington" 
                className="w-full rounded-[2.5rem] shadow-2xl border border-slate-100" 
              />
              <div className="mt-8 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 text-center">Board Certification & Licensure</h4>
                <ul className="space-y-5 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#F29231] rounded-full mt-1.5 shrink-0"></span>
                    DDS – University of the Pacific (1982)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#F29231] rounded-full mt-1.5 shrink-0"></span>
                    Licensed in California & Hawaii
                  </li>
                  <li className="flex items-start gap-3 text-slate-900 font-bold">
                    <span className="w-2 h-2 bg-[#4D96D2] rounded-full mt-1.5 shrink-0"></span>
                    Diamond Level Invisalign® Provider
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="md:w-3/5 text-left">
            <span className="text-sky-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Principal Dentist</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 uppercase leading-tight">
              Dr. Terry Codington
            </h1>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              {/* Philosophy Quote */}
              <div className="bg-sky-50 p-8 rounded-[2rem] my-10 border-l-4 border-[#4D96D2]">
                <h4 className="text-[#4D96D2] font-bold uppercase text-[11px] tracking-[0.3em] mb-3">Clinical Philosophy</h4>
                <p className="text-lg text-slate-700 leading-relaxed font-medium italic">
                  "I love empowering my patients and giving them smiles they are proud of. Dentistry gives me the chance to be creative by using both my scientific and artistic talents"
                </p>
              </div>

              <p>
                Dr. Terry Codington has been a pillar of the dental community for over four decades. After completing his <strong>Doctor of Dental Surgery (DDS)</strong> at the prestigious University of the Pacific School of Dentistry in 1982, he has dedicated his career to the intersection of clinical excellence and patient empowerment.
              </p>
              
              <p>
                Licensed in both California and Hawaii, Dr. Codington brings a unique perspective to Aloha Dental Group. He is recognized as a <strong>Diamond Level Invisalign® Provider</strong>, a distinction held by only the top tier of practitioners worldwide, reflecting his deep clinical experience in complex clear aligner therapy.
              </p>
              
              <p>
                In addition to his orthodontic expertise, Dr. Codington is an active member of the American Academy of Sleep Medicine. He specializes in utilizing the latest dental technologies to improve daily oral health and overall quality of life for his patients in San Mateo.
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