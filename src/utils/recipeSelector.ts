// Recipe selector utility
// Provides daily recipe selection based on date

import { Recipe, MealType } from '../types';
import { getDayOfYear } from './dateUtils';
import { getRecipesByMealType } from '../data/recipes';

/**
 * Get the daily recipe for a specific meal type.
 * Uses a deterministic algorithm based on the current day of the year
 * to ensure the same recipe is shown all day but different each day.
 */
export const getDailyRecipe = (mealType: MealType): Recipe => {
    const recipes = getRecipesByMealType(mealType);
    const dayOfYear = getDayOfYear(new Date());

    // Use modulo to cycle through recipes based on day of year
    const recipeIndex = dayOfYear % recipes.length;

    return recipes[recipeIndex];
};

/**
 * Get daily recipes for all meal types
 */
export const getAllDailyRecipes = (): Record<MealType, Recipe> => {
    return {
        breakfast: getDailyRecipe('breakfast'),
        lunch: getDailyRecipe('lunch'),
        dinner: getDailyRecipe('dinner'),
    };
};

/**
 * Preview recipe for a specific date (useful for testing)
 */
export const getRecipeForDate = (
    mealType: MealType,
    date: Date
): Recipe => {
    const recipes = getRecipesByMealType(mealType);
    const dayOfYear = getDayOfYear(date);
    const recipeIndex = dayOfYear % recipes.length;

    return recipes[recipeIndex];
};
