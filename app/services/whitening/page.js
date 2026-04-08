import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Professional Teeth Whitening San Mateo | iTero Digital Trays | Aloha Dental',
  description: 'Brighten your smile with professional teeth whitening in San Mateo. We use iTero® 3D scanning for custom-fit whitening trays—no messy putty impressions required',
  keywords: 'Teeth Whitening San Mateo, Professional Teeth Whitening, iTero scanner whitening, laser teeth whitening, take-home whitening kits, Dr. Farah Bennett',
}

export default function WhiteningPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Professional Teeth Whitening at Aloha Dental Group San Mateo",
    "description": "Professional-grade teeth whitening treatments featuring iTero digital 3D impressions for bespoke whitening trays",
    "medicalSpecialty": "Cosmetic Dentistry",
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
      q: "How does the iTero® scanner improve whitening",
      a: "Traditional whitening trays require biting into a mouthful of cold, uncomfortable putty. We use the iTero® 3D scanner to create a perfect digital map of your teeth, ensuring your custom trays fit more precisely and provide more even whitening results"
    },
    {
      q: "Is professional whitening safe for sensitive teeth",
      a: "Yes. Unlike over-the-counter kits, our professional-grade whitening is overseen by Dr. Bennett. We can adjust the concentration of the treatment and provide desensitizing protocols to ensure a comfortable experience"
    },
    {
      q: "How many shades whiter will my teeth get",
      a: "Most patients see a transformation of 5 to 8 shades in a single treatment cycle. Because our trays are custom-molded to your digital scan, the whitening agent stays exactly where it needs to be for maximum impact"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Vibrant Sky Blue Gradient */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0EA5E9] via-[#38bdf8] to-[#4D96D2]">
        {/* Subtle Geometric Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg opacity-90">Artistic Aesthetic Dentistry</span>
          <h1 className="hero-heading">Professional Whitening</h1>
          <p className="hero-subtext">Custom-fitted brilliance with zero-mess digital impressions</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#4D96D2] pl-6">
              Brilliance Without <br/>the Mess
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                A bright, white smile is often the first thing people notice about you. At Aloha Dental Group, we offer professional-grade whitening solutions that far exceed the results of over-the-counter products.
              </p>
              
              <div className="bg-sky-50 p-8 rounded-3xl my-12 border border-sky-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0EA5E9] mb-4 uppercase tracking-tight">The iTero® Digital Advantage</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We have eliminated the "putty and trays" of the past. Using our <strong>iTero® 3D Digital Scanner</strong>, we capture a microscopic map of your teeth in minutes. This digital file is used to print bespoke whitening trays that fit your teeth with vacuum-sealed precision—meaning less irritation for your gums and a faster, more even brightening process.
                </p>
              </div>

              <p>
                Whether you are preparing for a wedding, a professional milestone, or simply want to refresh your look, Dr. Farah Bennett provides tailored whitening plans that protect your enamel while delivering high-impact results.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-sky-50 p-10 rounded-[3rem] sticky top-44 border border-sky-100 shadow-sm">
              <h4 className="font-bold text-[#0EA5E9] mb-6 uppercase tracking-widest text-xs text-center">Why Professional?</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">01.</span>
                  <p className="text-slate-700"><strong>Digital Precision</strong> – Perfect fit ensures the gel touches only your teeth, not your gums</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Superior Strength</strong> – Higher concentration of active ingredients than retail kits</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Enamel Safe</strong> – Professionally formulated to prevent damage to your natural tooth structure</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Whitening FAQ</h2>
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
              Brighten Your<br/>Smile Today
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your 3D digital scan and consultation for professional whitening in San Mateo
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