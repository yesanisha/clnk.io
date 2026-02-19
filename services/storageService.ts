import AsyncStorage from '@react-native-async-storage/async-storage';
import { ClinkItem, STORAGE_KEY } from '../types';

/**
 * Storage Service for Clink Items
 * Handles all persistent storage operations using AsyncStorage
 */

/**
 * Retrieves all Clink items from storage
 * @returns Promise<ClinkItem[]> - Array of all stored items, sorted by timestamp (newest first)
 */
export async function getAllClinkItems(): Promise<ClinkItem[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    if (jsonValue !== null) {
      const items: ClinkItem[] = JSON.parse(jsonValue);
      // Sort by timestamp, newest first
      return items.sort((a, b) => b.timestamp - a.timestamp);
    }
    return [];
  } catch (error) {
    console.error('Error fetching Clink items:', error);
    return [];
  }
}

/**
 * Saves a new Clink item to storage
 * @param item - The ClinkItem to save
 * @returns Promise<boolean> - Success status
 */
export async function saveClinkItem(item: ClinkItem): Promise<boolean> {
  try {
    const existingItems = await getAllClinkItems();
    const updatedItems = [item, ...existingItems];
    const jsonValue = JSON.stringify(updatedItems);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    return true;
  } catch (error) {
    console.error('Error saving Clink item:', error);
    return false;
  }
}

/**
 * Deletes a Clink item from storage by ID
 * @param id - The ID of the item to delete
 * @returns Promise<boolean> - Success status
 */
export async function deleteClinkItem(id: string): Promise<boolean> {
  try {
    const existingItems = await getAllClinkItems();
    const filteredItems = existingItems.filter((item) => item.id !== id);
    const jsonValue = JSON.stringify(filteredItems);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    return true;
  } catch (error) {
    console.error('Error deleting Clink item:', error);
    return false;
  }
}

/**
 * Updates an existing Clink item (e.g., increment clicks)
 * @param id - The ID of the item to update
 * @param updates - Partial ClinkItem with fields to update
 * @returns Promise<boolean> - Success status
 */
export async function updateClinkItem(
  id: string,
  updates: Partial<ClinkItem>
): Promise<boolean> {
  try {
    const existingItems = await getAllClinkItems();
    const updatedItems = existingItems.map((item) =>
      item.id === id ? { ...item, ...updates } : item
    );
    const jsonValue = JSON.stringify(updatedItems);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    return true;
  } catch (error) {
    console.error('Error updating Clink item:', error);
    return false;
  }
}

/**
 * Clears all Clink items from storage
 * @returns Promise<boolean> - Success status
 */
export async function clearAllClinkItems(): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing Clink items:', error);
    return false;
  }
}

/**
 * Checks if an ID already exists in storage
 * @param id - The ID to check
 * @returns Promise<boolean> - True if ID exists
 */
export async function idExists(id: string): Promise<boolean> {
  try {
    const items = await getAllClinkItems();
    return items.some((item) => item.id === id);
  } catch (error) {
    console.error('Error checking ID existence:', error);
    return false;
  }
}
