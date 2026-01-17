
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icons, COLORS } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-zinc-900 bg-[#020202]">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=2000" 
            alt="Rugged Speaker Build" 
            className="w-full h-full object-cover opacity-10 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="flex flex-col items-start">
            <h1 className="reveal delay-100 text-7xl md:text-9xl font-black italic tracking-tighter text-white mb-6 leading-[0.8] uppercase flex flex-col">
              <span>BUILT</span>
              <span className="neon-text-blue flicker">TOUGH.</span>
              <span>BUILT</span>
              <span className="neon-text-blue">LOUD.</span>
            </h1>

            <p className="reveal delay-200 text-lg md:text-xl text-zinc-500 mb-12 max-w-xl font-medium leading-relaxed uppercase tracking-wide">
              Forging <span className="text-white">Industrial-Grade</span> audio systems for those who work hard and play louder.
            </p>

            <div className="reveal delay-300 flex flex-wrap gap-6">
              <Link 
                to="/build" 
                className="bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-[0.3em] px-12 py-6 rounded-sm transition-all italic text-xl flex items-center group relative"
              >
                Start Build
                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
              <button 
                className="neon-border-blue bg-blue-600/10 hover:bg-blue-600/20 text-white font-black uppercase tracking-[0.3em] px-12 py-6 rounded-sm transition-all italic text-xl backdrop-blur-sm"
              >
                Inventory
              </button>
            </div>
          </div>
        </div>
        
        {/* Technical Data Sidebar Decoration */}
        <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-end space-y-12 opacity-30 mono text-[10px] tracking-widest text-zinc-600">
           <div className="text-right">
              <p>COORD_LAT: 31.9686° N</p>
              <p>COORD_LONG: 99.9018° W</p>
           </div>
           <div className="h-[1px] w-24 bg-zinc-800"></div>
           <div className="text-right">
              <p>VOLTAGE_OUT: 24.2V</p>
              <p>DB_PEAK: 114.5</p>
           </div>
        </div>
      </section>

      {/* Feature Grid with Neon Dividers */}
      <section className="py-32 bg-[#030303] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-900">
            {[
              { 
                label: "PROCESS_01",
                title: 'CHASSIS', 
                desc: 'Toolbox or Pelican. Choose the armor for your sound.', 
                icon: <Icons.Hammer /> 
              },
              { 
                label: "PROCESS_02",
                title: 'VOLTAGE', 
                desc: 'Configure amps, lithium power, and high-wattage components.', 
                icon: <Icons.Zap /> 
              },
              { 
                label: "PROCESS_03",
                title: 'DEPLOY', 
                desc: 'Tested for vibration, dust, and raw audio output.', 
                icon: <Icons.Speaker /> 
              }
            ].map((item, idx) => (
              <div key={idx} className="reveal p-16 border-zinc-900 group hover:bg-zinc-900/30 transition-all relative overflow-hidden flex flex-col items-center text-center">
                <span className="mono text-[9px] text-zinc-600 mb-8 block tracking-[0.5em]">{item.label}</span>
                <div className="text-blue-500 mb-8 scale-150 transition-transform group-hover:scale-[1.7] filter group-hover:drop-shadow-[0_0_10px_#0080ff]">{item.icon}</div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tighter italic uppercase">{item.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed text-sm uppercase tracking-wide">{item.desc}</p>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-500 group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#0080ff]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pelican Section - Pure Contrast */}
      <section className="py-40 bg-zinc-950/40 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2 reveal">
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[80px] rounded-full"></div>
              <div className="relative rounded-sm neon-border-blue overflow-hidden group">
                 <img 
                  src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Pelican Case Audio" 
                  className="w-full grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 reveal">
            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-8 leading-[0.9] uppercase">
              BATTLE <span className="neon-text-blue flicker">READY.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed uppercase tracking-wider font-bold">
              Crushproof. Dustproof. Texas Built. Our Pelican rigs are designed for the most extreme environments on earth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               {['CRUSH_PROOF', 'BT_5.3_PRO', 'LI_PO_MAX', 'IP67_SEAL'].map(t => (
                 <div key={t} className="border border-zinc-800 p-4 bg-zinc-900/20 mono text-[10px] text-blue-500 font-black tracking-widest flex items-center hover:border-blue-500 transition-colors cursor-default">
                    <span className="w-1.5 h-1.5 bg-blue-500 mr-3 neon-dot"></span>
                    {t}
                 </div>
               ))}
            </div>
            <Link to="/build" className="inline-flex items-center text-white font-black uppercase tracking-[0.4em] text-sm border-b-2 border-white pb-3 hover:text-blue-500 hover:border-blue-500 transition-all italic">
              Configure Pelican Build
            </Link>
          </div>
        </div>
      </section>

      {/* High-Voltage CTA */}
      <section className="py-40 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center reveal">
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-10 uppercase leading-[0.8]">
            CLAIM YOUR <br /> <span className="text-blue-600">BUILD SLOT</span>
          </h2>
          <p className="text-black/60 text-xl font-black uppercase tracking-widest mb-16 max-w-2xl mx-auto italic">
            Quality takes time. Reserve your spot today.
          </p>
          <Link 
            to="/build" 
            className="bg-black text-white font-black uppercase tracking-[0.5em] px-16 py-8 rounded-sm transition-all shadow-2xl inline-block italic text-2xl hover:scale-110 active:scale-95 hover:bg-zinc-900"
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
