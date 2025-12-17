import { Router, Request, Response } from 'express';
import { magnoliaService } from '../services/magnolia.service';

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
 * Forward GET request to Magnolia
 * Example: GET /api/magnolia/pages/home
 */
router.get('/magnolia/*', async (req: Request, res: Response, next) => {
  try {
    const path = req.params[0]; // Get the wildcard path
    const data = await magnoliaService.get(path, req.query as Record<string, unknown>);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * Forward POST request to Magnolia
 * Example: POST /api/magnolia/forms/contact
 */
router.post('/magnolia/*', async (req: Request, res: Response, next) => {
  try {
    const path = req.params[0];
    const data = await magnoliaService.post(path, req.body);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * Forward PUT request to Magnolia
 * Example: PUT /api/magnolia/content/123
 */
router.put('/magnolia/*', async (req: Request, res: Response, next) => {
  try {
    const path = req.params[0];
    const data = await magnoliaService.put(path, req.body);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * Forward DELETE request to Magnolia
 * Example: DELETE /api/magnolia/content/123
 */
router.delete('/magnolia/*', async (req: Request, res: Response, next) => {
  try {
    const path = req.params[0];
    const data = await magnoliaService.delete(path);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
