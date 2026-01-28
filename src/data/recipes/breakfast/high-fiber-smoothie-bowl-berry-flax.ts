import { Recipe } from '../../../types';

export const highFiberSmoothieBowlBerryFlax: Recipe = {
    id: 'high-fiber-smoothie-bowl-berry-flax',
    name: 'High-Fiber Smoothie Bowl (Berry + Flax)',
    description: 'A creamy, energizing smoothie that blends plant-based goodness into a quick breakfast.',
    image: null,
    mealType: 'breakfast',
    prepTime: 7,
    cookTime: 0,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'frozen berries', amount: 2, unit: 'cups' },
        { name: 'banana', amount: 1, unit: 'item' },
        { name: 'soy milk', amount: 0.75, unit: 'cup' },
        { name: 'ground flax', amount: 1, unit: 'tbsp' },
        { name: 'oats', amount: 2, unit: 'tbsp' },
        { name: 'toppings - seeds', amount: 1, unit: 'item' },
        { name: 'toppings - fruit', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Blend berries, banana, soy milk, flax, oats (use minimal liquid for thickness).',
        'Pour into bowl; add toppings. Serve and enjoy.'
    ],
    tags: ["breakfast","no-cook","quick","bowl","smoothie"],
    nutritionPerServing: {
        calories: 480,
        protein: 14,
        carbs: 62,
        fat: 20,
    },
};
