import { Recipe } from '../../../types';

export const chickpeaShawarmaBowls: Recipe = {
    id: 'chickpea-shawarma-bowls',
    name: 'Chickpea Shawarma Bowls',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: null,
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'chickpeas', amount: 2, unit: 'cans' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'shawarma spices (cumin', amount: 1, unit: 'item' },
        { name: 'paprika', amount: 1, unit: 'item' },
        { name: 'garlic powder', amount: 1, unit: 'item' },
        { name: 'cinnamon pinch)', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'rice or pita', amount: 1, unit: 'item' },
        { name: 'cucumber/tomato', amount: 1, unit: 'item' },
        { name: 'tahini-lemon sauce', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Toss chickpeas with oil + spices + salt.',
        'Roast 425F for 18-20 min.',
        'Build bowls with rice/pita + veg + chickpeas + sauce. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","bowl","chickpeas"],
    nutritionPerServing: {
        calories: 520,
        protein: 18,
        carbs: 72,
        fat: 18,
    },
};
