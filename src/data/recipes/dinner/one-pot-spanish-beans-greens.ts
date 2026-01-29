import { Recipe } from '../../../types';

export const onePotSpanishBeansGreens: Recipe = {
    id: 'one-pot-spanish-beans-greens',
    name: 'One-Pot Spanish Beans + Greens',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/one-pot-spanish-beans-greens.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'white beans', amount: 2, unit: 'cans' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'smoked paprika', amount: 1, unit: 'item' },
        { name: 'tomatoes', amount: 1, unit: 'can' },
        { name: 'broth', amount: 2, unit: 'cups' },
        { name: 'spinach/kale', amount: 4, unit: 'cups' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion 5 min; add garlic + paprika 30 sec.',
        'Add tomatoes + broth + beans; simmer 12-15 min.',
        'Stir in greens to wilt; adjust salt. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","beans"],
    nutritionPerServing: {
        calories: 390,
        protein: 18,
        carbs: 56,
        fat: 10,
    },
};
