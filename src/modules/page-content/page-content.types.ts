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
 * Magnolia page content response
 */
export interface PageContentResponse {
  '@name'?: string;
  '@path'?: string;
  '@id'?: string;
  '@nodeType'?: string;
  [key: string]: unknown;
}

/**
 * Magnolia API response wrapper for page content
 */
export interface MagnoliaPageContentResponse {
  total?: number;
  offset?: number;
  limit?: number;
  results?: PageContentResponse[];
  [key: string]: unknown;
}

