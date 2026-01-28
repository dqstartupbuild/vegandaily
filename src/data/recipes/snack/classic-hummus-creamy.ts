import { Recipe } from '../../../types';

export const classicHummusCreamy: Recipe = {
    id: 'classic-hummus-creamy',
    name: 'Classic Hummus (Creamy)',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/classic-hummus-creamy.png'),
    mealType: 'snack',
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    difficulty: 'easy',
    ingredients: [
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'tahini', amount: 3, unit: 'tbsp' },
        { name: 'lemon juice', amount: 1, unit: 'item' },
        { name: 'garlic clove', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 2, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'water', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Blend chickpeas, tahini, lemon, garlic, salt, cumin.',
        'Stream in olive oil + water until silky.',
        'Taste and adjust lemon/salt. Serve and enjoy.'
    ],
    tags: ["snack","no-cook","quick","meal-prep"],
    nutritionPerServing: {
        calories: 140,
        protein: 5,
        carbs: 14,
        fat: 8,
    },
};
