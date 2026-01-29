import { Recipe } from '../../../types';

export const chocolateAvocadoMousse: Recipe = {
    id: 'chocolate-avocado-mousse',
    name: 'Chocolate Avocado Mousse',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dessert/chocolate-avocado-mousse.webp'),
    mealType: 'dessert',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: 'easy',
    ingredients: [
        { name: 'ripe avocados', amount: 2, unit: 'item' },
        { name: 'cocoa', amount: 0.25, unit: 'cup' },
        { name: 'maple', amount: 0.25, unit: 'cup' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'vanilla', amount: 1, unit: 'tsp' },
    ],
    instructions: [
        'Blend everything until silky.',
        'Chill 30 min.',
        'Top with berries if desired. Serve and enjoy.'
    ],
    tags: ["dessert","no-cook","quick","meal-prep"],
    nutritionPerServing: {
        calories: 220,
        protein: 3,
        carbs: 22,
        fat: 15,
    },
};
