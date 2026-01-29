import { Recipe } from '../../../types';

export const creamyCashewTomatoSoupGrilledVeggieSandwich: Recipe = {
    id: 'creamy-cashew-tomato-soup-grilled-veggie-sandwich',
    name: 'Creamy Cashew Tomato Soup + Grilled Veggie Sandwich',
    description: 'A cozy, savory bowl that\'s hearty, warming, and easy to make.',
    image: require('../../../../assets/recipes/dinner/cashew-tomato-soup-veggie-sandwich.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: 'medium',
    ingredients: [
        { name: 'Soup - tomatoes', amount: 1, unit: 'can' },
        { name: 'Soup - cashews (soaked)', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'Soup - onion', amount: 1, unit: 'item' },
        { name: 'Soup - garlic', amount: 1, unit: 'item' },
        { name: 'Soup - broth', amount: 1, unit: 'item' },
        { name: 'Soup - basil. Sandwich: whole-grain bread', amount: 1, unit: 'item' },
        { name: 'Soup - zucchini slices', amount: 1, unit: 'item' },
        { name: 'Soup - spinach', amount: 1, unit: 'item' },
        { name: 'Soup - mustard', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion/garlic; add tomatoes + broth; simmer 10 min.',
        'Blend with cashews + basil until creamy.',
        'Grill zucchini in pan; build sandwich; toast in pan. Serve and enjoy.'
    ],
    tags: ["dinner","soup"],
    nutritionPerServing: {
        calories: 480,
        protein: 12,
        carbs: 62,
        fat: 20,
    },
};
