import { Router } from 'express';
import { getAnnouncementsByUuid, getAllAnnouncements } from './investor-announcements.controller';

const router = Router();

/**
 * GET /api/investor-announcements
 * Get all investor announcements with pagination
 * Query params: offset (default: 0), limit (default: 10)
 */
router.get('/', getAllAnnouncements);

/**
 * GET /api/investor-announcements/:uuid
 * Get investor announcements by UUID
 */
router.get('/:uuid', getAnnouncementsByUuid);

export default router;
