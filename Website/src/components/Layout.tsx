import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Search, ChevronDown, Globe, ShoppingBag, Server, Cloud, Sparkles, Brain, LayoutGrid, Github } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const serviceLinks = [
    { name: 'Virtualization & Cloud', path: '/services/cloud' },
    { name: 'Precision Web & Ecom Development', path: '/services/web-dev' },
    { name: 'AI & Automation', path: '/services/ai-systems' },
    { name: 'Shopify, WordPress Integrations & App Development', path: '/services/shopify' },
    { name: 'Graphic & Web Design', path: '/services/design' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_0_40px_rgba(177,197,255,0.08)] flex justify-between items-center h-20 px-8 max-w-full">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-bold tracking-tighter text-on-surface font-headline uppercase">
          Tech Solutions & Automations
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link 
            to="/" 
            className={cn(
              "font-headline tracking-[0.05em] uppercase text-sm transition-colors",
              location.pathname === '/' ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "font-headline tracking-[0.05em] uppercase text-sm transition-colors",
              location.pathname === '/about' ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
            )}
          >
            about us
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              to="/services"
              className={cn(
                "font-headline tracking-[0.05em] uppercase text-sm transition-colors flex items-center gap-1",
                location.pathname.startsWith('/services') ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
              )}
            >
              Services <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
            </Link>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 mt-2 bg-surface-container-low border border-outline-variant/20 shadow-2xl backdrop-blur-2xl rounded-sm overflow-hidden"
                >
                  <div className="py-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-6 py-3 text-xs font-headline uppercase tracking-widest text-on-surface-variant hover:bg-primary-container/10 hover:text-primary transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-outline-variant/10 mt-2 pt-2">
                      <Link
                        to="/services"
                        className="block px-6 py-3 text-[10px] font-headline uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition-colors"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/contact" 
            className={cn(
              "font-headline tracking-[0.05em] uppercase text-sm transition-colors",
              location.pathname === '/contact' ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
            )}
          >
            Contact
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 rounded-full">
          <Search className="text-on-surface-variant w-4 h-4 mr-2" />
          <input 
            className="bg-transparent border-none text-xs tracking-widest focus:outline-none w-32 placeholder:text-on-surface-variant/40" 
            placeholder="SYSTEM SEARCH" 
            type="text"
          />
        </div>
        <Link to="/contact" className="bg-gradient-to-br from-primary-container to-primary text-on-primary px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-widest active:scale-95 transition-transform shadow-[0_0_15px_rgba(0,71,171,0.4)]">
          Consult Now
        </Link>
        <Terminal className="text-primary cursor-pointer w-6 h-6" />
      </div>
    </nav>
  );
};

export const Footer = () => {
  const techStack = [
    { name: 'WordPress', icon: <img src="/assets/icons/wordpress.png" alt="WordPress" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'Shopify', icon: <img src="/assets/icons/shopify.png" alt="Shopify" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'AWS', icon: <img src="/assets/icons/aws.png" alt="AWS" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'Microsoft Azure', icon: <img src="/assets/icons/azure.png" alt="Azure" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'Linux', icon: <img src="/assets/icons/linux.png" alt="Linux" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'Windows', icon: <img src="/assets/icons/windows.png" alt="Windows" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'Github', icon: <img src="/assets/icons/github.png" alt="Github" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'Google Gemini', icon: <img src="/assets/icons/gemini.png" alt="Gemini" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
    { name: 'Claude', icon: <img src="/assets/icons/claude.png" alt="Claude" className="w-6 h-6 object-contain brightness-0 invert opacity-70 group-hover/item:brightness-100 group-hover/item:invert-0 group-hover/item:opacity-100 transition-all duration-500" /> },
  ];

  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface-container-lowest">
      {/* Tech Stack Section */}
      <div className="py-20 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface text-center mb-16 tracking-tight">
            Powering Your Digital Ecosystem
          </h2>
          
          <div className="relative overflow-hidden group">
            {/* Infinite Marquee Wrapper */}
            <div className="flex whitespace-nowrap overflow-hidden">
              <motion.div 
                animate={{ x: [0, -1920] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-12 items-center min-w-full"
              >
                {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 px-8 py-4 glass-card border-outline-variant/5 hover:border-primary/20 transition-all grayscale opacity-40 hover:grayscale-0 hover:opacity-100 group/item"
                  >
                    <div className="text-primary-fixed-dim group-hover/item:text-primary transition-colors flex items-center justify-center w-8 h-8">
                      {tech.icon}
                    </div>
                    <span className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient Fades for Smooth Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-lowest to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-lowest to-transparent z-10"></div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 flex flex-col md:flex-row justify-between items-center px-12 gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline font-black text-on-surface text-xl uppercase tracking-tighter">Tech Solutions & Automations</span>
          <p className="font-body text-[10px] tracking-[0.1em] uppercase text-on-surface/30">© 2024 Tech Solutions & Automations. Technical Authority Secured.</p>
        </div>
        <div className="flex gap-8">
          <a className="font-body text-[10px] tracking-[0.1em] uppercase text-on-surface/30 hover:text-on-surface transition-colors" href="#">Privacy Protocol</a>
          <a className="font-body text-[10px] tracking-[0.1em] uppercase text-on-surface/30 hover:text-on-surface transition-colors" href="#">Security Whitepaper</a>
          <a className="font-body text-[10px] tracking-[0.1em] uppercase text-on-surface/30 hover:text-on-surface transition-colors" href="#">Network Status</a>
          <a className="font-body text-[10px] tracking-[0.1em] uppercase text-on-surface/30 legal" href="#">Legal</a>
        </div>
      </div>
    </footer>
  );
};
