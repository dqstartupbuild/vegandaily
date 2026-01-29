import { Recipe } from '../../../types';

export const stuffedEggplantLentilsHerbs: Recipe = {
    id: 'stuffed-eggplant-lentils-herbs',
    name: 'Stuffed Eggplant (Lentils + Herbs)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/stuffed-eggplant-lentils-herbs.webp'),
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 35,
    servings: 3,
    difficulty: 'hard',
    ingredients: [
        { name: 'eggplants', amount: 2, unit: 'large' },
        { name: 'cooked lentils', amount: 2, unit: 'cups' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'marinara', amount: 1, unit: 'cup' },
        { name: 'parsley', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Heat oven 400F. Halve eggplants; score flesh, brush oil + salt.',
        'Roast cut-side up 20 min.',
        'Scoop some flesh; chop and mix into lentils + sauteed onion/garlic + marinara + parsley.',
        'Fill shells; bake 10-15 min more. Serve and enjoy.'
    ],
    tags: ["dinner","lentils"],
    nutritionPerServing: {
        calories: 420,
        protein: 18,
        carbs: 62,
        fat: 12,
    },
};
