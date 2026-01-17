
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-lg transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
                alt="Workshop Craftsmanship" 
                className="relative rounded-lg border-2 border-zinc-800 grayscale shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded italic font-black text-white text-xl border-4 border-zinc-950">
                Est. 2021
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Our Founder</h2>
            <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-8 leading-none">TRINITY RICHARDSON</h1>
            <div className="space-y-6 text-zinc-300 text-lg font-medium leading-relaxed">
              <p>
                Trinity Richardson's life has always revolved around building things that go fast and play loud. With a rich background in dirt track racing, he understands exactly what "tough" means. When you're sliding sideways at 80mph, you learn that everything you build has to be over-engineered to survive.
              </p>
              <p>
                By trade, Trinity is a Process Operator—a professional dedicated to precision, safety, and efficiency. He brings that same blue-collar work ethic to every single stereo system that leaves the Trinity Audio Concepts workshop.
              </p>
              <p>
                Beyond the garage, Trinity is a loving husband, a devoted father, and a man of faith. At Trinity Audio Concepts, we operate on simple, values-based principles: honesty, hard work, and treating every customer like family. 
              </p>
              <p className="italic text-zinc-500">
                "We don't just build speakers; we build rigs that last. My goal is to give you the loudest, toughest piece of equipment you've ever owned, built with my own two hands right here in the workshop."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Built On</h2>
            <p className="text-4xl font-black text-white italic tracking-tighter uppercase">THE TRINITY STANDARDS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', text: 'We do what we say we\'ll do. No hidden fees, no cutting corners on components, and no over-promising on delivery dates.' },
              { title: 'Craftsmanship', text: 'Every wire is loomed, every mount is reinforced, and every seal is checked. We build things to survive the jobsite.' },
              { title: 'Community', text: 'We\'re proud to be part of the small business community. A portion of every build goes back into supporting local family values.' }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-black text-blue-500 italic mb-4 uppercase tracking-tighter">{v.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
