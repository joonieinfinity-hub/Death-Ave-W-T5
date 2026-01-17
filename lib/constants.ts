
import { Wine, Post, Service, AppSettings } from './types';

export const FALLBACK_SETTINGS: AppSettings = {
  brand_name: "Death Ave Wines",
  address: "317 10th Avenue, New York, NY 10001",
  phone: "(646) 751-8229",
  hours: {
    "Tue-Sat": "12 PM - 10 PM",
    "Sun": "12 PM - 9 PM",
    "Mon": "Closed"
  },
  owner: "Michael Tzezailidis",
  mission: "Conscious drinking, cleaner wine culture, low-intervention wines without heavy pesticides."
};

export const FALLBACK_WINES: Wine[] = [
  {
    id: '1',
    name: "Ridge Lytton Springs",
    type: 'Red',
    origin: "Dry Creek Valley, California",
    description: "A classic Zinfandel-based blend with deep bramble fruit and elegant structure.",
    price: 45,
    image_url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",
    vintage: "2021",
    is_featured: true
  },
  {
    id: '2',
    name: "Flowers Sea View Chardonnay",
    type: 'White',
    origin: "Sonoma Coast, California",
    description: "Bright acidity and saline minerality from coastal vineyards.",
    price: 52,
    image_url: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800",
    vintage: "2022",
    is_featured: true
  },
  {
    id: '3',
    name: "Scribe Rosé of Pinot Noir",
    type: 'Rosé',
    origin: "Sonoma, California",
    description: "Vibrant wild strawberry and crushed stones. Clean and electric.",
    price: 38,
    image_url: "https://images.unsplash.com/photo-1558001239-5262ad8964a7?q=80&w=800",
    vintage: "2023",
    is_featured: true
  }
];

export const FALLBACK_POSTS: Post[] = [
  {
    id: '1',
    title: "The Rise of Low-Intervention Wines",
    slug: "low-intervention-rise",
    excerpt: "Understanding why cleaner production methods are changing the industry.",
    content: "Content about low intervention wines...",
    image_url: "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?q=80&w=1200",
    created_at: new Date().toISOString(),
    author: "Sommelier Team"
  }
];

export const FALLBACK_SERVICES: Service[] = [
  {
    id: '1',
    title: "Weekly Tastings",
    description: "Join us every Thursday for curated flights and educational sessions.",
    image_url: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800"
  },
  {
    id: '2',
    title: "Private Cellar Consulting",
    description: "Let our experts help you build a collection that reflects your taste and values.",
    image_url: "https://images.unsplash.com/photo-1528823331199-6996456427c3?q=80&w=800"
  }
];
