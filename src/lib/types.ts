export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: 'IoT Gadgets' | 'Home Automation Devices' | 'Macropads' | 'Mini Electric Screwdrivers' | 'Smart Tools' | 'Soldering Accessories';
  images: string[];
  specs: { name: string; value: string }[];
  dataAiHint: string;
  stockStatus: 'In Stock' | 'Out of Stock';
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  dataAiHint: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'Active' | 'Blocked';
  registrationDate: string;
  lastLogin: string;
};
