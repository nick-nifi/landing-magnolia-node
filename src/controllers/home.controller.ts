import { Request, Response, NextFunction } from 'express';
import { magnoliaService } from '../services/magnolia.service';
import { getMagnoliaPath } from '../config/paths.config';
import { ApiResponse, HomePageData, AboutPageData } from '../types/api.types';

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

/**
 * Get about page data with contacts from Magnolia CMS
 */
export const getAboutPage = async (
  _req: Request,
  res: Response<ApiResponse<AboutPageData>>,
  next: NextFunction
): Promise<void> => {
  try {
    const path = getMagnoliaPath('about');
    const data = await magnoliaService.get(path);

    res.json({
      success: true,
      data: data as AboutPageData,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};
