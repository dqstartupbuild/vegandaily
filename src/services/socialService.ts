import { sql } from '../db';

/**
 * Ratings
 */

export const getRecipeRating = async (recipeId: string) => {
    try {
        const result = await sql`
            SELECT 
                AVG(rating)::FLOAT as average_rating,
                COUNT(*)::INT as total_ratings
            FROM ratings
            WHERE recipe_id = ${recipeId}
        `;
        return result[0];
    } catch (error) {
        console.error('Error fetching recipe rating:', error);
        return { average_rating: 0, total_ratings: 0 };
    }
};

export const getUserRecipeRating = async (userId: string, recipeId: string) => {
    try {
        const result = await sql`SELECT rating FROM ratings WHERE user_id = ${userId} AND recipe_id = ${recipeId}`;
        return result.length > 0 ? result[0].rating : null;
    } catch (error) {
        console.error('Error fetching user recipe rating:', error);
        return null;
    }
};

export const upsertRating = async (userId: string, recipeId: string, rating: number) => {
    try {
        await sql`
            INSERT INTO ratings (user_id, recipe_id, rating, updated_at)
            VALUES (${userId}, ${recipeId}, ${rating}, NOW())
            ON CONFLICT (user_id, recipe_id) 
            DO UPDATE SET rating = EXCLUDED.rating, updated_at = NOW()
        `;
        return true;
    } catch (error) {
        console.error('Error upserting rating:', error);
        return false;
    }
};

/**
 * Comments
 */

export const getRecipeComments = async (recipeId: string) => {
    try {
        // In a real app, we'd join with a users table to get names/avatars.
        // For now, we'll just return the comments.
        const result = await sql`
            SELECT id, user_id, content, created_at 
            FROM comments 
            WHERE recipe_id = ${recipeId}
            ORDER BY created_at DESC
        `;
        return result;
    } catch (error) {
        console.error('Error fetching recipe comments:', error);
        return [];
    }
};

export const addComment = async (userId: string, recipeId: string, content: string) => {
    try {
        await sql`
            INSERT INTO comments (user_id, recipe_id, content)
            VALUES (${userId}, ${recipeId}, ${content})
        `;
        return true;
    } catch (error) {
        console.error('Error adding comment:', error);
        return false;
    }
};
