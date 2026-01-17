
import { Wine, Post, Service, AppSettings } from './types';
import { FALLBACK_WINES, FALLBACK_POSTS, FALLBACK_SERVICES, FALLBACK_SETTINGS } from './constants';

let wines = [...FALLBACK_WINES];
let posts = [...FALLBACK_POSTS];
let settings = { ...FALLBACK_SETTINGS };

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const db = {
  wines: {
    getAll: async (): Promise<Wine[]> => {
      await delay(100);
      return wines;
    },
    add: async (wine: Wine) => {
      wines = [wine, ...wines];
      return wine;
    },
    delete: async (id: string) => {
      wines = wines.filter(w => w.id !== id);
    }
  },
  posts: {
    getAll: async (): Promise<Post[]> => {
      return posts;
    },
    getBySlug: async (slug: string): Promise<Post | undefined> => {
      return posts.find(p => p.slug === slug);
    }
  },
  services: {
    getAll: async (): Promise<Service[]> => {
      return FALLBACK_SERVICES;
    }
  },
  settings: {
    get: async (): Promise<AppSettings> => {
      return settings;
    }
  }
};
