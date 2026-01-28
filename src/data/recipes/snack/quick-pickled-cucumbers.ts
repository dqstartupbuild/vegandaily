import { Recipe } from '../../../types';

export const quickPickledCucumbers: Recipe = {
    id: 'quick-pickled-cucumbers',
    name: 'Quick Pickled Cucumbers',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'snack',
    prepTime: 8,
    cookTime: 0,
    servings: 4,
    difficulty: 'easy',
    ingredients: [
        { name: 'cucumbers sliced', amount: 2, unit: 'item' },
        { name: 'vinegar', amount: 0.5, unit: 'cup' },
        { name: 'water', amount: 0.5, unit: 'cup' },
        { name: 'sugar or maple', amount: 1, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'tsp' },
        { name: 'chili flakes', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Dissolve sugar + salt in vinegar/water.',
        'Pour over cucumbers; add chili flakes.',
        'Chill 20+ min.'
    ],
    tags: ["snack","no-cook","quick","meal-prep"],
    nutritionPerServing: {
        calories: 25,
        protein: 1,
        carbs: 5,
        fat: 0,
    },
};
