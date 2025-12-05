import { Product, Category, NavItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'GeM Services', href: '/gem-services' },
  { label: 'Projects', href: '#' },
  { label: 'Dealers', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Liberate High Back',
    category: Category.OfficeChairs,
    price: 15000,
    image: 'https://picsum.photos/400/500?random=1',
    description: 'A revolutionary chair that moves with your body.',
    features: ['Dynaflex System', 'Lumbar Support', 'Breathable Mesh']
  },
  {
    id: 'p2',
    name: 'Genesis Workstation',
    category: Category.Workstations,
    price: 45000,
    image: 'https://picsum.photos/600/400?random=2',
    description: 'Modular workstation systems for modern open offices.',
    features: ['Modular Design', 'Integrated Wiring', 'Acoustic Panels']
  },
  {
    id: 'p3',
    name: 'Cloud Sofa',
    category: Category.Sofas,
    price: 35000,
    image: 'https://picsum.photos/600/400?random=3',
    description: 'Plush comfort for reception areas and lounges.',
    features: ['Premium Fabric', 'High Density Foam', 'Solid Wood Frame']
  },
  {
    id: 'p4',
    name: 'Helix Task Chair',
    category: Category.OfficeChairs,
    price: 12000,
    image: 'https://picsum.photos/400/500?random=4',
    description: 'Ergonomic task chair for long working hours.',
    features: ['Adjustable Arms', 'Synchro Tilt', 'Nylon Base']
  },
  {
    id: 'p5',
    name: 'Collaborate Table',
    category: Category.Workstations,
    price: 25000,
    image: 'https://picsum.photos/600/400?random=5',
    description: 'Meeting tables designed for collaboration.',
    features: ['Power Outlets', 'Cable Management', 'Durable Laminate']
  },
  {
    id: 'p6',
    name: 'LearnPro Desk',
    category: Category.Education,
    price: 8000,
    image: 'https://picsum.photos/400/400?random=6',
    description: 'Durable desks for educational institutions.',
    features: ['Stackable', 'Scratch Resistant', 'Lightweight']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ravi Kumar',
    role: 'Facility Manager',
    company: 'TechFlow Systems',
    content: 'Modern Amenities transformed our office space. The workstations are incredibly durable and stylish.',
    image: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Anita Desai',
    role: 'Interior Designer',
    company: 'Spaces & Co.',
    content: 'My go-to brand for corporate projects. Reliable delivery and excellent product finish.',
    image: 'https://picsum.photos/100/100?random=11'
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/1920/800?random=20',
    title: 'Redefine Your Workspace',
    subtitle: 'Ergonomic solutions for the modern professional.'
  },
  {
    id: 2,
    image: 'https://picsum.photos/1920/800?random=21',
    title: 'Comfort Meets Style',
    subtitle: 'Premium sofas and lounge furniture.'
  }
];