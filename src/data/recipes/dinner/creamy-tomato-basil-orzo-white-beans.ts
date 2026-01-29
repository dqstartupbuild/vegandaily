import { Recipe } from '../../../types';

export const creamyTomatoBasilOrzoWhiteBeans: Recipe = {
    id: 'creamy-tomato-basil-orzo-white-beans',
    name: 'Creamy Tomato Basil Orzo + White Beans',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/creamy-white-bean-tomato-orzo.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 18,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'orzo', amount: 1.5, unit: 'cups' },
        { name: 'white beans', amount: 1, unit: 'can' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'crushed tomatoes', amount: 1, unit: 'can' },
        { name: 'broth', amount: 3, unit: 'cups' },
        { name: 'basil', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion 5 min; add garlic 30 sec.',
        'Add orzo; toast 1 min.',
        'Add tomatoes + broth; simmer 10-12 min, stirring, until orzo tender.',
        'Stir in beans + basil; season. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","beans"],
    nutritionPerServing: {
        calories: 510,
        protein: 18,
        carbs: 82,
        fat: 12,
    },
};
