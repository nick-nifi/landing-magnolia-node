import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error:', err);

  // Check if error is from Magnolia API
  if (err.message.includes('Magnolia API Error')) {
    const statusMatch = err.message.match(/\((\d+)\)/);
    const status = statusMatch ? parseInt(statusMatch[1], 10) : 500;

    return res.status(status).json({
      success: false,
      error: err.message,
      path: req.path,
    });
  }

  // Default error response
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message,
    path: req.path,
  });
};
