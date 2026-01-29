import { Recipe } from '../../../types';

export const cabbageRollsRiceLentils: Recipe = {
    id: 'cabbage-rolls-rice-lentils',
    name: 'Cabbage Rolls (Rice + Lentils)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/cabbage-rolls.png'),
    mealType: 'dinner',
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'cabbage', amount: 1, unit: 'head' },
        { name: 'cooked rice', amount: 2, unit: 'cups' },
        { name: 'cooked lentils', amount: 1.5, unit: 'cups' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'paprika', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'tomato sauce', amount: 2, unit: 'cups' },
    ],
    instructions: [
        'Boil or steam cabbage leaves 3-5 min until pliable.',
        'Mix rice + lentils + sauteed onion/garlic + spices.',
        'Roll filling in leaves; place in baking dish.',
        'Pour tomato sauce over top; bake 375F 30-35 min. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","rice","lentils"],
    nutritionPerServing: {
        calories: 390,
        protein: 16,
        carbs: 70,
        fat: 6,
    },
};
