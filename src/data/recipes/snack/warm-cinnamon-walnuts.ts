import { Recipe } from '../../../types';

export const warmCinnamonWalnuts: Recipe = {
    id: 'warm-cinnamon-walnuts',
    name: 'Warm Cinnamon Walnuts',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/warm-cinnamon-walnuts.png'),
    mealType: 'snack',
    prepTime: 3,
    cookTime: 5,
    servings: 4,
    difficulty: 'easy',
    ingredients: [
        { name: 'walnuts', amount: 2, unit: 'cups' },
        { name: 'maple', amount: 1, unit: 'tbsp' },
        { name: 'cinnamon', amount: 0.5, unit: 'tsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Toast walnuts in skillet 2 min.',
        'Add maple, cinnamon, salt; toss 2-3 min.',
        'Cool slightly.'
    ],
    tags: ["snack","quick","meal-prep"],
    nutritionPerServing: {
        calories: 200,
        protein: 5,
        carbs: 6,
        fat: 19,
    },
};
