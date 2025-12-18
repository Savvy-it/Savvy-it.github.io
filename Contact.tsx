
import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Book a Tech Tune-Up',
    message: ''
  });

  const subjects = [
    'Book a Tech Tune-Up',
    'Training & Coaching Sessions',
    'AI & Automation Audit',
    'Ask a Quick Question'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: 'Book a Tech Tune-Up', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectSubject = (subject: string) => {
    setFormData(prev => ({ ...prev, subject }));
    setIsDropdownOpen(false);
  };

  return (
    <Layout image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1200&h=1600">
      <div className="space-y-24 pb-32">
        <header className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-savvy-lavender font-bold uppercase tracking-[0.8em] text-[10px] block">CONTACT</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif italic text-white leading-tight tracking-tighter"
          >
            Human support <br />is a <span className="text-savvy-blue">click</span> away.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/5 w-fit px-6 py-3 rounded-2xl"
          >
            <Clock size={16} className="text-savvy-purple" />
            Response time: &lt; 4 business hours
          </motion.div>
        </header>

        <div className="relative">
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-zinc-900 border border-savvy-blue/30 p-16 rounded-[3rem] text-center space-y-8"
              >
                <div className="w-24 h-24 bg-savvy-blue rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-savvy-blue/40">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-serif text-white italic">Transmission Received.</h3>
                  <p className="text-zinc-500 text-sm max-w-xs mx-auto font-light leading-relaxed">
                    Thank you for reaching out. A technical strategist will contact you shortly.
                  </p>
                </div>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-[11px] font-black uppercase tracking-[0.5em] text-white hover:text-savvy-purple transition-colors pt-8 block mx-auto underline underline-offset-[12px]"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <label className="absolute -top-8 left-0 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 group-focus-within:text-savvy-blue transition-colors">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-5 text-white font-light focus:outline-none focus:border-savvy-blue transition-all placeholder:text-zinc-800" 
                      placeholder="e.g. Alex Sterling" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="absolute -top-8 left-0 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 group-focus-within:text-savvy-blue transition-colors">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-5 text-white font-light focus:outline-none focus:border-savvy-blue transition-all placeholder:text-zinc-800" 
                      placeholder="e.g. alex@provider.com" 
                    />
                  </div>
                </div>
                
                <div className="group relative" ref={dropdownRef}>
                  <label className="absolute -top-8 left-0 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 group-focus-within:text-savvy-blue transition-colors">Service Interest</label>
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border-b border-white/10 py-5 flex justify-between items-center cursor-pointer group-hover:border-savvy-blue transition-all"
                  >
                    <span className={`font-light ${formData.subject ? 'text-white' : 'text-zinc-800'}`}>
                      {formData.subject}
                    </span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    >
                      <ChevronDown size={20} className="text-zinc-700" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-full mt-2 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden z-[100] shadow-2xl"
                      >
                        {subjects.map((s) => (
                          <div
                            key={s}
                            onClick={() => selectSubject(s)}
                            className="px-6 py-4 hover:bg-savvy-blue hover:text-white text-zinc-400 text-sm cursor-pointer transition-all border-b border-white/5 last:border-0"
                          >
                            {s}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="group relative">
                  <label className="absolute -top-8 left-0 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 group-focus-within:text-savvy-blue transition-colors">Inquiry Details</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-transparent border-b border-white/10 py-5 text-white font-light focus:outline-none focus:border-savvy-blue transition-all resize-none placeholder:text-zinc-800" 
                    placeholder="Describe your current tech landscape..."
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  className="group relative overflow-hidden bg-white text-black w-full py-8 rounded-3xl font-black uppercase tracking-[0.6em] text-[11px] transition-all duration-700 disabled:opacity-50 shadow-2xl shadow-white/5"
                >
                  <div className="absolute inset-0 bg-savvy-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.19,1,0.22,1]"></div>
                  <span className="relative z-10 flex items-center justify-center gap-6 group-hover:text-white transition-colors">
                    {formState === 'submitting' ? (
                      <><Loader2 className="animate-spin" size={20} /> Processing...</>
                    ) : (
                      <><Send size={20} /> Send Transmission</>
                    )}
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-24 border-t border-white/5">
          <a href="tel:217-986-0863" className="flex flex-col gap-8 p-10 bg-zinc-900/40 rounded-[2.5rem] border border-white/5 group hover:border-savvy-purple/40 transition-all duration-500">
            <div className="w-14 h-14 bg-savvy-purple/10 rounded-2xl flex items-center justify-center text-savvy-purple border border-savvy-purple/20 group-hover:bg-savvy-purple group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.4em] mb-3">Direct Line</p>
              <p className="text-white text-xl font-light group-hover:text-savvy-blue transition-colors">217-986-0863</p>
            </div>
          </a>
          <a href="mailto:renee.i@Savvyhuman.tech" className="flex flex-col gap-8 p-10 bg-zinc-900/40 rounded-[2.5rem] border border-white/5 group hover:border-savvy-purple/40 transition-all duration-500">
            <div className="w-14 h-14 bg-savvy-purple/10 rounded-2xl flex items-center justify-center text-savvy-purple border border-savvy-purple/20 group-hover:bg-savvy-purple group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.4em] mb-3">Electronic Mail</p>
              <p className="text-white text-xl font-light group-hover:text-savvy-blue transition-colors break-all">renee.i@Savvyhuman.tech</p>
            </div>
          </a>
          <div className="flex flex-col gap-8 p-10 bg-zinc-900/40 rounded-[2.5rem] border border-white/5">
            <div className="w-14 h-14 bg-savvy-purple/10 rounded-2xl flex items-center justify-center text-savvy-purple border border-savvy-purple/20">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.4em] mb-3">Location Hub</p>
              <p className="text-white text-xl font-light uppercase tracking-widest">Taylorville, IL</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
