
import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=1600">
      <div className="space-y-12 pb-20">
        <header>
          <span className="text-savvy-lavender font-bold uppercase tracking-[0.6em] text-[10px] block mb-4">OUR STORY</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8 tracking-tighter">High-tech expertise. <br />Human connection.</h2>
        </header>

        <div className="prose prose-invert prose-sm max-w-none text-zinc-400 space-y-8">
          <p className="text-xl leading-relaxed text-zinc-300 font-light">
            Savvy IT was founded on a simple realization: the gap between powerful technology and the people who need it is growing wider every day.
          </p>
          <p className="leading-relaxed">
            We don't just provide "IT support." We provide clarity. We believe that technology should be an invisible engine for your growth, not a constant source of friction. Our approach combines decades of deep technical expertise with a commitment to plain language and transparent partnership.
          </p>
          <p className="leading-relaxed">
            Based in <span className="text-white font-bold">Taylorville, Illinois</span>, we serve our local community and clients globally. We've helped hundreds of small businesses and high-performing individuals reclaim their time by fixing what's broken and automating what's tedious.
          </p>
        </div>

        <section className="pt-16 border-t border-white/10">
          <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-12">THE SAVVY MANIFESTO</h3>
          <div className="space-y-12">
            <div className="flex gap-8 group">
              <span className="text-savvy-purple font-serif italic text-4xl group-hover:scale-110 transition-transform">01.</span>
              <div className="space-y-2">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest group-hover:text-savvy-blue transition-colors">Results Over Jargon</h4>
                <p className="text-zinc-500 text-sm font-light max-w-md">We speak in outcomes, not acronyms. You'll always know exactly what we're doing and why. If you don't understand it, we haven't done our job.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-savvy-purple font-serif italic text-4xl group-hover:scale-110 transition-transform">02.</span>
              <div className="space-y-2">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest group-hover:text-savvy-blue transition-colors">Proactive Optimization</h4>
                <p className="text-zinc-500 text-sm font-light max-w-md">A fix is good, but a permanent improvement is better. We look for root causes, not just symptoms. We build systems that last.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-savvy-purple font-serif italic text-4xl group-hover:scale-110 transition-transform">03.</span>
              <div className="space-y-2">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest group-hover:text-savvy-blue transition-colors">Human-Centric Design</h4>
                <p className="text-zinc-500 text-sm font-light max-w-md">Systems are only useful if humans can use them effectively. We design for usability, empowerment, and joy in daily operations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-white/5 p-10 rounded-[2.5rem] mt-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-savvy-blue via-savvy-purple to-savvy-pink"></div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-4">
              <h4 className="text-2xl font-bold text-white tracking-tight">Meet the Founder</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                With a passion for bridge-building between human needs and digital power, Renee leads Savvy IT with the belief that anyone can master their technology with the right guide.
              </p>
            </div>
            <div className="w-32 h-32 rounded-full bg-savvy-blue/20 border border-savvy-blue/20 flex items-center justify-center text-savvy-blue font-serif italic text-4xl shadow-xl shadow-savvy-blue/10">
              RI
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
