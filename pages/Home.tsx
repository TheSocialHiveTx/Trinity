
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons, COLORS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=2000" 
            alt="Rugged Speaker Build" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em]">Now Accepting Custom Build Slots</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter text-white mb-6 leading-[0.9]">
              BUILT <span className="text-blue-500 glow-text">TOUGH.</span><br />
              BUILT <span className="text-blue-500 glow-text">LOUD.</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl font-medium">
              Hand-crafted portable audio systems installed in industrial-grade cases. Whether you choose a rugged toolbox or a bulletproof Pelican, we bring the concert to your worksite.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/build" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest px-8 py-5 rounded-sm transition-all glow-blue flex items-center justify-center italic"
              >
                Start a Build
              </Link>
              <button 
                className="bg-zinc-900/80 border border-zinc-700 hover:border-zinc-500 text-white font-black uppercase tracking-widest px-8 py-5 rounded-sm transition-all flex items-center justify-center italic backdrop-blur-sm"
              >
                Shop Ready-to-Ship
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle Rivet Lines Overlay */}
        <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none">
           <div className="rivet absolute bottom-10 right-10"></div>
           <div className="rivet absolute bottom-10 right-20"></div>
           <div className="rivet absolute bottom-20 right-10"></div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">The Trinity Process</h2>
            <p className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">CRAFTSMANSHIP YOU CAN HEAR</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                step: '01', 
                title: 'CHOOSE YOUR CASE', 
                desc: 'Select from our heavy-duty mini toolboxes, premium Pelican cases, or ship us your own custom container.', 
                icon: <Icons.Hammer /> 
              },
              { 
                step: '02', 
                title: 'SELECT THE POWER', 
                desc: 'Choose your speaker configuration, amp power, battery life, and custom RGB lighting to set the vibe.', 
                icon: <Icons.Speaker /> 
              },
              { 
                step: '03', 
                title: 'WE BUILD & TEST', 
                desc: 'Every system is hand-wired and vibration-tested. We don\'t ship it until it can survive a dirt track.', 
                icon: <Icons.Zap /> 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 p-10 border border-zinc-800 rounded-lg relative group transition-all hover:border-blue-500/50">
                <div className="absolute -top-6 -left-6 text-7xl font-black text-zinc-900 group-hover:text-blue-900/30 transition-colors pointer-events-none z-0">
                  {item.step}
                </div>
                <div className="text-blue-500 mb-6 relative z-10">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tighter italic relative z-10">{item.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pelican Section */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-lg blur-2xl group-hover:bg-blue-600/30 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1200" 
                alt="Pelican Case Audio" 
                className="relative rounded-lg border border-zinc-700 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 bg-zinc-950/90 px-4 py-2 border border-zinc-700 rounded-sm">
                <span className="text-xs font-black tracking-widest text-white uppercase italic">Premium Pelican Series</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-8 leading-none">
              ENGINEERED FOR THE <span className="text-blue-500 italic">EXTREME</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-medium">
              Our Pelican case builds offer the ultimate in rugged protection. These cases are crushproof, dustproof, and weather-resistant. We combine this military-grade durability with high-fidelity audio components for a stereo system that can go anywhere you can.
            </p>
            <ul className="space-y-4 mb-10">
              {['IP67 Weather-Resistant Sealing', 'Impact-Reinforced Mounting', 'Long-Range Bluetooth 5.0', 'High-Output Marine Grade Components'].map((feat, i) => (
                <li key={i} className="flex items-center text-zinc-200 font-bold uppercase tracking-wider text-sm">
                  <span className="text-blue-500 mr-3"><Icons.Check /></span>
                  {feat}
                </li>
              ))}
            </ul>
            <Link to="/build" className="inline-block text-blue-500 font-black uppercase tracking-[0.2em] border-b-2 border-blue-500 pb-1 hover:text-white hover:border-white transition-all">
              Configure your Pelican build →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Pricing & Packages</h2>
            <p className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">Pick Your Base Tier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'The Workhorse', 
                price: 'Starting at $299', 
                features: ['Metal Tool Box Case', 'Dual 4" High-Output Speakers', 'Internal Rechargeable Battery', 'Bluetooth & AUX Input', 'Blue LED Status Glow'],
                cta: 'View Build Options'
              },
              { 
                name: 'The Commando', 
                price: 'Starting at $549', 
                featured: true,
                features: ['Pelican 1200 Series Case', 'Upgraded 5.25" Components', 'Long-Life Lithium Power Cell', 'Waterproof Controls', 'Custom RGB Accent Ring'],
                cta: 'Start This Build'
              },
              { 
                name: 'The Goliath', 
                price: 'Custom Quote Only', 
                features: ['Large Format Case', 'Full 3-Way Component System', 'Max-Capacity Power Pack', 'Vehicle 12V + AC/DC Charging', 'Custom Wrap & Engraving'],
                cta: 'Request Quote'
              }
            ].map((tier, i) => (
              <div key={i} className={`p-1 bg-zinc-900 border ${tier.featured ? 'border-blue-500 glow-blue scale-105 z-10' : 'border-zinc-800'} rounded-lg transition-transform hover:-translate-y-2`}>
                <div className="p-8 h-full flex flex-col">
                  {tier.featured && (
                    <span className="bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white px-3 py-1 rounded-full w-fit mb-4 mx-auto">Most Popular</span>
                  )}
                  <h3 className="text-2xl font-black italic text-white mb-2 tracking-tighter text-center uppercase">{tier.name}</h3>
                  <p className="text-blue-500 font-black text-xl mb-8 text-center">{tier.price}</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="text-zinc-400 text-sm font-medium flex items-start">
                        <span className="text-zinc-600 mr-2 mt-1">•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 font-black uppercase tracking-widest italic rounded-sm transition-all ${tier.featured ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}>
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-500 mt-12 text-sm font-medium italic">
            *Final pricing depends on specific component availability and custom options selected during the build process.
          </p>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Craftsmanship Showcase</h2>
              <p className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">RECENT BUILDS</p>
            </div>
            <Link to="/gallery" className="text-blue-500 font-black uppercase tracking-widest hover:text-white transition-colors">View All Gallery →</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-800 border border-zinc-700">
                <img 
                  src={`https://picsum.photos/seed/build${item}/800/800`} 
                  alt={`Build ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-blue-500 font-black text-xs uppercase tracking-widest mb-1">Custom Order #{1000 + item}</p>
                  <h4 className="text-white font-black text-lg uppercase italic tracking-tighter">Stealth Blue Toolbox</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Client Feedback</h2>
              <p className="text-4xl font-black text-white italic tracking-tighter uppercase">HEAR FROM THE OWNERS</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Mike R.", text: "Best speaker I've ever owned. Survives the dust and vibrations of the jobsite and sounds better than most house speakers.", rating: 5 },
                { name: "Sarah J.", text: "The custom LEDs on my Pelican build are incredible. Trinity really worked with me to get the perfect setup.", rating: 5 },
                { name: "Dave T.", text: "Built like a tank. I dropped mine off a tailgate and it didn't even skip a beat. 10/10 craftsmanship.", rating: 5 }
              ].map((rev, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg">
                  <div className="flex text-blue-500 mb-4">
                    {[...Array(rev.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 italic mb-6 leading-relaxed font-medium">"{rev.text}"</p>
                  <p className="text-white font-black uppercase text-sm tracking-widest">— {rev.name}</p>
                </div>
              ))}
           </div>
           <p className="text-center text-zinc-500 text-xs mt-12 uppercase tracking-widest font-black">*SAMPLE REVIEWS FROM SATISFIED CLIENTS</p>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-8 uppercase leading-none">
            READY TO BRING <br /> THE NOISE?
          </h2>
          <p className="text-blue-100 text-xl font-bold mb-10 max-w-2xl mx-auto">
            Build slots fill up fast. Get your request in today to secure your spot in our workshop queue.
          </p>
          <Link 
            to="/build" 
            className="bg-zinc-950 hover:bg-zinc-900 text-white font-black uppercase tracking-[0.3em] px-12 py-6 rounded-sm transition-all shadow-2xl inline-block italic text-lg"
          >
            Start Your Build Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
