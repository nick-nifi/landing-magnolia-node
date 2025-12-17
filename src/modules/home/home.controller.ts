import { NextFunction, Request, Response } from 'express';
import { magnoliaService } from '../../shared/services/magnolia.service';
import { getMagnoliaPath } from '../../config/paths.config';
import { ApiResponse, HomePageData } from './home.types';

/**
 * Get home page data from Magnolia CMS
 */
export const getHomePage = async (
  _req: Request,
  res: Response<ApiResponse<HomePageData>>,
  next: NextFunction
): Promise<void> => {
  try {
    const path = getMagnoliaPath('home');
    const data = await magnoliaService.get(path);

    res.json({
      success: true,
      data: data as HomePageData,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};
