
export interface Wine {
  id: string;
  name: string;
  type: 'Red' | 'White' | 'Rosé' | 'Sparkling' | 'Orange';
  origin: string;
  description: string;
  price: number;
  image_url: string;
  vintage: string;
  is_featured: boolean;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  created_at: string;
  author: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

export interface AppSettings {
  brand_name: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  owner: string;
  mission: string;
}
