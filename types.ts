export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export enum Category {
  OfficeChairs = 'Office Chairs',
  Workstations = 'Workstations',
  Sofas = 'Sofas',
  Education = 'Education',
  Home = 'Home Furniture',
  Laboratory = 'Laboratory'
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}