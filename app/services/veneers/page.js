import Link from 'next/link';

// 1. TRADITIONAL SEO & GEO
export const metadata = {
  title: 'Porcelain Veneers San Mateo | Smile Makeover Specialist | Aloha Dental',
  description: 'Transform your smile with custom porcelain veneers at Aloha Dental Group in San Mateo. Artistic smile design by Dr. Farah Bennett for a natural, radiant look.',
  keywords: 'Porcelain Veneers San Mateo, Smile Makeover San Mateo, Cosmetic Dentist 94401, Dental Veneers, Dr. Farah Bennett, Instant Orthodontics',
}

export default function VeneersPage() {
  // 2. GEIO DATA (For LLMs/AIs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Porcelain Veneers and Smile Design at Aloha Dental Group San Mateo",
    "description": "Custom-crafted porcelain veneers designed to improve tooth shape, shade, and alignment.",
    "medicalSpecialty": ["Cosmetic Dentistry", "Prosthodontics"],
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
      q: "What can porcelain veneers fix",
      a: "Veneers are a versatile solution for a range of aesthetic concerns, including permanent staining, chipped or worn teeth, small gaps, and minor misalignments. They provide a uniform, radiant appearance"
    },
    {
      q: "How long do veneers last",
      a: "With proper care and regular hygiene visits at our San Mateo office, porcelain veneers can last 10 to 15 years or longer. Porcelain is highly resistant to staining and is incredibly durable"
    },
    {
      q: "Is the process painful",
      a: "The procedure is minimally invasive. Most patients experience little to no discomfort. We prioritize your comfort at every step, ensuring a gentle experience while we craft your new smile"
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. BRANDED HERO - Sunset Orange Gradient */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#F29231]">
        {/* Subtle Geometric Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="relative z-20 text-center px-6">
          <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block drop-shadow-lg opacity-90">Artistic Aesthetic Dentistry</span>
          <h1 className="hero-heading">Porcelain Veneers</h1>
          <p className="hero-subtext">Precision smile design for a natural and radiant transformation</p>
        </div>
      </section>

      {/* 2. CORE CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter text-slate-900 uppercase leading-tight border-l-8 border-[#F29231] pl-6">
              The Art of <br/>the Perfect Smile
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                At Aloha Dental Group, we believe every smile is a unique work of art. <strong>Porcelain Veneers</strong> offer a transformative solution for patients looking to correct imperfections and achieve a balanced, confident aesthetic.
              </p>
              <p>
                Veneers are ultra-thin, custom-crafted shells of premium dental porcelain that are bonded to the front of your teeth. Dr. Farah Bennett specializes in "Natural Aesthetics," ensuring that your veneers match the translucency and character of natural enamel for a look that is stunning yet believable.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Personalized Smile Design</h3>
                <p className="text-sm">
                  We don't believe in a "one size fits all" smile. Using digital photography and diagnostic wax-ups, we plan every detail—from the length and width of the teeth to the specific shade—to complement your facial features and personality.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-orange-50 p-10 rounded-[3rem] sticky top-44 border border-orange-100 shadow-sm">
              <h4 className="font-bold text-[#ea580c] mb-6 uppercase tracking-widest text-xs text-center">Treatment Benefits</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-[#F29231] font-bold">01.</span>
                  <p className="text-slate-700"><strong>Instant Results</strong> – Often called "instant orthodontics" for their rapid transformation</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#F29231] font-bold">02.</span>
                  <p className="text-slate-700"><strong>Stain Resistant</strong> – High-quality porcelain resists coffee, tea, and tobacco stains</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#F29231] font-bold">03.</span>
                  <p className="text-slate-700"><strong>Bespoke Design</strong> – Every veneer is hand-finished to meet your aesthetic goals</p>
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
            <h2 className="text-slate-900 mb-4 uppercase tracking-tighter">Veneers FAQ</h2>
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
              Design Your<br/>Dream Smile
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl font-medium relative z-10">
              Schedule your artistic smile consultation at our San Mateo boutique practice
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