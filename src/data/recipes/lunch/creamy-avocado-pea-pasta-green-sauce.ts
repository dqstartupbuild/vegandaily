import { Recipe } from '../../../types';

export const creamyAvocadoPeaPastaGreenSauce: Recipe = {
    id: 'creamy-avocado-pea-pasta-green-sauce',
    name: 'Creamy Avocado Pea Pasta (Green Sauce)',
    description: 'A comforting pasta dish with bold, plant-forward flavors and a silky sauce.',
    image: null,
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 12,
    servings: 3,
    difficulty: 'medium',
    ingredients: [
        { name: 'pasta', amount: 12, unit: 'oz' },
        { name: 'avocado', amount: 1, unit: 'item' },
        { name: 'peas', amount: 1.5, unit: 'cups' },
        { name: 'lemon juice', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'basil', amount: 1, unit: 'item' },
        { name: 'pasta water', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Cook pasta; reserve 1 cup pasta water.',
        'Blend avocado + peas + lemon + garlic + salt + basil with a splash pasta water.',
        'Toss hot pasta with sauce, adding pasta water for creaminess. Serve and enjoy.'
    ],
    tags: ["lunch","pasta"],
    nutritionPerServing: {
        calories: 540,
        protein: 16,
        carbs: 82,
        fat: 18,
    },
};
