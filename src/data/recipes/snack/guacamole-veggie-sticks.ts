import { Recipe } from '../../../types';

export const guacamoleVeggieSticks: Recipe = {
    id: 'guacamole-veggie-sticks',
    name: 'Guacamole + Veggie Sticks',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/guacamole-veggie-sticks.webp'),
    mealType: 'snack',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: 'easy',
    ingredients: [
        { name: 'avocados', amount: 2, unit: 'item' },
        { name: 'lime', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'diced onion', amount: 1, unit: 'item' },
        { name: 'diced tomato', amount: 1, unit: 'item' },
        { name: 'cilantro', amount: 1, unit: 'item' },
        { name: 'jalapeno', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Mash avocado.',
        'Stir in lime, salt, onion, tomato, cilantro.',
        'Serve with carrots/cucumber/peppers.'
    ],
    tags: ["snack","no-cook","quick","meal-prep"],
    nutritionPerServing: {
        calories: 180,
        protein: 2,
        carbs: 10,
        fat: 15,
    },
};
