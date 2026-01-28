import { Recipe } from '../../../types';

export const sesameGingerCabbageNoodleSoupQuick: Recipe = {
    id: 'sesame-ginger-cabbage-noodle-soup-quick',
    name: 'Sesame Ginger Cabbage Noodle Soup (Quick)',
    description: 'A cozy, savory bowl that\'s hearty, warming, and easy to make.',
    image: null,
    mealType: 'lunch',
    prepTime: 8,
    cookTime: 12,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'rice noodles', amount: 6, unit: 'oz' },
        { name: 'broth', amount: 4, unit: 'cups' },
        { name: 'ginger', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'shredded cabbage', amount: 1, unit: 'item' },
        { name: 'carrots', amount: 1, unit: 'item' },
        { name: 'soy sauce/tamari', amount: 1, unit: 'item' },
        { name: 'sesame seeds', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Simmer broth with ginger + garlic 3 min.',
        'Add cabbage/carrots; simmer 5 min.',
        'Add noodles; cook until tender.',
        'Season with soy sauce; top sesame seeds. Serve and enjoy.'
    ],
    tags: ["lunch","soup"],
    nutritionPerServing: {
        calories: 420,
        protein: 10,
        carbs: 70,
        fat: 10,
    },
};
