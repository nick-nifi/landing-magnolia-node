import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
// import homeRoutes from './modules/home/home.routes';
// import healthRoutes from './modules/health/health.routes';
// import investorAnnouncementsRoutes from './modules/investor-announcements/investor-announcements.routes';
import { errorHandler } from './middleware/error.middleware';
import { requestLogger } from './middleware/logger.middleware';
import { createProxyMiddleware } from "http-proxy-middleware";
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    // this.initializeRoutes();
    this.initializeErrorHandling();
    this.forwardRequest();
  }
  private forwardRequest(){

    this.app.use(
      config.api.prefix_image_author,
      createProxyMiddleware({
        target: config.magnolia.baseUrl,
        changeOrigin: true,
        pathRewrite: (path) => {
          let remainingPath = path.replace(/^\/api/, '');
          if (remainingPath && !remainingPath.startsWith('/')) {
            remainingPath = '/' + remainingPath;
          }
          remainingPath = remainingPath.replace(/\/$/, '');
          const imageAuthorPath = config.magnolia.apiImageAuthorPath.replace(/\/$/, '');
          return `${imageAuthorPath}/${remainingPath}`;
        },
      })
    );


    this.app.use(
      config.api.prefix_image_public,
      createProxyMiddleware({
        target: config.magnolia.baseUrl,
        changeOrigin: true,
        pathRewrite: (path) => {
          let remainingPath = path.replace(/^\/api/, '');
          if (remainingPath && !remainingPath.startsWith('/')) {
            remainingPath = '/' + remainingPath;
          }
          remainingPath = remainingPath.replace(/\/$/, '');
          const imagePublicPath = config.magnolia.apiImagePublicPath.replace(/\/$/, '');
          return `${imagePublicPath}/${remainingPath}`;
        },
      })
    );


    this.app.use(
      config.api.prefix_annotation,
      createProxyMiddleware({
        target: config.magnolia.baseUrl,
        changeOrigin: true,
        pathRewrite: (path) => {
          let remainingPath = path.replace(/^\/api/, '');
          if (remainingPath && !remainingPath.startsWith('/')) {
            remainingPath = '/' + remainingPath;
          }
          remainingPath = remainingPath.replace(/\/$/, '');
          const annotationPath = config.magnolia.apiAnnotationPath.replace(/\/$/, '');
          return `${annotationPath}/${remainingPath}`;
        },
      })
    );

    this.app.use(
      config.api.prefix_pages,
      createProxyMiddleware({
        target: config.magnolia.baseUrl,
        changeOrigin: true,
        pathRewrite: (path) => {
          let remainingPath = path.replace(/^\/api/, '');
          if (remainingPath && !remainingPath.startsWith('/')) {
            remainingPath = '/' + remainingPath;
          }
          remainingPath = remainingPath.replace(/\/$/, '');
          const pagesPath = config.magnolia.apiPagesPath.replace(/\/$/, '');
          return `${pagesPath}/${remainingPath}`;
        },
      })
    );

    this.app.use(
      config.api.prefix_nav,
      createProxyMiddleware({
        target: config.magnolia.baseUrl,
        changeOrigin: true,
        pathRewrite: (path) => {
          let remainingPath = path.replace(/^\/api/, '');
          if (remainingPath && !remainingPath.startsWith('/')) {
            remainingPath = '/' + remainingPath;
          }
          remainingPath = remainingPath.replace(/\/$/, '');
          const navPath = config.magnolia.apiNavPath.replace(/\/$/, '');
          return `${navPath}/${remainingPath}`;
        },
      })
    );

    this.app.use(
      config.api.prefix,
      createProxyMiddleware({
        target: config.magnolia.baseUrl,
        changeOrigin: true,
        pathRewrite: (path) => {
          let remainingPath = path.replace(/^\/api/, '');
          if (remainingPath && !remainingPath.startsWith('/')) {
            remainingPath = '/' + remainingPath;
          }
          remainingPath = remainingPath.replace(/\/$/, '');
          const apiPath = config.magnolia.apiPath.replace(/\/$/, '');
          const finalPath = apiPath + (remainingPath || '');
          return finalPath;
        },
      })
    );
  }

  private initializeMiddlewares() {
    // Security middleware
    this.app.use(helmet());

    // CORS configuration
    this.app.use(
      cors({
        origin: config.cors.origin,
        credentials: true,
      })
    );

    // Compression middleware
    // this.app.use(compressio());

    // Body parsing middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Logging middleware
    if (config.nodeEnv === 'development') {
      this.app.use(morgan('dev'));
    }
    this.app.use(requestLogger);
  }

  // private initializeRoutes() {
  //   // API routes
  //   this.app.use(`${config.api.prefix}/health`, healthRoutes);
  //   this.app.use(`${config.api.prefix}/home`, homeRoutes);
  //   this.app.use(`${config.api.prefix}/investor-announcements`, investorAnnouncementsRoutes);

  //   // Root endpoint
  //   this.app.get('/', (_req, res) => {
  //     res.json({
  //       message: 'UOBKH Landing API - Magnolia Forwarding Service',
  //       version: '1.0.0',
  //       endpoints: {
  //         health: `${config.api.prefix}/health`,
  //         home: `${config.api.prefix}/home`,
  //         investorAnnouncements: `${config.api.prefix}/investor-announcements`,
  //       },
  //     });
  //   });
  // }

  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }

  public listen() {
    this.app.listen(config.port, () => {
      console.log('=================================');
      console.log(`🚀 Server running on port ${config.port}`);
      console.log(`📝 Environment: ${config.nodeEnv}`);
      console.log(`🔗 Magnolia URL: ${config.magnolia.baseUrl}`);
      console.log('=================================');
    });
  }
}

export default App;
