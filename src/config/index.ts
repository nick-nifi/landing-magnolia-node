import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  // Server configuration
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',

  // Magnolia CMS configuration
  magnolia: {
    baseUrl: process.env.MAGNOLIA_BASE_URL || 'http://localhost:8080',
    apiPath: process.env.MAGNOLIA_API_PATH || '/magnoliaAuthor/.rest/delivery',
    timeout: parseInt(process.env.MAGNOLIA_TIMEOUT || '30000', 10),
  },

  // CORS configuration
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
  },

  // API configuration
  api: {
    prefix: process.env.API_PREFIX || '/api',
  },
};
