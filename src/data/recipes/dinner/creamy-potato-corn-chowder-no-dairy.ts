import { Recipe } from '../../../types';

export const creamyPotatoCornChowderNoDairy: Recipe = {
    id: 'creamy-potato-corn-chowder-no-dairy',
    name: 'Creamy Potato Corn Chowder (No Dairy)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/creamy-potato-corn-chowder-no-dairy.webp'),
    mealType: 'dinner',
    prepTime: 12,
    cookTime: 25,
    servings: 5,
    difficulty: 'hard',
    ingredients: [
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic cloves', amount: 3, unit: 'item' },
        { name: 'potatoes diced', amount: 4, unit: 'item' },
        { name: 'corn', amount: 2, unit: 'cups' },
        { name: 'broth', amount: 5, unit: 'cups' },
        { name: 'plant milk', amount: 1, unit: 'cup' },
        { name: 'white beans (for creaminess)', amount: 1, unit: 'can' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion 5 min; add garlic 30 sec.',
        'Add potatoes + broth; simmer 15 min until tender.',
        'Add corn + beans; simmer 5 min.',
        'Blend 2 cups of soup (carefully) and stir back in.',
        'Add plant milk; season. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","potatoes"],
    nutritionPerServing: {
        calories: 380,
        protein: 10,
        carbs: 62,
        fat: 11,
    },
};
