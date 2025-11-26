/**
 * Generic CRUD Service class for data collections
 * Provides type-safe CRUD operations with error handling
 * This is a generic implementation that can work with any backend
 */

export interface WixDataItem {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
}

export interface WixDataResult<T> {
  items: T[];
  length?: number;
  pageSize?: number;
  offset?: number;
}

export class BaseCrudService {
  /**
   * Creates a new item in the collection
   * @param itemData - Data for the new item
   * @returns Promise<T> - The created item
   */
  static async create<T extends WixDataItem>(
    collectionId: string,
    itemData: Partial<T> | Record<string, unknown>,
  ): Promise<T> {
    try {
      // Mock implementation - in production, connect to your backend
      const item = {
        ...itemData,
        _id: Math.random().toString(36).substr(2, 9),
        _createdDate: new Date(),
      } as T;
      return item;
    } catch (error) {
      console.error(`Error creating ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to create ${collectionId}`
      );
    }
  }

  /**
   * Retrieves all items from the collection
   * @param collectionId - The collection to query
   * @returns Promise<WixDataResult<T>> - Query result with all items
   */
  static async getAll<T extends WixDataItem>(
    collectionId: string,
  ): Promise<WixDataResult<T>> {
    try {
      // Mock implementation - returns empty array
      // In production, connect to your backend (Firebase, MongoDB, etc.)
      return {
        items: [],
        length: 0,
        pageSize: 0,
        offset: 0,
      };
    } catch (error) {
      console.error(`Error fetching ${collectionId}s:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to fetch ${collectionId}s`
      );
    }
  }

  /**
   * Retrieves a single item by ID
   * @param collectionId - The collection to query
   * @param itemId - ID of the item to retrieve
   * @returns Promise<T | null> - The item or null if not found
   */
  static async getById<T extends WixDataItem>(
    collectionId: string,
    itemId: string,
  ): Promise<T | null> {
    try {
      // Mock implementation
      return null;
    } catch (error) {
      console.error(`Error fetching ${collectionId} by ID:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to fetch ${collectionId}`
      );
    }
  }

  /**
   * Updates an existing item
   * @param itemData - Updated item data (must include _id)
   * @returns Promise<T> - The updated item
   */
  static async update<T extends WixDataItem>(collectionId: string, itemData: T): Promise<T> {
    try {
      return itemData;
    } catch (error) {
      console.error(`Error updating ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to update ${collectionId}`
      );
    }
  }

  /**
   * Deletes an item by ID
   * @param itemId - ID of the item to delete
   * @returns Promise<T> - The deleted item
   */
  static async delete<T extends WixDataItem>(collectionId: string, itemId: string): Promise<T> {
    try {
      // Mock implementation
      return { _id: itemId } as T;
    } catch (error) {
      console.error(`Error deleting ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to delete ${collectionId}`
      );
    }
  }
}
