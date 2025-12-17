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
