/**
 * Utility functions for Clink URL Shortener
 */

/**
 * URL Validation Regex
 * Validates URLs with http/https protocols
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

/**
 * Validates if a string is a valid URL
 * @param url - The URL string to validate
 * @returns boolean indicating if URL is valid
 */
export function isValidUrl(url: string): boolean {
  if (!url || url.trim().length === 0) {
    return false;
  }

  return URL_REGEX.test(url.trim());
}

/**
 * Generates a unique 6-character alphanumeric ID
 * Uses timestamp and random characters for uniqueness
 * @returns 6-character alphanumeric string
 */
export function generateUniqueId(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const timestamp = Date.now().toString(36); // Convert timestamp to base36
  let id = '';

  // Use last 2 chars of timestamp for time-based uniqueness
  id += timestamp.slice(-2);

  // Add 4 random characters
  for (let i = 0; i < 4; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return id;
}

/**
 * Formats a URL to include protocol if missing
 * @param url - The URL to format
 * @returns Formatted URL with protocol
 */
export function formatUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

/**
 * Extracts title from URL (domain name)
 * @param url - The URL to extract title from
 * @returns Extracted title
 */
export function extractTitleFromUrl(url: string): string {
  try {
    const formatted = formatUrl(url);
    const urlObj = new URL(formatted);
    const hostname = urlObj.hostname;

    // Remove www. prefix if exists
    const domain = hostname.replace(/^www\./, '');

    // Capitalize first letter
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  } catch (error) {
    return 'Link';
  }
}

/**
 * Creates the short URL format
 * @param id - The unique ID
 * @returns Short URL in format clink.sg/[id]
 */
export function createShortUrl(id: string): string {
  return `clink.sg/${id}`;
}
