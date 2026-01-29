import { Recipe } from '../../../types';

export const savoryAvocadoToastTomatoHemp: Recipe = {
    id: 'savory-avocado-toast-tomato-hemp',
    name: 'Savory Avocado Toast + Tomato & Hemp',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/breakfast/savory-avocado-toast-tomato-hemp.webp'),
    mealType: 'breakfast',
    prepTime: 8,
    cookTime: 3,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'whole-grain bread', amount: 2, unit: 'slices' },
        { name: 'avocado', amount: 0.5, unit: 'item' },
        { name: 'tomato (sliced)', amount: 1, unit: 'small' },
        { name: 'hemp hearts', amount: 1, unit: 'tbsp' },
        { name: 'lemon juice', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'chili flakes', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Toast bread.',
        'Mash avocado with lemon, salt, pepper.',
        'Spread, top with tomato, hemp hearts, chili flakes. Serve and enjoy.'
    ],
    tags: ["breakfast","quick"],
    nutritionPerServing: {
        calories: 430,
        protein: 12,
        carbs: 44,
        fat: 24,
    },
};
