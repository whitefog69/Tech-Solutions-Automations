import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Palette, PenTool, Layout, Image, Figma, MonitorSmartphone } from 'lucide-react';

const GraphicDesignPage = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 saturate-150 brightness-110"
          src="assets/services/web/hero-video.mp4"
        >
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
            <div className="inline-block p-4 rounded-full bg-secondary-container/20 mb-8 border border-secondary/20 neon-glow-violet">
              <Palette className="w-12 h-12 text-secondary animate-pulse" />
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              Graphic & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-container neon-glow-violet">Web Design</span>
            </h1>
            <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-12">
              Crafting cohesive visual identities and visually striking, user-centric website layouts that align with modern aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: PenTool, title: "Brand Identity & Logo Creation", desc: "Crafting cohesive visual identities that establish a strong, premium market presence." },
            { icon: Layout, title: "Custom Web Interface Design", desc: "Designing visually striking, user-centric website layouts that align with modern aesthetics." },
            { icon: Image, title: "Digital Asset & Marketing Graphics", desc: "Producing high-quality visual content tailored for digital campaigns and brand storytelling." },
            { icon: Figma, title: "UI/UX Prototyping & Wireframing", desc: "Architecting intuitive user journeys through detailed interactive prototypes." },
            { icon: MonitorSmartphone, title: "Responsive Visual Design", desc: "Ensuring pixel-perfect graphic fidelity and fluid layouts across all device platforms." }
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
                "hover:border-secondary/20 hover:shadow-[0_0_20px_rgba(119,1,208,0.05)]"
              )}
            >
              <item.icon className="w-10 h-10 text-secondary mb-6 opacity-80 group-hover:opacity-100 group-hover:text-secondary-container transition-colors" />
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest leading-tight">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-headline text-4xl font-bold mb-8 uppercase tracking-widest text-on-surface">Design Philosophy</h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              Our design ethos is rooted in "Quiet Luxury"—a minimalist yet high-impact approach that prioritizes negative space, premium typography, and seamless interaction.
            </p>
            <ul className="space-y-4">
              {[
                "Pixel-Perfect Graphic Fidelity",
                "Modern Glassmorphism Effects",
                "Micro-Interaction Design",
                "Cross-Platform Visual Consistency"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary neon-glow-violet"></div>
                  <span className="font-headline uppercase tracking-[0.1em] text-sm font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-square rounded-2xl overflow-hidden relative flex items-center justify-center p-12",
              "backdrop-blur-md bg-white/5 border border-white/10",
              "neon-glow-violet"
            )}
          >
             <div className="absolute inset-0 bg-[url('assets/services/web/detail-shot.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             <Palette className="w-48 h-48 text-secondary/10 absolute animate-pulse duration-[4000ms]" />
             
             <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                <div className="border border-secondary/20 rounded-lg p-4 bg-background/40 backdrop-blur-sm flex items-center justify-center">
                   <div className="w-full h-1 bg-secondary shadow-[0_0_10px_rgba(119,1,208,0.2)]"></div>
                </div>
                <div className="border border-secondary/20 rounded-lg p-4 bg-background/40 backdrop-blur-sm flex flex-col gap-2">
                   <div className="w-3/4 h-2 bg-secondary/30 rounded"></div>
                   <div className="w-1/2 h-2 bg-secondary/30 rounded"></div>
                </div>
                <div className="border border-secondary/20 rounded-lg p-4 bg-background/40 backdrop-blur-sm col-span-2 flex items-center justify-center italic font-headline text-secondary tracking-widest text-xs">
                   VISUAL_SOVEREIGNTY_v1.0
                </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;
