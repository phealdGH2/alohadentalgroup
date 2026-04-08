import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Dental Implants San Mateo | Permanent Tooth Replacement | Aloha Dental',
  description: 'Restore your smile with permanent, natural-looking dental implants at Aloha Dental Group in San Mateo. Advanced 3D imaging and specialist surgical precision.',
  keywords: 'Dental Implants San Mateo, tooth replacement, missing teeth solution, dental implant dentist 94401, Dr. Farah Bennett, Dr. Terry Codington',
}

export default function ImplantsPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Dental Implant Restoration at Aloha Dental Group San Mateo",
    "description": "Comprehensive dental implant solutions including surgical placement and custom porcelain restoration.",
    "medicalSpecialty": ["Implantology", "Restorative Dentistry"],
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
      q: "What are the benefits of dental implants",
      a: "Dental implants are the only restoration that mimics the natural root of a tooth. They prevent bone loss in the jaw, allow for normal eating and speech, and provide a permanent solution that can last a lifetime with proper care"
    },
    {
      q: "How long does the implant process take",
      a: "The timeline varies based on your individual needs. After the initial placement, a healing period of 3-6 months is typical to allow the implant to fuse with the bone (osseointegration), followed by the placement of your custom porcelain crown"
    },
    {
      q: "Am I a candidate for dental implants",
      a: "Most healthy adults with sufficient jawbone density are excellent candidates. At your consultation, Dr. Bennett will use 3D digital imaging to evaluate your bone structure and create a precise surgical plan"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Palm Green Gradient */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4d7c0f] via-[#65a30d] to-[#87BC4E]">
        {/* Subtle Geometric Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg opacity-80">Permanent Restorative Care</span>
          <h1 className="hero-heading">Dental Implants</h1>
          <p className="hero-subtext">The natural-feeling gold standard for permanent tooth replacement</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#87BC4E] pl-6">
              A Permanent <br/>Solution for Life
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                Missing teeth can impact more than just your confidence—they can lead to shifting teeth, jawbone deterioration, and impaired function. At Aloha Dental Group, we provide comprehensive **Implant Restoration** that looks, feels, and functions exactly like your natural teeth.
              </p>
              <p>
                A dental implant is a small biocompatible titanium post that acts as an artificial tooth root. Dr. Farah Bennett utilizes advanced **3D CBCT imaging** to ensure surgical precision, allowing for optimal placement and long-term success.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Bone Health & Longevity</h3>
                <p className="text-sm">
                  Unlike bridges or dentures, dental implants actually stimulate the jawbone, preventing the "sunken" appearance that often follows tooth loss. This makes them a vital investment in your long-term facial structure and oral health.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-[#f7fee7] p-10 rounded-[3rem] sticky top-44 border border-[#d9f99d] shadow-sm">
              <h4 className="font-bold text-[#4d7c0f] mb-6 uppercase tracking-widest text-xs text-center">Implant Benefits</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#87BC4E] font-bold">01.</span>
                  <p className="text-slate-700"><strong>Eat with Confidence</strong> – No slipping or discomfort when enjoying your favorite foods</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#87BC4E] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Natural Aesthetics</strong> – Custom-shaded porcelain crowns that match your surrounding teeth</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#87BC4E] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Lifelong Value</strong> – With proper hygiene, implants are designed to be a one-time solution</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Implant FAQ</h2>
            <div className="w-24 h-1 bg-[#87BC4E] mx-auto rounded-full"></div>
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
              Restore Your<br/>Smile Permanently
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your 3D implant consultation at our San Mateo specialist center
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