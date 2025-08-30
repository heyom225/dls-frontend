import type { Product, Post } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chrono-Pad v2',
    description: '12-key macropad with customizable RGB and hot-swappable switches.',
    longDescription: 'The Chrono-Pad v2 is the ultimate productivity tool for digital creators. With 12 fully programmable keys, three rotary encoders, and per-key RGB lighting, you can create endless shortcuts and macros. Its hot-swappable design allows you to customize the feel with any MX-style switch. Encased in a sleek, CNC-milled aluminum body.',
    price: 129.99,
    category: 'Macropads',
    images: ['https://picsum.photos/600/600?random=1', 'https://picsum.photos/600/600?random=2', 'https://picsum.photos/600/600?random=3'],
    specs: [
      { name: 'Keys', value: '12 + 3 encoders' },
      { name: 'Switches', value: 'Hot-swappable (MX-style)' },
      { name: 'Connectivity', value: 'USB-C' },
      { name: 'Body', value: 'Anodized Aluminum' },
    ],
    dataAiHint: "custom keyboard"
  },
  {
    id: '2',
    name: 'QuantumDrive Screwdriver',
    description: 'A mini electric screwdriver with 48 precision bits and a magnetic case.',
    longDescription: 'Tackle any electronics repair with the QuantumDrive. This pen-sized electric screwdriver features adjustable torque, a powerful motor, and an OLED display. The set includes 48 S2 steel bits to handle everything from smartphones to drones. The magnetic aluminum case keeps it all organized and charges the screwdriver.',
    price: 89.99,
    category: 'Mini Electric Screwdrivers',
    images: ['https://picsum.photos/600/600?random=4', 'https://picsum.photos/600/600?random=5', 'https://picsum.photos/600/600?random=6'],
    specs: [
      { name: 'Torque', value: '0.25-0.35 N.m Electric' },
      { name: 'Battery', value: '350mAh Li-Po' },
      { name: 'Bits', value: '48 (S2 Steel)' },
      { name: 'Charging', value: 'USB-C in case' },
    ],
    dataAiHint: "electric screwdriver"
  },
  {
    id: '3',
    name: 'AuraConnect Hub',
    description: 'Centralize your smart home with this universal IoT gateway.',
    longDescription: 'Unify your smart home ecosystem. The AuraConnect Hub is compatible with Zigbee, Z-Wave, Wi-Fi, and Matter devices, allowing you to control everything from a single app. Automate routines, monitor sensors, and enjoy a truly connected home. Features local processing for speed and privacy.',
    price: 199.99,
    category: 'Home Automation Devices',
    images: ['https://picsum.photos/600/600?random=7', 'https://picsum.photos/600/600?random=8', 'https://picsum.photos/600/600?random=9'],
    specs: [
      { name: 'Compatibility', value: 'Zigbee 3.0, Z-Wave, Wi-Fi, Matter' },
      { name: 'Processor', value: 'Quad-core ARM A55' },
      { name: 'Power', value: 'USB-C (5V/2A)' },
      { name: 'Range', value: 'Up to 100 meters' },
    ],
    dataAiHint: "smart home hub"
  },
  {
    id: '4',
    name: 'EnviroSense Monitor',
    description: 'Track air quality, temperature, and humidity in real-time.',
    longDescription: 'Breathe easier with the EnviroSense Monitor. This compact IoT device provides real-time data on your indoor environment, including PM2.5, VOCs, CO2, temperature, and humidity. View historical data and receive alerts on your smartphone. Its minimalist e-ink display blends into any room.',
    price: 79.99,
    category: 'IoT Gadgets',
    images: ['https://picsum.photos/600/600?random=10', 'https://picsum.photos/600/600?random=11', 'https://picsum.photos/600/600?random=12'],
    specs: [
      { name: 'Sensors', value: 'PM2.5, VOC, CO2, Temp, Humidity' },
      { name: 'Display', value: '2.9" E-Ink' },
      { name: 'Connectivity', value: 'Wi-Fi 2.4GHz' },
      { name: 'Power', value: 'USB-C' },
    ],
    dataAiHint: "air quality monitor"
  },
   {
    id: '5',
    name: 'LogicRuler',
    description: 'A smart ruler that measures, divides, and logs dimensions digitally.',
    longDescription: 'Reinventing measurement for the digital age. The LogicRuler not only gives you precise digital readouts but can also calculate midpoints, divide segments, and save measurements to your phone via Bluetooth. A must-have for designers, architects, and hobbyists who value precision.',
    price: 65.50,
    category: 'Smart Tools',
    images: ['https://picsum.photos/600/600?random=13', 'https://picsum.photos/600/600?random=14'],
    specs: [
      { name: 'Accuracy', value: '±0.1mm' },
      { name: 'Length', value: '30cm / 12 inches' },
      { name: 'Connectivity', value: 'Bluetooth 5.0' },
      { name: 'Battery Life', value: '8 hours continuous use' },
    ],
    dataAiHint: "digital ruler"
  },
  {
    id: '6',
    name: 'Portal Light Panels',
    description: 'Modular, touch-sensitive wall light panels for immersive ambient lighting.',
    longDescription: 'Paint your walls with light. The Portal Light Panels are modular hexagonal tiles that you can arrange in any pattern. Control them with your voice, the app, or by touch. With over 16 million colors and dynamic lighting scenes, you can create the perfect ambiance for gaming, movies, or relaxation.',
    price: 249.99,
    category: 'Home Automation Devices',
    images: ['https://picsum.photos/600/600?random=15', 'https://picsum.photos/600/600?random=16', 'https://picsum.photos/600/600?random=17'],
    specs: [
      { name: 'Colors', value: '16M+ (RGBW)' },
      { name: 'Control', value: 'App, Voice, Touch' },
      { name: 'Compatibility', value: 'Alexa, Google Assistant, HomeKit' },
      { name: 'Kit Size', value: '9 Panels (expandable)' },
    ],
    dataAiHint: "smart light panels"
  },
];

export const posts: Post[] = [
  {
    slug: 'getting-started-with-iot',
    title: 'Your First Five Steps into the World of IoT',
    excerpt: 'The Internet of Things can seem daunting, but getting started is easier than you think. Here are five simple steps to begin your journey.',
    content: 'Full blog post content goes here...',
    image: 'https://picsum.photos/800/450?random=18',
    author: 'Jane Doe',
    date: '2024-07-15',
    dataAiHint: 'circuit board'
  },
  {
    slug: 'maximize-your-macropad',
    title: '10 Productivity Hacks for Your New Macropad',
    excerpt: 'Unlock the full potential of your macropad with these time-saving shortcuts and clever macros for popular applications.',
    content: 'Full blog post content goes here...',
    image: 'https://picsum.photos/800/450?random=19',
    author: 'John Smith',
    date: '2024-07-10',
    dataAiHint: 'desk setup'
  },
  {
    slug: 'building-a-smart-home',
    title: 'The Ultimate Guide to Building a Smart Home in 2024',
    excerpt: 'From lighting to security, this guide covers everything you need to know to build a seamless and intelligent home ecosystem.',
    content: 'Full blog post content goes here...',
    image: 'https://picsum.photos/800/450?random=20',
    author: 'Alex Ray',
    date: '2024-07-05',
    dataAiHint: 'smart home'
  }
];

export const productCategories = Array.from(new Set(products.map(p => p.category)));
