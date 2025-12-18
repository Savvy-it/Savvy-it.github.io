
import React, { useState, useEffect } from 'react';
import { Calculator, ChevronRight, Check, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CostEstimator: React.FC = () => {
  const [service, setService] = useState('tech-support');
  const [complexity, setComplexity] = useState(2);
  const [devices, setDevices] = useState(1);
  const [urgency, setUrgency] = useState('normal');
  const [isCalculating, setIsCalculating] = useState(false);
  const [estimate, setEstimate] = useState(0);

  const complexityLabels = ['Minimal', 'Standard', 'Complex', 'Enterprise'];

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      let base = 50;
      if (service === 'ai-automation') base = 180;
      if (service === 'system-overhaul') base = 280;
      if (service === 'coaching') base = 120;
      
      const complexityMultiplier = complexity * 0.6 + 0.4;
      const deviceAddition = (devices - 1) * 35;
      const urgencyMultiplier = urgency === 'emergency' ? 1.75 : 1;

      setEstimate(Math.round((base * complexityMultiplier + deviceAddition) * urgencyMultiplier));
      setIsCalculating(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [service, complexity, devices, urgency]);

  return (
    <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8 lg:p-10 space-y-10 shadow-2xl relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-savvy-purple/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="flex items-center justify-between border-b border-white/5 pb-6">
        <div className="flex items-center gap-4">
          <motion.div 
            animate={isCalculating ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
            className="w-12 h-12 bg-savvy-blue/10 rounded-2xl flex items-center justify-center text-savvy-blue"
          >
            <Calculator size={24} />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">Investment Estimator</h3>
            <p className="text-savvy-lavender text-[10px] uppercase tracking-widest font-bold">Dynamic Pricing Tool</p>
          </div>
        </div>
        <div className="hidden sm:block">
          <AnimatePresence mode="wait">
            {isCalculating ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Loader2 className="animate-spin text-savvy-purple" size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-8 h-8 rounded-full bg-savvy-pink/10 flex items-center justify-center text-savvy-pink"
              >
                <Check size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="group">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 block group-hover:text-savvy-blue transition-colors">Strategic Priority</label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'tech-support', label: 'Technical Fixes' },
                { id: 'ai-automation', label: 'AI & Automation' },
                { id: 'system-overhaul', label: 'System Overhaul' },
                { id: 'coaching', label: '1-on-1 Strategy' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setService(opt.id)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold text-left transition-all border ${
                    service === opt.id 
                    ? 'bg-white text-black border-white shadow-lg scale-[1.02]' 
                    : 'bg-zinc-800 text-zinc-400 border-transparent hover:border-white/10 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Infrastructure Scope</label>
              <motion.span 
                key={devices}
                initial={{ scale: 1.2, color: '#6372eb' }}
                animate={{ scale: 1, color: '#6372eb' }}
                className="text-[10px] font-black uppercase tracking-widest bg-savvy-blue/10 px-2 py-1 rounded"
              >
                Scale: {devices}
              </motion.span>
            </div>
            <input 
              type="range" min="1" max="15" step="1"
              value={devices}
              onChange={(e) => setDevices(parseInt(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-savvy-blue"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Technical Complexity</label>
              <motion.span 
                key={complexity}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] font-black text-savvy-purple uppercase tracking-widest"
              >
                {complexityLabels[complexity - 1]}
              </motion.span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((level) => (
                <button
                  key={level}
                  onClick={() => setComplexity(level)}
                  className={`flex-1 h-1 rounded-full transition-all ${
                    level <= complexity ? 'bg-savvy-purple' : 'bg-zinc-800'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[8px] uppercase tracking-widest font-bold text-zinc-600">
              <span>Low</span>
              <span>Ultra</span>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 block">Delivery Urgency</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setUrgency('normal')}
                className={`py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${urgency === 'normal' ? 'bg-savvy-blue text-white border-savvy-blue shadow-lg' : 'bg-zinc-800 text-zinc-400 border-transparent hover:border-white/10'}`}
              >
                Standard
              </button>
              <button 
                onClick={() => setUrgency('emergency')}
                className={`py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${urgency === 'emergency' ? 'bg-savvy-pink text-black border-savvy-pink shadow-lg shadow-savvy-pink/20' : 'bg-zinc-800 text-zinc-400 border-transparent hover:border-white/10'}`}
              >
                Immediate
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left relative">
          <p className="text-[8px] text-zinc-500 uppercase tracking-[0.4em] font-bold mb-2 flex items-center gap-2">
            Projected Investment Starting At {isCalculating && <Sparkles size={8} className="text-savvy-purple animate-pulse" />}
          </p>
          <div className="flex items-baseline gap-2">
            <motion.span 
              key={estimate}
              initial={{ filter: 'blur(4px)', opacity: 0.5, scale: 0.95 }}
              animate={isCalculating ? { filter: 'blur(2px)', opacity: 0.7 } : { filter: 'blur(0px)', opacity: 1, scale: 1 }}
              className="text-5xl font-serif text-white italic tracking-tighter"
            >
              ${estimate}
            </motion.span>
            <span className="text-zinc-500 text-xs font-bold">AUD*</span>
          </div>
          <p className="text-[8px] text-zinc-600 italic mt-2 uppercase tracking-widest">Subject to strategic discovery and technical audit.</p>
        </div>
        
        <button className="group w-full md:w-auto px-10 py-5 bg-white hover:bg-savvy-blue hover:text-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 shadow-xl shadow-white/5 overflow-hidden relative">
          <div className="absolute inset-0 bg-savvy-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 flex items-center gap-3">
            Reserve Priority Slot
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CostEstimator;
