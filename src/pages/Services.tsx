import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Brain, Terminal, ShoppingBag, CheckCircle, Settings2, Code2, Activity, Headset, Bolt, Globe, Palette, Server, Key, Workflow, RefreshCw, BarChart } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
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
          <source src={`${import.meta.env.BASE_URL}assets/services-banner.mp4`} type="video/mp4" />
        </video>
        
        {/* Overlay for Depth and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]"></div>
        
        {/* Decorative 3D Glass elements */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotate: 0 }}
          animate={{ opacity: 0.1, x: 0, rotate: 12 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/4 -left-20 w-64 h-64 glass-card rounded-xl hidden lg:block z-[2]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 0 }}
          animate={{ opacity: 0.1, x: 0, rotate: -12 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 glass-card rounded-xl hidden lg:block z-[2]"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-primary-fixed-dim uppercase tracking-[0.3em] text-sm mb-6"
            >
              Foundational Excellence
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface mb-8"
            >
              Architects of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Sovereignty</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-12 opacity-80"
            >
              Our services forge the ultimate digital advantage. Spanning elite cloud virtualization, autonomous AI workflows, high-converting e-commerce builds, and striking visual design, we engineer ecosystems built to dominate.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-6 justify-center"
            >
              <Link to="/contact" className="px-8 py-4 bg-primary-container text-white font-headline font-bold tracking-widest uppercase text-sm flex items-center gap-3 hover:bg-primary-container/80 transition-all active:scale-95">
                Initialize Protocol <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="px-8 py-4 border border-outline-variant/30 text-on-surface font-headline font-bold tracking-widest uppercase text-sm hover:bg-surface-container-highest/20 transition-all">
                Technical Manifesto
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Virtualization & Cloud */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 glass-card p-10 flex flex-col justify-between group hover:border-primary/30 transition-all neon-glow-cobalt overflow-hidden relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={`${import.meta.env.BASE_URL}assets/services/cloud/cloud-bg.png`} 
                alt="Virtualization & Cloud Background" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/80 via-surface-container-low/20 to-transparent"></div>
            </div>

            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <span className="font-body text-primary tracking-[0.2em] text-xs font-bold uppercase">Strategic Domain</span>
              </div>
              <h3 className="font-headline text-4xl font-bold mb-6 text-on-surface leading-tight">Virtualization & Cloud</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <div>
                      <p className="font-headline text-on-surface font-medium text-sm">Server Creation & Management</p>
                      <p className="text-[10px] text-on-surface-variant opacity-60">End-to-end setup and oversight.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <div>
                      <p className="font-headline text-on-surface font-medium text-sm">AWS & Cloud Infrastructure</p>
                      <p className="text-[10px] text-on-surface-variant opacity-60">Expert orchestration of AWS ecosystems.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <div>
                      <p className="font-headline text-on-surface font-medium text-sm">Oracle Cloud Solutions</p>
                      <p className="text-[10px] text-on-surface-variant opacity-60">Specialized OCI deployment and management.</p>
                    </div>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <div>
                      <p className="font-headline text-on-surface font-medium text-sm">Linux Virtualization</p>
                      <p className="text-[10px] text-on-surface-variant opacity-60">Precise Linux environment configuration.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1 shrink-0" />
                    <div>
                      <p className="font-headline text-on-surface font-medium text-sm">Windows Virtualization</p>
                      <p className="text-[10px] text-on-surface-variant opacity-60">Seamless enterprise Windows systems.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. Precision Web & Ecom Development */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 bg-surface-container-low p-10 flex flex-col justify-between border border-outline-variant/10 neon-glow-violet group hover:border-secondary-container/40 transition-all overflow-hidden relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={`${import.meta.env.BASE_URL}assets/services/web/web-bg.png`} 
                alt="Precision Web & Ecom Development Background" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/80 via-surface-container-low/20 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(119,1,208,0.5)]">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface leading-tight">Precision Web & Ecom Development</h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Bespoke builds focused on speed and clean architecture.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">Custom WordPress Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">Shopify Platform Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">Custom Web Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">High-End UI/UX Optimization</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 3. AI & Automation */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-5 glass-card p-10 relative group border-outline-variant/5 neon-glow-cobalt overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={`${import.meta.env.BASE_URL}assets/services/ai/ai-bg.png`} 
                alt="AI & Automation Background" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>

            <div className="flex flex-col h-full relative z-10">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-primary w-8 h-8" />
                  <span className="font-mono text-primary-fixed-dim/40 text-xs">// INTELLIGENCE_MATRIX</span>
                </div>
                <h3 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tight">AI & Automation</h3>
              </div>
              <div className="space-y-6 flex-grow">
                {[
                  { title: "Intelligent AI Bot Development", desc: "Creating custom bots for specialized logic." },
                  { title: "AI Integration Services", desc: "Embedding AI directly into existing software." },
                  { title: "Custom integration App Dev", desc: "Engineering proprietary business apps." },
                  { title: "Advanced API Integrations", desc: "Secure, high-speed API bridges." },
                  { title: "Autonomous Workflow Automation", desc: "Eliminating manual operational tasks." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="font-mono text-outline-variant text-[10px] pt-1">0{idx + 1}</div>
                    <div>
                      <h4 className="font-headline text-on-surface text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[10px] text-on-surface-variant opacity-60 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4. Shopify Integrations & App Development */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-7 bg-surface-container-low p-10 relative overflow-hidden group border border-outline-variant/10 neon-glow-cobalt transition-all"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={`${import.meta.env.BASE_URL}assets/services/shopify/shopify-bg.png`} 
                alt="Shopify Integrations Background" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low/90 via-surface-container-low/40 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tight">Shopify, WordPress Integrations & App Development</h3>
                </div>
                <ShoppingBag className="text-on-surface-variant opacity-20 w-12 h-12" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-surface-container-highest/20 rounded-lg border border-outline-variant/10">
                  <ShoppingBag className="text-primary w-6 h-6 mb-2" />
                  <p className="font-headline text-xs text-on-surface font-bold uppercase">Shopify App Development</p>
                </div>
                <div className="p-4 bg-surface-container-highest/20 rounded-lg border border-outline-variant/10">
                  <Code2 className="text-primary w-6 h-6 mb-2" />
                  <p className="font-headline text-xs text-on-surface font-bold uppercase">WordPress Plugin Engineering</p>
                </div>
                <div className="p-4 bg-surface-container-highest/20 rounded-lg border border-outline-variant/10">
                  <Workflow className="text-primary w-6 h-6 mb-2" />
                  <p className="font-headline text-xs text-on-surface font-bold uppercase">Workflow Automation</p>
                </div>
                <div className="p-4 bg-surface-container-highest/20 rounded-lg border border-outline-variant/10">
                  <RefreshCw className="text-primary w-6 h-6 mb-2" />
                  <p className="font-headline text-xs text-on-surface font-bold uppercase">Logic Syncing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 mb-8">
                <BarChart className="text-primary w-6 h-6" />
                <p className="font-headline text-xs text-on-surface font-bold uppercase">Store Performance Scaling</p>
              </div>
            </div>
          </motion.div>

          {/* 5. Graphic & Web Design */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-12 glass-card p-10 relative group border-outline-variant/5 neon-glow-violet overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Palette className="w-64 h-64 text-secondary" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-headline text-4xl font-bold text-on-surface uppercase tracking-tight">Graphic & Web Design</h3>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-2xl">Crafting cohesive visual identities and visually striking website layouts that align with modern aesthetics.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Brand Identity & Logo Creation",
                    "Custom Web Interface Design",
                    "Digital Asset & Marketing Graphics",
                    "UI/UX Prototyping & Wireframing",
                    "Responsive Visual Design"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      <span className="font-headline text-xs uppercase tracking-widest text-on-surface font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-8 tracking-tighter">
              Ready to Architect Your <span className="italic font-light">Sovereignty</span>?
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
              Secure a strategic consultation with our lead technical architects to map your infrastructure's evolution.
            </p>
            <Link to="/contact" className="px-12 py-5 bg-gradient-to-r from-primary-container to-secondary-container text-white font-headline font-bold tracking-widest uppercase shadow-2xl hover:scale-105 transition-transform active:scale-95">
              Initiate Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
;
Services;
;
;
;
