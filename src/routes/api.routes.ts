import { Request, Response, Router } from 'express';
import homeRoutes from './home.routes';

const router = Router();

/**
 * Health check endpoint
 */
router.get('/health', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
});

/**
 * Home page routes
 * Handles /api/home and /api/home/about
 */
router.use('/home', homeRoutes);

export default router;
