
import { Wine, Post, Service, AppSettings } from './types';
import { FALLBACK_WINES, FALLBACK_POSTS, FALLBACK_SERVICES, FALLBACK_SETTINGS } from './constants';

// Simulated DB State
let wines = [...FALLBACK_WINES];
let posts = [...FALLBACK_POSTS];
let services = [...FALLBACK_SERVICES];
let settings = { ...FALLBACK_SETTINGS };

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const db = {
  wines: {
    getAll: async (): Promise<Wine[]> => {
      await delay(800);
      return wines;
    },
    add: async (wine: Wine) => {
      await delay(500);
      wines = [wine, ...wines];
      return wine;
    },
    delete: async (id: string) => {
      await delay(300);
      wines = wines.filter(w => w.id !== id);
    }
  },
  posts: {
    getAll: async (): Promise<Post[]> => {
      await delay(600);
      return posts;
    },
    getBySlug: async (slug: string): Promise<Post | undefined> => {
      await delay(400);
      return posts.find(p => p.slug === slug);
    }
  },
  services: {
    getAll: async (): Promise<Service[]> => {
      await delay(500);
      return services;
    }
  },
  settings: {
    get: async (): Promise<AppSettings> => {
      await delay(300);
      return settings;
    },
    update: async (newSettings: Partial<AppSettings>) => {
      settings = { ...settings, ...newSettings };
      return settings;
    }
  }
};
