import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Smartphone, Layout, Blocks, ScanLine, Layers, Code2, Globe, ShoppingBag } from 'lucide-react';

const WebDevPage = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/services/web/web-dev-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for Depth and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-4 rounded-full bg-secondary-fixed-dim/10 mb-8 border border-secondary-fixed-dim/20 neon-glow-violet">
              <Globe className="w-12 h-12 text-[#dcb8ff] animate-pulse" />
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              Precision Web & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dcb8ff] to-[#7701d0]" style={{textShadow: "0 0 20px rgba(220,184,255,0.1)"}}>Ecom Development</span>
            </h1>
            <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-12">
              Bespoke web and e-commerce engineering focused on speed, clean architecture, and high-conversion experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Code2, title: "WordPress Engineering", desc: "Bespoke WordPress builds focused on speed and clean architecture." },
            { icon: ShoppingBag, title: "Shopify Development", desc: "Specialized e-commerce development for high-conversion web presence." },
            { icon: Blocks, title: "Custom Web Dev", desc: "Building robust, scalable websites using modern full-stack frameworks." },
            { icon: Layout, title: "UI/UX Optimization", desc: "Refining digital assets to meet a minimalist, 'quiet luxury' aesthetic." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "p-10 rounded-2xl transition-all duration-500 hover:scale-[1.02] group",
                "backdrop-blur-md bg-white/5 border border-white/5",
                "hover:border-[#dcb8ff]/20 hover:shadow-[0_0_20px_rgba(220,184,255,0.05)]"
              )}
            >
              <item.icon className="w-10 h-10 text-[#dcb8ff] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest leading-tight">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Specs */}
      <section className="py-24 px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-auto min-h-[400px] rounded-2xl overflow-hidden relative flex items-center justify-center p-12",
              "backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(220,184,255,0.05)]"
            )}
          >
             {/* Using standard img tags as placeholders for the Nano Banana prompts */}
             <div className="absolute inset-0 bg-[url('/assets/services/web/detail-shot.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
             
             <ScanLine className="w-48 h-48 text-[#dcb8ff]/10 absolute" />
             
             <div className="relative z-10 w-full space-y-4 font-mono text-sm">
               <div className="bg-[#1a1a1a]/80 p-4 border border-[#dcb8ff]/20 rounded backdrop-blur">
                  <span className="text-[#dcb8ff]">import</span> {'{ SovereignArchitecture }'} <span className="text-[#dcb8ff]">from</span> '@core/headless';
                  <br/><br/>
                  <span className="text-secondary-container">const</span> app = <span className="text-[#dcb8ff]">await</span> SovereignArchitecture.build({'{'} <br/>
                  &nbsp;&nbsp;performance: <span className="text-primary-container">'MAXIMUM'</span>, <br/>
                  &nbsp;&nbsp;ux: <span className="text-primary-container">'SEAMLESS'</span> <br/>
                  {'}'});
               </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-headline text-4xl font-bold mb-8 uppercase tracking-widest text-on-surface">Interface Protocol</h2>
            <ul className="space-y-6">
              {[
                "100/100 Core Web Vitals",
                "Edge-Rendered Content Delivery",
                "Progressive Web App (PWA) Standard",
                "Advanced State Architecture Components"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface-variant">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#dcb8ff] shadow-[0_0_5px_rgba(220,184,255,0.4)]"></div>
                  <span className="font-body uppercase tracking-[0.1em] text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevPage;
