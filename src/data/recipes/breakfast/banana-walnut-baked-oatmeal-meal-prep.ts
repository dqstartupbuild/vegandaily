import { Recipe } from '../../../types';

export const bananaWalnutBakedOatmealMealPrep: Recipe = {
    id: 'banana-walnut-baked-oatmeal-meal-prep',
    name: 'Banana-Walnut Baked Oatmeal (Meal Prep)',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/breakfast/banana-walnut-baked-oatmeal-meal-prep.webp'),
    mealType: 'breakfast',
    prepTime: 10,
    cookTime: 30,
    servings: 6,
    difficulty: 'hard',
    ingredients: [
        { name: 'oats', amount: 2, unit: 'cups' },
        { name: 'ripe bananas mashed', amount: 2, unit: 'item' },
        { name: 'plant milk', amount: 2, unit: 'cups' },
        { name: 'baking powder', amount: 1, unit: 'tsp' },
        { name: 'cinnamon', amount: 1, unit: 'tsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'walnuts', amount: 0.5, unit: 'cup' },
        { name: 'maple', amount: 1, unit: 'tbsp', optional: true },
    ],
    instructions: [
        'Heat oven 375F. Grease an 8x8 dish.',
        'Mix everything; pour into dish.',
        'Bake 28-35 min until set. Cool, slice.'
    ],
    tags: ["breakfast","meal-prep","oats","baked"],
    nutritionPerServing: {
        calories: 280,
        protein: 7,
        carbs: 42,
        fat: 10,
    },
};
