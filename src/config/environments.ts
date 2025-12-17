import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * Environment variables with type safety and default values
 */
export const environments = {
  // Server configuration
  PORT: parseInt(process.env.PORT || '4000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',

  // Magnolia CMS configuration
  MAGNOLIA_BASE_URL: process.env.MAGNOLIA_BASE_URL || 'http://localhost:8080',
  MAGNOLIA_API_PATH: process.env.MAGNOLIA_API_PATH || '/magnoliaAuthor/.rest/delivery',
  MAGNOLIA_TIMEOUT: parseInt(process.env.MAGNOLIA_TIMEOUT || '30000', 10),

  // CORS configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3001',

  // API configuration
  API_PREFIX: process.env.API_PREFIX || '/api',
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
} as const;

/**
 * Helper function to check if running in production
 */
export const isProduction = () => environments.NODE_ENV === 'production';

/**
 * Helper function to check if running in development
 */
export const isDevelopment = () => environments.NODE_ENV === 'development';
