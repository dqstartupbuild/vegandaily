import { Recipe } from '../../../types';

export const heartyLentilBolognese: Recipe = {
    id: 'hearty-lentil-bolognese',
    name: 'Hearty Lentil Bolognese',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/hearty-lentil-bolognese.webp'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'pasta', amount: 12, unit: 'oz' },
        { name: 'lentils', amount: 1, unit: 'cup' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'carrots', amount: 2, unit: 'item' },
        { name: 'celery', amount: 2, unit: 'item' },
        { name: 'garlic', amount: 3, unit: 'item' },
        { name: 'crushed tomatoes', amount: 1, unit: 'can' },
        { name: 'oregano', amount: 1, unit: 'item' },
        { name: 'basil', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Cook lentils until tender (or simmer in sauce longer).',
        'Saute onion/carrot/celery 7 min; add garlic.',
        'Add tomatoes, herbs, lentils; simmer 15-20 min.',
        'Serve over pasta.'
    ],
    tags: ["dinner","meal-prep","lentils"],
    nutritionPerServing: {
        calories: 520,
        protein: 22,
        carbs: 86,
        fat: 8,
    },
};
