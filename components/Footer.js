import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/logo-wide.svg" 
              alt="Aloha Dental Group" 
              className="h-12 md:h-16 w-auto mb-8" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Specialist excellence and island-inspired care in the heart of San Mateo.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-[#F29231] transition">Home</Link></li>
              <li><Link href="/doctors" className="hover:text-[#F29231] transition">Meet the Team</Link></li>
              <li><Link href="/services" className="hover:text-[#F29231] transition">Services</Link></li>
              <li>
                <a href="https://app.nexhealth.com/appt/aloha-dental-group?lid=344703" target="_blank" rel="noopener noreferrer" className="text-[#F29231] font-bold hover:underline">
                  Book Online
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Contact Info</h4>
            <ul className="space-y-6 text-slate-400 text-sm font-medium">
              <li>
                <span className="block text-[9px] uppercase text-slate-500 mb-1">Text Us</span>
                <a href="sms:+16502001927" className="text-[#F29231] transition font-bold text-lg hover:text-white">
                  (650) 200-1927
                </a>
              </li>
              <li>
                <span className="block text-[9px] uppercase text-slate-500 mb-1">Call Us</span>
                <a href="tel:6507725642" className="hover:text-white transition font-bold text-lg">
                  (650) 772-5642
                </a>
              </li>
              <li>
                <span className="block text-[9px] uppercase text-slate-500 mb-1">Visit</span>
                424 N. San Mateo Drive<br />San Mateo, CA 94401
              </li>
            </ul>
          </div>

          {/* Column 4: Patient Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 uppercase tracking-[0.2em]">Patient Hours</h4>
            <ul className="space-y-3 text-slate-400 text-[11px]">
              <li className="flex justify-between border-b border-slate-800 pb-2 uppercase">
                <span>Mon – Wed</span>
                <span>8:00am – 6:00pm</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2 uppercase">
                <span>Thu – Sat*</span>
                <span>8:00am – 6:00pm</span>
              </li>
              <li className="text-[10px] italic mt-2 text-[#87BC4E] uppercase tracking-widest">
                *By Appointment Only
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-widest text-slate-500 font-medium">
          <p>&copy; {currentYear} Aloha Dental Group San Mateo. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;