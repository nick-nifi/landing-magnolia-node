import { PagePaths } from '../types/api.types';

/**
 * Magnolia CMS page paths configuration
 * These paths correspond to the page structure in Magnolia CMS
 */
export const PAGE_PATHS: PagePaths = {
  home: 'pages/home',
  about: 'pages/about',
};

/**
 * API endpoint paths
 */
export const API_PATHS = {
  home: '/home',
  about: '/home/about',
  health: '/health',
  magnolia: '/magnolia',
} as const;

/**
 * Get Magnolia page path by key
 */
export const getMagnoliaPath = (pageKey: keyof typeof PAGE_PATHS): string => {
  return PAGE_PATHS[pageKey];
};
