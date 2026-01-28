import { Recipe } from '../../../types';

export const berryChiaPudding: Recipe = {
    id: 'berry-chia-pudding',
    name: 'Berry Chia Pudding',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/breakfast/berry-chia-pudding.png'),
    mealType: 'breakfast',
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'chia seeds', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'plant milk', amount: 1.5, unit: 'cups' },
        { name: 'maple syrup', amount: 2, unit: 'tbsp' },
        { name: 'vanilla', amount: 1, unit: 'tsp' },
        { name: 'mixed berries', amount: 1, unit: 'cup' },
    ],
    instructions: [
        'Whisk chia, milk, maple, vanilla.',
        'Rest 10 min, whisk again to prevent clumps.',
        'Chill 2+ hours.',
        'Top with berries. Serve and enjoy.'
    ],
    tags: ["breakfast","no-cook","quick","chia"],
    nutritionPerServing: {
        calories: 260,
        protein: 6,
        carbs: 26,
        fat: 14,
    },
};
