import React, { useRef, useMemo, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Environment, OrbitControls, Box, Text } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '../../lib/utils';
import { ShoppingBag, Zap, Gem, CreditCard, ShoppingCart, Key, Code2, Workflow, RefreshCw, BarChart } from 'lucide-react';

const MeshNode = ({ radius, speed, offset, color }: { radius: number, speed: number, offset: number, color: string }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 2) * 0.5;
  });

  return (
    <Sphere ref={ref} args={[0.15, 16, 16]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </Sphere>
  );
};

const SupplyMesh = () => {
  return (
    <group>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#0047ab" metalness={0.9} roughness={0.1} />
      </Sphere>
      <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#b1c5ff" transparent opacity={0.2} />
      </Torus>
      <MeshNode radius={2} speed={0.5} offset={0} color="#b1c5ff" />
      <MeshNode radius={2} speed={0.5} offset={Math.PI * 0.6} color="#0047ab" />
      <MeshNode radius={2} speed={0.5} offset={Math.PI * 1.2} color="#7701d0" />
    </group>
  );
};

const ModularHub = () => {
  const appRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    appRef.current.position.y = Math.sin(t) * 0.2 + 1;
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Shopify Module */}
      <Box args={[1.5, 1.5, 1.5]} position={[-1, 0, 0]}>
        <meshStandardMaterial color="#0047ab" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
        <Text position={[0, 0, 0.8]} fontSize={0.4} color="white">S</Text>
      </Box>

      {/* WordPress Module */}
      <Box args={[1.5, 1.5, 1.5]} position={[1, 0, 0]}>
        <meshStandardMaterial color="#7701d0" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
        <Text position={[0, 0, 0.8]} fontSize={0.4} color="white">W</Text>
      </Box>

      {/* Custom App Module (Being guided in) */}
      <group ref={appRef}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color="#333" metalness={1} roughness={0.1} />
          <Text position={[0, 0, 0.8]} fontSize={0.2} color="#b1c5ff">CUSTOM_APP</Text>
        </Box>
        {/* Data lines */}
        {[...Array(5)].map((_, i) => (
          <Cylinder key={i} args={[0.01, 0.01, 2]} position={[0, -1, 0]} rotation={[0, 0, Math.random()]}>
            <meshBasicMaterial color="#b1c5ff" transparent opacity={0.3} />
          </Cylinder>
        ))}
      </group>

      <Environment preset="city" />
    </group>
  );
};

const Cylinder = ({ args, ...props }: any) => <mesh {...props}><cylinderGeometry args={args} /><meshBasicMaterial color="white" /></mesh>;

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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "p-10 rounded-2xl transition-all duration-500 hover:scale-[1.02] group",
                "backdrop-blur-md bg-white/5 border border-white/5",
                "hover:border-primary/20 hover:shadow-[0_0_20px_rgba(71,1,171,0.05)]"
              )}
            >
              <item.icon className="w-10 h-10 text-primary mb-6 opacity-80 group-hover:opacity-100 group-hover:text-primary-container transition-all duration-300" />
              <h3 className="font-headline text-xl font-bold mb-3 uppercase tracking-widest leading-tight">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Protocol Section */}
      <section className="py-24 px-8 border-y border-outline-variant/10 bg-surface-container-lowest/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-square lg:aspect-video rounded-xl bg-[#0d0d0d] border border-primary/20 shadow-2xl relative overflow-hidden group"
          >
            <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
              <Suspense fallback={null}>
                <color attach="background" args={['#0d0d0d']} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                  <SupplyMesh />
                </Float>
                <Environment preset="city" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Suspense>
            </Canvas>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-4 left-4 text-primary/50 font-mono font-bold uppercase tracking-tighter text-[10px] flex items-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              COMMERCE_SYNC_PROTOCOL
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-headline text-4xl font-black tracking-tighter text-on-surface uppercase">
              ECOMMERCE <span className="text-primary italic">COMMAND</span>
            </h2>
            <div className="space-y-6">
              {[
                { label: "Proprietary App Logic", desc: "Custom Shopify/WordPress extensions designed for unlimited horizontal scaling." },
                { label: "Elastic Performance", desc: "Auto-scaling infrastructure that maintains <40ms latency during peak traffic." },
                { label: "Real-Time Data Mesh", desc: "Seamless GraphQL-driven synchronization between storefronts and inventory systems." }
              ].map((point, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(0,71,171,0.8)]" />
                  <div className="space-y-1">
                    <div className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-on-surface">{point.label}</div>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
              "flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden relative flex flex-col justify-end",
              "backdrop-blur-md bg-white/5 border border-white/10",
              "neon-glow-cobalt shadow-[0_0_50px_rgba(0,71,171,0.1)]"
            )}
          >
            <Canvas camera={{ position: [4, 3, 4], fov: 45 }}>
              <Suspense fallback={null}>
                <color attach="background" args={['#0d0d0d']} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <ModularHub />
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
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
