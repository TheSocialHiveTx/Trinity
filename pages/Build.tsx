
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Build: React.FC = () => {
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState<'Shipping' | 'Pickup'>('Pickup');
  const [caseType, setCaseType] = useState<string>('Toolbox');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real Netlify deployment, this form would have data-netlify="true"
    // and handle the redirect naturally. For this SPA, we navigate.
    navigate('/thank-you');
  };

  return (
    <div className="bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-4">START A BUILD</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
            Fill out the form below with your desired specifications. We'll review your request and get back to you within 48 hours with a customized estimate and available build slots.
          </p>
        </div>

        <form 
          name="build-request" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
          className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-lg shadow-2xl relative"
        >
          {/* Netlify Hidden Field */}
          <input type="hidden" name="form-name" value="build-request" />

          {/* Section: Contact Info */}
          <div className="mb-12">
            <h3 className="text-blue-500 font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-2 italic">1. Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Full Name</label>
                <input required name="name" type="text" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Email Address</label>
                <input required name="email" type="email" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Phone Number</label>
                <input required name="phone" type="tel" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" placeholder="(555) 000-0000" />
              </div>
            </div>
          </div>

          {/* Section: The Case */}
          <div className="mb-12">
            <h3 className="text-blue-500 font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-2 italic">2. The Foundation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Case Type</label>
                <select 
                  name="case-type" 
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors appearance-none font-bold uppercase tracking-widest"
                >
                  <option value="Toolbox">Mini Toolbox</option>
                  <option value="Pelican">Pelican Case</option>
                  <option value="Other">Other / Customer Supplied</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Desired Size</label>
                <select name="size" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors appearance-none font-bold uppercase tracking-widest">
                  <option value="Small">Small (Hand-held)</option>
                  <option value="Medium">Medium (Standard)</option>
                  <option value="Large">Large (High Power)</option>
                </select>
              </div>
              {caseType === 'Other' && (
                <div className="md:col-span-2">
                   <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Describe your case</label>
                   <input name="other-case-details" type="text" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" placeholder="Cooler, vintage suitcase, ammo can, etc." />
                </div>
              )}
            </div>
          </div>

          {/* Section: Audio & Power */}
          <div className="mb-12">
            <h3 className="text-blue-500 font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-2 italic">3. Audio & Power</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Power Source</label>
                <div className="space-y-2">
                  {['Battery only', 'Battery + wall plug', 'Battery + vehicle 12V'].map(opt => (
                    <label key={opt} className="flex items-center space-x-3 text-zinc-300 font-bold uppercase tracking-wider text-sm cursor-pointer hover:text-white">
                      <input type="radio" name="power" value={opt} className="w-4 h-4 accent-blue-600" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Speaker Setup</label>
                <select name="speakers" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors appearance-none font-bold uppercase tracking-widest">
                  <option value="Recommend">Recommend to me</option>
                  <option value="Dual 4.5">Dual 4.5" Coaxial</option>
                  <option value="Dual 5.25">Dual 5.25" Component</option>
                  <option value="Single 6.5">Single 6.5" High-Output</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-4">Required Inputs (Check all that apply)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Bluetooth', 'AUX (3.5mm)', 'USB Charge', 'RCA Output'].map(input => (
                  <label key={input} className="flex items-center space-x-3 text-zinc-300 font-bold uppercase tracking-wider text-xs cursor-pointer hover:text-white">
                    <input type="checkbox" name="inputs" value={input} className="w-4 h-4 accent-blue-600 rounded border-zinc-700" />
                    <span>{input}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Visuals */}
          <div className="mb-12">
            <h3 className="text-blue-500 font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-2 italic">4. Visuals & Extras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">RGB LEDs</label>
                <select name="leds" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors appearance-none font-bold uppercase tracking-widest">
                  <option value="No">No LEDs</option>
                  <option value="Yes - Interior">Yes - Interior Glow</option>
                  <option value="Yes - Exterior">Yes - Underglow</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">LED Control</label>
                <select name="led-control" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors appearance-none font-bold uppercase tracking-widest">
                  <option value="None">N/A</option>
                  <option value="Remote">Physical Remote</option>
                  <option value="App">Smartphone App</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-4">Custom Add-ons</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Custom paint/wrap', 'Logo/engraving', 'Waterproofing upgrade', 'Wheels/handle upgrade'].map(extra => (
                  <label key={extra} className="flex items-center space-x-3 text-zinc-300 font-bold uppercase tracking-wider text-sm cursor-pointer hover:text-white">
                    <input type="checkbox" name="extras" value={extra} className="w-4 h-4 accent-blue-600 rounded" />
                    <span>{extra}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Logistics */}
          <div className="mb-12">
            <h3 className="text-blue-500 font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-2 italic">5. Logistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Budget Range</label>
                <select name="budget" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors appearance-none font-bold uppercase tracking-widest">
                  <option value="$300-500">$300 - $500</option>
                  <option value="$500-800">$500 - $800</option>
                  <option value="$800+">$800+</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Timeline</label>
                <div className="flex space-x-4 h-[56px] items-center">
                  <label className="flex items-center space-x-2 text-zinc-300 font-bold uppercase tracking-wider text-sm cursor-pointer">
                    <input type="radio" name="timeline" value="Standard" defaultChecked className="w-4 h-4 accent-blue-600" />
                    <span>Standard</span>
                  </label>
                  <label className="flex items-center space-x-2 text-zinc-300 font-bold uppercase tracking-wider text-sm cursor-pointer">
                    <input type="radio" name="timeline" value="Rush" className="w-4 h-4 accent-blue-600" />
                    <span>Rush (+$75)</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Delivery Method</label>
                <div className="flex space-x-4 h-[56px] items-center">
                  <label className="flex items-center space-x-2 text-zinc-300 font-bold uppercase tracking-wider text-sm cursor-pointer">
                    <input type="radio" name="delivery" value="Pickup" onChange={() => setDelivery('Pickup')} checked={delivery === 'Pickup'} className="w-4 h-4 accent-blue-600" />
                    <span>Pickup (TX)</span>
                  </label>
                  <label className="flex items-center space-x-2 text-zinc-300 font-bold uppercase tracking-wider text-sm cursor-pointer">
                    <input type="radio" name="delivery" value="Shipping" onChange={() => setDelivery('Shipping')} checked={delivery === 'Shipping'} className="w-4 h-4 accent-blue-600" />
                    <span>Shipping</span>
                  </label>
                </div>
              </div>
              {delivery === 'Shipping' && (
                <div className="md:col-span-2 animate-in fade-in slide-in-from-top-4 duration-300">
                  <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Shipping Address</label>
                  <textarea name="address" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" rows={2} placeholder="Street, City, State, Zip"></textarea>
                </div>
              )}
            </div>
          </div>

          {/* Details & Upload */}
          <div className="mb-12">
            <h3 className="text-blue-500 font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-2 italic">6. Build Details</h3>
            <div className="mb-6">
              <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Describe your build vision</label>
              <textarea name="description" className="w-full bg-zinc-950 border border-zinc-700 focus:border-blue-500 p-4 text-white outline-none transition-colors" rows={4} placeholder="Tell us more about how you'll use it and any specific color schemes..."></textarea>
            </div>
            <div>
              <label className="block text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Upload Inspiration Photos</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-700 border-dashed rounded-md bg-zinc-950/50 hover:bg-zinc-950 transition-colors">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-zinc-500" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-zinc-400">
                    <label className="relative cursor-pointer rounded-md font-bold text-blue-500 hover:text-blue-400 focus-within:outline-none">
                      <span>Upload files</span>
                      <input name="file-upload" type="file" className="sr-only" multiple />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-zinc-500">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.3em] py-6 rounded-sm transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)] italic text-xl"
          >
            Submit Build Request
          </button>
          
          <p className="text-zinc-500 text-[10px] text-center mt-6 uppercase tracking-widest font-bold">
            By submitting, you agree to our build terms and queue policies. No deposit required today.
          </p>
          
          {/* Rivet Details */}
          <div className="rivet absolute top-4 left-4"></div>
          <div className="rivet absolute top-4 right-4"></div>
          <div className="rivet absolute bottom-4 left-4"></div>
          <div className="rivet absolute bottom-4 right-4"></div>
        </form>
      </div>
    </div>
  );
};

export default Build;
