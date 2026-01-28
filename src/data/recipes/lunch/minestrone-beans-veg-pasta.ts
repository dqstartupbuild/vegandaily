import { Recipe } from '../../../types';

export const minestroneBeansVegPasta: Recipe = {
    id: 'minestrone-beans-veg-pasta',
    name: 'Minestrone (Beans + Veg + Pasta)',
    description: 'A comforting pasta dish with bold, plant-forward flavors and a silky sauce.',
    image: null,
    mealType: 'lunch',
    prepTime: 12,
    cookTime: 30,
    servings: 6,
    difficulty: 'hard',
    ingredients: [
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'carrot', amount: 1, unit: 'item' },
        { name: 'celery', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'beans', amount: 1, unit: 'can' },
        { name: 'tomatoes', amount: 1, unit: 'can' },
        { name: 'broth', amount: 6, unit: 'cups' },
        { name: 'zucchini', amount: 1, unit: 'item' },
        { name: 'green beans', amount: 1, unit: 'item' },
        { name: 'small pasta', amount: 1, unit: 'cup' },
        { name: 'Italian herbs', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion/carrot/celery 6 min; add garlic.',
        'Add tomatoes, broth, herbs, beans; simmer 15 min.',
        'Add pasta + remaining veg; cook until pasta is done. Season. Serve and enjoy.'
    ],
    tags: ["lunch","meal-prep","pasta","beans"],
    nutritionPerServing: {
        calories: 330,
        protein: 14,
        carbs: 56,
        fat: 6,
    },
};
