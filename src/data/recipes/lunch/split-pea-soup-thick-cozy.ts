import { Recipe } from '../../../types';

export const splitPeaSoupThickCozy: Recipe = {
    id: 'split-pea-soup-thick-cozy',
    name: 'Split Pea Soup (Thick + Cozy)',
    description: 'A cozy, savory bowl that\'s hearty, warming, and easy to make.',
    image: require('../../../../assets/recipes/lunch/split-pea-soup-thick-cozy.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 50,
    servings: 5,
    difficulty: 'hard',
    ingredients: [
        { name: 'split peas', amount: 2, unit: 'cups' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'carrots', amount: 2, unit: 'item' },
        { name: 'celery', amount: 2, unit: 'item' },
        { name: 'garlic', amount: 3, unit: 'item' },
        { name: 'broth/water', amount: 8, unit: 'cups' },
        { name: 'bay leaf', amount: 1, unit: 'item' },
        { name: 'thyme', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion/carrot/celery 5 min; add garlic 30 sec.',
        'Add peas, broth, bay, thyme, salt.',
        'Simmer 45-60 min, stirring, until creamy. Adjust seasoning. Serve and enjoy.'
    ],
    tags: ["lunch","meal-prep","soup"],
    nutritionPerServing: {
        calories: 320,
        protein: 20,
        carbs: 54,
        fat: 4,
    },
};
