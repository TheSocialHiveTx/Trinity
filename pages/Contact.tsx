
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase mb-6 leading-none">GET IN <span className="text-blue-500">TOUCH</span></h1>
          <p className="text-zinc-400 text-lg mb-10 font-medium">
            Have a general question or want to chat about a specific idea before starting a formal build request? Drop us a line.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-zinc-900 p-4 border border-zinc-800 rounded mr-6 text-blue-500">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">Email Us</h4>
                <p className="text-zinc-400 font-bold">builds@trinityaudio.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-zinc-900 p-4 border border-zinc-800 rounded mr-6 text-blue-500">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">Workshop</h4>
                <p className="text-zinc-400 font-bold">Texas-Based Operations</p>
                <p className="text-zinc-500 text-sm">Visits by appointment only</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-xl"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="space-y-6">
              <div>
                <label className="block text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Name</label>
                <input required name="name" type="text" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Email</label>
                <input required name="email" type="email" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Message</label>
                <textarea required name="message" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" rows={5}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] py-4 rounded-sm transition-all italic">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
