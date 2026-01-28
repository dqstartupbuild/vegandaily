import { Recipe } from '../../../types';

export const carrotCakeBlissBalls: Recipe = {
    id: 'carrot-cake-bliss-balls',
    name: 'Carrot Cake Bliss Balls',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dessert/carrot-cake-bliss-balls.png'),
    mealType: 'dessert',
    prepTime: 12,
    cookTime: 0,
    servings: 14,
    difficulty: 'easy',
    ingredients: [
        { name: 'grated carrot', amount: 1, unit: 'cup' },
        { name: 'dates', amount: 1, unit: 'cup' },
        { name: 'oats', amount: 1, unit: 'cup' },
        { name: 'walnuts', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'cinnamon', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'shredded coconut', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Pulse oats + walnuts + spices.',
        'Add dates; pulse sticky. Add carrot; pulse to combine.',
        'Roll into balls; chill.'
    ],
    tags: ["dessert","no-cook","quick","meal-prep"],
    nutritionPerServing: {
        calories: 120,
        protein: 3,
        carbs: 15,
        fat: 6,
    },
};
