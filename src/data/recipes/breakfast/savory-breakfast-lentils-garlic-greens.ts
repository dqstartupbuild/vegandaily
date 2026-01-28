import { Recipe } from '../../../types';

export const savoryBreakfastLentilsGarlicGreens: Recipe = {
    id: 'savory-breakfast-lentils-garlic-greens',
    name: 'Savory Breakfast Lentils (Garlic + Greens)',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'breakfast',
    prepTime: 5,
    cookTime: 12,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'cooked lentils', amount: 2, unit: 'cups' },
        { name: 'oil', amount: 1, unit: 'tsp' },
        { name: 'garlic cloves', amount: 2, unit: 'item' },
        { name: 'spinach/kale', amount: 2, unit: 'cups' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute garlic in oil 30 sec.',
        'Add lentils + a splash of water; heat 3-4 min.',
        'Stir in greens until wilted. Finish with lemon + pepper. Serve and enjoy.'
    ],
    tags: ["breakfast","lentils"],
    nutritionPerServing: {
        calories: 420,
        protein: 22,
        carbs: 62,
        fat: 10,
    },
};
