import { environments } from './environments';

export const config = {
  // Server configuration
  port: environments.PORT,
  nodeEnv: environments.NODE_ENV,

  // Magnolia CMS configuration
  magnolia: {
    baseUrl: environments.MAGNOLIA_BASE_URL,
    apiPath: environments.MAGNOLIA_API_PATH,
    timeout: environments.MAGNOLIA_TIMEOUT,
  },

  // CORS configuration
  cors: {
    origin: environments.CORS_ORIGIN,
  },

  // API configuration
  api: {
    prefix: environments.API_PREFIX,
  },

  // Rate limiting
  rateLimit: {
    windowMs: environments.RATE_LIMIT_WINDOW_MS,
    maxRequests: environments.RATE_LIMIT_MAX_REQUESTS,
  },
};
