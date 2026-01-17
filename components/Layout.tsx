
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Build', path: '/build' },
    { name: 'Arsenal', path: '/gallery' },
    { name: 'Support', path: '/faq' },
    { name: 'Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#030303] selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[1100] bg-[#030303]/80 backdrop-blur-xl border-b border-zinc-900/50">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex flex-col items-start group" onClick={() => setIsMenuOpen(false)}>
              <span className="text-2xl font-black tracking-tighter text-white italic group-hover:scale-105 transition-transform flex items-center">
                TRINITY <span className="text-blue-500 ml-2 neon-text-blue flicker">AUDIO</span>
              </span>
              <span className="mono text-[8px] tracking-[0.6em] font-black text-zinc-600 uppercase -mt-0.5 group-hover:text-blue-400/50 transition-colors">
                BUILT TOUGH • TX MADE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-white relative py-2 ${
                    location.pathname === link.path ? 'text-blue-500' : 'text-zinc-500'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-blue-500 shadow-[0_0_8px_#0080ff]"></span>
                  )}
                </Link>
              ))}
              <Link to="/build" className="neon-border-blue px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.4em] text-white bg-blue-600/10 hover:bg-blue-600/20 transition-all italic">
                Start Build
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-zinc-500 hover:text-blue-500 transition-colors border border-zinc-800 rounded focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav - Slide In/Out Animation */}
        <div 
          className={`lg:hidden bg-[#030303] border-zinc-900 transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[600px] opacity-100 border-b' : 'max-h-0 opacity-0 border-b-0'
          }`}
        >
          <div className="px-8 py-12 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-2xl font-black transition-all uppercase tracking-widest italic hover:translate-x-4 ${
                  location.pathname === link.path ? 'text-blue-500 neon-text-blue' : 'text-zinc-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
               <Link 
                to="/build" 
                onClick={() => setIsMenuOpen(false)}
                className="inline-block neon-border-blue px-8 py-4 text-xs font-black uppercase tracking-[0.4em] text-white bg-blue-600/10 italic"
              >
                Start Build
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Padding for Fixed Header */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Sticky Call Button */}
      <a 
        href="tel:1234567890" 
        className="fixed bottom-8 right-8 z-[2000] flex items-center space-x-3 bg-zinc-950/90 backdrop-blur-md px-6 py-4 neon-border-blue rounded-sm animate-tactical transition-transform hover:scale-110 active:scale-95 group"
      >
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="neon-text-blue">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
        </div>
        <span className="mono text-[11px] font-black uppercase tracking-[0.3em] text-white neon-text-blue">Call Now</span>
      </a>

      {/* Footer */}
      <footer className="bg-[#020202] border-t border-zinc-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-3xl font-black italic tracking-tighter text-white mb-8 block">
                TRINITY <span className="text-blue-500 neon-text-blue">AUDIO</span>
              </Link>
              <p className="text-zinc-600 max-w-sm mb-12 font-bold uppercase tracking-widest text-[11px] leading-loose italic">
                Custom portable audio systems built for those who value craftsmanship and raw power.
              </p>
              <div className="flex space-x-6">
                {['INSTAGRAM', 'FACEBOOK'].map(soc => (
                  <a key={soc} href="#" className="mono text-[10px] text-zinc-500 font-black tracking-widest hover:text-blue-500 transition-colors">
                    {soc}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-10 text-zinc-400">NAVIGATE</h4>
              <ul className="space-y-6 text-zinc-600 font-black uppercase tracking-widest text-[11px]">
                <li><Link to="/build" className="hover:text-blue-500 transition-colors italic">BUILD RIG</Link></li>
                <li><Link to="/gallery" className="hover:text-blue-500 transition-colors italic">ARSENAL</Link></li>
                <li><Link to="/faq" className="hover:text-blue-500 transition-colors italic">TECH SPECS</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-10 text-zinc-400">FAITH</h4>
              <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest leading-relaxed italic">
                "Work as if working for the Lord..." <br/>
                <span className="text-blue-600/50 mt-2 block">TRINITY RICHARDSON | FOUNDER</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-700 mono text-[9px] uppercase tracking-[0.5em] pt-12 border-t border-zinc-900/50">
            <p>&copy; {new Date().getFullYear()} TRINITY AUDIO CONCEPTS</p>
            <p className="mt-4 md:mt-0">EST_2021_TX_USA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
