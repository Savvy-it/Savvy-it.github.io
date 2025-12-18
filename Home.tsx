
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["WEB DESIGNERS", "TECH EXPERTS", "SAVVY HUMANS", "CREATIVE AGENTS"];
  const typingSpeed = isDeleting ? 50 : 150;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  const skills = [
    { label: 'DESIGN', value: 96 },
    { label: 'BRANDING', value: 84 },
    { label: 'MARKETING', value: 90 },
  ];

  return (
    <Layout image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200">
      <div className="space-y-32">
        {/* Section 1: Hero */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-oswald font-bold uppercase leading-none tracking-tight">
              HELLO! WE ARE <br />
              <span className="bg-unio-gradient bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="text-white cursor-blink">_</span>
            </h1>
          </div>
          
          <p className="text-zinc-400 text-lg max-w-md leading-relaxed font-light">
            Our website is under construction, but we are ready to go! We are preparing something amazing and exciting for you. Special surprise for our subscribers only.
          </p>
          
          <div className="flex flex-col gap-4 max-w-sm">
            <button className="bg-unio-gradient text-white py-5 px-8 font-oswald font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-lg shadow-unio-pink/20">
              NOTIFY ME
            </button>
            <NavLink 
              to="/about" 
              className="border-2 border-white text-white py-5 px-8 font-oswald font-bold uppercase tracking-widest text-sm text-center hover:bg-white hover:text-black transition-all"
            >
              EXPLORE
            </NavLink>
          </div>
        </section>

        {/* Section 2: Progress Bars (from Screenshot 2) */}
        <section className="space-y-12 pt-12 border-t border-white/5">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-oswald font-bold uppercase tracking-tight">
              JUST AWESOME <br />TEMPLATE
            </h2>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed italic">
              "I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!"
            </p>
          </div>

          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.label} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="font-oswald font-bold text-sm tracking-[0.2em]">{skill.label}</span>
                  <span className="font-oswald font-bold text-lg">{skill.value}%</span>
                </div>
                <div className="h-[3px] bg-zinc-800 relative w-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-unio-gradient"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
