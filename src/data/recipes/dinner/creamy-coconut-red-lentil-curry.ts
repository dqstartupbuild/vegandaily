import { Recipe } from '../../../types';

export const creamyCoconutRedLentilCurry: Recipe = {
    id: 'creamy-coconut-red-lentil-curry',
    name: 'Creamy Coconut Red Lentil Curry',
    description: 'A fragrant, creamy curry built for weeknight comfort.',
    image: require('../../../../assets/recipes/dinner/creamy-coconut-red-lentil-curry.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'red lentils', amount: 1, unit: 'cup' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic cloves', amount: 3, unit: 'item' },
        { name: 'curry powder', amount: 1, unit: 'tbsp' },
        { name: 'coconut milk', amount: 1, unit: 'can' },
        { name: 'broth/water', amount: 3, unit: 'cups' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'lime', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion 5 min; add garlic + curry powder 30 sec.',
        'Add lentils + coconut milk + broth + salt.',
        'Simmer 18-22 min until creamy, stirring.',
        'Finish with lime; serve with rice if desired.'
    ],
    tags: ["dinner","meal-prep","curry","lentils"],
    nutritionPerServing: {
        calories: 420,
        protein: 20,
        carbs: 56,
        fat: 14,
    },
};
