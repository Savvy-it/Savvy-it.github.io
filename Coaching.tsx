
import React from 'react';
import Layout from '../components/Layout';
import { UserCheck, BookOpen, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Coaching: React.FC = () => {
  const pillars = [
    { title: 'Technical Literacy', desc: 'Understanding the tools you use every day without the fear of breaking them.', icon: <BookOpen size={24} /> },
    { title: 'Strategic Planning', desc: 'Mapping out your digital growth and technology roadmap for the next 5 years.', icon: <TrendingUp size={24} /> },
    { title: 'Empowered Usage', desc: 'Moving from reactive troubleshooting to proactive mastery of your systems.', icon: <UserCheck size={24} /> },
    { title: 'Ongoing Support', desc: 'A dedicated coach available to answer questions as your business evolves.', icon: <MessageSquare size={24} /> }
  ];

  return (
    <Layout image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200&h=1600">
      <div className="space-y-24 pb-32">
        <header className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-savvy-lavender font-bold uppercase tracking-[0.6em] text-[10px] block">COACHING</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-8 tracking-tighter leading-tight">Don't just use tech. <br /><span className="text-savvy-blue">Master it.</span></h2>
          <p className="text-zinc-500 text-lg max-w-md font-light leading-relaxed">Our coaching isn't about teaching you to code—it's about teaching you to think like a technical strategist.</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {pillars.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start p-10 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] hover:border-white/20 hover:bg-zinc-900 transition-all duration-700 group"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-zinc-500 group-hover:bg-savvy-blue group-hover:text-white transition-all duration-700">
                {p.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-savvy-blue transition-colors">{p.title}</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-light max-w-lg">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-12">
          <button className="group relative overflow-hidden w-full md:w-auto px-12 py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-[11px] rounded-3xl transition-all duration-700 hover:shadow-2xl">
            <div className="absolute inset-0 bg-savvy-blue translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]"></div>
            <span className="relative z-10 flex items-center justify-center gap-4 group-hover:text-white transition-colors">
              Inquire About Coaching <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Coaching;
