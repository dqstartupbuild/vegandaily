import { Recipe } from '../../../types';

export const gingerCarrotRedLentilSoup: Recipe = {
    id: 'ginger-carrot-red-lentil-soup',
    name: 'Ginger Carrot Red Lentil Soup',
    description: 'A cozy, savory bowl that\'s hearty, warming, and easy to make.',
    image: require('../../../../assets/recipes/ginger-carrot-red-lentil-soup.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'red lentils', amount: 1, unit: 'cup' },
        { name: 'carrots', amount: 3, unit: 'item' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'grated ginger', amount: 1, unit: 'tbsp' },
        { name: 'garlic cloves', amount: 2, unit: 'item' },
        { name: 'broth', amount: 6, unit: 'cups' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion + carrots 5 min; add ginger/garlic 30 sec.',
        'Add lentils, broth, cumin, salt; simmer 18-22 min.',
        'Blend partially or fully; finish with lemon. Serve and enjoy.'
    ],
    tags: ["lunch","meal-prep","soup","lentils"],
    nutritionPerServing: {
        calories: 290,
        protein: 16,
        carbs: 50,
        fat: 4,
    },
};
