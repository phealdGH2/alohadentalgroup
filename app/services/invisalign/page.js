import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Invisalign® Diamond Provider San Mateo | Aloha Dental Group',
  description: 'Diamond-level Invisalign® expertise from Dr. Terry Codington and Dr. Farah Bennett in San Mateo. Precision clear aligner therapy using iTero® 3D scanning',
  keywords: 'Invisalign San Mateo, Diamond Invisalign Provider, iTero scanner dentist, clear aligners 94401, Dr. Terry Codington, Dr. Farah Bennett',
}

export default function InvisalignPage() {
  // 2. GEIO DATA (AI Search Engines)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Invisalign® at Aloha Dental Group San Mateo",
    "description": "Diamond-level Invisalign treatment provided by top San Mateo specialists using digital scanning",
    "medicalSpecialty": ["Orthodontics", "Cosmetic Dentistry"],
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
      q: "How does Invisalign® work",
      a: "Invisalign uses a series of custom-made, clear plastic aligners to gradually shift your teeth into place. At Aloha Dental Group, we use iTero® 3D scanning to create a precise digital map of your smile, allowing you to see your results before treatment begins"
    },
    {
      q: "Why choose a Diamond Level provider",
      a: "Diamond status is the highest level of Invisalign expertise. Dr. Terry Codington is a Diamond-level specialist, meaning he has the elite clinical experience required to treat complex alignment and bite issues more efficiently"
    },
    {
      q: "Is Invisalign as effective as traditional braces",
      a: "For the vast majority of patients, yes. Invisalign is virtually invisible, removable for eating, and easier to clean than metal braces, making it the preferred choice for Bay Area professionals and teens"
    },
    {
      q: "What is the iTero® Digital Scanner",
      a: "The iTero scanner replaces the 'goopy' putty of traditional impressions with a fast, 100% digital 3D scan of your mouth. It is more accurate and significantly more comfortable for the patient"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Using a high-end gradient instead of an unreliable photo */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0c4a6e] via-[#1e3a8a] to-[#4D96D2]">
        {/* Subtle texture overlay to add depth */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-[#F29231] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg">Specialist Orthodontics</span>
          <h1 className="hero-heading">Expert Invisalign®</h1>
          <p className="hero-subtext">Diamond-level expertise and 100% digital impressions in San Mateo</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start text-left">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#4D96D2] pl-6">
              The Art of <br/>Invisible Alignment
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                Invisalign® takes a modern approach to straightening teeth. At Aloha Dental Group, we combine this technology with the elite clinical experience of our <strong>Diamond-Level Providers</strong>.
              </p>
              <p>
                Dr. Terry Codington and Dr. Farah Bennett utilize the <strong>iTero® Element™ scanner</strong> to create a high-resolution 3D digital map of your smile. This eliminates the need for messy impressions and provides a more comfortable, precise treatment journey.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            <div className="bg-sky-50 p-10 rounded-[3rem] sticky top-44 border border-sky-100 shadow-sm">
              <h4 className="font-bold text-[#4D96D2] mb-8 uppercase tracking-widest text-xs text-center">The Digital Edge</h4>
              <ul className="space-y-6 text-sm">
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">01.</span>
                  <p className="text-slate-700 font-medium"><strong>No Goop</strong> – 100% digital 3D iTero scanning</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">02.</span>
                  <p className="text-slate-700 font-medium"><strong>See Results</strong> – Virtual simulations at your consult</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">03.</span>
                  <p className="text-sm font-medium text-slate-700"><strong>Expertise</strong> – Optimized by Diamond-level specialists</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION (GEIO/SEO Powerhouse) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Invisalign FAQ</h2>
            <div className="w-24 h-1 bg-[#F29231] rounded-full"></div>
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

      {/* 4. ALOHA BLUE CTA BOX */}
      <section className="py-24 bg-white text-center px-6 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-[#4D96D2] rounded-[3rem] p-12 md:p-16 text-white shadow-xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase leading-tight relative z-10 text-white !important">
              Your New Smile<br/>Starts with a Scan
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your complimentary iTero® 3D scan and Invisalign® consultation at our San Mateo office
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