import { Recipe } from '../../../types';

export const lemonBlueberryChiaJam: Recipe = {
    id: 'lemon-blueberry-chia-jam',
    name: 'Lemon Blueberry Chia Jam',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dessert/lemon-blueberry-chia-jam.png'),
    mealType: 'dessert',
    prepTime: 5,
    cookTime: 10,
    servings: 8,
    difficulty: 'easy',
    ingredients: [
        { name: 'blueberries', amount: 2, unit: 'cups' },
        { name: 'chia', amount: 2, unit: 'tbsp' },
        { name: 'maple', amount: 2, unit: 'tbsp' },
        { name: 'lemon zest/juice', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Simmer blueberries 6-8 min until burst.',
        'Stir in chia, maple, lemon; thicken 3-5 min.',
        'Cool (thickens more). Use on oats/toast.'
    ],
    tags: ["dessert","quick","meal-prep","chia"],
    nutritionPerServing: {
        calories: 60,
        protein: 1,
        carbs: 12,
        fat: 2,
    },
};
