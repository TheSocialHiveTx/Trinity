
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

const Build: React.FC = () => {
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState<'Shipping' | 'Pickup'>('Pickup');
  const [caseType, setCaseType] = useState<string>('Toolbox');
  
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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

  const validate = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value) error = 'IDENTIFICATION REQUIRED';
      else if (value.length < 2) error = 'NAME TOO SHORT';
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) error = 'COMMS ADDRESS REQUIRED';
      else if (!emailRegex.test(value)) error = 'INVALID EMAIL FORMAT';
    }
    if (name === 'phone') {
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!value) error = 'CONTACT LINE REQUIRED';
      else if (!phoneRegex.test(value)) error = 'INVALID PHONE FORMAT (555-555-5555)';
    }
    if (name === 'address' && delivery === 'Shipping') {
      if (!value) error = 'DEPLOYMENT DESTINATION REQUIRED';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {
      name: validate('name', values.name),
      email: validate('email', values.email),
      phone: validate('phone', values.phone),
      address: validate('address', values.address)
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, address: true });

    const hasErrors = Object.values(newErrors).some(err => !!err);
    if (!hasErrors) {
      navigate('/thank-you');
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.text-red-500');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getInputClass = (name: keyof FormErrors) => {
    const base = "w-full bg-zinc-950/50 border p-5 text-white outline-none transition-all rounded-sm font-bold ";
    if (touched[name] && errors[name]) {
      return base + "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)] focus:border-red-400";
    }
    return base + "border-zinc-800 focus:border-blue-500 focus:glow-blue";
  };

  return (
    <div className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-6">CONFIGURE RIG</h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-medium border-y border-zinc-800 py-6">
            Blueprint your custom build. We'll finalize the specs and calculate the voltage.
          </p>
        </div>

        <form 
          name="build-request" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
          noValidate
          className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 md:p-16 rounded-lg shadow-[0_0_50px_rgba(0,0,0,1)] relative reveal"
        >
          <input type="hidden" name="form-name" value="build-request" />

          {/* Section: Contact Info */}
          <div className="mb-16">
            <h3 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-10 flex items-center italic">
                <span className="w-10 h-[2px] bg-blue-500 mr-4 shadow-[0_0_8px_#3b82f6]"></span>
                01. Operator Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${touched.name && errors.name ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-blue-500'}`}>
                  Callsign / Name
                </label>
                <input 
                  required 
                  name="name" 
                  type="text" 
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass('name')} 
                  placeholder="TRINITY R." 
                />
                {touched.name && errors.name && <p className="mt-2 mono text-[9px] text-red-500 font-bold tracking-widest">{errors.name}</p>}
              </div>
              <div className="group">
                <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${touched.email && errors.email ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-blue-500'}`}>
                  Digital Comms (Email)
                </label>
                <input 
                  required 
                  name="email" 
                  type="email" 
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass('email')} 
                  placeholder="RAD@TRINITY.COM" 
                />
                {touched.email && errors.email && <p className="mt-2 mono text-[9px] text-red-500 font-bold tracking-widest">{errors.email}</p>}
              </div>
              <div className="md:col-span-2 group">
                <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${touched.phone && errors.phone ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-blue-500'}`}>
                  Direct Line (Phone)
                </label>
                <input 
                  required 
                  name="phone" 
                  type="tel" 
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass('phone')} 
                  placeholder="555.000.0000" 
                />
                {touched.phone && errors.phone && <p className="mt-2 mono text-[9px] text-red-500 font-bold tracking-widest">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Section: The Case */}
          <div className="mb-16">
            <h3 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-10 flex items-center italic">
                <span className="w-10 h-[2px] bg-blue-500 mr-4 shadow-[0_0_8px_#3b82f6]"></span>
                02. The Chassis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Case Architecture</label>
                <select 
                  name="case-type" 
                  value={caseType}
                  onChange={(e) => {
                    setCaseType(e.target.value);
                    handleChange(e);
                  }}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-blue-500 p-5 text-white outline-none transition-all appearance-none font-black uppercase tracking-widest rounded-sm cursor-pointer"
                >
                  <option value="Toolbox">Mini Toolbox (Rugged Metal)</option>
                  <option value="Pelican">Pelican (Military Grade)</option>
                  <option value="Other">Custom / Supplied</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Frame Size</label>
                <select name="size" className="w-full bg-zinc-950 border border-zinc-800 focus:border-blue-500 p-5 text-white outline-none transition-all appearance-none font-black uppercase tracking-widest rounded-sm cursor-pointer">
                  <option value="Small">Small (Compact)</option>
                  <option value="Medium">Medium (Balanced)</option>
                  <option value="Large">Large (Heavy Duty)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Logistics */}
          <div className="mb-16">
            <h3 className="text-blue-500 font-black uppercase tracking-[0.3em] mb-10 flex items-center italic">
                <span className="w-10 h-[2px] bg-blue-500 mr-4 shadow-[0_0_8px_#3b82f6]"></span>
                03. Deployment Logistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Delivery Method</label>
                <div className="flex space-x-6 h-[62px] items-center">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="Pickup" 
                      checked={delivery === 'Pickup'} 
                      onChange={() => setDelivery('Pickup')} 
                      className="w-4 h-4 accent-blue-600" 
                    />
                    <span className="mono text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors">LOCAL PICKUP</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="Shipping" 
                      checked={delivery === 'Shipping'} 
                      onChange={() => setDelivery('Shipping')} 
                      className="w-4 h-4 accent-blue-600" 
                    />
                    <span className="mono text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors">FREIGHT SHIPPING</span>
                  </label>
                </div>
              </div>
              {delivery === 'Shipping' && (
                <div className="md:col-span-2 animate-in slide-in-from-top-4 duration-300">
                  <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${touched.address && errors.address ? 'text-red-500' : 'text-zinc-500'}`}>
                    Destination Address
                  </label>
                  <textarea 
                    name="address" 
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('address')} 
                    rows={3} 
                    placeholder="STREET, CITY, STATE, ZIP" 
                  />
                  {touched.address && errors.address && <p className="mt-2 mono text-[9px] text-red-500 font-bold tracking-widest">{errors.address}</p>}
                </div>
              )}
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.4em] py-8 rounded-sm transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] italic text-2xl group relative overflow-hidden"
          >
            <span className="relative z-10">Deploy Build Request</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
          
          <div className="rivet absolute top-6 left-6 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
          <div className="rivet absolute top-6 right-6 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
          <div className="rivet absolute bottom-6 left-6 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
          <div className="rivet absolute bottom-6 right-6 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
        </form>
      </div>
    </div>
  );
};

export default Build;
