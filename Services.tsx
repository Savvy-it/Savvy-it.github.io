
import React from 'react';
import Layout from '../components/Layout';
import CostEstimator from '../components/CostEstimator';
import { Monitor, Shield, Zap, Cpu } from 'lucide-react';
// Added Variants type from framer-motion to resolve type inference issues
import { motion, Variants } from 'framer-motion';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Computer Checkups',
      icon: <Monitor />,
      desc: 'Complete hardware and software health assessment to identify issues before they become disasters.'
    },
    {
      title: 'Performance Optimization',
      icon: <Zap />,
      desc: 'Expert tuning to make your systems fast again. No magic — just methodical, expert optimization.'
    },
    {
      title: 'Security Hardening',
      icon: <Shield />,
      desc: 'Protecting your personal and business data from evolving digital threats.'
    },
    {
      title: 'Hardware Overhauls',
      icon: <Cpu />,
      desc: 'Strategic upgrades that extend the life of your equipment and maximize your ROI.'
    }
  ];

  // Explicitly typing variants to fix staggerChildren/index signature error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Explicitly typing variants and using 'as const' for the cubic-bezier array to fix Easing type mismatch
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const }
    }
  };

  return (
    <Layout image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=1600">
      <div className="space-y-12 pb-20">
        <header>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-savvy-lavender font-bold uppercase tracking-[0.4em] text-[10px] block mb-4"
          >
            TECHNICAL SERVICES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic text-white mb-6"
          >
            Transparent pricing, <br />tangible results.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-sm max-w-md"
          >
            Detailed breakdown of our technical services and what each one includes. We don't hide behind technical jargon.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CostEstimator />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {serviceList.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-savvy-blue/30 transition-all"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-savvy-blue group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">{item.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Services;
