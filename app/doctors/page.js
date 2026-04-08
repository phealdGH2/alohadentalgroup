import Link from 'next/link';

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Farah Bennett",
      slug: "farahbennett",
      image: "/bennett.jpeg",
      title: "Advanced Aesthetics & Laser",
      desc: "Specializing in modern aesthetic transformations using Fotona Laser technology"
    },
    {
      name: "Dr. Terry Codington",
      slug: "terrycodington",
      image: "/codington.webp",
      title: "Invisalign® Clinical Expert",
      desc: "A renowned leader in clear aligner therapy with over 40 years of excellence"
    },
    {
      name: "Dr. Mark Abramson",
      slug: "markabramson",
      image: "/abramson.webp",
      title: "TMJ & Sleep Medicine Specialist",
      desc: "Inventor of the OASYS Oral Lift™ and world-renowned specialist in craniofacial pain"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HEADER SPACING & TITLE (Synchronized Size) */}
      <section className="pt-12 md:pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter uppercase mb-4 leading-tight">
            Our Specialist Team
          </h1>

          <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Combining decades of experience with the latest in dental innovation
          </p>

          {/* 2. DOCTORS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            {doctors.map((doc) => (
              <div key={doc.slug} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col text-left group">
                <div className="overflow-hidden aspect-[4/5]">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1 uppercase tracking-tight">
                    {doc.name}
                  </h2>
                  <p className="text-[#4D96D2] font-bold text-[10px] uppercase tracking-widest mb-6">
                    {doc.title}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {doc.desc}
                  </p>
                  <Link 
                    href={`/doctors/${doc.slug}`} 
                    className="text-[#F29231] font-bold text-[11px] uppercase tracking-widest hover:underline decoration-2 underline-offset-8"
                  >
                    Full Biography &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOOTER CTA */}
      <section className="py-24 bg-white text-center px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F29231]/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase leading-tight relative z-10 text-white">
              Expert Care You Can Trust
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl font-medium relative z-10">
              Our doctors work collaboratively to ensure you receive the most advanced treatment available today
            </p>
            <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener noreferrer"
               className="bg-[#F29231] text-white px-16 py-6 rounded-full font-bold text-xl uppercase tracking-widest hover:bg-[#e08220] transition inline-block shadow-xl relative z-10">
              Book a Consultation
            </a>
        </div>
      </section>
    </div>
  );
}