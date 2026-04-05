export interface PageData {
  id: string;
  title: string;
  path: string;
  description: string;
  keywords: string[];
  icon: 'Server' | 'Globe' | 'Brain' | 'ShoppingBag' | 'Palette' | 'Terminal' | 'Mail';
}

export const siteData: PageData[] = [
  {
    id: 'cloud',
    title: 'Virtualization & Cloud',
    path: '/services/cloud',
    description: 'Expert orchestration of cloud infrastructure and virtualization environments for enterprise stability and security.',
    keywords: ['cloud', 'aws', 'oracle', 'linux', 'windows', 'virtualization', 'infrastructure'],
    icon: 'Server'
  },
  {
    id: 'web-dev',
    title: 'Precision Web & Ecom Development',
    path: '/services/web-dev',
    description: 'Bespoke web and e-commerce engineering focused on speed, clean architecture, and high-conversion experiences.',
    keywords: ['web', 'ecom', 'wordpress', 'shopify', 'ui', 'ux', 'development'],
    icon: 'Globe'
  },
  {
    id: 'ai-systems',
    title: 'AI & Automation',
    path: '/services/ai-systems',
    description: 'Creating custom bots and autonomous systems to handle specialized logic and eliminate manual operational tasks.',
    keywords: ['ai', 'automation', 'bots', 'integration', 'workflow', 'llm'],
    icon: 'Brain'
  },
  {
    id: 'shopify',
    title: 'Shopify, WordPress Integrations & App Development',
    path: '/services/shopify',
    description: 'Engineering proprietary apps and technical automation to ensure your store scales effortlessly with demand.',
    keywords: ['shopify', 'wordpress', 'app development', 'integrations', 'plugins'],
    icon: 'ShoppingBag'
  },
  {
    id: 'design',
    title: 'Graphic & Web Design',
    path: '/services/design',
    description: 'Crafting cohesive visual identities and visually striking, user-centric website layouts that align with modern aesthetics.',
    keywords: ['graphic', 'design', 'branding', 'logo', 'ui', 'ux', 'visual identity'],
    icon: 'Palette'
  },
  {
    id: 'about',
    title: 'About Us',
    path: '/about',
    description: 'Learn about our story, mission, and the architecture process behind our technical sovereignty.',
    keywords: ['about', 'company', 'story', 'mission', 'architecture'],
    icon: 'Terminal'
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
    description: 'Get in touch with us for a consultation or to discuss your infrastructure needs.',
    keywords: ['contact', 'email', 'consultation', 'inquiry'],
    icon: 'Mail'
  }
];
