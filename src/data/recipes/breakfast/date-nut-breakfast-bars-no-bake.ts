import { Recipe } from '../../../types';

export const dateNutBreakfastBarsNoBake: Recipe = {
    id: 'date-nut-breakfast-bars-no-bake',
    name: 'Date-Nut Breakfast Bars (No Bake)',
    description: 'A grab-and-go bar that\'s chewy, sweet, and satisfying.',
    image: require('../../../../assets/recipes/breakfast/date-nut-breakfast-bars-no-bake.png'),
    mealType: 'breakfast',
    prepTime: 12,
    cookTime: 0,
    servings: 8,
    difficulty: 'easy',
    ingredients: [
        { name: 'pitted dates', amount: 1, unit: 'cup' },
        { name: 'oats', amount: 1, unit: 'cup' },
        { name: 'almonds', amount: 0.5, unit: 'cup' },
        { name: 'chia', amount: 2, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'water', amount: 2, unit: 'tbsp' },
    ],
    instructions: [
        'Pulse almonds + oats + chia + salt in a processor.',
        'Add dates; pulse until sticky. Add water if needed.',
        'Press into lined pan; chill 30+ min; slice.'
    ],
    tags: ["breakfast","no-cook","quick","meal-prep","bars","baked"],
    nutritionPerServing: {
        calories: 220,
        protein: 5,
        carbs: 28,
        fat: 11,
    },
};
