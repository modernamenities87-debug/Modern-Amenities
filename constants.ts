
import { Product, Category, NavItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'GeM Services', href: '/gem-services' },
  { label: 'Projects', href: '#' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  // --- OFFICE CHAIRS ---
  {
    id: 'ch-1',
    name: 'Liberate High Back',
    category: Category.OfficeChairs,
    price: 18500,
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=2070&auto=format&fit=crop',
    description: 'Our flagship high-performance chair featuring the Dynaflex system for unrestricted movement and superior spinal support.',
    features: ['Dynaflex Dynamic Back', '4D Adjustable Armrests', 'Class 4 Gas Lift', 'Seat Depth Slider']
  },
  {
    id: 'ch-2',
    name: 'Helix Mesh Executive',
    category: Category.OfficeChairs,
    price: 12500,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1974&auto=format&fit=crop',
    description: 'Engineered for 24/7 comfort with breathable high-tensile mesh and integrated lumbar adjustment.',
    features: ['High-Back Mesh', 'Synchro-Tilt Lock', 'Adjustable Lumbar', 'Nylon Star Base']
  },
  {
    id: 'ch-3',
    name: 'Astro Task Chair',
    category: Category.OfficeChairs,
    price: 8900,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1974&auto=format&fit=crop',
    description: 'Compact, efficient, and perfectly ergonomic for startup hubs and home offices.',
    features: ['Torsion Bar mechanism', 'Fixed Loop Arms', 'Molded Foam Seat']
  },
  {
    id: 'ch-4',
    name: 'Enviro Executive Leather',
    category: Category.OfficeChairs,
    price: 24500,
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1974&auto=format&fit=crop',
    description: 'Premium upholstered executive chair with plush cushioning designed for C-suite comfort.',
    features: ['Supple Leatherette', 'Knee-Tilt Lock', 'Aluminum Polished Base']
  },

  // --- WORKSTATIONS ---
  {
    id: 'ws-1',
    name: 'Genesis Tile-Based System',
    category: Category.Workstations,
    price: 48000,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
    description: 'A modular partition system that offers acoustic privacy and sophisticated wire management.',
    features: ['60mm Fabric Tiles', 'Internal Raceway', 'White Oak Top']
  },
  {
    id: 'ws-2',
    name: 'Perform Linear Bench',
    category: Category.Workstations,
    price: 32000,
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop',
    description: 'Designed for high-collaboration teams, this linear system maximizes space without compromising style.',
    features: ['Slim Loop Legs', 'Privacy Pet Screens', 'Central Power Hub']
  },

  // --- TABLES ---
  {
    id: 'tb-1',
    name: 'Vibe Conference Table',
    category: Category.Tables,
    price: 65000,
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop',
    description: 'Elegant boardroom table featuring flip-top connectivity boxes for seamless technology integration.',
    features: ['Modular Lengths', 'Cable Management Gutters', 'Premium Matte Laminate']
  },
  {
    id: 'tb-2',
    name: 'Elevate Sit-Stand Desk',
    category: Category.Tables,
    price: 42000,
    image: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=2070&auto=format&fit=crop',
    description: 'Combat sedentary work with our dual-motor height adjustable desk featuring 4 memory presets.',
    features: ['Dual Motors', 'Digital LED Controller', 'Anti-Collision Sensor']
  },

  // --- SOFAS & BREAKOUT ---
  {
    id: 'sf-1',
    name: 'Cloud Breakout Sofa',
    category: Category.Sofas,
    price: 38000,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop',
    description: 'Inviting, modular shapes for collaborative lounges and creative meeting spaces.',
    features: ['Modular Puzzle Units', 'Fire-Retardant Fabric', 'Solid Beechwood Base']
  },
  {
    id: 'sf-2',
    name: 'Synergy Lounge Chair',
    category: Category.Sofas,
    price: 16500,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop',
    description: 'Iconic swivel lounge chair that adds a splash of color and style to any corporate lobby.',
    features: ['360 Swivel', 'Molded Cold-Cure Foam', 'Contrast Piping']
  },

  // --- HOME FURNITURE ---
  {
    id: 'hm-1',
    name: 'Urban WFH Bundle',
    category: Category.Home,
    price: 22000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    description: 'A curated set including an ergonomic chair and a compact desk for the modern remote professional.',
    features: ['Ergo Chair included', 'Compact Desk', 'Mobile Pedestal']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sandeep Varma',
    role: 'Procurement Head',
    company: 'Infosys Ltd.',
    content: 'The scale and quality Modern Amenities brings to the table is unmatched. They furnished our 2000-seater campus in record time.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Meghna Kapoor',
    role: 'Principal Architect',
    company: 'Studio Archi',
    content: 'For my corporate projects, I trust Modern Amenities for their BIFMA certified products and excellent finishing.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    title: 'Workspaces that Inspire',
    subtitle: 'India\'s leading choice for ergonomic office furniture and workstations.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
    title: 'Ergonomics Redefined',
    subtitle: 'Engineered for comfort. Designed for performance.'
  }
];
