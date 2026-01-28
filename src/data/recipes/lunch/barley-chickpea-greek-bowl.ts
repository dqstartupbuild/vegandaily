import { Recipe } from '../../../types';

export const barleyChickpeaGreekBowl: Recipe = {
    id: 'barley-chickpea-greek-bowl',
    name: 'Barley + Chickpea "Greek" Bowl',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: null,
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 0,
    servings: 3,
    difficulty: 'easy',
    ingredients: [
        { name: 'cooked barley', amount: 3, unit: 'cups' },
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'cucumber', amount: 1, unit: 'item' },
        { name: 'tomato', amount: 1, unit: 'item' },
        { name: 'olives', amount: 1, unit: 'item', optional: true },
        { name: 'red onion', amount: 1, unit: 'item' },
        { name: 'oregano', amount: 1, unit: 'item' },
        { name: 'lemon + olive oil + salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Mix barley + chickpeas + chopped veg.',
        'Dress with lemon, olive oil, oregano, salt/pepper.',
        'Chill or eat immediately.'
    ],
    tags: ["lunch","no-cook","quick","bowl","bars","chickpeas"],
    nutritionPerServing: {
        calories: 470,
        protein: 16,
        carbs: 78,
        fat: 12,
    },
};
