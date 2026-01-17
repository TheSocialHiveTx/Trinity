
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center">
        <div className="mb-8 flex justify-center">
           <div className="w-24 h-24 bg-blue-600/20 border-2 border-blue-500 flex items-center justify-center rounded-full animate-bounce">
              <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
           </div>
        </div>
        <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase mb-6 leading-none">SUBMISSION <span className="text-blue-500">RECEIVED</span></h1>
        <p className="text-zinc-400 text-lg mb-10 font-medium">
          Thanks for reaching out to Trinity Audio Concepts. We've received your request and Trinity will personally review it within the next 48 hours. 
        </p>
        <div className="space-y-4">
          <Link to="/" className="block bg-zinc-900 border border-zinc-700 text-white font-black uppercase tracking-widest py-4 px-8 rounded-sm hover:bg-zinc-800 transition-all italic">
            Back to Home
          </Link>
          <Link to="/gallery" className="block text-blue-500 font-black uppercase tracking-widest hover:text-white transition-colors">
            Check out more builds →
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-12 uppercase tracking-widest font-black italic">"In all your ways acknowledge Him, and He will make straight your paths." — Proverbs 3:6</p>
      </div>
    </div>
  );
};

export default ThankYou;
