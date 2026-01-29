import { Recipe } from '../../../types';

export const darkChocolateCoveredAlmondsQuick: Recipe = {
    id: 'dark-chocolate-covered-almonds-quick',
    name: 'Dark Chocolate Covered Almonds (Quick)',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dessert/dark-chocolate-covered-almonds-quick.webp'),
    mealType: 'dessert',
    prepTime: 8,
    cookTime: 2,
    servings: 10,
    difficulty: 'easy',
    ingredients: [
        { name: 'almonds', amount: 1, unit: 'cup' },
        { name: 'dairy-free dark chocolate chips', amount: 0.5, unit: 'cup' },
        { name: 'salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Melt chocolate (microwave in 20-sec bursts, stir).',
        'Toss almonds in chocolate + pinch salt.',
        'Spread on parchment; chill 20-30 min.'
    ],
    tags: ["dessert","quick","meal-prep"],
    nutritionPerServing: {
        calories: 150,
        protein: 4,
        carbs: 10,
        fat: 11,
    },
};
