import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Dental Crowns & Bridges San Mateo | Porcelain Restorations | Aloha Dental',
  description: 'Restore broken or missing teeth with custom porcelain crowns and bridges in San Mateo. Precision fit using iTero® 3D scanning for a natural, strong smile.',
  keywords: 'Dental Crowns San Mateo, Dental Bridges 94401, Porcelain tooth cap, Broken tooth repair, Missing teeth solution, Dr. Farah Bennett',
}

export default function CrownsBridgesPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Crowns and Bridges at Aloha Dental Group San Mateo",
    "description": "High-end restorative solutions using digital impressions and premium porcelain to restore tooth structure and function.",
    "medicalSpecialty": "Restorative Dentistry",
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
      q: "What is the difference between a crown and a bridge",
      a: "A crown (or cap) is used to entirely cover a damaged or weakened tooth, providing strength and protection. A bridge is used to fill the space created by one or more missing teeth, using the surrounding natural teeth as anchors"
    },
    {
      q: "Will my crown look like a natural tooth",
      a: "Absolutely. We use premium, metal-free porcelain that mimics the light-reflecting qualities of natural enamel. Each restoration is custom-shaded to blend seamlessly with your surrounding teeth"
    },
    {
      q: "How many appointments are required",
      a: "Typically, the process involves two visits. The first to scan and prepare the tooth, and the second to bond your permanent, custom-crafted restoration into place. Our digital iTero workflow ensures the process is fast and precise"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Oceanic Cerulean Gradient */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#075985] via-[#0284c7] to-[#4D96D2]">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg opacity-80">Advanced Restorative Dentistry</span>
          <h1 className="hero-heading">Crowns & Bridges</h1>
          <p className="hero-subtext">Restoring structural integrity and natural beauty to your smile</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#0284c7] pl-6">
              Protect & <br/>Perfect
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                When a tooth is severely weakened by decay, fracture, or wear, a standard filling may not be enough to ensure long-term survival. At Aloha Dental Group, we utilize custom-crafted <strong>Porcelain Crowns</strong> to reinforce and protect your natural teeth.
              </p>
              <p>
                For patients with missing teeth, <strong>Dental Bridges</strong> offer a stable, non-removable solution that prevents surrounding teeth from shifting and restores your ability to chew and speak with confidence. 
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">The Digital Precision Advantage</h3>
                <p className="text-sm">
                  We have moved beyond the "goopy" impression trays of the past. Using our <strong>iTero® 3D Digital Scanner</strong>, Dr. Farah Bennett captures a precise map of your bite. This digital data allows for restorations with microscopic accuracy, resulting in a more comfortable fit and a longer-lasting result.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-sky-50 p-10 rounded-[3rem] sticky top-44 border border-sky-100 shadow-sm">
              <h4 className="font-bold text-[#0284c7] mb-6 uppercase tracking-widest text-xs text-center">Restoration Goals</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">01.</span>
                  <p className="text-slate-700"><strong>Structural Support</strong> – Prevents cracked or weakened teeth from fracturing further</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Aesthetic Seamlessness</strong> – All-porcelain materials ensure no dark lines at the gumline</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4D96D2] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Bite Alignment</strong> – Restores proper function and prevents TMJ issues related to missing teeth</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Restoration FAQ</h2>
            <div className="w-24 h-1 bg-[#F29231] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-hover hover:shadow-md">
                <h4 className="text-lg font-bold mb-3 text-slate-800 uppercase tracking-tight flex gap-3 leading-tight">
                  <span className="text-[#0284c7]">Q</span> {faq.q}
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
              A Stronger,<br/>Brighter Smile
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your restorative consultation and 3D digital scan at our San Mateo office
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