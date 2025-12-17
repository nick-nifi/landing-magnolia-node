import { magnoliaService } from '../../shared/services/magnolia.service';
import { getMagnoliaPath } from '../../config/paths.config';
import { HomePageData } from './home.types';

/**
 * Home service for business logic
 */
export class HomeService {
  /**
   * Get home page data from Magnolia CMS
   */
  async getHomePageData(): Promise<HomePageData> {
    const path = getMagnoliaPath('home');
    const data = await magnoliaService.get(path);
    return data as HomePageData;
  }
}

export const homeService = new HomeService();
