import { magnoliaService } from '../../shared/services/magnolia.service';
import { InvestorAnnouncementsResponse } from './investor-announcements.types';

/**
 * Investor announcements service for business logic
 */
export class InvestorAnnouncementsService {
  /**
   * Get investor announcements by UUID
   */
  async getAnnouncementsByUuid(uuid: string): Promise<InvestorAnnouncementsResponse> {
    const path = `investorAnnouncements/?@jcr:uuid=${uuid}`;
    const data = await magnoliaService.get(path);
    return data as InvestorAnnouncementsResponse;
  }

  /**
   * Get all investor announcements with pagination
   */
  async getAllAnnouncements(offset = 0, limit = 10): Promise<InvestorAnnouncementsResponse> {
    const path = `investorAnnouncements/?offset=${offset}&limit=${limit}`;
    const data = await magnoliaService.get(path);
    return data as InvestorAnnouncementsResponse;
  }
}

export const investorAnnouncementsService = new InvestorAnnouncementsService();
