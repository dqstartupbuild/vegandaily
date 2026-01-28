// Main recipes data index
// Aggregates all recipes for easy access

import { Recipe, MealType, RecipeCollection } from '../../types';
import { breakfastRecipes } from './breakfast';
import { lunchRecipes } from './lunch';
import { dinnerRecipes } from './dinner';

/**
 * All recipes organized by meal type
 */
export const allRecipes: RecipeCollection = {
    breakfast: breakfastRecipes,
    lunch: lunchRecipes,
    dinner: dinnerRecipes,
};

/**
 * Get all recipes for a specific meal type
 */
export const getRecipesByMealType = (mealType: MealType): Recipe[] => {
    return allRecipes[mealType];
};

/**
 * Get total recipe count across all meal types
 */
export const getTotalRecipeCount = (): number => {
    return breakfastRecipes.length + lunchRecipes.length + dinnerRecipes.length;
};

// Re-export for convenience
export { breakfastRecipes, lunchRecipes, dinnerRecipes };
