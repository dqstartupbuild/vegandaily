import { Recipe } from '../../../types';

export const peanutButterBananaSmoothie: Recipe = {
    id: 'peanut-butter-banana-smoothie',
    name: 'Peanut Butter Banana Smoothie',
    description: 'A creamy, energizing smoothie that blends plant-based goodness into a quick breakfast.',
    image: null,
    mealType: 'breakfast',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'banana', amount: 1, unit: 'item' },
        { name: 'peanut butter', amount: 2, unit: 'tbsp' },
        { name: 'soy milk', amount: 1, unit: 'cup' },
        { name: 'ground flax', amount: 1, unit: 'tbsp' },
        { name: 'ice', amount: 0.5, unit: 'cup' },
        { name: 'cinnamon', amount: 1, unit: 'pinch' },
        { name: 'cocoa', amount: 1, unit: 'tsp', optional: true },
    ],
    instructions: [
        'Blend everything until thick and creamy.',
        'Add more ice for thicker, or more milk for thinner. Serve and enjoy.'
    ],
    tags: ["breakfast","no-cook","quick","smoothie"],
    nutritionPerServing: {
        calories: 520,
        protein: 16,
        carbs: 62,
        fat: 24,
    },
};
