
import React from 'react';
import Layout from '../components/Layout';
import { Bot, Code, Settings, Workflow, CheckCircle2, Cpu, Zap, Share2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const AIAutomation: React.FC = () => {
  const platforms = [
    { name: 'ChatGPT', sub: 'OpenAI Conversational AI', icon: <Bot size={18} /> },
    { name: 'Claude', sub: 'Anthropic\'s Assistant', icon: <Cpu size={18} /> },
    { name: 'Google AI', sub: 'Gemini Ecosystem', icon: <Layers size={18} /> },
    { name: 'Microsoft Copilot', sub: 'Office 365 AI', icon: <Zap size={18} /> },
    { name: 'Custom GPTs', sub: 'Specialized Agents', icon: <Settings size={18} /> },
    { name: 'Automation', sub: 'Zapier & Make', icon: <Share2 size={18} /> }
  ];

  const services = [
    {
      title: 'AI Tool Setup & Training',
      icon: <Bot className="text-white" />,
      desc: 'Get ChatGPT, Claude, or Copilot configured for your specific business needs with customized safety and privacy filters.',
      accent: 'border-savvy-blue/30'
    },
    {
      title: 'Custom Workflows',
      icon: <Workflow className="text-white" />,
      desc: 'Connect your apps, automate repetitive tasks, and build robust workflows that run silently in the background.',
      accent: 'border-savvy-purple/30'
    },
    {
      title: 'Process Streamlining',
      icon: <Settings className="text-white" />,
      desc: 'A comprehensive audit of your current processes to identify bottlenecks and implement high-impact automation.',
      accent: 'border-savvy-lavender/30'
    },
    {
      title: 'Custom Scripting',
      icon: <Code className="text-white" />,
      desc: 'Bespoke SQL, PowerShell, Python, or JavaScript solutions for complex integrations when off-the-shelf tools fail.',
      accent: 'border-savvy-pink/30'
    }
  ];

  return (
    <Layout image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=1600">
      <div className="space-y-20 pb-20">
        <header>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-savvy-lavender font-bold uppercase tracking-[0.4em] text-[10px] block mb-4"
          >
            INTELLIGENT SYSTEMS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic text-white mb-6 leading-tight"
          >
            Future-proof your <br />daily operations.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-sm max-w-md leading-relaxed"
          >
            We're tool-agnostic technical strategists. We help you find and implement the right AI for your specific constraints, goals, and legacy systems.
          </motion.p>
        </header>

        {/* Platforms Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap">Platforms We Master</h3>
            <div className="h-[1px] w-full bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-zinc-900/40 border border-white/5 p-6 rounded-2xl flex items-center gap-5 hover:bg-zinc-900 transition-all duration-300 hover:border-savvy-purple/40"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-savvy-purple group-hover:bg-savvy-purple/10 transition-colors">
                  {p.icon}
                </div>
                <div>
                  <span className="text-white font-bold text-sm block mb-0.5 group-hover:text-savvy-purple transition-colors">{p.name}</span>
                  <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-black">{p.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap">What We Deliver</h3>
            <div className="h-[1px] w-full bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl bg-zinc-900 border ${s.accent} flex flex-col gap-6 hover:shadow-2xl hover:shadow-black/50 transition-all group`}
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-savvy-blue transition-all duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-500 text-zinc-400 group-hover:text-white">
                    {s.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-3 leading-tight group-hover:text-savvy-blue transition-colors">{s.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{s.desc}</p>
                </div>
                <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-white transition-colors cursor-pointer">
                  Explore Capacity <Zap size={10} className="text-savvy-purple" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-savvy-blue/20 to-savvy-purple/5 border border-savvy-blue/20 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-savvy-blue/10 blur-[100px] rounded-full"></div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="hidden sm:flex w-16 h-16 bg-savvy-blue rounded-2xl items-center justify-center text-white shadow-lg shadow-savvy-blue/20">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-1">Ready to automate your first workflow?</h4>
              <p className="text-zinc-400 text-xs font-light">Join forward-thinking teams using AI to reclaim 10+ hours a week.</p>
            </div>
          </div>
          
          <button className="group relative z-10 w-full md:w-auto px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-savvy-blue hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
            Start Discovery Session
            <Share2 size={14} className="group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AIAutomation;
