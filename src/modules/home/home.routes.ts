import { Router } from 'express';
import { getHomePage } from './home.controller';

const router = Router();

/**
 * GET /api/home
 * Get home page data from Magnolia CMS
 */
router.get('/', getHomePage);

export default router;
