import { Recipe } from '../../../types';

export const savoryOatmealWithMushroomsSpinach: Recipe = {
    id: 'savory-oatmeal-with-mushrooms-spinach',
    name: 'Savory Oatmeal with Mushrooms + Spinach',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/breakfast/savory-oatmeal-mushrooms-spinach.webp'),
    mealType: 'breakfast',
    prepTime: 5,
    cookTime: 8,
    servings: 1,
    difficulty: 'easy',
    ingredients: [

    ],
    instructions: [
        'Saute mushrooms in oil with salt 3-4 min.',
        'Add broth + oats + garlic powder; simmer 5 min, stirring.',
        'Finish with pepper + lemon. Serve and enjoy.'
    ],
    tags: ["breakfast","quick","oats"],
    nutritionPerServing: {
        calories: 390,
        protein: 14,
        carbs: 52,
        fat: 15,
    },
};
