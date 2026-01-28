import { Recipe } from '../../../types';

export const coconutRicePuddingSimple: Recipe = {
    id: 'coconut-rice-pudding-simple',
    name: 'Coconut Rice Pudding (Simple)',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'dessert',
    prepTime: 5,
    cookTime: 25,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'jasmine rice', amount: 0.5, unit: 'cup' },
        { name: 'plant milk', amount: 2, unit: 'cups' },
        { name: 'light coconut milk', amount: 0.5, unit: 'cup' },
        { name: 'sugar/maple', amount: 3, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'vanilla', amount: 1, unit: 'item' },
        { name: 'cinnamon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Simmer rice with milks and salt, stirring often.',
        'Cook 20-25 min until thick and tender.',
        'Sweeten; add vanilla + cinnamon. Serve and enjoy.'
    ],
    tags: ["dessert","meal-prep","rice"],
    nutritionPerServing: {
        calories: 320,
        protein: 5,
        carbs: 52,
        fat: 10,
    },
};
