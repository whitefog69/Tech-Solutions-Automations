import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Zap, Code2, Palette, Database, Layers, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface PanelProps {
  title: string;
  focus: string;
  icon: React.ElementType;
  services: { name: string; desc: string }[];
}

const ArchitecturePanel = ({ title, focus, icon: Icon, services }: PanelProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={cn(
      "group relative overflow-hidden p-8 border border-white/5 bg-surface-container-low/20 transition-all duration-500",
      "hover:border-primary/40 hover:bg-surface-container-low/40 hover:shadow-[0_0_20px_rgba(0,71,171,0.05)]"
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-headline font-bold uppercase tracking-widest text-on-surface">{title}</h3>
          <p className="text-[10px] text-primary uppercase tracking-[0.2em]">{focus}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {services.map((s, i) => (
          <li key={i} className="border-l border-outline-variant/20 pl-4 group-hover:border-primary/50 transition-colors">
            <p className="font-headline text-xs font-bold uppercase text-on-surface mb-1">{s.name}</p>
            <p className="font-body text-xs text-on-surface-variant/60">{s.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-32 py-20 px-8 md:px-16 overflow-hidden rounded-3xl border border-[#4DA6FF]/20 bg-surface/40 backdrop-blur-xl shadow-[0_0_50px_rgba(77,166,255,0.05)]">
          {/* Lighting / Overlays - Digital Grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(77,166,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,255,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}
          />
          {/* Atmospheric Light Leaks */}


          <header className="relative z-10 text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-headline text-5xl md:text-7xl font-black uppercase tracking-[0.15em] text-[#FFFFFF]"
              style={{
                textShadow: "0 0 30px rgba(77,166,255,0.4), 0 0 10px rgba(255,255,255,0.2)"
              }}
            >
              ABOUT US
            </motion.h1>
          </header>

          <section className="relative z-10 text-center max-w-4xl mx-auto space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-headline text-xl md:text-2xl font-medium uppercase tracking-[0.2em] mb-6 text-[#4DA6FF]">OUR STORY</h2>
              <p className="font-body text-lg md:text-xl font-light text-[#E0E0E0] leading-relaxed max-w-3xl mx-auto">
                Founded on the principles of robust systems architecture and advanced cybersecurity, we understand that true luxury in the digital space means flawless performance and total control. We bridge the gap between complex engineering and elegant design, transforming intricate technical challenges into streamlined, intuitive ecosystems. Whether we are deploying state-of-the-art React applications or architecting intelligent AI workflows, our approach is defined by precision and purpose.
              </p>
            </motion.div>

            {/* Glowing Divider */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="relative h-[2px] w-4/5 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4DA6FF] to-[#E0E0E0] opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4DA6FF] to-[#E0E0E0] blur-[4px] opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="font-headline text-xl md:text-2xl font-medium uppercase tracking-[0.2em] mb-6 text-[#4DA6FF]">THE MISSION</h2>
              <p className="font-body text-lg md:text-xl font-light text-[#E0E0E0] leading-relaxed max-w-3xl mx-auto">
                At Tech Solutions & Automations, we don't just build applications; we architect digital authority. We empower your business to scale, innovate, and lead through our core specializations.
              </p>
            </motion.div>
          </section>
        </div>

        <section>
          <h2 className="font-headline text-2xl font-bold uppercase tracking-widest mb-12 text-primary">The Architecture Process: Service Integration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ArchitecturePanel 
              title="Architecture" 
              focus="The Blueprint" 
              icon={Database}
              services={[
                { name: "Cloud & Virtualization", desc: "Designing the scalable server environment, virtual network topology, and security perimeters." },
                { name: "Graphic & Web Design", desc: "Wireframing the user experience, designing the UI, and establishing visual brand guidelines." }
              ]}
            />
            <ArchitecturePanel 
              title="Engineering" 
              focus="The Build" 
              icon={Code2}
              services={[
                { name: "Precision Web & App Dev", desc: "Writing core application logic, front-end components, and backend APIs." },
                { name: "AI & Automation", desc: "Developing intelligent bot flows, automating processes, and ML models." },
                { name: "Shopify & WordPress", desc: "Customizing e-commerce architecture, headless storefronts, or integration channels." }
              ]}
            />
            <ArchitecturePanel 
              title="Deployment" 
              focus="The Launch" 
              icon={Rocket}
              services={[
                { name: "Cloud & Virtualization", desc: "Executing final production deployment and locking down endpoints." },
                { name: "Finalization", desc: "Pushing web, app, and AI systems live with seamless automated workflows." }
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
