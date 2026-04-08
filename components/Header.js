'use client';

import Link from 'next/link';

const Header = () => {
  // Function to handle smooth scroll to top when logo is clicked on homepage
  const handleLogoClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md w-full bg-white">
      {/* 1. TOP UTILITY BAR - Priority Contact Info */}
      <div className="bg-slate-900 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 lg:gap-10 text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
          
          <a href="sms:+16502001927" className="flex items-center gap-2 text-[#F29231] hover:text-white transition">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            </svg>
            TEXT: (650) 200-1927
          </a>

          <a href="tel:6507725642" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            CALL: (650) 772-5642
          </a>

          <div className="hidden lg:flex items-center gap-6 text-slate-400">
            <span>424 N. SAN MATEO DRIVE, SAN MATEO</span>
            <span>MON–SAT (BY APPT)</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION - Increased padding for "Luxury" feel */}
      <nav className="bg-white px-6 py-4 md:py-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          
          {/* THE LOGO - Explicit large sizing */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center justify-center lg:justify-start">
            <img 
                src="/logo-wide.svg" 
                alt="Aloha Dental Group" 
                className="h-16 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* NAV LINKS & CTA */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full lg:w-auto">
            
            <div className="hidden lg:flex space-x-10 text-[13px] font-bold tracking-[0.2em] text-slate-700 uppercase">
              <Link href="/doctors" className="hover:text-sky-600 transition">The Doctors</Link>
              <Link href="/services" className="hover:text-sky-600 transition">Services</Link>
              <Link href="/#contact" className="hover:text-sky-600 transition">Contact</Link>
            </div>
            
            <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener"
               className="bg-[#F29231] text-white w-full lg:w-auto px-10 py-4 lg:py-5 rounded-full font-bold text-sm lg:text-base tracking-widest hover:bg-[#e08220] transition shadow-xl whitespace-nowrap uppercase text-center active:scale-95">
              Book Online Now
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;