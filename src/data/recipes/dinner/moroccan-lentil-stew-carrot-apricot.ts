import { Recipe } from '../../../types';

export const moroccanLentilStewCarrotApricot: Recipe = {
    id: 'moroccan-lentil-stew-carrot-apricot',
    name: 'Moroccan Lentil Stew (Carrot + Apricot)',
    description: 'A cozy, savory bowl that\'s hearty, warming, and easy to make.',
    image: require('../../../../assets/recipes/dinner/moroccan-lentil-stew-carrot-apricot.webp'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'lentils', amount: 1, unit: 'cup' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'carrots', amount: 2, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'cinnamon pinch', amount: 1, unit: 'item' },
        { name: 'broth', amount: 6, unit: 'cups' },
        { name: 'chopped dried apricots', amount: 1, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion/carrot 5 min; add garlic + spices 30 sec.',
        'Add lentils + broth; simmer 25-30 min.',
        'Stir in apricots last 5 min; finish with lemon. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","stew","lentils"],
    nutritionPerServing: {
        calories: 360,
        protein: 18,
        carbs: 60,
        fat: 6,
    },
};
