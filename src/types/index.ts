// TypeScript type definitions for EasyVegan app

/**
 * Represents a meal type category
 */
export type MealType = 'breakfast' | 'lunch' | 'dinner';

/**
 * Represents a single ingredient in a recipe
 */
export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  optional?: boolean;
}

/**
 * Nutritional information per serving
 */
export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

/**
 * Difficulty level for recipes
 */
export type Difficulty = 'easy' | 'medium' | 'hard';

/**
 * Complete recipe definition
 */
export interface Recipe {
  id: string;
  name: string;
  description: string;
  mealType: MealType;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: Difficulty;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  nutritionPerServing?: NutritionInfo;
}

/**
 * Recipe collection organized by meal type
 */
export interface RecipeCollection {
  breakfast: Recipe[];
  lunch: Recipe[];
  dinner: Recipe[];
}
