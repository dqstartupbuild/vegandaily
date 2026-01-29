import { Recipe } from '../../../types';

export const lentilVeggieSoupOnePot: Recipe = {
    id: 'lentil-veggie-soup-one-pot',
    name: 'Lentil Veggie Soup (One Pot)',
    description: 'A cozy, savory bowl that\'s hearty, warming, and easy to make.',
    image: require('../../../../assets/recipes/lunch/lentil-veggie-soup-one-pot.webp'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'dry brown/green lentils', amount: 1, unit: 'cup' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'carrots', amount: 2, unit: 'item' },
        { name: 'celery stalks', amount: 2, unit: 'item' },
        { name: 'garlic cloves', amount: 3, unit: 'item' },
        { name: 'diced tomatoes', amount: 1, unit: 'can' },
        { name: 'broth/water', amount: 6, unit: 'cups' },
        { name: 'thyme', amount: 1, unit: 'item' },
        { name: 'bay leaf', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion, carrot, celery 5 min; add garlic 30 sec.',
        'Add lentils, tomatoes, broth, thyme, bay, salt.',
        'Simmer 25-30 min until tender.',
        'Finish with lemon and pepper. Serve and enjoy.'
    ],
    tags: ["lunch","meal-prep","soup","lentils"],
    nutritionPerServing: {
        calories: 310,
        protein: 18,
        carbs: 52,
        fat: 5,
    },
};
