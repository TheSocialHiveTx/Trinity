
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
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
    <div className="bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase mb-4">THE ARSENAL</h1>
          <p className="text-zinc-400 text-lg font-medium">A showcase of custom rigs built for our clients.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Toolbox', 'Pelican', 'Other'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs transition-all border ${
                filter === cat ? 'bg-blue-600 border-blue-500 text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBuilds.map((build) => (
            <div key={build.id} className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 animate-in fade-in zoom-in duration-500">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={build.image} 
                  alt={build.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 mb-2 inline-block italic">
                  {build.type} Build
                </span>
                <h3 className="text-white font-black text-xl italic uppercase tracking-tighter">{build.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
