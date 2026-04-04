import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Brain, Network, Bot, Workflow, Cpu, Database, Zap, Code2 } from 'lucide-react';

const AISystemsPage = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50"
            src="/assets/services/ai/ai-automation.mp4"
          >
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-4 rounded-full bg-secondary-container/20 mb-8 border border-secondary/20 neon-glow-violet">
              <Brain className="w-12 h-12 text-secondary animate-pulse" />
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              AI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-container neon-glow-violet">Automation</span>
            </h1>
            <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide">
              Creating custom bots and autonomous systems to handle specialized logic and eliminate manual operational tasks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Bot, title: "Intelligent AI Bots", desc: "Creating custom bots to handle specialized logic and user interaction." },
            { icon: Brain, title: "AI Integration", desc: "Embedding advanced AI capabilities directly into your existing software." },
            { icon: Code2, title: "Custom App Dev", desc: "Engineering proprietary apps to solve unique business challenges." },
            { icon: Zap, title: "API Integrations", desc: "Connecting disparate tools through secure, high-speed API bridges." },
            { icon: Workflow, title: "Workflow Automation", desc: "Designing automated systems to eliminate manual operational tasks." }
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
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Neural Stack Insights */}
      <section className="py-24 px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-headline text-4xl font-bold mb-8 uppercase tracking-widest text-on-surface">Intelligence Architecture</h2>
            <div className="space-y-6">
              {[
                { name: "Vector Search Core", tool: "Pinecone / Qdrant" },
                { name: "LLM Orchestration", tool: "LangChain / LLamaIndex" },
                { name: "Foundation Models", tool: "Gemini Pro / Claude 3 / DeepSeek" },
              ].map((layer, i) => (
                <div key={i} className="flex justify-between items-center bg-surface-container-low p-5 rounded-lg border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                     <Database className="w-5 h-5 text-secondary neon-glow-violet" />
                     <span className="font-headline uppercase font-bold text-sm tracking-widest">{layer.name}</span>
                  </div>
                  <span className="font-mono text-xs text-secondary-fixed-dim bg-secondary/10 px-3 py-1 rounded">
                    {layer.tool}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden relative flex items-center justify-center",
              "backdrop-blur-md bg-white/5 border border-white/10",
              "neon-glow-violet"
            )}
          >
             {/* Using standard img tags as placeholders for the Nano Banana prompts */}
             <div className="absolute inset-0 bg-[url('/assets/services/ai/detail-shot.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             
             <Network className="w-32 h-32 text-secondary/30 absolute animate-pulse duration-[3000ms]" />
             
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
               <div className="font-mono text-xs text-secondary/80 bg-background/60 p-4 rounded backdrop-blur border border-secondary/20">
                 [SYSTEM_LOG] &gt; Intelligent node routing established.<br/>
                 [SYSTEM_LOG] &gt; Context window loaded with 1.5M tokens.<br/>
                 [SYSTEM_LOG] &gt; Agent Swarm deployed to production.
               </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISystemsPage;
