import { Recipe } from '../../../types';

export const blackBeanSweetPotatoChili: Recipe = {
    id: 'black-bean-sweet-potato-chili',
    name: 'Black Bean Sweet Potato Chili',
    description: 'A hearty, smoky chili with plenty of plant protein.',
    image: require('../../../../assets/recipes/dinner/black-bean-sweet-potato-chili.webp'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 35,
    servings: 5,
    difficulty: 'hard',
    ingredients: [
        { name: 'sweet potatoes (cubed)', amount: 2, unit: 'item' },
        { name: 'black beans', amount: 2, unit: 'cans' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'tomatoes', amount: 1, unit: 'can' },
        { name: 'broth', amount: 3, unit: 'cups' },
        { name: 'chili powder', amount: 1, unit: 'item' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion/pepper 5 min.',
        'Add sweet potato, beans, tomatoes, broth, spices.',
        'Simmer 25-30 min until sweet potato is soft. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","beans","sweet-potato","potatoes"],
    nutritionPerServing: {
        calories: 380,
        protein: 16,
        carbs: 68,
        fat: 6,
    },
};
