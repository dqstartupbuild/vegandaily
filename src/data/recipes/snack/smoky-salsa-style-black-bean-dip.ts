import { Recipe } from '../../../types';

export const smokySalsaStyleBlackBeanDip: Recipe = {
    id: 'smoky-salsa-style-black-bean-dip',
    name: 'Smoky Salsa-Style Black Bean Dip',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/smoky-salsa-style-black-bean-dip.webp'),
    mealType: 'snack',
    prepTime: 8,
    cookTime: 0,
    servings: 6,
    difficulty: 'easy',
    ingredients: [
        { name: 'black beans', amount: 1, unit: 'can' },
        { name: 'salsa', amount: 0.5, unit: 'cup' },
        { name: 'lime', amount: 1, unit: 'item' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Blend beans + salsa + lime + cumin + salt.',
        'Add water for desired thickness.',
        'Eat with cucumbers or baked chips. Serve and enjoy.'
    ],
    tags: ["snack","no-cook","quick","meal-prep","beans"],
    nutritionPerServing: {
        calories: 120,
        protein: 6,
        carbs: 20,
        fat: 2,
    },
};
