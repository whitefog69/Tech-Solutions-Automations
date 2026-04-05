import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { ShoppingBag, Zap, Gem, CreditCard, ShoppingCart, Key, Code2, Workflow, RefreshCw, BarChart } from 'lucide-react';

const ShopifyPage = () => {
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
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 hue-rotate-[210deg] saturate-150"
        >
          <source src="assets/services/shopify/hero-video.mp4" type="video/mp4" />
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
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-8 border border-primary/30 neon-glow-cobalt">
              <ShoppingBag className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              Shopify, WordPress Integrations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container neon-glow-cobalt">App Development</span>
            </h1>
            <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-12">
              Engineering proprietary apps and technical automation to ensure your store scales effortlessly with demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-24 px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: ShoppingBag, title: "Shopify App Development", desc: "Engineering custom private or public apps to extend Shopify’s native functionality and streamline your store's operations." },
            { icon: Code2, title: "WordPress Plugin Engineering", desc: "Developing bespoke plugins to enhance WordPress core features, ensuring your site performs exactly how your business requires." },
            { icon: Workflow, title: "Workflow Automation", desc: "Streamlining backend e-commerce operations for efficiency." },
            { icon: RefreshCw, title: "Logic Syncing", desc: "Integrating store data with external inventory and management tools." },
            { icon: BarChart, title: "Performance Scaling", desc: "Technical automation to ensure your store scales effortlessly with demand." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 group",
                "backdrop-blur-md bg-white/5 border border-white/5",
                "hover:border-primary/20 hover:shadow-[0_0_20px_rgba(0,71,171,0.05)]"
              )}
            >
              <item.icon className="w-10 h-10 text-primary mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-xl font-bold mb-3 uppercase tracking-widest leading-tight">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commerce Specs */}
      <section className="py-24 px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden relative flex flex-col justify-end p-8",
              "backdrop-blur-md bg-white/5 border border-white/10",
              "neon-glow-cobalt"
            )}
          >
             {/* Using standard img tags as placeholders for the Nano Banana prompts */}
             <div className="absolute inset-0 bg-[url('assets/services/shopify/detail-shot.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
             
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
             
             <div className="relative z-10 w-full flex justify-between items-center border-t border-primary/20 pt-6 mt-auto">
                <div>
                  <div className="font-headline uppercase text-xs tracking-widest text-primary mb-1">Architecture</div>
                  <div className="font-mono text-sm">Oxygen Edge Nodes</div>
                </div>
                <div>
                  <div className="font-headline uppercase text-xs tracking-widest text-primary mb-1">Latency</div>
                  <div className="font-mono text-sm">&lt; 40ms TTFB</div>
                </div>
                <div>
                  <div className="font-headline uppercase text-xs tracking-widest text-primary mb-1">Uptime SLA</div>
                  <div className="font-mono text-sm">99.999%</div>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:pl-12"
          >
            <h2 className="font-headline text-4xl font-bold mb-8 uppercase tracking-widest text-on-surface">Storefront Engine Matrix</h2>
            <div className="space-y-4">
              {[
                { label: "State Validation", val: "GraphQL Admin API Native" },
                { label: "Sync Engine", val: "Real-Time Inventory Mesh" },
                { label: "Checkout", val: "Bespoke Extensions" },
              ].map((obj, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between p-4 bg-surface-container-low rounded border border-outline-variant/10">
                  <span className="font-headline text-on-surface uppercase text-sm tracking-widest font-bold">{obj.label}</span>
                  <span className="font-mono text-primary text-xs mt-2 sm:mt-0">{obj.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShopifyPage;
