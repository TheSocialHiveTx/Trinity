
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "How long does a custom build take?", 
      a: "Typical lead times are 2-3 weeks from the date your build slot is secured. Rush orders (7-10 days) are available for an additional fee depending on parts availability." 
    },
    { 
      q: "Are the systems waterproof?", 
      a: "Our Pelican builds feature marine-grade components and IP67 weather-resistant cases. While 'waterproof' is a strong word, they are designed to handle heavy rain, splashes, and damp environments. We do not recommend submerging them." 
    },
    { 
      q: "What is the battery life?", 
      a: "Battery life varies based on the system size and volume levels. On average, our standard systems provide 10-15 hours of playtime at moderate volumes. High-capacity upgrades are available." 
    },
    { 
      q: "Can I send you my own case?", 
      a: "Yes! We love customer-supplied builds. Whether it's a vintage cooler, a specific tool chest, or a unique heirloom, we can likely build a system inside it. Use the 'Start a Build' form and select 'Other' to get a custom quote." 
    },
    { 
      q: "Do you ship internationally?", 
      a: "Currently, we focus on US-based shipping. Large builds are shipped via freight or heavy-duty ground to ensure they arrive in one piece." 
    }
  ];

  return (
    <div className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase mb-4">FREQUENT QUESTIONS</h1>
          <p className="text-zinc-400 text-lg font-medium">Everything you need to know about our custom builds.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-white font-black uppercase tracking-widest text-sm italic">{faq.q}</span>
                <span className={`text-blue-500 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-zinc-400 font-medium leading-relaxed animate-in slide-in-from-top duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-blue-600/10 border border-blue-500/20 rounded-lg text-center">
          <p className="text-white font-bold mb-4">Still have questions?</p>
          <a href="/#/contact" className="text-blue-500 font-black uppercase tracking-widest hover:text-white transition-colors">
            Reach out to our team →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
