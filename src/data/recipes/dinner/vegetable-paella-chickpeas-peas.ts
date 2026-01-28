import { Recipe } from '../../../types';

export const vegetablePaellaChickpeasPeas: Recipe = {
    id: 'vegetable-paella-chickpeas-peas',
    name: 'Vegetable Paella (Chickpeas + Peas)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/vegetable-paella.png'),
    mealType: 'dinner',
    prepTime: 12,
    cookTime: 35,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'paella/short-grain rice', amount: 1.5, unit: 'cups' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 3, unit: 'item' },
        { name: 'smoked paprika', amount: 1, unit: 'tsp' },
        { name: 'saffron', amount: 1, unit: 'pinch', optional: true },
        { name: 'broth', amount: 4, unit: 'cups' },
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'peas', amount: 1, unit: 'cup' },
        { name: 'diced tomatoes', amount: 1, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion/pepper 5 min; add garlic + paprika 30 sec.',
        'Add rice; stir 1 min. Add tomatoes + broth (+ saffron).',
        'Simmer uncovered 20-25 min (don\'t stir much).',
        'Add chickpeas + peas last 8-10 min. Rest 5 min; serve with lemon.'
    ],
    tags: ["dinner","meal-prep","chickpeas"],
    nutritionPerServing: {
        calories: 520,
        protein: 16,
        carbs: 90,
        fat: 10,
    },
};
