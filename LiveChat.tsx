
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const MAX_CHARS = 500;

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Savvy, your technical assistant. How can I help you simplify your technology today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  // Initialize Gemini Chat
  useEffect(() => {
    if (!chatRef.current && isOpen) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are "Savvy", the virtual assistant for Savvy IT. Your mission is to embody the brand's core philosophy: "We don't just fix it. We teach it."

TONE & VOICE:
- Human-friendly, warm, and professional.
- Absolutely jargon-free. If a technical term is necessary, explain it simply.
- Helpful and proactive, never salesy or pushy.
- Concise, clear, and focused on solutions.

SAVVY IT CORE SERVICES:
1. Technical Services: Hardware/software health assessments, performance optimization, security hardening, and general troubleshooting. We make devices run like they should have from day one.
2. 1:1 Coaching & Training: Personalized sessions for individuals, families, or businesses. We teach digital literacy, strategic tech planning, and empowered usage.
3. AI & Automation: Setting up AI tools (ChatGPT, Claude, Copilot), building automated workflows (Zapier, Make), process audits, and custom scripting.

PRICING STRUCTURE (General starting estimates):
- Technical Fixes: Starting around $50.
- AI & Automation: Starting around $180.
- 1:1 Coaching: Starting around $120.
- System Overhauls: Starting around $280.
- Note: Final costs vary based on complexity, the number of devices, and urgency (Emergency/Immediate service carries a 1.75x multiplier).

LOCATION & LEADERSHIP:
- Based in Taylorville, Illinois, serving the local community and clients globally.
- Founded by Renee, a technical strategist who believes technology should be an invisible engine for growth, not a source of friction.

GOALS:
- Guide users to the right service for their needs.
- Provide quick, helpful answers about Savvy IT.
- Encourage users to visit the Contact page to "Book a Session" or "Ask a Question" for a formal inquiry.
- If a question is too complex, politely suggest they reach out to Renee directly via the contact form for a discovery session.`,
        },
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessageStream({ message: userMessage });
      
      let assistantContent = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      for await (const chunk of response) {
        const c = chunk as GenerateContentResponse;
        assistantContent += c.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = assistantContent;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm having a bit of trouble connecting right now. Please try again in a moment, or reach out to us directly through the contact page!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-gradient-to-r from-savvy-blue/10 to-savvy-purple/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-savvy-blue flex items-center justify-center text-white shadow-lg shadow-savvy-blue/20">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Savvy Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Active & Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-zinc-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.role === 'user' ? 'bg-savvy-purple text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-savvy-blue text-white rounded-tr-none' 
                        : 'bg-white/5 text-zinc-300 border border-white/5 rounded-tl-none shadow-inner shadow-white/5'
                    }`}>
                      {msg.content || (isLoading && i === messages.length - 1 ? <Loader2 size={14} className="animate-spin opacity-50" /> : null)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-zinc-900/50 border-t border-white/5">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  maxLength={MAX_CHARS}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm text-white focus:outline-none focus:border-savvy-blue transition-all placeholder:text-zinc-700"
                />
                
                {/* Character Counter */}
                <div className={`absolute -top-6 right-2 text-[8px] font-bold uppercase tracking-widest transition-colors ${
                  input.length >= MAX_CHARS ? 'text-savvy-pink' : 'text-zinc-600'
                }`}>
                  {input.length} / {MAX_CHARS}
                </div>

                {/* Enhanced Send Button */}
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-savvy-blue hover:text-white transition-all disabled:opacity-50 group"
                  aria-label="Send Message"
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </button>
              </div>
              <p className="text-[9px] text-center text-zinc-600 mt-3 uppercase tracking-widest font-black flex items-center justify-center gap-1.5">
                <Sparkles size={10} className="text-savvy-lavender" /> Human support amplified by AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? 'bg-zinc-800 text-white rotate-90' : 'bg-savvy-blue text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-savvy-pink rounded-full border-2 border-zinc-950"></span>
        )}
      </motion.button>
    </div>
  );
};

export default LiveChat;
