import { Recipe } from '../../../types';

export const dateTahiniEnergyBites: Recipe = {
    id: 'date-tahini-energy-bites',
    name: 'Date-Tahini Energy Bites',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/date-tahini-energy-bites.webp'),
    mealType: 'snack',
    prepTime: 12,
    cookTime: 0,
    servings: 12,
    difficulty: 'easy',
    ingredients: [
        { name: 'dates', amount: 0.75, unit: 'cup' },
        { name: 'oats', amount: 0.5, unit: 'cup' },
        { name: 'tahini', amount: 2, unit: 'tbsp' },
        { name: 'cocoa', amount: 2, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Blend everything until sticky.',
        'Roll into balls.',
        'Chill 15 min to firm.'
    ],
    tags: ["snack","no-cook","quick","meal-prep"],
    nutritionPerServing: {
        calories: 110,
        protein: 2,
        carbs: 14,
        fat: 6,
    },
};
