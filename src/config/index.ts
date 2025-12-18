import { environments } from './environments';


// http://localhost:8080/magnoliaPublic/dam
// http://localhost:8080/magnoliaAuthor/dam
export const config = {
  // Server configuration
  port: environments.PORT,
  nodeEnv: environments.NODE_ENV,

  // Magnolia CMS configuration
  magnolia: {
    baseUrl: environments.MAGNOLIA_BASE_URL,
    apiPath: environments.MAGNOLIA_API_PATH,
    apiAnnotationPath: environments.MAGNOLIA_BASE_URL +  environments.MAGNOLIA_AUTHOR_PATH + environments.MAGNOLIA_API_ANNOTATION_PATH ,
    apiPagesPath: environments.MAGNOLIA_BASE_URL +  environments.MAGNOLIA_AUTHOR_PATH + environments.MAGNOLIA_API_PAGES,
    apiNavPath: environments.MAGNOLIA_BASE_URL +  environments.MAGNOLIA_AUTHOR_PATH + environments.MAGNOLIA_API_NAV,
    apiImagePublicPath: environments.MAGNOLIA_BASE_URL +  environments.MAGNOLIA_PUBLIC + "/dam",
    apiImageAuthorPath: environments.MAGNOLIA_BASE_URL +  environments.MAGNOLIA_AUTHOR_PATH + "/dam",
    timeout: environments.MAGNOLIA_TIMEOUT,
  },

  // CORS configuration
  cors: {
    origin: environments.CORS_ORIGIN,
  },

  // API configuration
  api: {
    prefix: environments.API_PREFIX,
    prefix_annotation: environments.API_PREFIX + environments.ANNOTATION_PREFIX,
    prefix_pages: environments.API_PREFIX + environments.PAGES_PREFIX,
    prefix_nav: environments.API_PREFIX + environments.NAV_PREFIX,
    prefix_image_public: environments.API_PREFIX + environments.IMAGE_PUBLIC_PREFIX,
    prefix_image_author: environments.API_PREFIX + environments.IMAGE_AUTHOR_PREFIX,
  },

  // Rate limiting
  rateLimit: {
    windowMs: environments.RATE_LIMIT_WINDOW_MS,
    maxRequests: environments.RATE_LIMIT_MAX_REQUESTS,
  },
};
