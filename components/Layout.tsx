
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Start a Build', path: '/build' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white glow-text italic">
                TRINITY <span className="text-blue-500">AUDIO</span> CONCEPTS
              </span>
              <span className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase -mt-1">
                Built Tough • Built Loud
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-blue-500 ${
                    location.pathname === link.path ? 'text-blue-500' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-zinc-300 hover:text-blue-500 hover:bg-zinc-800 transition-all uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-2xl font-black italic tracking-tighter text-white mb-4 block">
                TRINITY <span className="text-blue-500">AUDIO</span>
              </Link>
              <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
                Specializing in rugged, portable audio systems built to withstand the toughest jobs and the loudest parties. 
                Hand-crafted with precision and passion.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
                <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer border border-zinc-700">
                   <span className="font-bold">FB</span>
                </div>
                <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer border border-zinc-700">
                   <span className="font-bold">IG</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-3">Quick Links</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><Link to="/build" className="hover:text-blue-500 transition-colors">Start a Build</Link></li>
                <li><Link to="/gallery" className="hover:text-blue-500 transition-colors">Build Gallery</Link></li>
                <li><Link to="/faq" className="hover:text-blue-500 transition-colors">Support & FAQ</Link></li>
                <li><Link to="/about" className="hover:text-blue-500 transition-colors">Our Story</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-3">Location</h4>
              <p className="text-zinc-400 mb-2 font-medium">Proudly Operating in Texas</p>
              <p className="text-zinc-500 text-sm leading-relaxed italic">
                "Whatever you do, work at it with all your heart, as working for the Lord..." <br/>— Colossians 3:23
              </p>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Trinity Audio Concepts. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
