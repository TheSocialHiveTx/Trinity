
import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
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

  const builds = [
    { id: 1, type: 'Toolbox', title: 'The Cobalt Miner', image: 'https://picsum.photos/seed/build1/800/800' },
    { id: 2, type: 'Pelican', title: 'Stealth Operator', image: 'https://picsum.photos/seed/build2/800/800' },
    { id: 3, type: 'Toolbox', title: 'Rusty Chrome', image: 'https://picsum.photos/seed/build3/800/800' },
    { id: 4, type: 'Other', title: 'Ammo Can 2.0', image: 'https://picsum.photos/seed/build4/800/800' },
    { id: 5, type: 'Pelican', title: 'Orange Alert', image: 'https://picsum.photos/seed/build5/800/800' },
    { id: 6, type: 'Toolbox', title: 'Electric Neon', image: 'https://picsum.photos/seed/build6/800/800' },
    { id: 7, type: 'Pelican', title: 'Midnight Sea', image: 'https://picsum.photos/seed/build7/800/800' },
    { id: 8, type: 'Other', title: 'Vintage Suitcase', image: 'https://picsum.photos/seed/build8/800/800' },
    { id: 9, type: 'Toolbox', title: 'Carbon Fiber X', image: 'https://picsum.photos/seed/build9/800/800' },
  ];

  const filteredBuilds = filter === 'All' ? builds : builds.filter(b => b.type === filter);

  return (
    <div className="bg-[#030303] py-32 px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-6">THE ARSENAL</h1>
          <div className="h-[2px] w-24 bg-blue-600 mx-auto shadow-[0_0_10px_#0080ff] mb-8"></div>
          <p className="text-zinc-500 text-lg uppercase font-black tracking-widest italic">Gallery of custom rig deployments</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-20 reveal">
          {['All', 'Toolbox', 'Pelican', 'Other'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-3 rounded-sm font-black uppercase tracking-[0.3em] text-[10px] transition-all border italic ${
                filter === cat ? 'neon-border-blue bg-blue-600/20 text-white' : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredBuilds.map((build) => (
            <div key={build.id} className="group relative overflow-hidden rounded-sm bg-zinc-900/20 border border-zinc-900 transition-all hover:border-blue-500/50 reveal active">
              <div className="aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={build.image} 
                  alt={build.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="mono text-[8px] text-blue-500 font-black uppercase tracking-[0.5em] mb-3 block">{build.type}_SPEC</span>
                <h3 className="text-white font-black text-2xl italic uppercase tracking-tighter group-hover:neon-text-blue transition-all">{build.title}</h3>
              </div>
              <div className="absolute top-6 right-6 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-12 shadow-[0_0_8px_#0080ff]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
