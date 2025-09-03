import type { Product, Post, User } from './types';

export const products: Product[] = [
  {
    "id": "1",
    "name": "DLS Macropad",
    "description": "3x3 wireless macropad with Cherry MX Brown switches, dual connectivity, and fast charging.",
    "longDescription": "The DLS Macropad is designed for creators, gamers, and professionals who demand efficiency and style. With a compact 3x3 layout, this wireless powerhouse combines both Bluetooth and Wi-Fi connectivity for seamless performance across devices. Outfitted with tactile Cherry MX Brown switches, every press feels crisp and responsive. The hard plastic chassis keeps it lightweight yet durable, while the USB-C quick-charge system delivers up to 3 hours of battery life in just 45 minutes of charging. Plus, enjoy peace of mind with automatic software updates that keep your macropad optimized at all times.",
    "price": 1999.00,
    "category": "Macropads",
    "images": [
      "https://picsum.photos/600/600?random=11",
      "https://picsum.photos/600/600?random=12",
      "https://picsum.photos/600/600?random=13"
    ],
    "specs": [
      { "name": "Keys", "value": "9-key (3x3 layout)" },
      { "name": "Switches", "value": "Cherry MX Brown (tactile)" },
      { "name": "Connectivity", "value": "Bluetooth + Wi-Fi" },
      { "name": "Battery Life", "value": "3 hours (45 min quick charge)" },
      { "name": "Chassis", "value": "Durable hard plastic" },
      { "name": "Charging Port", "value": "USB-C" },
      { "name": "Software", "value": "Auto-updates enabled" }
    ],
    "dataAiHint": "wireless custom macropad",
    "stockCount": 25
  },
  {
    "id": "2",
    "name": "DLS PrecisionDriver",
    "description": "Compact electric screwdriver with 2000mAh battery, dual-direction control, and durable hard shell.",
    "longDescription": "The DLS PrecisionDriver is built for makers, repair enthusiasts, and professionals who need reliable torque in a pocket-sized tool. Powered by a high-efficiency N20 gear motor, it delivers steady performance for electronics, drones, and DIY projects. With a long-lasting 2000mAh battery managed by a TP4056 charging circuit, enjoy up to 8 hours of operation on a single charge. The USB-C fast-charge system fully recharges the 18650 cell in just 2.5 hours. Designed with a tough plastic hard shell for durability, the PrecisionDriver supports both clockwise and counterclockwise rotation for maximum flexibility. A must-have for precision repair kits.",
    "price": 1299.00,
    "category": "Mini Electric Screwdrivers",
    "images": [
      "https://m.media-amazon.com/images/I/817uOYDey6L.jpg",
      "https://m.media-amazon.com/images/I/81Vl-ySWSjL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71wVH50p+vL._SX679_.jpg"
    ],
    "specs": [
      { "name": "Motor", "value": "N20 gear motor" },
      { "name": "Torque", "value": "Optimized for precision repair (medium load)" },
      { "name": "Battery", "value": "2000mAh 18650 Li-ion (≈8h runtime)" },
      { "name": "Charging", "value": "TP4056 circuit, USB-C (≈2.5h full charge)" },
      { "name": "Shell", "value": "Durable hard plastic" },
      { "name": "Direction", "value": "Clockwise & counterclockwise" }
    ],
    "dataAiHint": "electric screwdriver",
    "stockCount": 0
  },
  {
    "id": "3",
    "name": "DLS TipClean Pro",
    "description": "Stainless steel soldering tip cleaner with replaceable scrubber and durable enclosure.",
    "longDescription": "Keep your soldering iron performing like new with the DLS TipClean Pro. Designed with a high-quality stainless steel scrubber, it removes oxidation and excess solder without damaging your tips. The hardened plastic enclosure provides stability and heat resistance, while its clever bottom-cap design allows you to easily remove and replace the steel wool when needed. Cleaner, safer, and longer-lasting than traditional wet sponges, the TipClean Pro is the perfect bench companion for makers, engineers, and repair pros.",
    "price": 229.00,
    "category": "Soldering Accessories",
    "images": [
      "https://otovon.in/cdn/shop/products/Hakko599B-02TipCleanerspongedome_800x.jpg?v=1670415307",
      "https://otovon.in/cdn/shop/products/Hakko599B-02SolderTipCleaningSponge_800x.jpg?v=1670416413",
      "https://otovon.in/cdn/shop/products/Hakko599B-02TipCleanerBottom_800x.jpg?v=1670416413"
    ],
    "specs": [
      { "name": "Material", "value": "Stainless steel scrubber" },
      { "name": "Enclosure", "value": "Hardened plastic body" },
      { "name": "Design", "value": "Removable bottom cap for easy replacement" },
      { "name": "Maintenance", "value": "Replaceable steel wool insert" },
      { "name": "Use Case", "value": "Safe alternative to wet sponge, extends tip life" }
    ],
    "dataAiHint": "soldering iron tip cleaner",
    "stockCount": 150
  },
  {
    "id": "4",
    "name": "DLS TipClean Refill",
    "description": "Replacement stainless steel wool insert for the DLS TipClean Pro soldering tip cleaner.",
    "longDescription": "Extend the life of your DLS TipClean Pro with the DLS TipClean Refill. Crafted from premium stainless steel, this replacement scrubber is designed to maintain optimal soldering iron tip performance by removing oxidation and excess solder without water or harsh wear. Swapping it out is simple—just remove the bottom cap of your TipClean Pro, replace the insert, and you’re ready to solder again. A must-have consumable for every electronics workbench.",
    "price": 79.00,
    "category": "Soldering Accessories",
    "images": [
      "https://otovon.in/cdn/shop/products/GootST-40BWTipCleaningSponges_800x.jpg?v=1670145743",
      "https://otovon.in/cdn/shop/products/GootST-40BWTipCleaningSponge_800x.jpg?v=1670145743"
    ],
    "specs": [
      { "name": "Material", "value": "Stainless steel wool" },
      { "name": "Compatibility", "value": "Fits DLS TipClean Pro" },
      { "name": "Maintenance", "value": "Easily replaceable insert" },
      { "name": "Use Case", "value": "Keeps soldering iron tips clean and long-lasting" }
    ],
    "dataAiHint": "soldering iron tip cleaner refill",
    "stockCount": 200
  },
  {
    "id": "5",
    "name": "DLS FumeGuard",
    "description": "Compact soldering fume extractor with powerful suction and replaceable filter.",
    "longDescription": "Protect your health while soldering with the DLS FumeGuard. This compact air sucker is designed to capture and filter soldering fumes at the source, keeping your workspace clean and safe. Equipped with a high-efficiency fan and replaceable activated carbon filter, it absorbs harmful smoke and particulates without being noisy or intrusive. The durable plastic housing and angled stand make it perfect for hobbyists, makers, and professional electronics repair benches. Stay focused on your craft knowing the air around you is cleaner.",
    "price": 349.00,
    "category": "Soldering Accessories",
    "images": [
      "https://m.media-amazon.com/images/I/614RSU5BRbL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51KrcdCxXwL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61H7Tn6PGUL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61ikAmmC5mL._SL1500_.jpg"
    ],
    "specs": [
      { "name": "Fan", "value": "High-efficiency low-noise motor" },
      { "name": "Filter", "value": "Replaceable activated carbon pad" },
      { "name": "Housing", "value": "Durable heat-resistant plastic" },
      { "name": "Design", "value": "Angled stand for direct fume capture" },
      { "name": "Use Case", "value": "Removes soldering smoke and particulates" }
    ],
    "dataAiHint": "soldering fume extractor",
    "stockCount": 0
  }
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

export const users: User[] = [
  {
    id: 'usr-001',
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    avatar: 'https://i.pravatar.cc/40?u=usr-001',
    status: 'Active',
    registrationDate: '2024-01-15',
    lastLogin: '2024-07-20T10:30:00Z'
  },
  {
    id: 'usr-002',
    name: 'Bob Williams',
    email: 'bob.w@example.com',
    avatar: 'https://i.pravatar.cc/40?u=usr-002',
    status: 'Active',
    registrationDate: '2024-02-20',
    lastLogin: '2024-07-19T15:00:00Z'
  },
  {
    id: 'usr-003',
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    avatar: 'https://i.pravatar.cc/40?u=usr-003',
    status: 'Blocked',
    registrationDate: '2024-03-10',
    lastLogin: '2024-06-30T12:00:00Z'
  },
  {
    id: 'usr-004',
    name: 'Diana Prince',
    email: 'diana.p@example.com',
    avatar: 'https://i.pravatar.cc/40?u=usr-004',
    status: 'Active',
    registrationDate: '2024-04-05',
    lastLogin: '2024-07-21T09:00:00Z'
  },
  {
    id: 'usr-005',
    name: 'Ethan Hunt',
    email: 'ethan.h@example.com',
    avatar: 'https://i.pravatar.cc/40?u=usr-005',
    status: 'Active',
    registrationDate: '2024-05-25',
    lastLogin: '2024-07-18T18:45:00Z'
  },
   {
    id: 'usr-006',
    name: 'Fiona Glenanne',
    email: 'fiona.g@example.com',
    avatar: 'https://i.pravatar.cc/40?u=usr-006',
    status: 'Blocked',
    registrationDate: '2024-06-01',
    lastLogin: '2024-07-01T11:20:00Z'
  }
];


export const productCategories = Array.from(new Set(products.map(p => p.category)));
