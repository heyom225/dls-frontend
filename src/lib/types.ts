export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: 'IoT Gadgets' | 'Home Automation Devices' | 'Macropads' | 'Mini Electric Screwdrivers' | 'Smart Tools';
  images: string[];
  specs: { name: string; value: string }[];
  dataAiHint: string;
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
