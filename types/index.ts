/**
 * Clink Data Model
 * Represents a shortened link with all necessary metadata
 */
export type ClinkItem = {
  id: string; // Unique 6-character alphanumeric identifier
  originalUrl: string; // The long URL provided by user
  shortUrl: string; // The shortened URL in format: clink.sg/[id]
  timestamp: number; // Unix timestamp of creation
  clicks?: number; // Optional: track how many times link was accessed
  title?: string; // Optional: custom title or extracted from URL
};

/**
 * Storage key for AsyncStorage
 */
export const STORAGE_KEY = '@clink_items';

/**
 * Link action types for bottom sheet
 */
export type LinkAction = 'visit' | 'share' | 'qr' | 'delete';
