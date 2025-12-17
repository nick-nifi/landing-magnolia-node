/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp?: string;
}

/**
 * Magnolia API response wrapper
 */
export interface MagnoliaApiResponse<T> {
  total: number;
  offset: number;
  limit: number;
  results: T[];
}

/**
 * Download list item
 */
export interface DownloadListFItem {
  '@name': string;
  '@path': string;
  '@id': string;
  '@nodeType': string;
  description: string;
  title: string;
  file: string;
  date: string;
  '@nodes': string[];
}

/**
 * Download list items container
 */
export interface DownloadListFItems {
  '@name': string;
  '@path': string;
  '@id': string;
  '@nodeType': string;
  '@nodes': string[];
  [key: string]: DownloadListFItem | string | string[];
}

/**
 * Download list F component
 */
export interface DownloadListF {
  '@name': string;
  '@path': string;
  '@id': string;
  '@nodeType': string;
  description: string;
  name: string;
  downloadListFItems: DownloadListFItems;
  '@nodes': string[];
}

/**
 * Header A2 component
 */
export interface HeaderA2 {
  '@name': string;
  '@path': string;
  '@id': string;
  '@nodeType': string;
  name: string;
  headerBgColor: string;
  headerType: string;
  description: string;
  title: string;
  image: string;
  '@nodes': string[];
}

/**
 * Content B9 component
 */
export interface ContentB9 {
  '@name': string;
  '@path': string;
  '@id': string;
  '@nodeType': string;
  description: string;
  title: string;
  name: string;
  '@nodes': string[];
}

/**
 * Investor announcement data structure
 */
export interface InvestorAnnouncementData {
  '@name': string;
  '@path': string;
  '@id': string;
  '@nodeType': string;
  headerA2: HeaderA2;
  contentB9: ContentB9;
  name: string;
  description: string;
  title: string;
  downloadListF: DownloadListF;
  '@nodes': string[];
}

/**
 * Investor announcements response
 */
export interface InvestorAnnouncementsResponse extends MagnoliaApiResponse<InvestorAnnouncementData> {}
