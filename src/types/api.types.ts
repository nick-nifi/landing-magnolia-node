/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp?: string;
}

/**
 * Contact information structure
 */
export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

/**
 * Home page content structure
 */
export interface HomePageData {
  title: string;
  description?: string;
  heroSection?: {
    heading: string;
    subheading?: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
  };
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  [key: string]: unknown; // Allow additional Magnolia fields
}

/**
 * About page with contacts structure
 */
export interface AboutPageData {
  title: string;
  description?: string;
  content?: string;
  mission?: string;
  vision?: string;
  contacts?: ContactInfo;
  team?: Array<{
    name: string;
    position: string;
    bio?: string;
    image?: string;
  }>;
  [key: string]: unknown; // Allow additional Magnolia fields
}

/**
 * Page path configuration
 */
export interface PagePaths {
  home: string;
  about: string;
  [key: string]: string;
}
