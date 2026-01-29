import { sql } from '../db';

/**
 * Fetch bookmarks for a specific user from the database
 */
export const getDBBookmarks = async (userId: string): Promise<string[]> => {
    try {
        const result = await sql`SELECT recipe_id FROM bookmarks WHERE user_id = ${userId}`;
        return result.map((r: any) => r.recipe_id);
    } catch (error) {
        console.error('Error fetching bookmarks from DB:', error);
        return [];
    }
};

/**
 * Add a bookmark to the database
 */
export const addDBBookmark = async (userId: string, recipeId: string): Promise<boolean> => {
    try {
        await sql`
            INSERT INTO bookmarks (user_id, recipe_id)
            VALUES (${userId}, ${recipeId})
            ON CONFLICT (user_id, recipe_id) DO NOTHING
        `;
        return true;
    } catch (error) {
        console.error('Error adding bookmark to DB:', error);
        return false;
    }
};

/**
 * Remove a bookmark from the database
 */
export const removeDBBookmark = async (userId: string, recipeId: string): Promise<boolean> => {
    try {
        await sql`DELETE FROM bookmarks WHERE user_id = ${userId} AND recipe_id = ${recipeId}`;
        return true;
    } catch (error) {
        console.error('Error removing bookmark from DB:', error);
        return false;
    }
};

/**
 * Sync local bookmarks to the database for a user
 */
export const syncBookmarksToDB = async (userId: string, recipeIds: string[]): Promise<void> => {
    if (recipeIds.length === 0) return;
    try {
        // Simple sequential insert for now. Can be optimized with unnest if needed.
        for (const recipeId of recipeIds) {
            await addDBBookmark(userId, recipeId);
        }
    } catch (error) {
        console.error('Error syncing bookmarks to DB:', error);
    }
};
