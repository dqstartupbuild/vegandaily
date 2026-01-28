// Bookmark storage utility using AsyncStorage
// Handles persistent storage of user's bookmarked recipes

import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARKS_KEY = '@vegandaily_bookmarks';

/**
 * Get all bookmarked recipe IDs
 */
export const getBookmarks = async (): Promise<string[]> => {
    try {
        const stored = await AsyncStorage.getItem(BOOKMARKS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error reading bookmarks:', error);
        return [];
    }
};

/**
 * Add a recipe ID to bookmarks
 */
export const addBookmark = async (recipeId: string): Promise<boolean> => {
    try {
        const bookmarks = await getBookmarks();
        if (!bookmarks.includes(recipeId)) {
            bookmarks.push(recipeId);
            await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
        }
        return true;
    } catch (error) {
        console.error('Error adding bookmark:', error);
        return false;
    }
};

/**
 * Remove a recipe ID from bookmarks
 */
export const removeBookmark = async (recipeId: string): Promise<boolean> => {
    try {
        const bookmarks = await getBookmarks();
        const filtered = bookmarks.filter((id) => id !== recipeId);
        await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filtered));
        return true;
    } catch (error) {
        console.error('Error removing bookmark:', error);
        return false;
    }
};

/**
 * Check if a recipe is bookmarked
 */
export const isBookmarked = async (recipeId: string): Promise<boolean> => {
    try {
        const bookmarks = await getBookmarks();
        return bookmarks.includes(recipeId);
    } catch (error) {
        console.error('Error checking bookmark:', error);
        return false;
    }
};

/**
 * Toggle bookmark status for a recipe
 */
export const toggleBookmark = async (recipeId: string): Promise<boolean> => {
    const bookmarked = await isBookmarked(recipeId);
    if (bookmarked) {
        await removeBookmark(recipeId);
        return false;
    } else {
        await addBookmark(recipeId);
        return true;
    }
};
