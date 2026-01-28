import { Recipe } from '../../../types';

export const eggplantChickpeaTagineWarmSpices: Recipe = {
    id: 'eggplant-chickpea-tagine-warm-spices',
    name: 'Eggplant Chickpea Tagine (Warm Spices)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'eggplant cubed', amount: 1, unit: 'item' },
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'tomatoes', amount: 1, unit: 'can' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'cinnamon pinch', amount: 1, unit: 'item' },
        { name: 'paprika', amount: 1, unit: 'item' },
        { name: 'raisins/apricots', amount: 1, unit: 'item', optional: true },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion 5 min; add garlic + spices 30 sec.',
        'Add eggplant + tomatoes + chickpeas + salt; simmer 20-25 min.',
        'Stir in raisins last 5 min if using. Finish with lemon. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","chickpeas"],
    nutritionPerServing: {
        calories: 360,
        protein: 12,
        carbs: 56,
        fat: 12,
    },
};
