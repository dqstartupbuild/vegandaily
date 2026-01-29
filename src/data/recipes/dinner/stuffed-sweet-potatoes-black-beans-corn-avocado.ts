import { Recipe } from '../../../types';

export const stuffedSweetPotatoesBlackBeansCornAvocado: Recipe = {
    id: 'stuffed-sweet-potatoes-black-beans-corn-avocado',
    name: 'Stuffed Sweet Potatoes (Black Beans + Corn + Avocado)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/stuffed-sweet-potatoes.webp'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 45,
    servings: 3,
    difficulty: 'hard',
    ingredients: [
        { name: 'sweet potatoes', amount: 3, unit: 'item' },
        { name: 'black beans', amount: 1, unit: 'can' },
        { name: 'corn', amount: 1, unit: 'cup' },
        { name: 'salsa', amount: 1, unit: 'item' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'avocado', amount: 1, unit: 'item' },
        { name: 'lime', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Bake sweet potatoes at 400F 35-45 min (or microwave 8-12 min).',
        'Warm beans + corn + cumin + salsa.',
        'Split potatoes; stuff filling; top avocado + lime. Serve and enjoy.'
    ],
    tags: ["dinner","beans","sweet-potato","potatoes"],
    nutritionPerServing: {
        calories: 520,
        protein: 16,
        carbs: 86,
        fat: 16,
    },
};
