import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, Phone, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Virtualization & Cloud',
    'Precision Web & Ecom Development',
    'AI & Automation',
    'Shopify, WordPress Integrations & App Development',
    'Graphic & Web Design'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('submitted');
    }, 1500);
  };

  const inputClasses = "w-full bg-surface-container-low/60 border border-primary/20 border-b-primary/40 rounded-sm px-4 py-3 text-on-surface font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/60";
  const labelClasses = "block text-[10px] font-headline uppercase tracking-[0.2em] text-primary mb-2 font-bold";

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="self-start"
        >
          <span className="text-primary font-headline text-xs uppercase tracking-[0.4em] mb-6 block">Communication Protocol</span>
          <h1 className="text-6xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Initialize <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Inquiry</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-md mb-12 opacity-95">
            Ready to scale your technical infrastructure? Our architects are standing by to engineer your sovereign digital environment.
          </p>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-headline text-xs uppercase tracking-widest text-on-surface font-bold mb-1">Direct Channel</h4>
                <p className="font-mono text-sm text-primary/60">architecture@techsolutions.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-sm bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-headline text-xs uppercase tracking-widest text-on-surface font-bold mb-1">Secure Mesh (Voice)</h4>
                <p className="font-mono text-sm text-secondary/60">Node Relay: +1 (555) 010-ARCH</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#131313] p-10 md:p-12 relative border border-white/5 shadow-lg shadow-black/50 rounded-sm self-start"
        >
          {formState === 'submitted' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/30 neon-glow-cobalt">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tight mb-4 text-on-surface">Protocol Accepted</h2>
              <p className="font-body text-on-surface-variant max-w-xs mx-auto text-sm leading-relaxed">
                Your inquiry has been successfully integrated into our queue. An architect will establish contact shortly.
              </p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-10 font-headline text-[10px] uppercase tracking-[0.3em] text-primary hover:text-white transition-colors"
              >
                [ Reset Secure Channel ]
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Identity Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/40" />
                    <input 
                      required
                      type="text" 
                      className={cn(inputClasses, "pl-14")}
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Email Coordinates</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/40" />
                    <input 
                      required
                      type="email" 
                      className={cn(inputClasses, "pl-14")}
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Service Domain</label>
                <div className="relative">
                  <select 
                    required
                    className={cn(inputClasses, "appearance-none")}
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="" disabled>Choose a service domain...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-surface-container-low">{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Inquiry Specifications</label>
                <textarea 
                  required
                  rows={5}
                  className={cn(inputClasses, "resize-none")}
                  placeholder="Provide project technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={formState === 'submitting'}
                className="w-full bg-primary text-on-primary font-headline font-bold py-5 uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-all active:scale-[0.98] shadow-md shadow-primary/20 disabled:opacity-50"
              >
                {formState === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Encrypting...
                  </span>
                ) : (
                  <>Transmit Request <Send className="w-4 h-4" /></>
                )}
              </button>
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="font-mono text-[10px] text-on-surface-variant/40 uppercase tracking-widest">Secure TLS 1.3 Transmission Active</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
