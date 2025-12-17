import { Request, Response } from 'express';

/**
 * Health check endpoint handler
 */
export const getHealth = (_req: Request, res: Response): void => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
};
