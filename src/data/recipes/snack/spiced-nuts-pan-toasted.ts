import { Recipe } from '../../../types';

export const spicedNutsPanToasted: Recipe = {
    id: 'spiced-nuts-pan-toasted',
    name: 'Spiced Nuts (Pan-Toasted)',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/spiced-nuts-pan-toasted.webp'),
    mealType: 'snack',
    prepTime: 3,
    cookTime: 6,
    servings: 6,
    difficulty: 'easy',
    ingredients: [
        { name: 'mixed nuts', amount: 3, unit: 'cups' },
        { name: 'maple', amount: 1, unit: 'tbsp' },
        { name: 'smoked paprika', amount: 1, unit: 'tsp' },
        { name: 'cinnamon', amount: 0.5, unit: 'tsp' },
        { name: 'cayenne', amount: 1, unit: 'pinch' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Warm nuts in skillet 2 min.',
        'Add maple + spices + salt; toss 3-4 min until coated.',
        'Cool to crisp.'
    ],
    tags: ["snack","quick","meal-prep"],
    nutritionPerServing: {
        calories: 210,
        protein: 6,
        carbs: 8,
        fat: 18,
    },
};
