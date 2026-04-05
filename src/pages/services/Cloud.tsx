import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Server, Shield, Cloud, Cpu, Lock, Network } from 'lucide-react';

const CloudPage = () => {
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
          <source src="assets/services/cloud/cloud-hero.mp4" type="video/mp4" />
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
            <div className="inline-block p-4 rounded-full bg-primary-container/20 mb-8 border border-primary/20 neon-glow-cobalt">
              <Server className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              Virtualization & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container neon-glow-cobalt">Cloud</span>
            </h1>
            <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-12">
              Expert orchestration of cloud infrastructure and virtualization environments for enterprise stability and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Server, title: "Server Creation & Management", desc: "End-to-end setup and oversight of high-performance server environments." },
            { icon: Cloud, title: "AWS & Cloud Infrastructure", desc: "Expert orchestration of Amazon Web Services and multi-cloud ecosystems." },
            { icon: Network, title: "Oracle Cloud Solutions", desc: "Specialized deployment and management of Oracle Cloud Infrastructure (OCI)." },
            { icon: Cpu, title: "Linux Virtualization", desc: "Precise configuration of Linux-based virtual environments for stability and security." },
            { icon: Lock, title: "Windows Virtualization", desc: "Seamless implementation of Windows virtual systems for enterprise operations." }
          ].map((item, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className={cn(
              "p-10 rounded-2xl transition-all duration-500 hover:scale-[1.02] group",
              "backdrop-blur-md bg-white/5 border border-white/5",
              "hover:border-primary/20 hover:shadow-[0_0_20px_rgba(0,71,171,0.05)]"
            )}
            >              <item.icon className="w-10 h-10 text-primary mb-6 opacity-80 group-hover:opacity-100 group-hover:text-primary-container transition-colors" />
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest leading-tight">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architectural Specs */}
      <section className="py-24 px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-headline text-4xl font-bold mb-8 uppercase tracking-widest text-on-surface">Architectural Specifications</h2>
            <ul className="space-y-6">
              {[
                "Zero-Trust Network Architecture (ZTNA)",
                "Immutable Infrastructure Deployment",
                "Automated Load Balancing & Failover",
                "Hardware-Rooted Trust Chains",
                "Post-Quantum Encryption Protocols"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface-variant bg-surface-container-low p-4 rounded-lg border border-outline-variant/10">
                  <div className="w-2 h-2 rounded-full bg-primary neon-glow-cobalt"></div>
                  <span className="font-body uppercase tracking-[0.1em] text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden relative flex items-center justify-center",
              "backdrop-blur-md bg-white/5 border border-white/10",
              "neon-glow-cobalt"
            )}
          >
             {/* Using standard img tags as placeholders for the Nano Banana prompts */}
             <div className="absolute inset-0 bg-[url('assets/services/cloud/detail-shot.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
             
             <Lock className="w-24 h-24 text-primary/30 absolute" />
             <div className="font-mono text-[11px] text-primary/60 leading-relaxed p-8 relative z-10 bg-background/40 backdrop-blur-sm rounded-xl border border-primary/20 m-8">
               {`// KERNEL_HARDENING_INIT
async function initializeSovereignPerimeter() {
  const nodes = await Hypervisor.fetchActiveNodes();
  for (const node of nodes) {
    node.applyZeroTrustPolicies();
    node.encryptDataAtRest({ protocol: 'AES-256-GCM' });
  }
  return { status: 'SECURE', compliance: 'MAXIMUM' };
}

initializeSovereignPerimeter();`}
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudPage;
