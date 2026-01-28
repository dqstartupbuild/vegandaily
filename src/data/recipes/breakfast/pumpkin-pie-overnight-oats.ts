import { Recipe } from '../../../types';

export const pumpkinPieOvernightOats: Recipe = {
    id: 'pumpkin-pie-overnight-oats',
    name: 'Pumpkin Pie Overnight Oats',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'breakfast',
    prepTime: 6,
    cookTime: 0,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'oats', amount: 0.5, unit: 'cup' },
        { name: 'chia', amount: 1, unit: 'tbsp' },
        { name: 'pumpkin puree', amount: 0.5, unit: 'cup' },
        { name: 'plant milk', amount: 1, unit: 'cup' },
        { name: 'maple', amount: 2, unit: 'tbsp' },
        { name: 'pumpkin spice', amount: 1, unit: 'tsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Stir everything in a jar.',
        'Chill 6+ hours.',
        'Add nuts/seeds on top if you want. Serve and enjoy.'
    ],
    tags: ["breakfast","no-cook","quick","oats"],
    nutritionPerServing: {
        calories: 430,
        protein: 12,
        carbs: 68,
        fat: 14,
    },
};
