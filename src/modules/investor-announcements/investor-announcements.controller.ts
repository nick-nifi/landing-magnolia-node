import { NextFunction, Request, Response } from 'express';
import { investorAnnouncementsService } from './investor-announcements.service';
import { ApiResponse, InvestorAnnouncementsResponse } from './investor-announcements.types';

/**
 * Get investor announcements by UUID
 */
export const getAnnouncementsByUuid = async (
  req: Request,
  res: Response<ApiResponse<InvestorAnnouncementsResponse>>,
  next: NextFunction
): Promise<void> => {
  try {
    const { uuid } = req.params;

    if (!uuid) {
      res.status(400).json({
        success: false,
        error: 'UUID parameter is required',
      });
      return;
    }

    const data = await investorAnnouncementsService.getAnnouncementsByUuid(uuid);

    res.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all investor announcements with pagination
 */
export const getAllAnnouncements = async (
  req: Request,
  res: Response<ApiResponse<InvestorAnnouncementsResponse>>,
  next: NextFunction
): Promise<void> => {
  try {
    const offset = parseInt(req.query.offset as string) || 0;
    const limit = parseInt(req.query.limit as string) || 10;

    const data = await investorAnnouncementsService.getAllAnnouncements(offset, limit);

    res.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};
